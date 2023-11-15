import {React, useState, useEffect } from 'react';
import './UserAccount.css';
import Records from '../records.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVault, faHelmetSafety, faComment,
    faCreditCard, faRightFromBracket, faLandmark, faChartLine, 
    faRightLeft, 
    faSatelliteDish, faWallet, faPiggyBank, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card.js';
import axios from 'axios';






const {title, amount} = Records; //json fájllal kommunikálás




function UserAccount()
{


    
    // useEffect(() => {
    //     // Replace 'YOUR_API_KEY' with your actual API key
    //     const apiKey = 'cur_live_N7sgjwUVC2B57M0a1uaX2UePOXORwtYZHp0xLn9y';
    //     const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`;
    
    //     // Make a GET request to the API
    //     fetch(apiUrl)
    //     .then((response) => {
    //         if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then((currency)  => {
    //         var amountDiv = document.getElementById('amount');
    //         var amountInHUF = parseFloat(amountDiv.textContent);
    //         //console.log(amountInHUF)
            

    //          var USD = Math.round(amountInHUF * currency.data["USD"].value);
    //         var EUR = Math.round(amountInHUF * currency.data["EUR"].value);
    //         console.log(currency.data)
    //         document.getElementById('EUR').innerHTML = EUR.toFixed(2); 
    //        document.getElementById('USD').innerHTML = USD.toFixed(2); ;

    //     })
    //     .catch((error) => {
    //         console.error('Error fetching data:', error);
    //     });
    // }, []);
    
    
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
                                    <div className='amount' id='amount'>4000</div> 
                        </div>  
                        <div className='main'>
                            <h1> Currency Converter</h1>
                                <div className='ApiWrapper' id='ApiWrapper'>
                                    <div className='control'>
                                        <button id='base'>USD</button>
                                        <input type='number' id='base-input' min='0'></input>
                                    </div>
                                    <div className='control'>
                                        <button id='target'>EUR</button>
                                        <input type='number' id='target-input' readOnly></input>
                                    </div>
                                        <button className='swap-btn'><FontAwesomeIcon icon={faRightLeft} /></button>
                                </div>
                                <div className='exchange-rate'>
                                    <h5>Exchange Rate</h5>
                                    <span id='exchange-rate'></span>
                                </div>
                                <div className='drawer' id='drawer'>
                                    <div className='title'>

                                    </div>
                                </div>
                        </div>
                    </div>
                 </div>
              </div>
        
    );
}

export default UserAccount;