import type { FormError, MutationProps } from "./common";

export interface Login {
  email: string;
  password: string;
}

export interface LoginValidation {
  email: FormError;
  password: FormError;
}

export interface RegisterValidation {
  name: FormError;
  email: FormError;
  phone: FormError;
  password: FormError;
  passwordConfirm: FormError;
}

export interface LoginMutation<T> extends MutationProps<T>, Login {}

export interface LoginResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
    id_member: number;
    email: string;
    phone: string;
    balance: number;
    is_active: 0 | 1;
    is_premium: 0 | 1;
  };
}

export interface Register {
  name: string;
  email: string;
  password: string;
  phone: string;
  payment_account_id: string;
  code_voucher: string;
  url: string;
  ref: string;
}

export interface RegisterMutation extends MutationProps, Register {}
