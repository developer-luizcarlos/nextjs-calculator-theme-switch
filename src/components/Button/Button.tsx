import "./Button.css";

// types importation
import { ButtonProps } from "./Button.types";

// functions importation
import { defineClassName } from "./utils";

const Button: React.FC<ButtonProps> = ({ label, role, handleClick }) => {
  const buttonClassname: string = defineClassName(role);

  return (
    <button className={`${buttonClassname}`} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
