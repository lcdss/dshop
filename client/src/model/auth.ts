import md5 from 'md5';
import { Action, action, Thunk, thunk, Computed, computed } from 'easy-peasy';
import { fetchMe } from '../services/auth';
import {
  login,
  logout,
  register,
  LoginData,
  RegisterData,
} from '../services/auth';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthModel {
  user: User;
  token: string;
  isAuthenticated: Computed<AuthModel, boolean>;
  avatarUrl: Computed<AuthModel, string>;
  setToken: Action<AuthModel, string>;
  setUser: Action<AuthModel, User>;
  login: Thunk<AuthModel, LoginData>;
  logout: Thunk<AuthModel>;
  register: Thunk<AuthModel, RegisterData>;
  loadAuth: Thunk<AuthModel>;
}

const GRAVATAR_URL = 'https://gravatar.com/avatar';

const userStub = {
  id: 0,
  name: '',
  email: '',
};

const authModel: AuthModel = {
  user: userStub,
  token: window.localStorage.getItem('token') || '',
  isAuthenticated: computed(state => {
    return state.token.length > 0 && state.user.id !== 0;
  }),
  avatarUrl: computed(({ user, isAuthenticated }) => {
    if (!isAuthenticated) {
      return GRAVATAR_URL + '?d=mp';
    }

    return `${GRAVATAR_URL}/${md5(user.email)}?d=robohash`;
  }),
  setToken: action((state, payload) => {
    state.token = payload;
  }),
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  login: thunk(async (actions, payload) => {
    try {
      const {
        data: { user, access_token },
      } = await login(payload);

      window.localStorage.setItem('token', access_token);

      actions.setUser(user);
      actions.setToken(access_token);
    } catch (error) {
      throw new Error(error);
    }
  }),
  logout: thunk(async actions => {
    await logout();

    window.localStorage.removeItem('token');

    actions.setToken('');
    actions.setUser(userStub);
  }),
  register: thunk(async (actions, payload) => {
    try {
      const {
        data: { user, access_token },
      } = await register(payload);

      window.localStorage.setItem('token', access_token);

      actions.setUser(user);
      actions.setToken(access_token);
    } catch (error) {
      throw new Error(error);
    }
  }),
  loadAuth: thunk(async actions => {
    try {
      const {
        data: { user },
      } = await fetchMe();

      actions.setUser(user);
    } catch (error) {
      actions.setToken('');
      actions.setUser(userStub);

      throw new Error(error);
    }
  }),
};

export default authModel;
