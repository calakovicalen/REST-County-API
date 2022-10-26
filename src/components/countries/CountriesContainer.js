import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesActions } from "../../store/countries-slice";

import classes from "./CountriesContainer.module.css";

import Input from "../UI/Input";
import Select from "../UI/Select";
import Countries from "./Countries";

const CountriesContainer = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const regions = useSelector((state) => state.countries.regions);
  const theme = useSelector((state) => state.theme.theme);
  const color = useSelector((state) => state.theme.color);

  useEffect(() => {
    dispatch(countriesActions.setCountries());
    dispatch(countriesActions.setSearchText("name"));
    dispatch(countriesActions.setDropdownSelected("All"));
  }, [dispatch]);

  const onSearchChanged = (name) => {
    dispatch(countriesActions.setSearchText(name));
    dispatch(countriesActions.getCountry());
  };

  const onDropDownChanged = (region) => {
    dispatch(countriesActions.setDropdownSelected(region));
    dispatch(countriesActions.getCountry());
  };
  return (
    <div
      className={`${classes["countries-container"]} ${
        theme ? classes["white-theme"] : classes["dark-theme"]
      }`}
    >
      <div className={classes["countries-filter-container"]}>
        <Input filter="country" onChanged={onSearchChanged} />
        <Select filter="region" items={regions} onChanged={onDropDownChanged} />
      </div>
      <Countries countries={countries} />
    </div>
  );
};

export default CountriesContainer;
