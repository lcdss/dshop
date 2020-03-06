import api from './api';
import { BookProduct } from '../model/bookProduct';

export interface BookProductsResponse {
  book_products: BookProduct[];
}

export const fetchAll = () => {
  return api.get<BookProductsResponse>('book_products');
};
