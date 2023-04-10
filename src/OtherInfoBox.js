import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OtherInfoBox() {
  return (
    <div className="OtherInfoBox">
      <ul className="container otherInfo">
        <li className="container feelsLike">
          Feels Like<span className="feelsLikeValue temperature">30°</span>
        </li>
        <div className="uvIndex">
          <li className="container">
            UV Index<span className="uvIndexValue">8/10</span>
          </li>
        </div>
        <li className="container wind">
          Wind<span className="windValue">6 mph</span>
        </li>
      </ul>
    </div>
  );
}
