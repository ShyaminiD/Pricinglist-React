import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <Nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="App">
        <Link to="/result">Result</Link>
        <Link to="/html">HTML</Link>
        <Link to="/css">CSS</Link>
        <Link to="/javascript">Javascript</Link>
        <Link to="/resources">Resources</Link>

        <Routes>
          <Route path="/result" element={<PricelistResult />} />
          <Route exact path="/html" element={<Scripthtml />} />
          <Route exact path="/css" element={<Scriptcss />} />
          <Route exact path="/javascript" element={<Scriptjavascipt />} />
          <Route exact path="/resources" element={<Resources />} />
        </Routes>
      </div>
      //End of App
    </Nav>
  );
}

function PricelistResult() {
  const styles = {
    width: "30%",
    height: "80%",
    backgroundColor: "#ffffff",
    borderRadius: "1rem",
  };
  return (
    <div className="Pricinglist">
      <div className="container" style={styles}>
        <div className="container-Price">
          <h6>
            free<i class="fas fa-check"></i>
          </h6>
          <p>
            <span>$0</span>/month
          </p>
        </div>
        <div className="line"></div>
        <div className="container-Features">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Single User
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> 5GB Storage
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Unlimited Public Projects
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Community Access
            </li>
            <li className="shady-Features">
              <FontAwesomeIcon color="#b7b1b1" icon={faTimes} /> Unlimited
              Private Projects
            </li>
            <li className="shady-Features">
              <FontAwesomeIcon color="#b7b1b1" icon={faTimes} /> Dedicated Phone
              Support
            </li>
            <li className="shady-Features">
              <FontAwesomeIcon color="#b7b1b1" icon={faTimes} /> Free Subdomain
            </li>
            <li className="shady-Features">
              <FontAwesomeIcon color="#b7b1b1" icon={faTimes} /> Monthly Status
              Reports
            </li>
          </ul>
        </div>
        <button> button</button>
      </div>
      {/* //End of PricinglistFree */}
      <div className="container" style={styles}>
        <div className="container-Price">
          <h6>
            free<i class="fas fa-check"></i>
          </h6>
          <p>
            <span>$9</span>/month
          </p>
        </div>
        <div className="line"></div>
        <div className="container-Features">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <strong> 5 Users</strong>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> 50GB Storage
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Unlimited Public Projects
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Community Access
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Unlimited Private Projects
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Dedicated Phone Support
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Free Subdomain
            </li>
            <li className="shady-Features">
              <FontAwesomeIcon color="#b7b1b1" icon={faTimes} /> Monthly Status
              Reports
            </li>
          </ul>
        </div>
        <button> button</button>
      </div>{" "}
      {/* //End of PricinglistPlus */}
      <div className="container" style={styles}>
        <div className="container-Price">
          <h6>
            free<i class="fas fa-check"></i>
          </h6>
          <p>
            <span>$49</span>/month
          </p>
        </div>
        <div className="line"></div>
        <div className="container-Features">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              <strong> Unlimited Users</strong>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> 150GB Storage
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Unlimited Public Projects
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Community Access
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Unlimited Private Projects
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Dedicated Phone Support
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> <strong>Unlimited</strong> Free
              Subdomain
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Monthly Status Reports
            </li>
          </ul>
        </div>
        <button> button</button>
      </div>
    </div>
  );
}
function Scripthtml() {
  return <p>html scrpit goes here</p>;
}
function Scriptcss() {
  return <p>css</p>;
}
function Scriptjavascipt() {
  const styles = {
    height: "100vh",
    backgroundColor: "#ffffff",
  };
  return <div style={styles}></div>;
}
function Resources() {
  const styles = {
    height: "100vh",
    backgroundColor: "#ffffff",
    fontsize: "1rem",
    textalign: "left",
  };
  return (
    <div style={styles}>
      <p style={{ fontsize: "5rem" }}>
        EXTERNAL RESOURCES LOADED INTO THIS FIDDLE:
      </p>
    </div>
  );
}

export default App;
