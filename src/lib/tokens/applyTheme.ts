// src/tokens/applyTheme.ts
import { palette } from './colors';

export function applyTheme() {
  const r = document.documentElement;
  r.style.setProperty('--color-text-primary', palette.text.primary);
  r.style.setProperty('--color-text-secondary', palette.text.secondary);
  r.style.setProperty('--color-border', palette.border.default);
  r.style.setProperty('--color-bg-page', palette.background.page);
  r.style.setProperty('--color-action-primary', palette.action.primary);
  // ...etc
}
