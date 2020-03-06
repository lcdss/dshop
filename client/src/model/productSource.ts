import { thunk, Thunk, Action, action } from 'easy-peasy';
import { fetchAll } from '../services/productSources';

export interface ProductSource {
  name: string;
  slug: string;
  description: string;
}

export interface ProductSourceModel {
  items: ProductSource[];
  setItems: Action<ProductSourceModel, ProductSource[]>;
  fetchItems: Thunk<ProductSourceModel>;
}

const categoryModel: ProductSourceModel = {
  items: [],
  setItems: action((state, payload) => {
    state.items = payload;
  }),
  fetchItems: thunk(async actions => {
    try {
      const {
        data: { product_sources: items },
      } = await fetchAll();

      actions.setItems(items);
    } catch {
      actions.setItems([]);
    }
  }),
};

export default categoryModel;
