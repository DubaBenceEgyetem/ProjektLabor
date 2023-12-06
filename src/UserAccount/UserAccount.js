import React, { useState, useEffect, useContext} from 'react';
import './UserAccount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVault, faHelmetSafety, faComment,
    faCreditCard, faRightFromBracket, faLandmark, faChartLine, 
    faRightLeft, 
    faSatelliteDish, faWallet, faPiggyBank, faScaleBalanced,faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CurrencyConverter from '../Currency_Converter/CurrencyConverter.js';
import { useUserContext } from '../Context/UserContext';




function UserAccount  ()
{

    return(
     
       
    
              <div className='UserAccountBody'>
              
                <h4 id='Name'>Üdvözöljük, <label id='AccountUserName'>Hello,👋</label></h4>   
                 <div className='UserAccountNavbar'>
                <nav> 
                    <ul>
                        <li><a><FontAwesomeIcon icon={faEnvelope} className='icon'/><span className='navitem'>Utalás</span></a></li>
                        <li><a><FontAwesomeIcon icon={faWallet} className='icon'/><span className='navitem'>Megtakaritások</span></a></li>
                        <li><a><FontAwesomeIcon icon={faScaleBalanced} className='icon'/><span className='navitem'>Hitelek</span></a></li>
                        <li><a><FontAwesomeIcon icon={faPiggyBank} className='icon'/><span className='navitem'>Számlabefizetés</span></a></li>
                        <li><a><FontAwesomeIcon icon={faLandmark} className='icon'/><span className='navitem'>Számlatörténet</span></a></li>
                        <li><a><FontAwesomeIcon icon={faVault} className='icon'/><span className='navitem'>Zseb</span></a></li>
                        <li><a href="#Kártyáim"><FontAwesomeIcon icon={faCreditCard} className='icon'/><span className='navitem'>Kártáim</span></a></li><br></br><br></br>
                        <li><a><FontAwesomeIcon icon={faRightFromBracket}  className='logout' id='logout'/><span className='navitem'>Kilépés</span></a></li>
                    </ul>
                </nav> 
            
                    <div className='container'>
                        <div className='Messages'>
                            <p>Üzenetek <FontAwesomeIcon className='messageicon' icon={faComment}/></p>
                        </div>
                        <div className='Balance'>
                                <p>Az egyenleged  <FontAwesomeIcon icon={faWallet} className='walleticon'/></p>
                                    <div className='amount' id='amount'>4000</div> 
                        </div>
                    </div>
                 </div>

                 <CurrencyConverter/>
              </div>
    )
    
    
  
}

export default UserAccount;