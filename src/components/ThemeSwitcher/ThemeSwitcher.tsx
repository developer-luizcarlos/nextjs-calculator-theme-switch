import "./ThemeSwitcher.css";

// icons importation
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonLight } from "react-icons/pi";

const ThemeSwitcher: React.FC = () => {
  return (
    <div className="theme-switcher">
      <span className="theme-switcher__span">
        <IoSunnyOutline className="theme-switcher__icon" />
      </span>
      <span className="theme-switcher__span">
        <PiMoonLight className="theme-switcher__icon theme-switcher__icon--active" />
      </span>
    </div>
  );
};

export default ThemeSwitcher;
