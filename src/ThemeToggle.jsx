import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme, handleDarkTheme } = useGlobalContext();

  return (
    <div className="toggle-container">
      {isDarkTheme ? (
        <button className="dark-toggle" onClick={handleDarkTheme}>
          <BsFillMoonFill className="toggle-icon" />
        </button>
      ) : (
        <button className="dark-toggle" onClick={handleDarkTheme}>
          <BsFillSunFill className="toggle-icon" />
        </button>
      )}
    </div>
  );
};
export default ThemeToggle;
