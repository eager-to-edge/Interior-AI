export interface LocalStorageTokenInterface {
  accessToken: string,
  refreshToken: string,
};

export interface AuthState {
  isLoggedIn: boolean,
  accessToken: string,
  refreshToken: string,
  error: string,
};

export interface UserCredentials {
  username: string;
  password: string;
};

export interface RegisterPayloadInterface {
  username: string;
  email: string;
  password: string;
  passwordConf: string;
};
