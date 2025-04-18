export type ButtonRole = "action" | "operational" | "normal";

export interface ButtonProps {
  label: string;
  role: ButtonRole;
}
