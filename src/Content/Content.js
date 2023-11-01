import './Content.css';
import Navbar from '../Navbar/Navbar';



function Content() {
  return (
    <div>
      <div className="Welcome">
        <div className='WelcomeWrapper'>
      <label>Kedves Ügyfelünk!</label><br></br><br></br>
        Örömmel üdvözöljük Önt a bankunk weboldalán! Nagy
        megtiszteltetés számunkra, hogy bizalmába részesülhetünk, és lehetőséget
        kapunk arra, hogy segítsünk pénzügyi célok elérésében. Az Ön elégedettsége
        és kényelme mindig is a legfontosabb számunkra. Köszönjük, hogy bankunkat választotta, és reméljük,
        hogy hosszú távú partnerünk lehetünk pénzügyi utazásában. Várjuk
        visszaüzenetét, és minden jót kívánunk Önnek a banki weboldalunk
        használata során! <br></br><br></br>Üdvözlettel,<br></br><br></br>
        <h4>E-bank</h4>
          </div>
      </div>

    <div>
      <div className='Kapcsolat' id='Kapcsolat'>
        <div className='KapcsolatWrapper'>
          <h2 >Kapcsolat:</h2> <br></br>
          <strong> Vegye fel velünk a kapcsolatot, ha kérdése vagy panasza van!</strong> <br></br>
          <br></br> <b>Telefonon:</b>  <i>Telefonos Ügyfélszolgálatunkkal</i>  <br></br>  <b>Elektronikusan:</b> <i>E-mailben történő panasz és észrevétel bejelentéssel</i>
          <br></br><br></br> <br></br> <br></br> <br></br> <br></br> E-mail: info@bank.com <br></br> <br></br> 
         Ügyfélszolgálat: +36 33 450 337
        </div>
      </div>
    </div>

    </div>
  );  
}


export default Content;
