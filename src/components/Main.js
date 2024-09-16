import React, { useContext } from "react";
import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import WeatherContext from "../context/weather.context";
import Loader from "./Loader";

const Main = () => {
  const { loading, currentWeather, dailyForecast, hourlyForecast } =
    useContext(WeatherContext);
  return (
    <div className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather data={currentWeather}/>
          <Forecast
            type="hourly"
            title="HOURLY FORECAST"
            data={hourlyForecast}
          />
          <Forecast
            type="dail"
            title="21 DAYS FORECAST"
            data={dailyForecast}
          />
        </>
      )}
    </div>
  );
};

export default Main;
