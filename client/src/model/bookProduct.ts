import { Action, Thunk, action, thunk } from 'easy-peasy';
import { fetchAll } from '../services/bookProducts';

export interface BookProduct {
  id: number;
  isbn: string;
  title: string;
  description: string;
  author: string;
  publisher: string;
  genre: string;
}

export interface BookProductModel {
  items: BookProduct[];
  setItems: Action<BookProductModel, BookProduct[]>;
  fetchItems: Thunk<BookProductModel>;
}

const bookProductModel: BookProductModel = {
  items: [],
  setItems: action((state, payload) => {
    state.items = payload;
  }),
  fetchItems: thunk(async actions => {
    try {
      const {
        data: { book_products: items },
      } = await fetchAll();

      actions.setItems(items);
    } catch {
      actions.setItems([]);
    }
  }),
};

export default bookProductModel;
