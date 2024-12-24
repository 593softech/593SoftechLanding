// services/model/UserModel.ts
export interface UserDetails {
  idCustomer: string;
  fullName: string;
  username: string;
  photo?: string;
  role: string;
}

export interface LoginResponse {
  username: string;
  password: string;
  userDetails?: UserDetails;
}

export interface RegisterModel {
  name: string
  lastName: string
  email: string
  phone: string
  country: string
  zip: string
  address: string
}