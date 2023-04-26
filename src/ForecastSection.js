import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ForecastDay from "./ForecastDay.js";

export default function ForecastSection(props) {
  return (
    <div className="ForecastSection">
      <ForecastDay weatherData={props.weatherData} units={props.units}/>
      
      <div className="forecastArea day2">
        <p className="weatherIcon" id="day2-icon">
          ☀
        </p>
        <p className="forecastDay" id="day2-day">
          Thu
        </p>
        <p className="forecastDate" id="day2-date">
          Aug 12
        </p>
        <p>
          <span className="forecastHigh temperature" id="day2-high">
            82°
          </span>{" "}
          |{" "}
          <span className="forecastLow temperature" id="day2-low">
            66°
          </span>
        </p>
      </div>
      <div className="forecastArea day3">
        <p className="weatherIcon" id="day3-icon">
          ☀
        </p>
        <p className="forecastDay" id="day3-day">
          Thu
        </p>
        <p className="forecastDate" id="day3-date">
          Aug 12
        </p>
        <p>
          <span className="forecastHigh temperature" id="day3-high">
            82°
          </span>{" "}
          |{" "}
          <span className="forecastLow temperature" id="day3-low">
            66°
          </span>
        </p>
      </div>
      <div className="forecastArea day4">
        <p className="weatherIcon" id="day4-icon">
          ☀
        </p>
        <p className="forecastDay" id="day4-day">
          Thu
        </p>
        <p className="forecastDate" id="day4-date">
          Aug 12
        </p>
        <p>
          <span className="forecastHigh temperature" id="day4-high">
            82°
          </span>{" "}
          |{" "}
          <span className="forecastLow temperature" id="day4-low">
            66°
          </span>
        </p>
      </div>
      <div className="forecastArea day5">
        <p className="weatherIcon" id="day5-icon">
          ☀
        </p>
        <p className="forecastDay" id="day5-day">
          Thu
        </p>
        <p className="forecastDate" id="day5-date">
          Aug 12
        </p>
        <p>
          <span className="forecastHigh temperature" id="day5-high">
            82°
          </span>{" "}
          |{" "}
          <span className="forecastLow temperature" id="day5-low">
            66°
          </span>
        </p>
      </div>
    </div>
  );
}
