import { Action, Thunk, action, thunk } from 'easy-peasy';
import { fetchAll } from '../services/computerProducts';

export interface ComputerProduct {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  year: number;
}

export interface ComputerProductModel {
  items: ComputerProduct[];
  setItems: Action<ComputerProductModel, ComputerProduct[]>;
  fetchItems: Thunk<ComputerProductModel>;
}

const computerProductModel: ComputerProductModel = {
  items: [],
  setItems: action((state, payload) => {
    state.items = payload;
  }),
  fetchItems: thunk(async actions => {
    try {
      const {
        data: { computer_products: items },
      } = await fetchAll();

      actions.setItems(items);
    } catch {
      actions.setItems([]);
    }
  }),
};

export default computerProductModel;
