import { useSelector } from "react-redux";
import classes from "./CountryCard.module.css";
import Image from "./Image";

const CountryCard = ({ country, onClick }) => {
  const { flag, name, population, region, capital } = country;
  const color = useSelector((state) => state.theme.color);

  const onSelectCountry = () => {
    onClick(name);
  };

  return (
    <div
      className={classes["country-card"]}
      style={color}
      onClick={onSelectCountry}
    >
      <Image url={flag} alt={`Flag of ${name}`} />
      <div className={classes["text-container"]}>
        <h3>{name}</h3>
        <p>
          <span>Population: </span> {population.toLocaleString("en-US")}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
