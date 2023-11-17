import {React, useState, useEffect } from 'react';
import './UserAccount.css';
import Records from '../records.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVault, faHelmetSafety, faComment,
    faCreditCard, faRightFromBracket, faLandmark, faChartLine, 
    faRightLeft, 
    faSatelliteDish, faWallet, faPiggyBank, faScaleBalanced,faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
                        <div className='ApiWrapper'>
                                <h2>Currency Converter</h2>
                                <form>
                                        <div className='amount'>
                                            <p>Amount</p>
                                            <input type='text' value={1}></input>
                                        </div>
                                        <div className='convert-box'>
                                            <div className='from'>
                                                <p>From</p>
                                                <div className='select-input'>
                                                    <img src='https://flagcdn.com/48x36/us.png'></img>
                                                    <select placeholder='select'></select>
                                                </div>
                                            </div>
                                            <div className='reverse'><FontAwesomeIcon icon={faArrowRightArrowLeft}  /></div>
                                            <div className='to'>
                                                <p>to</p>
                                                <div className='select-input'>
                                                    <img src='https://flagcdn.com/48x36/gb.png'></img>
                                                    <select placeholder='select'></select>
                                                </div>
                                            </div>
                                            <div className='result'>Getting exchange rate...</div>
                                            <button>Get Exchange Rate</button>
                                        </div>
                                </form>
                        </div>
                    </div>
                 </div>
              </div>
        
    );
}

export default UserAccount;