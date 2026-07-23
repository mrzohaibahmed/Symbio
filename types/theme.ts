export type ThemeMode = "light" | "dark" | "system";

export interface Theme {
  mode: ThemeMode;
  primary: string;
  secondary: string;
  dark: string;
  background: string;
  white: string;
  gray: string;
  success: string;
  error: string;
  warning: string;
}
