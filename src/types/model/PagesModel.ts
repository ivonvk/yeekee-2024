import { Pages, PagesType } from '../pages';

export default class PagesModel implements Pages {
  current_page?: PagesType;

  constructor(model?: Pages) {
    this.current_page = model?.current_page;

  }

}
