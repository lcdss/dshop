import { Action, Thunk, action, thunk } from 'easy-peasy';
import { fetchAll } from '../services/vehicleProducts';

export interface VehicleProduct {
  id: number;
  make: string;
  model: string;
  description: string;
  manufacture: string;
  year: number;
}

export interface VehicleProductModel {
  items: VehicleProduct[];
  setItems: Action<VehicleProductModel, VehicleProduct[]>;
  fetchItems: Thunk<VehicleProductModel>;
}

const vehicleProductModel: VehicleProductModel = {
  items: [],
  setItems: action((state, payload) => {
    state.items = payload;
  }),
  fetchItems: thunk(async actions => {
    try {
      const {
        data: { vehicle_products: items },
      } = await fetchAll();

      actions.setItems(items);
    } catch {
      actions.setItems([]);
    }
  }),
};

export default vehicleProductModel;
