import api from './api';
import { ComputerProduct } from '../model/computerProduct';

export interface ComputerProductsResponse {
  computer_products: ComputerProduct[];
}

export const fetchAll = () => {
  return api.get<ComputerProductsResponse>('computer_products');
};
