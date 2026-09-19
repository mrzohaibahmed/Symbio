/**
 * Theme token constants — mirrors the design system defined in globals.css.
 * Used where JS needs direct access to brand values.
 */
export const themeTokens = {
  colors: {
    primary: "#111111",
    secondary: "#1A1A1A",
    accent: "#E30613",
    accentLight: "#ED1C24",
    accentDark: "#B3000F",
    gold: "#FFC20E",
    goldLight: "#FFD34D",
    goldDark: "#D9A400",
    background: "#FFFFFF",
    surface: "#F5F5F5",
    textPrimary: "#111111",
    textSecondary: "#6B6B6B",
    border: "#E0E0E0",
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
} as const;
