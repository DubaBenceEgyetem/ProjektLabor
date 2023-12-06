import React, { useState, useEffect, useContext} from 'react';
import './UserAccount.css';
import Records from '../records.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVault, faHelmetSafety, faComment,
    faCreditCard, faRightFromBracket, faLandmark, faChartLine, 
    faRightLeft, 
    faSatelliteDish, faWallet, faPiggyBank, faScaleBalanced,faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card.js';
import axios from 'axios';
import { ControlOutlined } from '@ant-design/icons';
import { useUserContext } from '../Context/UserContext';




function UserAccount  ()
{
    useEffect(() => {
    const select = document.querySelectorAll('select');
    const input = document.querySelectorAll('input');
    const API_URL = 'http://api.exchangeratesapi.io/latest?access_key=62000324b6ec71a2c8380cc9f598a5a4'
    let html = '';

    async function currency() {
        const res = await fetch(API_URL);
        const data = await res.json();
        const arrKeys = Object.keys(data.rates);
        const rates = data.rates;
        console.log(rates)
        arrKeys.map(item => {
            return html += `<option value=${item}>${item}</option>`;
        });
        for(let i = 0; i<select.length; i++){
            select[i].innerHTML = html;
        };
       
        function convert(i,j){
            input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
        }

        input[0].addEventListener('keyup', () => convert(1,0))

        input[1].addEventListener('keyup', () => convert(0,1))

        select[0].addEventListener('change', () => convert(1,0))

        select[1].addEventListener('change', () => convert(0,1))
    };

    currency();
    }, [])



    return(
     
       
    
              <div className='UserAccountBody'>
              
                <h4 id='Name'>Üdvözöljük, <label id='AccountUserName'>Hello, 👋</label></h4>   
                <h4 id='Name'><label id='AccountUserName'>Hello,👋</label></h4>   
                 <div className='UserAccountNavbar'>
                <nav> 
                    <ul>
                        <li><a><FontAwesomeIcon icon={faEnvelope} className='icon'/><span className='navitem'>Utalás</span></a></li>
                        <li><a><FontAwesomeIcon icon={faWallet} className='icon'/><span className='navitem'>Megtakaritások</span></a></li>
                        <li><a><FontAwesomeIcon icon={faScaleBalanced} className='icon'/><span className='navitem'>Hitelek</span></a></li>
                        <li><a><FontAwesomeIcon icon={faPiggyBank} className='icon'/><span className='navitem'>Számlabefizetés</span></a></li>
                        <li><a><FontAwesomeIcon icon={faLandmark} className='icon'/><span className='navitem'>Számlatörténet</span></a></li>
                        <li><a><FontAwesomeIcon icon={faVault} className='icon'/><span className='navitem'>Zseb</span></a></li>
                        <li><a href="#Kártyáim"><FontAwesomeIcon icon={faCreditCard} className='icon'/><span className='navitem'>Kártyáim</span></a></li><br></br><br></br>
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
                        <form className='ApiWrapper' >
                                <h2>Valuta árfolyam váltó</h2>
                                <div>
                                        
                                        <div className='convert-box'>
                                            <div className='from'>
                                                <p>Erről</p>
                                                <input type='number'/>
                                                <select>
                                                   
                                                </select>
                                            </div>
                                            <div className='reverse'><FontAwesomeIcon icon={faArrowRightArrowLeft}  /></div>
                                            < div className='to'>
                                                <p>Erre</p>
                                                <input type='number'/>
                                                <select>
                                                    
                                                </select>
                                            </div>
                                            
                                            
                                        </div>
                                </div>
                                
                        </form>
                    </div>
                 </div>
              </div>
    )
    
  
}

export default UserAccount;