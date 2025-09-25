import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHint extends Struct.ComponentSchema {
  collectionName: 'components_shared_hints';
  info: {
    displayName: 'Hint';
    icon: 'question';
  };
  attributes: {
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    penaltyScore: Schema.Attribute.Integer;
    text: Schema.Attribute.Text;
  };
}

export interface SharedMediaBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_blocks';
  info: {
    displayName: 'MediaBlock';
    icon: 'paintBrush';
  };
  attributes: {
    caption: Schema.Attribute.String;
    credit: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link_to_img: Schema.Attribute.String;
  };
}

export interface SharedNarrativeContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_narrative_contents';
  info: {
    displayName: 'NarrativeContent';
    icon: 'book';
  };
  attributes: {
    body: Schema.Attribute.Text;
    media: Schema.Attribute.Component<'shared.media-block', false>;
    subtitle: Schema.Attribute.String;
    video: Schema.Attribute.Component<'shared.video-block', false>;
  };
}

export interface SharedPuzzleAnswer extends Struct.ComponentSchema {
  collectionName: 'components_shared_puzzle_answers';
  info: {
    displayName: 'PuzzleContent';
    icon: 'lock';
  };
  attributes: {
    additional_text: Schema.Attribute.Text;
    answer: Schema.Attribute.String;
    hints: Schema.Attribute.Component<'shared.hint', true>;
    instructions: Schema.Attribute.Text;
    media: Schema.Attribute.Component<'shared.media-block', false>;
    solutionExplanation: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    video: Schema.Attribute.Component<'shared.video-block', false>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_blocks';
  info: {
    displayName: 'VideoBlock';
    icon: 'play';
  };
  attributes: {
    endAt: Schema.Attribute.Integer;
    muxAssetId: Schema.Attribute.String;
    muxPlaybackId: Schema.Attribute.String;
    startAt: Schema.Attribute.Integer;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.hint': SharedHint;
      'shared.media-block': SharedMediaBlock;
      'shared.narrative-content': SharedNarrativeContent;
      'shared.puzzle-answer': SharedPuzzleAnswer;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-block': SharedVideoBlock;
    }
  }
}
