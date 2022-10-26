import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme-slice";

import DarkModeMoon from "../svgs/DarkModeMoon";
import WhiteModeMoon from "../svgs/WhiteModeMoon";

import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    console.log(theme);
    dispatch(themeActions.toggle());
  };

  const theme = useSelector((state) => state.theme.theme);
  const color = useSelector((state) => state.theme.color);
  return (
    <header className={`${classes.header}`} style={color}>
      <h1>Where in the world?</h1>
      <div className={classes["dark-mode-container"]} onClick={toggleTheme}>
        {theme ? <WhiteModeMoon /> : <DarkModeMoon />}
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
