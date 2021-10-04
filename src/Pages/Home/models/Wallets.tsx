export interface WalletModel {
    
  avatar: string;
  benevit_count: number;
  desktop_cover_url: null | string;
  display_index: number;
  display_text: string;
  icon: string;
  id: number;
  max_level: number;
  max_level_phase_2: number;
  max_level_phase_3: number;
  max_level_phase_4: number;
  max_level_phase_5: number;
  member_level: number;
  mobile_cover_url: null | string;
  name: string;
  path: string;
  primary_color: string;
}

export const WalletInit: WalletModel = {
  avatar: "",
  benevit_count: 0,
  desktop_cover_url: null,
  display_index: 0,
  display_text: "",
  icon: "",
  id: 0,
  max_level: 0,
  max_level_phase_2: 0,
  max_level_phase_3: 0,
  max_level_phase_4: 0,
  max_level_phase_5: 0,
  member_level: 0,
  mobile_cover_url: null,
  name: "",
  path: "",
  primary_color: "",
};
