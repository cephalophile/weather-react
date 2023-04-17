import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "./images/clearsky.jpg";

import SearchSection from "./SearchSection";
import CurrentInfoLine from "./CurrentInfoLine";
import ForecastSection from "./ForecastSection";
import Footer from "./Footer";

export default function FullPageContainer() {
  return (
    <div
      className="FullPageContainer"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Search Section />
      <CurrentInfoLine />
      <ForecastSection />
      <Footer />
    </div>
  );
}
