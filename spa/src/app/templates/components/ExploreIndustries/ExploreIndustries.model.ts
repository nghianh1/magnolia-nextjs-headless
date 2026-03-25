import { MagnoliaNodeMeta, MgnlContent } from "@magnolia/frontend-helpers-base";

export type ItemsKey = `items${number}`;

export interface ItemsEntry extends MagnoliaNodeMeta {
  field: string;
}
export interface Items extends MagnoliaNodeMeta {
  [key: ItemsKey]: ItemsEntry;
}

export default interface IExploreIndustriesProps {
  metadata: MagnoliaNodeMeta;
  industries?: MgnlContent
}
