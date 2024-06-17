import { Item, ItemCategory } from "../item";

export default class ItemModel implements Item {
  id?: string;
  name_zh?: string;
  name_en?: string;
  name_cn?: string;
  description?: string;
  category?:ItemCategory;
  other_ids?: string;
  
  constructor(model?: Item) {

    this.id = model?.id;
    this.name_zh = model?.name_zh;
    this.name_en = model?.name_en;
    this.name_cn = model?.name_cn;
    this.description = model?.description;
    this.category = model?.category;
    this.other_ids = model?.other_ids;

  }
}
