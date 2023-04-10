import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import OtherInfoBox from "./OtherInfoBox";
import LocationInfoBox from "./LocationInfoBox";
import CurrentSection from "./CurrentSection";

export default function CurrentInfoLine() {
  return (
    <div className="CurrentInfoLine">
      <CurrentSection />
      <LocationInfoBox />
      <OtherInfoBox />
    </div>
  );
}
