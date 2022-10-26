import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { countriesActions } from "../../store/countries-slice";

import classes from "./CountryInfo.module.css";

import DarkModeBack from "../svgs/DarkModeBack";
import WhiteModeBack from "../svgs/WhiteModeBack";

const CountryInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { country } = useParams();
  const selectedCountry = useSelector(
    (state) => state.countries.selectedCountry
  );
  const theme = useSelector((state) => state.theme.theme);
  const color = useSelector((state) => state.theme.color);

  useEffect(() => {
    dispatch(countriesActions.selectCountry(country));
    console.log(selectedCountry);
  }, [country]);

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies, //name
    languages, //name
    borders,
    borderCountries,
  } = selectedCountry || {};

  const onGoBackHandler = () => {
    navigate("/");
  };

  const onSelectBorderCountry = (e) => {
    navigate(`/country/${e.target.dataset.name}`);
  };
  //console.log(selectedCountry);
  return (
    <div
      className={`${classes["big-container"]} ${
        theme ? classes["white-theme"] : classes["dark-theme"]
      }`}
    >
      <div className={classes.back} onClick={onGoBackHandler}>
        {theme ? <WhiteModeBack /> : <DarkModeBack />} Back
      </div>
      {selectedCountry ? (
        <div className={classes.container}>
          <img src={flag} alt={`${name}-flag`} />
          <div>
            <h4>{name}</h4>
            <div className={classes["text-container"]}>
              <div className={classes.wrapper}>
                {nativeName && (
                  <div className={classes.info}>
                    <span>Native Name: </span>
                    {nativeName}
                  </div>
                )}
                {population && (
                  <div className={classes.info}>
                    <span>Population: </span>
                    {population}
                  </div>
                )}
                {region && (
                  <div className={classes.info}>
                    <span>Region: </span>
                    {region}
                  </div>
                )}
                {subregion && (
                  <div className={classes.info}>
                    <span>Sub Region: </span>
                    {subregion}
                  </div>
                )}
                {capital && (
                  <div className={classes.info}>
                    <span>Capital: </span>
                    {capital}
                  </div>
                )}
              </div>
              <div className={classes.wrapper}>
                {topLevelDomain && (
                  <div className={classes.info}>
                    <span>Top Level Domain: </span>
                    {topLevelDomain}
                  </div>
                )}
                {currencies && (
                  <div className={classes.info}>
                    <span>Currencies: </span>
                    {currencies[0].name}
                  </div>
                )}
                {languages && (
                  <div className={classes.info}>
                    <span>Languages: </span>
                    {languages[0].name}
                  </div>
                )}
              </div>
            </div>
            {borders && (
              <div className={classes.borders}>
                <span>Border Countries: </span>
                <div className={classes["borders-container"]}>
                  {borderCountries.map((border) => (
                    <div
                      key={border}
                      className={classes.border}
                      onClick={onSelectBorderCountry}
                      data-name={border}
                      style={color}
                    >
                      {border}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="country-info__not-found">No country found</div>
      )}
    </div>
  );
};

export default CountryInfo;
