import { factories } from "@strapi/strapi";
import { transporter } from "../../../utils/mailer";

const clientEmail = process.env.CLIENT_EMAIL;

export default factories.createCoreController(
  "api::contact.contact",
  ({ strapi }) => ({
    async create(ctx) {
      // 1. Save the entry
      const response = await super.create(ctx);

      // 2. Pull data directly (no media to populate)
      const { name, phoneNumber, email, message } =
        response.data?.attributes ?? response.data ?? {};

      if (!clientEmail) {
        strapi.log.warn("CLIENT_EMAIL is not set in .env — skipping notification email");
      } else {
        await transporter.sendMail({
          from: `"Contact Form" <${process.env.SMTP_USERNAME}>`,
          to: clientEmail,
          replyTo: email,
          subject: `New Contact Message from ${name}`,
          html: `
            <h2>New Contact Request</h2>
            <table cellpadding="6" style="border-collapse:collapse">
              <tr><td><strong>Name</strong></td><td>${name}</td></tr>
              <tr><td><strong>Email</strong></td><td>${email}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${phoneNumber}</td></tr>
              <tr><td><strong>Message</strong></td><td>${message}</td></tr>
            </table>
          `,
        });
      }

      return response;
    },
  })
);