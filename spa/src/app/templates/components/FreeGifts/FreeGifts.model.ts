// ⚠️ This file is auto-generated based on the FreeGifts.yaml definition.
// It will be overwritten when running `create-model`. Avoid manual edits.
import { MagnoliaNodeMeta, MgnlContent } from "@magnolia/frontend-helpers-base";

export type ItemsKey = `items${number}`;

export interface ItemsEntry extends MagnoliaNodeMeta {
  field: string;
}
export interface Items extends MagnoliaNodeMeta {
  [key: ItemsKey]: ItemsEntry;
}

export default interface IFreeGiftsProps {
  metadata: MagnoliaNodeMeta;
  freeGifts?: MgnlContent
}
