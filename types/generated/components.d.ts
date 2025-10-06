import type { Schema, Struct } from '@strapi/strapi';

export interface CtaCta extends Struct.ComponentSchema {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    Title: Schema.Attribute.String;
    url: Schema.Attribute.String;
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
    ourPromise: Schema.Attribute.Component<'our-promise.our-promise', false>;
    recentWork: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    serviceCategories: Schema.Attribute.Component<'select.select', true>;
    socials: Schema.Attribute.Component<'social.socials', true>;
    socialUrls: Schema.Attribute.Component<'social-links.social-links', true>;
  };
}

export interface ListList extends Struct.ComponentSchema {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    Select: Schema.Attribute.Component<'select.select', true>;
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

export interface SelectSelect extends Struct.ComponentSchema {
  collectionName: 'components_select_selects';
  info: {
    displayName: 'Select';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cta.cta': CtaCta;
      'footer.footer': FooterFooter;
      'list.list': ListList;
      'nav-bar.nav-bar': NavBarNavBar;
      'our-promise.our-promise': OurPromiseOurPromise;
      'select.select': SelectSelect;
      'social-links.social-links': SocialLinksSocialLinks;
      'social.socials': SocialSocials;
    }
  }
}
