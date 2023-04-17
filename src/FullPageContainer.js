import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "./images/clearsky.jpg";

import SearchSection from "./SearchSection.js";
import CurrentInfoLine from "./CurrentInfoLine.js";
import ForecastSection from "./ForecastSection.js";
import Footer from "./Footer";

export default function FullPageContainer() {
  return (
    <div
      className="FullPageContainer"
      style={{ backgroundImage: `url(${background})` }}
    >
      <SearchSection />
      <CurrentInfoLine />
      <ForecastSection />
      <Footer />
    </div>
  );
}
