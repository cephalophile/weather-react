import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LocationInfoBox() {
  return (
    <div className="LocationInfoBox">
      <h1>
        <span id="current-city">City, </span>
        <span id="current-state">State/Country</span>
      </h1>
      <h2 id="current-date">Saturday Aug 20</h2>
    </div>
  );
}
