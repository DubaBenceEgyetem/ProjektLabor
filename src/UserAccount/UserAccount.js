import React from 'react';
import './UserAccount.css';
import Records from '../records.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVault, faHelmetSafety, faComment,
    faCreditCard, faRightFromBracket, faLandmark, faSatelliteDish, faWallet, faPiggyBank, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card.js';





const {title, amount} = Records; //json fájllal kommunikálás



function UserAccount()
{
    
    return(
        <div className='UserAccountBody'>
               <h4 id='Name'>Üdvözöljük, <label id='AccountUserName'> 👋</label></h4>   
            <div className='UserAccountNavbar'>
            <nav> 
                   <ul>
                       <li><a href="#Kártyáim"><FontAwesomeIcon icon={faEnvelope} className='icon'/><span className='navitem'>Utalás</span></a></li>
                       <li><a><FontAwesomeIcon icon={faWallet} className='icon'/><span className='navitem'>Megtakaritások</span></a></li>
                       <li><a><FontAwesomeIcon icon={faScaleBalanced} className='icon'/><span className='navitem'>Hitelek</span></a></li>
                       <li><a><FontAwesomeIcon icon={faPiggyBank} className='icon'/><span className='navitem'>Számlabefizetés</span></a></li>
                       <li><a><FontAwesomeIcon icon={faLandmark} className='icon'/><span className='navitem'>Számlatörténet</span></a></li>
                       <li><a><FontAwesomeIcon icon={faVault} className='icon'/><span className='navitem'>Zseb</span></a></li>
                       <li><a><FontAwesomeIcon icon={faCreditCard} className='icon'/><span className='navitem'>Kártáim</span></a></li><br></br><br></br>
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
                                <span>{Records[1].amount} Ft</span>
                        </div>
                    </div>
                </div>
            </div>

        <div className='Cards'>
            <h4  id="Kártyáim">Kártyáim</h4>
            <div className="multiple_use">
                        <div className="card">
                            <div className="card-inner">
                                <div className="front">
                                    <div className="cardnumbers">
                                        <p>8041</p>
                                        <p>1235</p>
                                        <p>3546</p>
                                        <p>2345</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                    <div className="single_use">
                    <div className="card">
                        <div className="card-inner2">
                            <div className="front2">
                                <div className="cardnumbers">
                                    <p>8041</p>
                                    <p>1235</p>
                                    <p>3546</p>
                                    <p>2345</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>

         {/* <div className='Balance'>
                {/* 
            </div>
    
               <div className='History'>
                   <h4><label>Számlatörténet</label></h4>
               </div>         
         */}
    
    </div>
    );
}

export default UserAccount;