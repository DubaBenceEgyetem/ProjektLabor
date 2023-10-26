import React from 'react';
import './UserAccount.css';
import Records from '../records.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVault, faHelmetSafety, faCreditCard, faRightFromBracket, faLandmark, faSatelliteDish, faWallet, faPiggyBank, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card.js';



const {title, amount} = Records; //json fájllal kommunikálás



function UserAccount()
{
    
    return(
        <div className='UserAccountBody'>
            <div className='UserAccountNavbar'>
                <nav> 
                    <ul>
                        <li><a><FontAwesomeIcon icon={faEnvelope} className='icon'/><span className='navitem'>Utalás</span></a></li>
                        <li><a><FontAwesomeIcon icon={faWallet} className='icon'/><span className='navitem'>Megtakaritások</span></a></li>
                        <li><a><FontAwesomeIcon icon={faScaleBalanced} className='icon'/><span className='navitem'>Hitelek</span></a></li>
                        <li><a><FontAwesomeIcon icon={faPiggyBank} className='icon'/><span className='navitem'>Számlabefizetés</span></a></li>
                        <li><a><FontAwesomeIcon icon={faLandmark} className='icon'/><span className='navitem'>Számlatörténet</span></a></li>
                        <li><a><FontAwesomeIcon icon={faVault} className='icon'/><span className='navitem'>Zseb</span></a></li>
                        <li><a href='/UserAccount/Cards'><FontAwesomeIcon icon={faCreditCard} className='icon'/><span className='navitem'>Kártáim</span></a></li><br></br><br></br>
                        <li><a><FontAwesomeIcon icon={faRightFromBracket}  className='logout' id='logout'/><span className='navitem'>Kilépés</span></a></li>
                   </ul>
                </nav>
              
            </div>
            <div className='Balance'>
               <h4 id='Name'>Üdvözöljük, <label id='AccountUserName'>{Records[1].title} 👋</label></h4>
                  <FontAwesomeIcon icon={faWallet} className='walleticon'/>
                    <p>Az egyenleged:<br></br>
                    <span>{Records[1].amount} Ft</span>
                    </p>
            </div>
               <div className='History'>
                   <h4><label>Számlatörténet</label></h4>
               </div> 
    
        </div>
    
    );
}

export default UserAccount;