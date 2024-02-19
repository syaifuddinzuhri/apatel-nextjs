export interface UserLevel {
  id_level: number;
  name: string;
  description: string;
  is_trial: number;
  min_topup: number;
  min_order: number;
  point_to_idr: number;
  post_category: string;
  sort: number;
}

export interface UserSetting {
  maintenance_mobile: number;
}

export interface UserDetail {
  id: number;
  id_member: number;
  first_name: string;
  last_name: string;
  birth_regency: number;
  birth_date: string;
  phone: string;
  otp_wa: string | null;
  otp_wa_verified_at: Date | null;
  phone_is_verify: number | null;
  phone_status: string | null;
  phone2: string;
  address: string;
  latitude: number | null;
  longitude: number | null;
  gender: string;
  id_provinces: number;
  id_regency: number;
  id_district: number;
  id_village: number;
  id_job: number;
  id_education: number;
  social_fb: string | null;
  social_ig: string | null;
  social_line: string | null;
  fcm_id: string;
  fcm_id_web: number | null;
  last_login: string;
  telegram_id: number | null;
  telegram_status: number;
  id_product_fav: string;
  wa_notif: number;
  created_at: Date;
  update_at: Date;
  fullname: string;
}

export interface UserPlanSubscribe {
  id_plan_subs: number;
  id_member: number;
  id_plan: number;
  options: string;
  status: string;
  start_at: Date;
  end_at: Date | null;
  created_by: string | null;
  created_at: Date;
  updated_at: Date;
  plan: UserPlan;
}

export interface UserPlan {
  id_plan: number;
  name: string;
  price: number;
  frequency_amount: number;
  frequency_unit: string;
  options: string;
  menu: string;
  product_type: string;
  post_category: string;
  benefits: string;
  is_active: number;
  is_default: number;
  is_premium: number;
  upgrade_price: number;
  upgrade_balance: number;
  upgrade_fee: number;
  uv_price: number;
  uv_balance: number;
  uv_commision: number;
  uv_fee: number;
  banner_post_category_id: number;
  news_post_category_id: number;
  created_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface UserPayment {
  id: number;
  date: Date;
  no_transaction: string;
  type: string;
  id_member: number;
  m_id_paymentaccount: number;
  a_id_paymentaccount: number;
  id_voucher: number;
  nominal_voucher: number;
  unique_number: string | null;
  nominal_transfer: number;
  nominal_topup: number;
  action_by: number;
  action_at: Date;
  sender_name: string;
  sender_accountnumber: string;
  sender_bank: string;
  note: string | null;
  file_proof: string | null;
  status: string;
  tripay_ref: string | null;
  tripay_fee: number | null;
  tripay_checkout_url: string | null;
  autocheck_at: Date | null;
  remind_at: Date | null;
  created_at: Date;
  updated_at: Date;
  sag_ref: string | null;
  sag_fee: string | null;
  source: string | null;
  expired_payment_at: Date;
  member_payment_account: string | null;
  admin_payment_account: UserPaymentAccount;
}

export interface UserPaymentAccount {
  id_payment_account: number;
  id_payment_method: number;
  type: string;
  account_number: string;
  account_name: string;
  account_branch: string;
  account_barcode: string;
  account_logo: string;
  order_number: number;
  is_active: number;
  is_active_shop: number;
  used_by: string | null;
  username: string | null;
  password: string | null;
  key: string;
  timeout: string | null;
  offline_time: string;
  online_time: string;
  tripay_ref: string;
  tripay_fee_text: string | null;
  created_at: Date;
  update_at: Date;
  sag_ref: string | null;
  sag_fee: string | null;
  notes: string;
  payment_method: UserPaymentMethod;
}

export interface UserPaymentMethod {
  id: number;
  method: string;
  rate: number;
  type: string;
  code: string;
  name: string;
  api_file: string | null;
  api_key: string;
  api_service: string;
  api_url: string;
  logo: string;
  created_at: Date;
  update_at: Date;
}

export interface User {
  id_member: number;
  balance: number;
  commission: number;
  point: number;
  level: UserLevel;
  email: string;
  username: string;
  otp: string;
  pin: string;
  token: string;
  api_key: string;
  trial_expired: Date;
  is_verifyemail: number;
  verifyemail_at: Date;
  is_active: number;
  active_at: Date;
  is_premium: number;
  premium_at: Date | null;
  premium_payment_id: number | null;
  account_by_v1: string | null;
  premium_by_v1: string | null;
  balance_by_v1_payment_id: number | null;
  balance_lock: number;
  balance_lock_at: Date;
  balance_lock_by: string;
  is_banned: number;
  banned_at: Date | null;
  created_at: Date;
  update_at: Date;
  source: string;
  api_balance_unlock: number;
  last_change: string | null;
  revoke_mobile: number;
  firebase_uid: string;
  fbase_device_token: string | null;
  last_login_at: Date;
  last_login_ip: string;
  last_login_location: string;
  setting: UserSetting;
  payment_pending: number;
  payment_paid: number;
  total_order: number;
  total_pesanan: number;
  member_image: string | null;
  member_detail: UserDetail;
  plan_subs: UserPlanSubscribe;
  payment: UserPayment;
}
