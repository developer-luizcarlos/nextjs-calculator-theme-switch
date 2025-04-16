// types importation
import { ButtonRole } from "@/types/Button/ButtonRole";

export const defineClassName = (role: ButtonRole): string => {
  switch (role) {
    case "action":
      return "button button--action";
    case "operational":
      return "button button--operational";
    case "normal":
      return "button";
    default:
      return "button";
  }
};
