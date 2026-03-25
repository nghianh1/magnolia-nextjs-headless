// ⚠️ This file is auto-generated based on the SecondaryHero.yaml definition.
// It will be overwritten when running `create-model`. Avoid manual edits.
import { MagnoliaNodeMeta, MgnlContent } from "@magnolia/frontend-helpers-base";

export type ImageChooserField = "image" | "externalImage";

export type CtaChooserField = "noCta" | "withCta";

export type CtaChooserCtaLinkField = "internalPageLink" | "externalPageLink";



export interface ImageChooser extends MagnoliaNodeMeta {
  field: ImageChooserField;
  image?: MgnlContent;
  imageAlt?: string;
  externalImage?: string;
  externalImageAlt?: string;
}
export interface CtaChooserCtaLink extends MagnoliaNodeMeta {
  field?: CtaChooserCtaLinkField;
  internalLink?: string;
  externalLink?: string;
}
export interface CtaChooser extends MagnoliaNodeMeta {
  field: CtaChooserField;
  ctaText?: string;
  ctaLink?: CtaChooserCtaLink;
}

export default interface ISecondaryHeroProps {
  metadata: MagnoliaNodeMeta;
  title: string;
  description: string;
  bannerImage: ImageChooser;
  ctaChooser: CtaChooser;
}
