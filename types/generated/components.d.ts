import type { Schema, Struct } from '@strapi/strapi';

export interface RedSocialMediaRedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_red_social_media_red_social_medias';
  info: {
    displayName: 'red_social_media';
    icon: 'message';
  };
  attributes: {
    link_red_social_media: Schema.Attribute.String & Schema.Attribute.Required;
    logo_red_social: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    name_social_media: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'red-social-media.red-social-media': RedSocialMediaRedSocialMedia;
    }
  }
}
