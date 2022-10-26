import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import DarkModeSearch from "../svgs/DarkModeSearch";
import WhiteModeSearch from "../svgs/WhiteModeSearch";

import classes from "./Input.module.css";

const Input = ({ filter, onChanged }) => {
  let theme = useSelector((state) => state.theme.theme);
  let color = useSelector((state) => state.theme.color);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onChanged(query);
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const onSearchChanged = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={classes.container}>
      {theme ? <WhiteModeSearch /> : <DarkModeSearch />}
      <input
        type="text"
        className={`${classes.input} ${
          theme ? classes["input-white-mode"] : classes["input-dark-mode"]
        }`}
        style={color}
        placeholder="Search for a country"
        onChange={onSearchChanged}
      />
    </div>
  );
};

export default Input;
