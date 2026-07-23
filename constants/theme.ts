/**
 * Theme token constants — mirrors the design system defined in globals.css.
 * Used where JS needs direct access to brand values.
 */
export const themeTokens = {
  colors: {
    primary: "#0B1F3A",
    secondary: "#1E293B",
    accent: "#0F9D7A",
    accentLight: "#12C495",
    accentDark: "#0A7D60",
    background: "#FFFFFF",
    surface: "#F8FAFC",
    textPrimary: "#0F172A",
    textSecondary: "#475569",
    border: "#E2E8F0",
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
