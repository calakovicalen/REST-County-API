import { countriesActions } from "./countries-slice";

import axios from "axios";

const PAGE_URL = {
  ALL: "https://restcountries.com/v2/all/",
  NAME: "https://restcountries.com/v2/name/",
  REGION: "https://restcountries.com/v2/region/",
};

export const fetchCountriesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(PAGE_URL.ALL);
      if (!response) {
        throw new Error("Could not fetch countries data!");
      }

      const { data } = response;
      return data;
    };

    try {
      const countriesData = await fetchData();
      dispatch(
        countriesActions.setCountriesInitial({
          countries: countriesData,
        })
      );
      dispatch(
        countriesActions.setCountries({
          countries: countriesData,
        })
      );
      dispatch(
        countriesActions.setRegions({
          countries: countriesData,
        })
      );
    } catch (error) {
      return error;
    }
  };
};
