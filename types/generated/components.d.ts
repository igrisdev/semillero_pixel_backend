import type { Schema, Struct } from '@strapi/strapi';

export interface PictureEventPictureEvent extends Struct.ComponentSchema {
  collectionName: 'components_picture_event_picture_events';
  info: {
    description: '';
    displayName: 'picture_event';
    icon: 'landscape';
  };
  attributes: {
    date_end_event: Schema.Attribute.Date & Schema.Attribute.Required;
    date_init_event: Schema.Attribute.Date & Schema.Attribute.Required;
    images_event: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

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

export interface TechnologyProjectTechnologyProject
  extends Struct.ComponentSchema {
  collectionName: 'components_technology_project_technology_projects';
  info: {
    displayName: 'technology_project';
    icon: 'plus';
  };
  attributes: {
    link_page_technology_project: Schema.Attribute.String &
      Schema.Attribute.Required;
    title_technology_project: Schema.Attribute.String &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'picture-event.picture-event': PictureEventPictureEvent;
      'red-social-media.red-social-media': RedSocialMediaRedSocialMedia;
      'technology-project.technology-project': TechnologyProjectTechnologyProject;
    }
  }
}
