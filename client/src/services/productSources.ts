import api from './api';
import { ProductSource } from '../model/productSource';

export interface ProductSourcesResponse {
  product_sources: ProductSource[];
}

export const fetchAll = () => {
  return api.get<ProductSourcesResponse>('product_sources');
};
