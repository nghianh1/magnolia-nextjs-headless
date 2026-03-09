// ⚠️ This file is auto-generated based on the MyCarousel.yaml definition.
// It will be overwritten when running `create-model`. Avoid manual edits.
import { MagnoliaNodeMeta, MgnlContent } from "@magnolia/frontend-helpers-base";

export type AutoplayField = "enableAutoPlay" | "disableAutoPlay";

export type CarouselListImageChooserField = "image" | "externalImage";

export type CarouselListKey = `carouselList${number}`;

export interface Autoplay extends MagnoliaNodeMeta {
  field: AutoplayField;
  pauseButton?: boolean;
  time?: number;
}
export interface CarouselListImageChooser extends MagnoliaNodeMeta {
  field: CarouselListImageChooserField;
  image?: MgnlContent;
  imageAlt?: string;
  externalImage?: string;
  externalImageAlt?: string;
}
export interface CarouselListEntry extends MagnoliaNodeMeta {
  imageChooser: CarouselListImageChooser;
  title?: string;
  description?: string;
}
export interface CarouselList extends MagnoliaNodeMeta {
  [key: CarouselListKey]: CarouselListEntry;
}

export default interface IMyCarouselProps {
  metadata: MagnoliaNodeMeta;
  autoplay: Autoplay;
  carouselList: CarouselList;
}
