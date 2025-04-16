import "./Button.css";

// types importation
import { ButtonBase } from "@/types/Button/ButtonBase";

// functions importation
import { defineClassName } from "./utils";

const Button: React.FC<ButtonBase> = ({ label, role }) => {
  const buttonClassname: string = defineClassName(role);

  return <button className={`${buttonClassname}`}>{label}</button>;
};

export default Button;
