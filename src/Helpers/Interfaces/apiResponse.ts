// type with generics
export interface apiResponse<T> {
  hasError: boolean;
  message: string;
  statusCode: number;
  data: T;
}

export interface BasicUser {
  emailAddress: string;
  fullName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userId: string;
  profilePictureUrl: string;
}

export interface AuthResponse extends BasicUser {
  accessToken: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
  phoneNumber: string;
}

export interface Transaction {
  id: number;
  title: string;
  description: string;
  amount: number;
  dateAdded: string;
  dateAddedFormatted: string;
  categoryId: number;
  categoryName: string;
  inFlow: boolean;
  userId: string;
}

export interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
  isSubcategory: boolean;
  userId: string;
}
