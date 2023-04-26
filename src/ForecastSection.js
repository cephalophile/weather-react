import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ForecastDay from "./ForecastDay.js";

export default function ForecastSection(props) {
  console.log(props.weatherData.lat, props.weatherData.lon);
  return (
    <div className="ForecastSection">
      <ForecastDay weatherData={props.weatherData} units={props.units}/>
    </div>
  );
}
