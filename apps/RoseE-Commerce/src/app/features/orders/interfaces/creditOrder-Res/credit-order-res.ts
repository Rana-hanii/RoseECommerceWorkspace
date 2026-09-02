export interface CreditOrderRes {
  message: string;
  session: Session;
}



export interface Session {
  id: string;
  object: string;
  adaptive_pricing: Adaptivepricing;
  after_expiration: null;
  allow_promotion_codes: null;
  amount_subtotal: number;
  amount_total: number;
  automatic_tax: Automatictax;
  billing_address_collection: null;
  branding_settings: Brandingsettings;
  cancel_url: string;
  client_reference_id: string;
  client_secret: null;
  collected_information: Collectedinformation;
  consent: null;
  consent_collection: null;
  created: number;
  currency: string;
  currency_conversion: null;
  custom_fields: any[];
  custom_text: Customtext;
  customer: null;
  customer_account: null;
  customer_creation: string;
  customer_details: Customerdetails;
  customer_email: string;
  discounts: any[];
  expires_at: number;
  integration_identifier: null;
  invoice: null;
  invoice_creation: Invoicecreation;
  livemode: boolean;
  locale: null;
  managed_payments: Adaptivepricing;
  metadata: Metadata2;
  mode: string;
  origin_context: null;
  payment_intent: null;
  payment_link: null;
  payment_method_collection: string;
  payment_method_configuration_details: Paymentmethodconfigurationdetails;
  payment_method_options: Paymentmethodoptions;
  payment_method_types: string[];
  payment_status: string;
  permissions: null;
  phone_number_collection: Adaptivepricing;
  recovered_from: null;
  saved_payment_method_options: null;
  setup_intent: null;
  shipping_address_collection: null;
  shipping_cost: null;
  shipping_details: null;
  shipping_options: any[];
  status: string;
  submit_type: null;
  subscription: null;
  success_url: string;
  total_details: Totaldetails;
  ui_mode: string;
  url: string;
  wallet_options: null;
}

export interface Totaldetails {
  amount_discount: number;
  amount_shipping: number;
  amount_tax: number;
}

export interface Paymentmethodoptions {
  card: Card;
}

export interface Card {
  request_three_d_secure: string;
}

export interface Paymentmethodconfigurationdetails {
  id: string;
  parent: null;
}

export interface Metadata2 {
  city: string;
  lat: string;
  long: string;
  phone: string;
  street: string;
}

export interface Invoicecreation {
  enabled: boolean;
  invoice_data: Invoicedata;
}

export interface Invoicedata {
  account_tax_ids: null;
  custom_fields: null;
  description: null;
  footer: null;
  issuer: null;
  metadata: Metadata;
  rendering_options: null;
}

export interface Metadata {
}

export interface Customerdetails {
  address: null;
  business_name: null;
  email: string;
  individual_name: null;
  name: null;
  phone: null;
  tax_exempt: string;
  tax_ids: null;
}

export interface Customtext {
  after_submit: null;
  shipping_address: null;
  submit: null;
  terms_of_service_acceptance: null;
}

export interface Collectedinformation {
  business_name: null;
  individual_name: null;
  shipping_details: null;
}

export interface Brandingsettings {
  background_color: string;
  border_style: string;
  button_color: string;
  display_name: string;
  font_family: string;
  icon: Icon;
  logo: Icon;
}

export interface Icon {
  file: string;
  type: string;
}

export interface Automatictax {
  enabled: boolean;
  liability: null;
  provider: null;
  status: null;
}

export interface Adaptivepricing {
  enabled: boolean;
}