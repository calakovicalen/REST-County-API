import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countriesAll: [],
    countries: [],
    regions: [],
    selectedCountry: {},
    searchText: "",
    dropdownSelected: "All",
  },
  reducers: {
    setCountriesInitial(state, action) {
      state.countriesAll = action.payload.countries;
    },
    setCountries(state) {
      state.countries = state.countriesAll;
    },
    setRegions(state, action) {
      const regions = action.payload.countries.reduce((acc, cur) => {
        if (acc[cur.region]) {
          acc[cur.region]++;
        } else {
          acc[cur.region] = 1;
        }
        return acc;
      }, {});
      state.regions = Object.keys(regions).sort((a, b) => {
        if (a > b) return 1;
        return -1;
      });
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setDropdownSelected(state, action) {
      state.dropdownSelected = action.payload;
    },
    getCountry(state) {
      state.countries = state.countriesAll
        .filter((country) =>
          country.region
            .toLowerCase()
            .includes(
              state.dropdownSelected === "All"
                ? ""
                : state.dropdownSelected.toLowerCase()
            )
        )
        .filter((country) =>
          country.name.toLowerCase().includes(state.searchText.toLowerCase())
        );
    },
    selectCountry(state, action) {
      const [selectedCountry] = state.countriesAll.filter(
        (country) => country.name === action.payload
      );

      selectedCountry.borderCountries =
        selectedCountry.borders &&
        state.countriesAll
          .filter((c) => selectedCountry.borders.includes(c.alpha3Code))
          .map((c) => c.name);

      state.selectedCountry = selectedCountry;
    },
  },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice;
