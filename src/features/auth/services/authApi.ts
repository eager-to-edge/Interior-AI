// Define the payload and result interfaces
export interface RegisterPayload {
  username: string;
  password: string;
  email: string;
}

export interface RegisterResult {
  success: boolean;
  message: string;
};;

export interface LoginPayload {
  username: string;
  password: string;
};

export interface LoginResult {
  token: string;
  expiresIn: number;
};

// Define the register function with the correct type signature
export const register = async (payload: RegisterPayload): Promise<RegisterResult> => {
  // Implement the API call or logic here
  return {
    success: true,
    message: "Registration successful"
  };
};

// Define the login function with the correct type signature
export const login = async (payload: LoginPayload): Promise<LoginResult> => {
  // Implement the API call or logic here
  return {
    token: "fakeToken123",
    expiresIn: 3600
  };
};
