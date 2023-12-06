import './Content.css';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassLocation} from '@fortawesome/free-solid-svg-icons';



function Content() {
  return (
    <div>
   

       <div>
        <div className='Connections' id='Kapcsolat'>
          <div className='ConnectionsWrapper'>
            <h2 >Kapcsolat:</h2> <br></br>
            <p> Vegye fel velünk a kapcsolatot, ha kérdése vagy panasza van!</p> <br></br>
            <br></br> <b>Telefonon:</b>  <i>Telefonos Ügyfélszolgálatunkkal</i>  <br></br>  <b>Elektronikusan:</b> <i>E-mailben történő panasz és észrevétel bejelentéssel</i>
            <br></br><br></br> <br></br> <br></br> <br></br> <br></br> E-mail: info@bank.com <br></br> <br></br> 
          Ügyfélszolgálat: +36 33 450 337
          </div>
        </div>
      </div>
        <div className='Locations'>
            <div className='LocationsWrapper'> 
           <div className='Label'><label>ATM kereső</label>  <FontAwesomeIcon icon={faMagnifyingGlassLocation} className='icon'/></div>
                     <input placeholder='Irányítószám' className='LocationsInput'></input>     
            </div>
              <div className='CurrenciesWrapper'>
                        <div className='Label'><label>Valuta követés</label></div>
              </div>
        </div>
      


   
    </div>
  );  
}


export default Content;
