import './Content.css';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassLocation, faMoneyBillTrendUp, faHandshake} from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';




function Content() 
{
  const [currencyDetails, setCurrencyDetails] = useState({
    eur: null,
    huf: null,
    usd: null,
    yen: null,
    gbp: null,
  });
  
 
  useEffect(() => {
    const API_URL =
      'http://data.fixer.io/api/latest?access_key=57adabccbe4b2e4098b48a272fe2d2d5&fbclid=IwAR0CT9DSagnp9_ZKqcfxpwmBIcs7OmxZwreql3P6DQ80-lO1-VYua2_hnVs';

    async function currency() {
      try {
        const res = await fetch(`${API_URL}&${Date.now()}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        const eurRate = data.rates['EUR'];
        const hufRate = data.rates['HUF'].toFixed(2);
        const usdRate = data.rates['USD'];
        const yenRate = data.rates['JPY'];
        const gbpRate = data.rates['GBP'];

        setCurrencyDetails({
          eur: eurRate,
          huf: hufRate,
          usd: usdRate,
          yen: yenRate,
          gbp: gbpRate
         
        });
       
      } catch (error) {
        console.error('Error fetching currency rates:', error.message);
      }
    };

    currency();
  }, []);

  return (
    <div>
       
        <div className='Locations'>
            <div className='LocationsWrapper'> 
           <div className='Label'><label>ATM kereső</label>  <FontAwesomeIcon icon={faMagnifyingGlassLocation} className='icon'/></div>
                <label>Keresd meg a hozzád legközelebbi ATM-et</label>
                     <input placeholder='Irányítószám' className='LocationsInput'></input>     
                     <button className='Search'>Keresés</button>
            </div>
              <div className='CurrenciesWrapper'>
                        <div className='Label'><label>Valuta követés</label> <FontAwesomeIcon icon={faMoneyBillTrendUp} className='icon'/></div>
                        <div className='Values'>
                            <label>HUF: {currencyDetails.huf}</label><br></br>
                            <label>EUR: {currencyDetails.eur}</label><br></br>
                            <label>USD: {currencyDetails.usd}</label><br></br>
                            <label>YEN: {currencyDetails.yen}</label><br></br>
                            <label>GBP: {currencyDetails.gbp}</label><br></br>
                        </div>
                     
              </div>
        </div>
        <div className='WhyUs' id='Rólunk'>
          <div className='Why'>
             <h2>Miért pont az E-Bank?</h2><br></br>
            <br></br>
            <p> Az E-Bank mindenki számára egyszerűen összehasonlíthatóvá teszi a hiteleket, biztosításokat és befektetési ajánlatokat.</p>
            <br></br>
            <button className='Us'> Tudj meg többet rólunk</button><br></br>
            <FontAwesomeIcon icon={faHandshake} className='HandShake'/>
          </div>
          <div className='First'><h2>Első tájékozódási pont</h2><br></br>
            Már az első lépéstől kezdve irányt mutat neked a jó pénzügyi döntéshez.</div>
             <div className='Second'><h2>Egyszerű</h2><br></br>
            Bonyolult kérdésekre is egyszerű válaszokat adunk neked, percek alatt összevetheted a bankok és biztosítók sokféle ajánlatát.</div>
            <div className='Third'><h2>Megtakarít számodra</h2><br></br>
            Több tízezer forintot is spórolhatsz havonta a kalkulátoraink segítségével.</div>
           <div className='Fourth'><h2>Szakértő</h2><br></br>
            Szakértő munkatársaink több évtizedes pénzügyi tudását állítjuk a szolgálatodba.</div>
             <div className='Fifth'><h2>Segít neked</h2><br></br>
              Kalkulátorainkkal rád szabottan hasonlíthatod össze a hiteleket, biztosításokat, befektetési lehetőségeket.
            </div>
            <div className='Sixth'><h2>Ingyenes</h2><br></br>
            A kalkulátorainkat ingyen használhatod, a segítségért és megtakarításért cserébe az E-Bank nem kér tőled pénzt.</div> 
        </div>
        
        <div className='Connections' id='Kapcsolat'>
          <div className='ConnectionsWrapper'>
            <h2 >Kapcsolat:</h2> <br></br>
            <p> Vegye fel velünk a kapcsolatot, ha kérdése vagy panasza van!</p> <br></br>
            <br></br> <b>Telefonon:</b>  <i>Telefonos Ügyfélszolgálatunkkal</i>  <br></br>  <b>Elektronikusan:</b> <i>E-mailben történő panasz és észrevétel bejelentéssel</i>
            <br></br><br></br> <br></br> <br></br> E-mail: info@E-bank.com <br></br> <br></br> 
          Ügyfélszolgálat: +36 33 450 337
          </div>
        </div>
      


   
    </div>
  );  
}


export default Content;
