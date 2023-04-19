import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import OtherInfoBox from "./OtherInfoBox";
import LocationInfoBox from "./LocationInfoBox";
import CurrentSection from "./CurrentSection";

export default function CurrentInfoLine(props) {
  return (
    <div className="CurrentInfoLine">
      <CurrentSection weatherData={props.weatherData}/>
      <LocationInfoBox weatherData={props.weatherData}/>
      <OtherInfoBox weatherData={props.weatherData}/>
    </div>
  );
}
