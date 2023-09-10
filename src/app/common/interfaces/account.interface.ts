//Auth user
export interface LoginUser {
  id: number;
  username: string;
  role: string;
  token: string;
}

//Change email
export interface ChangeEmailRequest {
  id?: number;
  email: string;
  password: string;
}

//Change password
export interface ChangePasswordRequest {
  id?: number;
  password: string;
  newPassword: string;
}

