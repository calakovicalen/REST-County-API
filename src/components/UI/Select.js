import { useSelector, useDispatch } from "react-redux";

import WhiteModeArrow from "../svgs/WhiteModeArrow";
import DarkModeArrow from "../svgs/DarkModeArrow";

import classes from "./Select.module.css";
import { themeActions } from "../../store/theme-slice";
import { useState } from "react";

const Select = ({ onChanged }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const color = useSelector((state) => state.theme.color);
  const toggle = useSelector((state) => state.theme.toggle);
  const [filter, setFilter] = useState("");

  const toggleHandler = () => {
    dispatch(themeActions.show());
  };

  const onSearchChanged = (e) => {
    onChanged(e.target.innerText);
    setFilter(e.target.innerText);
    toggleHandler();
  };

  return (
    <div className={classes.container}>
      <div className={classes.select} style={color} onClick={toggleHandler}>
        {filter ? filter : "Filter By Region"}
        {theme ? <WhiteModeArrow /> : <DarkModeArrow />}
      </div>
      {toggle && (
        <ul className={classes.list} style={color} onClick={onSearchChanged}>
          <li>All</li>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default Select;
