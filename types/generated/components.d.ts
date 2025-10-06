import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_uses';
  info: {
    displayName: 'About Us';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text;
    infoList: Schema.Attribute.Component<'select.select', true>;
    leftSideImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    rightSideImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface BeforeAndAfterBeforeAndAfter extends Struct.ComponentSchema {
  collectionName: 'components_before_and_after_before_and_afters';
  info: {
    displayName: 'Before And After';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text;
    differenceSlider: Schema.Attribute.Component<
      'difference-carousel.difference-carousel',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CtaCta extends Struct.ComponentSchema {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface DifferenceCarouselDifferenceCarousel
  extends Struct.ComponentSchema {
  collectionName: 'components_difference_carousel_difference_carousels';
  info: {
    displayName: 'Difference Carousel';
  };
  attributes: {
    afterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    beforeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface FaqCardFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_faq_card_faq_cards';
  info: {
    displayName: 'Faq Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface FaqFaqs extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'Faqs';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    faqList: Schema.Attribute.Component<'faq-card.faq-card', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FeatureHighlightFeatureHighlight
  extends Struct.ComponentSchema {
  collectionName: 'components_feature_highlight_feature_highlights';
  info: {
    displayName: 'Feature Highlight';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyrightText: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navigation: Schema.Attribute.Component<'select.select', true>;
    recentWork: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    serviceCategories: Schema.Attribute.Component<'select.select', true>;
    socialLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    socials: Schema.Attribute.Component<'social.socials', true>;
    socialTitle: Schema.Attribute.String;
    socialUrls: Schema.Attribute.Component<'social-links.social-links', true>;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    afterImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    beforeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text;
    review: Schema.Attribute.Component<'review-hero.review-hero', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    warrantyBadge: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HowItWorkCardHowItWorkCard extends Struct.ComponentSchema {
  collectionName: 'components_how_it_work_card_how_it_work_cards';
  info: {
    displayName: 'How It Work Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HowItWorksHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_how_it_works_how_it_works';
  info: {
    displayName: 'How It Works';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text;
    steps: Schema.Attribute.Component<
      'how-it-work-card.how-it-work-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface IconsListIconsList extends Struct.ComponentSchema {
  collectionName: 'components_icons_list_icons_lists';
  info: {
    displayName: 'Icons List';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListList extends Struct.ComponentSchema {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    select: Schema.Attribute.Component<'select.select', true>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavBarNavBar extends Struct.ComponentSchema {
  collectionName: 'components_nav_bar_nav_bars';
  info: {
    displayName: 'Nav Bar';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navigationList: Schema.Attribute.Component<'list.list', true>;
  };
}

export interface OurPromiseOurPromise extends Struct.ComponentSchema {
  collectionName: 'components_our_promise_our_promises';
  info: {
    displayName: 'Our Promise';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface OurServiceOurServices extends Struct.ComponentSchema {
  collectionName: 'components_our_service_our_services';
  info: {
    displayName: 'Our Services';
  };
  attributes: {
    featureHighlight: Schema.Attribute.Component<
      'feature-highlight.feature-highlight',
      true
    >;
    title: Schema.Attribute.String;
    TrustedCompany: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PickOurServicesPickOurServices extends Struct.ComponentSchema {
  collectionName: 'components_pick_our_services_pick_our_services';
  info: {
    displayName: 'Pick Our Services';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text;
    slider: Schema.Attribute.Component<
      'pick-service-card.pick-services-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface PickServiceCardPickServicesCard
  extends Struct.ComponentSchema {
  collectionName: 'components_pick_service_card_pick_services_cards';
  info: {
    displayName: 'Pick Services Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RealTransformationsRealTransformations
  extends Struct.ComponentSchema {
  collectionName: 'components_real_transformations_real_transformations';
  info: {
    displayName: 'Real Transformations';
  };
  attributes: {
    description: Schema.Attribute.Text;
    reviewSlider: Schema.Attribute.Component<
      'transformations-card.transformations-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ReviewHeroReviewHero extends Struct.ComponentSchema {
  collectionName: 'components_review_hero_review_heroes';
  info: {
    displayName: 'Review Hero';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    rating: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SelectSelect extends Struct.ComponentSchema {
  collectionName: 'components_select_selects';
  info: {
    displayName: 'select';
  };
  attributes: {
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface SocialSocials extends Struct.ComponentSchema {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface TestimonialCardTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_card_testimonial_cards';
  info: {
    displayName: 'TestimonialCard';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 5;
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<'1'>;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TestimonialTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<
      'testimonial-card.testimonial-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface TransformationsCardTransformationsCard
  extends Struct.ComponentSchema {
  collectionName: 'components_transformations_card_transformations_cards';
  info: {
    displayName: 'Transformations Card';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.Text;
    social_icon: Schema.Attribute.Relation<
      'oneToOne',
      'api::social-icon.social-icon'
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-us': AboutUsAboutUs;
      'before-and-after.before-and-after': BeforeAndAfterBeforeAndAfter;
      'cta.cta': CtaCta;
      'difference-carousel.difference-carousel': DifferenceCarouselDifferenceCarousel;
      'faq-card.faq-card': FaqCardFaqCard;
      'faq.faqs': FaqFaqs;
      'feature-highlight.feature-highlight': FeatureHighlightFeatureHighlight;
      'footer.footer': FooterFooter;
      'hero.hero': HeroHero;
      'how-it-work-card.how-it-work-card': HowItWorkCardHowItWorkCard;
      'how-it-works.how-it-works': HowItWorksHowItWorks;
      'icons-list.icons-list': IconsListIconsList;
      'list.list': ListList;
      'nav-bar.nav-bar': NavBarNavBar;
      'our-promise.our-promise': OurPromiseOurPromise;
      'our-service.our-services': OurServiceOurServices;
      'pick-our-services.pick-our-services': PickOurServicesPickOurServices;
      'pick-service-card.pick-services-card': PickServiceCardPickServicesCard;
      'real-transformations.real-transformations': RealTransformationsRealTransformations;
      'review-hero.review-hero': ReviewHeroReviewHero;
      'select.select': SelectSelect;
      'social-links.social-links': SocialLinksSocialLinks;
      'social.socials': SocialSocials;
      'testimonial-card.testimonial-card': TestimonialCardTestimonialCard;
      'testimonial.testimonial': TestimonialTestimonial;
      'transformations-card.transformations-card': TransformationsCardTransformationsCard;
    }
  }
}
