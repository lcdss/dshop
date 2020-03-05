import authModel, { AuthModel } from './auth';

export interface StoreModel {
  auth: AuthModel;
}

const storeModel: StoreModel = {
  auth: authModel,
};

export default storeModel;
