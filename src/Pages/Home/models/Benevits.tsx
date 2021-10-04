import { WalletInit, WalletModel } from "./Wallets";

export interface BenevitsModel {
  active: boolean;
  ally: {
    id: number;
    name: string;
    slug: string;
    mini_logo_file_name: string;
    mini_logo_full_path: string;
    description: string | null;
  };
  description: string;
  expiration_date: string;
  has_coupons: boolean;
  id: number;
  instructions: string;
  is_available_in_all_territories: boolean;
  is_available_in_ecommerce: boolean;
  is_available_in_physical_store: boolean;
  name: string;
  primary_color: string;
  slug: string;
  territories: [
    {
      clave: string;
      created_at: string;
      id: number;
      name: number;
      updated_at: number;
    }
  ];
  title: string;
  vector_file_name: string;
  vector_full_path: string;
  wallet: WalletModel;
}
export const initialBenevits: BenevitsModel = {
  active: false,
  ally: {
    id: 0,
    name: "",
    slug: "",
    mini_logo_file_name: "",
    mini_logo_full_path: "",
    description: null,
  },
  description: "",
  expiration_date: "",
  has_coupons: false,
  id: 0,
  instructions: "",
  is_available_in_all_territories: false,
  is_available_in_ecommerce: false,
  is_available_in_physical_store: false,
  name: "",
  primary_color: "",
  slug: "",
  territories: [
    {
      clave: "",
      created_at: "",
      id: 0,
      name: 0,
      updated_at: 0,
    },
  ],
  title: "",
  vector_file_name: "",
  vector_full_path: "",
  wallet: WalletInit,
};

export interface LandingBenevitsModel {
  locked: [BenevitsModel];
  unlocked: [BenevitsModel];
}

export const initialLandingBenevits: LandingBenevitsModel = {
  locked: [initialBenevits],
  unlocked: [initialBenevits],
};
