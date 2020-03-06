import api from './api';
import { VehicleProduct } from '../model/vehicleProducts';

export interface VehicleProductsResponse {
  vehicle_products: VehicleProduct[];
}

export const fetchAll = () => {
  return api.get<VehicleProductsResponse>('book_products');
};
