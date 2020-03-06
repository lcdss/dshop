import authModel, { AuthModel } from './auth';
import bookProductModel, { BookProductModel } from './bookProduct';
import productSourceModel, { ProductSourceModel } from './productSource';
import vehicleProductModel, { VehicleProductModel } from './vehicleProducts';
import computerProductModel, { ComputerProductModel } from './computerProduct';

export interface StoreModel {
  auth: AuthModel;
  productSource: ProductSourceModel;
  bookProduct: BookProductModel;
  vehicleProduct: VehicleProductModel;
  computerProduct: ComputerProductModel;
}

const storeModel: StoreModel = {
  auth: authModel,
  productSource: productSourceModel,
  bookProduct: bookProductModel,
  vehicleProduct: vehicleProductModel,
  computerProduct: computerProductModel,
};

export default storeModel;
