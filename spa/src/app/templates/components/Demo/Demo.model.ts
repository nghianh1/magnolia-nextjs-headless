// ⚠️ This file is auto-generated based on the Demo.yaml definition.
// It will be overwritten when running `create-model`. Avoid manual edits.
import { MagnoliaNodeMeta } from "@magnolia/frontend-helpers-base";

export type Variant = "primary" | "secondary" | "ternary" | "outline" | "link";

export type Size = "small" | "medium" | "large";

export type PageLinkChooserField = "internalPageLink" | "externalPageLink";

export interface PageLinkChooser extends MagnoliaNodeMeta {
  field: PageLinkChooserField;
  internalLink?: string;
  externalLink?: string;
}

export default interface IDemoProps {
  metadata: MagnoliaNodeMeta;
  title: string;
  variant: Variant;
  size: Size;
  backgroundColor?: string;
  disabled?: boolean;
  pageLinkChooser: PageLinkChooser;
}
