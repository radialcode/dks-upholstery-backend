import { factories } from "@strapi/strapi";
import { transporter } from "../../../utils/mailer";

const clientEmail = process.env.CLIENT_EMAIL;
const publicUrl = process.env.PUBLIC_URL;

export default factories.createCoreController(
  "api::free-quote.free-quote",
  ({ strapi }) => ({
    async create(ctx) {
      // 1. Save the entry (no media populated yet)
      const response = await super.create(ctx);

      // 2. Re-fetch with image populated
      const entry = await strapi.entityService.findOne(
        "api::free-quote.free-quote",
        response.data.id,
        { populate: ["image"] }
      )as any;

      const { fullName, contactNumber, email, message, image } = entry;

      strapi.log.info("IMAGE =", JSON.stringify(image));

      // 3. Build image URL
      const imageUrl = image?.url ? `${publicUrl ?? ""}${image.url}` : null;

      if (!clientEmail) {
        strapi.log.warn("CLIENT_EMAIL is not set in .env — skipping notification email");
      } else {
        await transporter.sendMail({
          from: `"Quote System" <${process.env.SMTP_USERNAME}>`,
          to: clientEmail,
          replyTo: email,
          subject: `New Free Quote Request from ${fullName}`,
          html: `
            <h2>New Quote Request</h2>
            <table cellpadding="6" style="border-collapse:collapse">
              <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
              <tr><td><strong>Email</strong></td><td>${email}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${contactNumber}</td></tr>
              <tr><td><strong>Message</strong></td><td>${message ?? "—"}</td></tr>
              ${imageUrl ? `<tr><td><strong>Attachment</strong></td><td><a href="${imageUrl}"><img width="400" height="200" src="${imageUrl}" alt="client image"/></a></td></tr>` : ""}
            </table>
          `,
        });
      }

      return response;
    },
  })
);