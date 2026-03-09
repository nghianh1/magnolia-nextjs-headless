// ⚠️ This file is auto-generated based on the FreeGiftCard.yaml definition.
// It will be overwritten when running `create-model`. Avoid manual edits.
import { MagnoliaNodeMeta, MgnlContent } from "@magnolia/frontend-helpers-base";

export type ImageChooserField = "image" | "externalImage";

export type ImageChooserImagePosition = "top" | "left" | "right";

export type LinkChooserField = "internalLink" | "externalLink";

export interface ImageChooser extends MagnoliaNodeMeta {
  field?: ImageChooserField;
  image?: MgnlContent;
  imageAlt?: string;
  imagePosition?: ImageChooserImagePosition;
  externalImage?: string;
  externalImageAlt?: string;
}
export interface LinkChooser extends MagnoliaNodeMeta {
  field?: LinkChooserField;
  internalLink?: string;
  externalLink?: string;
  linkText?: string;
}

export default interface IFreeGiftCardProps {
  metadata: MagnoliaNodeMeta;
  title: string;
  description?: string;
  imageChooser?: ImageChooser;
  linkChooser?: LinkChooser;
}
