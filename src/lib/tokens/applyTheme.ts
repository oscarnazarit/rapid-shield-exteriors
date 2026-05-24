// src/tokens/applyTheme.ts
import { palette, colors } from './colors';

export function applyTheme() {
  const r = document.documentElement;
  r.style.setProperty('--color-text-primary', palette.text.primary);
  r.style.setProperty('--color-text-secondary', colors.gray[700]);
  r.style.setProperty('--color-text-disabled', palette.text.disabled);
  r.style.setProperty('--color-text-inverse', colors.gray[900]);
  r.style.setProperty('--color-border', palette.border.default);
  r.style.setProperty('--color-border-subtle', palette.border.subtle);
  r.style.setProperty('--color-border-accent', palette.border.accent);
  r.style.setProperty('--color-bg-page', palette.background.page);
  r.style.setProperty('--color-bg-subtle', palette.background.subtle);
  r.style.setProperty('--color-bg-accent', palette.background.accent);
  r.style.setProperty('--color-action-primary', palette.action.primary);
  r.style.setProperty('--color-action-primary-hover', palette.action.primaryHover);
  r.style.setProperty('--color-action-primary-pressed', palette.action.primaryPressed);
  r.style.setProperty('--color-action-secondary', palette.action.secondary);
}
