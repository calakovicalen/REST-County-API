import { useNavigate } from "react-router-dom";

import classes from "./Countries.module.css";

import CountryCard from "../UI/CountryCard";

const Countries = ({ countries }) => {
  const navigate = useNavigate();

  const onSelectCountry = (name) => {
    navigate(`country/${name}`);
  };
  return (
    <div className={classes["countries-container"]}>
      {countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard
            country={country}
            key={country.numericCode}
            onClick={onSelectCountry}
          />
        ))
      ) : (
        <div className={classes["countries-not-found"]}>No countries found</div>
      )}
    </div>
  );
};

export default Countries;
