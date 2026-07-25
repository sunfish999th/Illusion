export type FandomCategory = 
  | 'everyday_host' 
  | 'ranfren' 
  | 'yttd' 
  | 'danmei' 
  | 'historia_curseada' 
  | 'custom';

export type KeyringType = 'star_gold' | 'star_silver' | 'heart_pink' | 'heart_gold' | 'lobster_black' | 'classic_silver';

export interface CharacterItem {
  id: string;
  name: string;
  fandom: string;
  fandomCategory: FandomCategory;
  description: string;
  defaultBorderColor: string;
  defaultBorderWidth: number; // in px
  defaultKeyring: KeyringType;
  defaultSizeCm: number;
  status: 'boceto' | 'listo_imprenta' | 'en_preventa';
  suggestedPriceSoles: number;
  hasDoubleSide: boolean;
  sideAName?: string;
  sideBName?: string;
  svgType: string; // Internal SVG generator key or custom image data URL
  customImageUrl?: string;
}

export interface KeychainConfig {
  characterId: string;
  characterName: string;
  fandomName: string;
  borderColor: string;
  borderWidth: number;
  keyring: KeyringType;
  sizeCm: number;
  acrylicThicknessMm: number; // 3mm or 4mm
  isDoubleSided: boolean;
  activeSide: 'A' | 'B';
  backgroundColor: string; // for mockup preview
  customText?: string;
  customImage?: string;
}

export interface PreOrder {
  id: string;
  customerName: string;
  phone?: string;
  characterName: string;
  quantity: number;
  pricePerUnitSoles: number;
  depositSoles: number; // Adelanto
  deliveryMethod: 'shalom' | 'olva' | 'arenales' | 'wilson' | 'otro';
  status: 'reservado' | 'adelanto_pagado' | 'en_imprenta' | 'listo_entrega' | 'entregado';
  createdAt: string;
  notes?: string;
}

export interface WilsonCalcParams {
  sheetPriceSoles: number; // e.g. S/ 90 per A4 UV sheet
  hardwareCostSoles: number; // e.g. S/ 0.50 per keyring
  packagingCostSoles: number; // e.g. S/ 0.30 per bag
  sellingPriceSoles: number; // e.g. S/ 15.00
  keychainSizeCm: number; // e.g. 5cm
  batchQuantity: number; // e.g. 30
}
