
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
  L200="200L",
  L150="150L",
  All="所有類別",
}