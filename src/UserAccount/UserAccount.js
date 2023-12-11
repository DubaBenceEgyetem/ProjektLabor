import React, { useState, useEffect, useContext, useRef } from "react";
import "./UserAccount.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faVault,
  faHelmetSafety,
  faComment,
  faCreditCard,
  faRightFromBracket,
  faLandmark,
  faChartLine,
  faRightLeft,
  faSatelliteDish,
  faWallet,
  faPiggyBank,
  faScaleBalanced,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../Context/UserContext";

function UserAccount() {
  const [mirol, setMirol] = useState(0);
  const [mire, setMire] = useState(0);
  const [mirolP, setMirolP] = useState("");
  const [mireP, setMireP] = useState("");
  const [options, setOptions] = useState([]);
  const [rates, setRates] = useState({});

  useEffect(() => {
    async function currency() {
      const API_URL =
        "http://data.fixer.io/api/latest?access_key=57adabccbe4b2e4098b48a272fe2d2d5&fbclid=IwAR0CT9DSagnp9_ZKqcfxpwmBIcs7OmxZwreql3P6DQ80-lO1-VYua2_hnVs";
      const res = await fetch(API_URL);
      const data = await res.json();
      const arrKeys = Object.keys(data.rates);
      setRates(data.rates);
      setMirolP(arrKeys[0]);
      setMireP(arrKeys[0]);
      arrKeys.map((item) => {
        setOptions((prev) => {
          return [...prev, <option value={item}>{item}</option>];
        });
      });
    }

    currency();
  }, []);

  useEffect(() => {
    const res = (mirol * rates[mireP]) / rates[mirolP];
    setMire(res.toFixed(2));
  }, [mirol, mire, mirolP, mireP]);

  const { user } = useUserContext();

  return (
    <div className="UserAccountBody">
      <h4 id="Name">Üdvözöljük, {user.Vezetek_nev}👋</h4>
      <div className="UserAccountNavbar">
        <nav>
          <ul>
            <li>
              <Link to="#MoneyTransfer">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <span className="navitem">Utalás</span>
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faWallet} className="icon" />
                <span className="navitem">Megtakaritások</span>
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faScaleBalanced} className="icon" />
                <span className="navitem">Hitelek</span>
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faPiggyBank} className="icon" />
                <span className="navitem">Számlabefizetés</span>
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faLandmark} className="icon" />
                <span className="navitem">Számlatörténet</span>
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faVault} className="icon" />
                <span className="navitem">Zseb</span>
              </Link>
            </li>
            <li>
              <Link to="#Kártyáim">
                <FontAwesomeIcon icon={faCreditCard} className="icon" />
                <span className="navitem">Kártyáim</span>
              </Link>
            </li>
            <br></br>
            <br></br>
            <li>
              <Link>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="logout"
                  id="logout"
                />
                <span className="navitem">Kilépés</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <div className="Messages">
            <p>
              Üzenetek
              <FontAwesomeIcon className="messageicon" icon={faComment} />
            </p>
          </div>
          <div className="Balance">
            <p>
              Az egyenleged
              <FontAwesomeIcon icon={faWallet} className="walleticon" />
            </p>
            <div className="amount" id="amount">
              {user.egyenleg}
            </div>
          </div>
          <form className="ApiWrapper">
            <h2>Valuta árfolyam váltó</h2>
            <div>
              <div className="convert-box">
                <div className="from">
                  <p>Erről</p>
                  <input
                    type="number"
                    value={mirol}
                    onChange={(e) => setMirol(e.target.value)}
                  />
                  <select
                    value={mirolP}
                    onChange={(e) => setMirolP(e.target.value)}
                  >
                    {Object.keys(rates).map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="reverse">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </div>
                <div className="to">
                  <p>Erre</p>
                  <input
                    type="number"
                    value={mire}
                    onChange={(e) => setMire(e.target.value)}
                  />
                  <select
                    value={mireP}
                    onChange={(e) => setMireP(e.target.value)}
                  >
                    {Object.keys(rates).map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="MoneyTransfer" id="MoneyTransfer">
        sdsd
      </div>
    </div>
  );
}

export default UserAccount;
