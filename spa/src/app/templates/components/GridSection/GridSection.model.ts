// ⚠️ This file is auto-generated based on the GridSection.yaml definition.
// It will be overwritten when running `create-model`. Avoid manual edits.
import { MagnoliaNodeMeta, MgnlContent } from "@magnolia/frontend-helpers-base";

export type ContainerField = "columns" | "rows";

export type ContainerCount = "1" | "2" | "3" | "4" | "5";

export interface Container extends MagnoliaNodeMeta {
  field: ContainerField;
  count?: ContainerCount;
}

export default interface IGridSectionProps {
  metadata: MagnoliaNodeMeta;
  container: Container;
  item1?: MgnlContent;
  item2?: MgnlContent;
  item3?: MgnlContent;
  item4?: MgnlContent;
  item5?: MgnlContent;
}
