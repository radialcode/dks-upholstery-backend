import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_uses';
  info: {
    displayName: 'About Us';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    infoList: Schema.Attribute.Component<'select.select', true>;
    leftSideImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    rightSideImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BeforeAndAfterBeforeAndAfter extends Struct.ComponentSchema {
  collectionName: 'components_before_and_after_before_and_afters';
  info: {
    displayName: 'Before And After';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    differenceSlider: Schema.Attribute.Component<
      'difference-carousel.difference-carousel',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogDetailBlogDetail extends Struct.ComponentSchema {
  collectionName: 'components_blog_detail_blog_details';
  info: {
    displayName: 'Blog Detail';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ChooseUsChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_choose_us_choose_uses';
  info: {
    displayName: 'Choose Us';
  };
  attributes: {
    description: Schema.Attribute.Text;
    featureHighlight: Schema.Attribute.Component<
      'feature-highlight.feature-highlight',
      true
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonHeroCommonHero extends Struct.ComponentSchema {
  collectionName: 'components_common_hero_common_heroes';
  info: {
    displayName: 'Common Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CostsFabricsTipsCostsFabricsTips
  extends Struct.ComponentSchema {
  collectionName: 'components_costs_fabrics_tips_costs_fabrics_tips';
  info: {
    displayName: 'costsFabricsTips';
  };
  attributes: {
    description: Schema.Attribute.Text;
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
    > &
      Schema.Attribute.Required;
    beforeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
  };
}

export interface FabricsAndTipsFabricsAndTips extends Struct.ComponentSchema {
  collectionName: 'components_fabrics_and_tips_fabrics_and_tips';
  info: {
    displayName: 'Fabrics And Tips';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FaqCardFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_faq_card_faq_cards';
  info: {
    displayName: 'Faq Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface FurnitureCareServiceFurnitureCareService
  extends Struct.ComponentSchema {
  collectionName: 'components_furniture_care_service_furniture_care_services';
  info: {
    displayName: 'Furniture Care Service';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    servicesList: Schema.Attribute.Component<
      'pick-service-card.pick-services-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface FurnitureMakeoverFurnitureMakeover
  extends Struct.ComponentSchema {
  collectionName: 'components_furniture_makeover_furniture_makeovers';
  info: {
    displayName: 'Furniture Makeover';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    socialLinks: Schema.Attribute.Component<'social.socials', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FurnitureReupholsteryFurnitureReupholstery
  extends Struct.ComponentSchema {
  collectionName: 'components_furniture_reupholstery_furniture_reupholsteries';
  info: {
    displayName: 'Furniture Reupholstery';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tabs: Schema.Attribute.Component<'select.select', true>;
    title: Schema.Attribute.String;
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
    > &
      Schema.Attribute.Required;
    beforeImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    review: Schema.Attribute.Component<'review-hero.review-hero', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    warrantyBadge: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
  };
}

export interface HourofOperationHourOfOperation extends Struct.ComponentSchema {
  collectionName: 'components_hourof_operation_hour_of_operations';
  info: {
    displayName: 'Hour of Operation';
  };
  attributes: {
    infoList: Schema.Attribute.Component<'select.select', true>;
    title: Schema.Attribute.String;
  };
}

export interface HowItWorkCardHowItWorkCard extends Struct.ComponentSchema {
  collectionName: 'components_how_it_work_card_how_it_work_cards';
  info: {
    displayName: 'How It Work Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HowItWorksHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_how_it_works_how_it_works';
  info: {
    displayName: 'How It Works';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    steps: Schema.Attribute.Component<
      'how-it-work-card.how-it-work-card',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface NeedHelpNeedHelp extends Struct.ComponentSchema {
  collectionName: 'components_need_help_need_helps';
  info: {
    displayName: 'Need Help';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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
    title: Schema.Attribute.String & Schema.Attribute.Required;
    TrustedCompany: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface OurServicesOurService extends Struct.ComponentSchema {
  collectionName: 'components_our_services_our_services';
  info: {
    displayName: 'Our Service';
  };
  attributes: {
    furnitureCareService: Schema.Attribute.Component<
      'furniture-care-service.furniture-care-service',
      false
    >;
    hero: Schema.Attribute.Component<'common-hero.common-hero', false>;
    upholsterySolutions: Schema.Attribute.Component<
      'upholstery-solutions.upholstery-solutions',
      false
    >;
  };
}

export interface OurStoryOurStory extends Struct.ComponentSchema {
  collectionName: 'components_our_story_our_stories';
  info: {
    displayName: 'Our Story';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text;
    info: Schema.Attribute.Text;
    leftImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
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
    blog: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
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
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    reviewSlider: Schema.Attribute.Component<
      'transformations-card.transformations-card',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    title: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceListServiceList extends Struct.ComponentSchema {
  collectionName: 'components_service_list_service_lists';
  info: {
    displayName: 'serviceList';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
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

export interface SofaChairReupholsterySofaChairReupholstery
  extends Struct.ComponentSchema {
  collectionName: 'components_sofa_chair_reupholstery_sofa_chair_reupholsteries';
  info: {
    displayName: 'Sofa Chair Reupholstery';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface TeamBehindCraftTeamBehindCraft extends Struct.ComponentSchema {
  collectionName: 'components_team_behind_craft_team_behind_crafts';
  info: {
    displayName: 'Team Behind Craft';
  };
  attributes: {
    description: Schema.Attribute.Text;
    slider: Schema.Attribute.Component<'team-slider.team-slider', true>;
    title: Schema.Attribute.String;
  };
}

export interface TeamSliderTeamSlider extends Struct.ComponentSchema {
  collectionName: 'components_team_slider_team_sliders';
  info: {
    displayName: 'Team Slider';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
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
    social_icon: Schema.Attribute.Relation<
      'oneToOne',
      'api::social-icon.social-icon'
    >;
  };
}

export interface TestimonialTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    testimonials: Schema.Attribute.Component<
      'testimonial-card.testimonial-card',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TransformationsCardTransformationsCard
  extends Struct.ComponentSchema {
  collectionName: 'components_transformations_card_transformations_cards';
  info: {
    displayName: 'Transformations Card';
  };
  attributes: {
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    social_icon: Schema.Attribute.Relation<
      'oneToOne',
      'api::social-icon.social-icon'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TransformationsFocusTransformationsFocus
  extends Struct.ComponentSchema {
  collectionName: 'components_transformations_focus_transformations_foci';
  info: {
    displayName: 'Transformations Focus';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    gallery: Schema.Attribute.Component<
      'transformations-gallery.transformations-gallery',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TransformationsGalleryTransformationsGallery
  extends Struct.ComponentSchema {
  collectionName: 'components_transformations_gallery_transformations_gallery_s';
  info: {
    displayName: 'Transformations Gallery ';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    service_type: Schema.Attribute.Relation<
      'oneToOne',
      'api::service-type.service-type'
    >;
    title: Schema.Attribute.String;
  };
}

export interface UpholsterySolutionsCardUpholsterySolutionsCard
  extends Struct.ComponentSchema {
  collectionName: 'components_upholstery_solutions_card_upholstery_solutions_cards';
  info: {
    displayName: 'Upholstery Solutions Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UpholsterySolutionsUpholsterySolutions
  extends Struct.ComponentSchema {
  collectionName: 'components_upholstery_solutions_upholstery_solutions';
  info: {
    displayName: 'Upholstery Solutions';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    slider: Schema.Attribute.Component<
      'upholstery-solutions-card.upholstery-solutions-card',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-us': AboutUsAboutUs;
      'before-and-after.before-and-after': BeforeAndAfterBeforeAndAfter;
      'blog-detail.blog-detail': BlogDetailBlogDetail;
      'choose-us.choose-us': ChooseUsChooseUs;
      'common-hero.common-hero': CommonHeroCommonHero;
      'costs-fabrics-tips.costs-fabrics-tips': CostsFabricsTipsCostsFabricsTips;
      'cta.cta': CtaCta;
      'difference-carousel.difference-carousel': DifferenceCarouselDifferenceCarousel;
      'fabrics-and-tips.fabrics-and-tips': FabricsAndTipsFabricsAndTips;
      'faq-card.faq-card': FaqCardFaqCard;
      'faq.faqs': FaqFaqs;
      'feature-highlight.feature-highlight': FeatureHighlightFeatureHighlight;
      'footer.footer': FooterFooter;
      'furniture-care-service.furniture-care-service': FurnitureCareServiceFurnitureCareService;
      'furniture-makeover.furniture-makeover': FurnitureMakeoverFurnitureMakeover;
      'furniture-reupholstery.furniture-reupholstery': FurnitureReupholsteryFurnitureReupholstery;
      'hero.hero': HeroHero;
      'hourof-operation.hour-of-operation': HourofOperationHourOfOperation;
      'how-it-work-card.how-it-work-card': HowItWorkCardHowItWorkCard;
      'how-it-works.how-it-works': HowItWorksHowItWorks;
      'icons-list.icons-list': IconsListIconsList;
      'list.list': ListList;
      'nav-bar.nav-bar': NavBarNavBar;
      'need-help.need-help': NeedHelpNeedHelp;
      'our-promise.our-promise': OurPromiseOurPromise;
      'our-service.our-services': OurServiceOurServices;
      'our-services.our-service': OurServicesOurService;
      'our-story.our-story': OurStoryOurStory;
      'pick-our-services.pick-our-services': PickOurServicesPickOurServices;
      'pick-service-card.pick-services-card': PickServiceCardPickServicesCard;
      'real-transformations.real-transformations': RealTransformationsRealTransformations;
      'review-hero.review-hero': ReviewHeroReviewHero;
      'select.select': SelectSelect;
      'service-list.service-list': ServiceListServiceList;
      'social-links.social-links': SocialLinksSocialLinks;
      'social.socials': SocialSocials;
      'sofa-chair-reupholstery.sofa-chair-reupholstery': SofaChairReupholsterySofaChairReupholstery;
      'team-behind-craft.team-behind-craft': TeamBehindCraftTeamBehindCraft;
      'team-slider.team-slider': TeamSliderTeamSlider;
      'testimonial-card.testimonial-card': TestimonialCardTestimonialCard;
      'testimonial.testimonial': TestimonialTestimonial;
      'transformations-card.transformations-card': TransformationsCardTransformationsCard;
      'transformations-focus.transformations-focus': TransformationsFocusTransformationsFocus;
      'transformations-gallery.transformations-gallery': TransformationsGalleryTransformationsGallery;
      'upholstery-solutions-card.upholstery-solutions-card': UpholsterySolutionsCardUpholsterySolutionsCard;
      'upholstery-solutions.upholstery-solutions': UpholsterySolutionsUpholsterySolutions;
    }
  }
}
