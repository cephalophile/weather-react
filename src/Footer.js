import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="sig">
        <a
          className="codeLink"
          href="https://github.com/cephalophile/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Kaz
      </div>
    </div>
  );
}
