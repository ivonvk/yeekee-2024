
export interface Item {

  id?: string;
  name_zh?: string;
  name_en?: string;
  name_cn?: string;
  description?: string;
  category?:ItemCategory;
  other_ids?: string;
}

export enum ItemCategory{
  Item1_10="Item1_10",
  Item1_19="Item1_19",
  Item1_29="Item1_29",
  Item1_39="Item1_39",
  Item1_49="Item1_49",
}