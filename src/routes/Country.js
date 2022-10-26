import { Routes, Route } from "react-router-dom";

import CountryInfo from "../components/countries/CountryInfo";

const Country = () => {
  return (
    <Routes>
      <Route path=":country" element={<CountryInfo />} />
    </Routes>
  );
};

export default Country;
