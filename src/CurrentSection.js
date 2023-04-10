import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CurrentSection() {
  return (
    <div className="CurrentSection">
      <div className="currentWeatherbox">
        <div className="currentWeatherInfo">
          <div id="current-weather-icon">
            <img
              id="icon-1"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="#"
            />
          </div>
          <div id="current-weather">Cloudy</div>
          <div id="current-temp" className="temperature">
            70°
          </div>
          <div id="current-humidity">Humidity:</div>
          <div id="current-humidity-value">20%</div>
        </div>
      </div>
    </div>
  );
}
