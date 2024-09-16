import { useContext } from "react";
import WeatherContext from "../context/weather.context";

const Place = () => {

  const {place}=useContext(WeatherContext);

  return (
    <div className="Place">
      <i class="bi bi-geo-alt-fill"> </i>
      <b>{place.name}</b>, {place.country}
    </div>
  );
};

export default Place;
