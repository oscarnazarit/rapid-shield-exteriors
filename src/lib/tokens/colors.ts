// src/tokens/colors.ts
export const colors = {
  gold: {
    deep: '#B48E2C', // darkest gold — borders, pressed states
    dark: '#C79B3A', // dark gold — secondary actions
    primary: '#D1992B', // main brand gold - same as logo
    rich: '#F2B43B', // vibrant gold — CTAs, highlights
    warm: '#FAC857', // warm mid-gold
    soft: '#F2BE5B', // softer accent
    light: '#FFD76B', // light gold — hover states, backgrounds
    pale: '#FFF194', // near-yellow — subtle tints, badges
  },
  gray: {
    900: '#494848', // near-black — primary text
    700: '#636363', // secondary text
    500: '#909090', // placeholder, disabled
    300: '#B4B4B4', // borders, dividers
    100: '#D4D4D4', // subtle backgrounds
  },
} as const;

// Semantic aliases — use these in components, not raw values

// ------------------------------------------------------------------------
// import line for tsx files: import { palette } from '@/lib/tokens/colors';

export const palette = {
  text: {
    primary: colors.gold.primary, // main brand color for emphasis
    secondary: colors.gray[700],
    disabled: colors.gray[500],
    inverse: colors.gray[900], // text on gold backgrounds
  },
  border: {
    default: colors.gray[300],
    subtle: colors.gray[100],
    accent: colors.gold.deep,
  },
  background: {
    page: '#FFFFFF',
    subtle: colors.gray[100],
    accent: colors.gold.pale,
  },
  action: {
    primary: colors.gold.rich,
    primaryHover: colors.gold.dark,
    primaryPressed: colors.gold.deep,
    secondary: colors.gold.light,
  },
} as const;

export type GoldToken = keyof typeof colors.gold;
export type GrayToken = keyof typeof colors.gray;
