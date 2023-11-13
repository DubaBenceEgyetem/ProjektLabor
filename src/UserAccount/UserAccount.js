import {React, useState} from 'react';
import './UserAccount.css';
import Records from '../records.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVault, faHelmetSafety, faComment,
    faCreditCard, faRightFromBracket, faLandmark, faSatelliteDish, faWallet, faPiggyBank, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card.js';
import axios from 'axios';






const {title, amount} = Records; //json fájllal kommunikálás
fetch("https://api.exchangeratesapi.io/v1/latest?access_key=37d86f964b8d63beef16a2b5461e1dfe").then((result) => 
{
    let myData = result.json();
    return myData;
}).then((currency) =>
    {
        // let amount =  document.querySelector(".amount")
        // let usdPrice =  document.querySelector(".usd span")
        // let euroPrice =  document.querySelector(".euro span")
        // usdPrice.innerHTML = Math.round(amount.innerHTML / currency.rates["USD"])
        // euroPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EUR"])
         console.log(currency.rates);
        // console.log(currency.rates["HUF"]);
        // console.log(currency.rates["USD"]);
        // console.log(currency.rates["EUR"]);
    }
);



function UserAccount()
{
 
    
    
    return(
         
              <div className='UserAccountBody'>
                <h4 id='Name'>Üdvözöljük, <label id='AccountUserName'>Hello, 👋</label></h4>   
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
                            <div className='BalanceWrapper'>
                                    <div className='amount'>4000</div>
                                
                            </div>
                          
                        </div>  
                    </div>
                 </div>
                            <div className='currencys'>
                                    <div className='usd'>A te pénzed dollárba:<span> </span></div><br></br>
                                    <div className='euro'>A te pénzed euroba:<span> </span></div>
                            </div>
              </div>
        
    );
}

export default UserAccount;