import api from './api';
import { User } from '../model/auth';

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  access_token: string;
}

export const login = (data: LoginData) => {
  return api.post<LoginResponse>('auth/login', { user: data });
};

export const logout = () => {
  // TODO: Invalidate the token in the server
  return Promise.resolve();
};

export interface RegisterData extends LoginData {
  name: string;
}

export type RegisterResponse = LoginResponse;

export const register = (data: RegisterData) => {
  return api.post<RegisterResponse>('users', { user: data });
};

export interface UserResponse {
  user: User;
}

export const fetchMe = () => {
  return api.get<UserResponse>('auth/me');
};
