import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountriesData } from "./store/country-actions";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Country from "./routes/Country";
import Header from "./components/UI/Header";

import classes from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    dispatch(fetchCountriesData());
    console.log("FETCHING DATA...");
  }, [dispatch]);

  return (
    <div
      className={`${classes["app"]} ${
        theme ? classes["white-theme"] : classes["dark-theme"]
      }`}
    >
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="country/*" element={<Country />} />
      </Routes>
    </div>
  );
};

export default App;
