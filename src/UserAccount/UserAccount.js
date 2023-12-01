import React, { useState, useEffect, useContext} from 'react';
import './UserAccount.css';
import Records from '../records.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faVault, faHelmetSafety, faComment,
    faCreditCard, faRightFromBracket, faLandmark, faChartLine, 
    faRightLeft, 
    faSatelliteDish, faWallet, faPiggyBank, faScaleBalanced,faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {Country_List} from './countries.js';
import UserChat from "../ChatLog/UserChat.js"
import { useUserContext } from '../Context/UserContext';
import CurrencyRow from './CurrencyRow.js'


const onSubmit = (e) => 
{
    e.preventDefault();
    console.log("Működik");
    
} 
const BASE_URL = 'http://api.exchangeratesapi.io/latest?access_key=62000324b6ec71a2c8380cc9f598a5a4'


function UserAccount  ()
{

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState() 
    const [toCurrency, setToCurrency] = useState() 
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
    
   
    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } 
    else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

// const {user} = useUserContext();
    
     useEffect(() => {
    //     // Replace 'YOUR_API_KEY' with your actual API key
        // const apiKey = 'cur_live_N7sgjwUVC2B57M0a1uaX2UePOXORwtYZHp0xLn9y';
        // const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}`;
   
    //     // Make a GET request to the API
         
        
         fetch(BASE_URL)
         .then(res => res.json())
         .then(data  => {
            const firstCurrency = Object.keys(data.rates)[0];
           setCurrencyOptions([data.base, ...Object.keys(data.rates)])
           setFromCurrency(data.base)
           setToCurrency(firstCurrency)
           setExchangeRate(data.rates[firstCurrency])
   
         })
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
          fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[toCurrency]))
        }
      }, [fromCurrency, toCurrency])
    
    function handleFromAmountChange(e){
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e){
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }
    


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
                        <form className='ApiWrapper' onSubmit={onSubmit} >
                                <h2>Valuta árfolyam váltó</h2>
                                <div>
                                        <div className='amount'>
                                            <p>Összeg</p>
                                            <input type='text'></input>
                                        </div>
                                        <div className='convert-box'>
                                            <div className='from'>
                                                <p>Erről</p>
                                                <CurrencyRow
                                                currencyOptions={currencyOptions}
                                                selectedCurrency={fromCurrency}
                                                onChangeCurrency={e => setFromCurrency(e.target.value)}
                                                onChangeAmount={handleFromAmountChange}
                                                amount={fromAmount}
                                                />
                                            </div>
                                            <div className='reverse'><FontAwesomeIcon icon={faArrowRightArrowLeft}  /></div>
                                            <  div className='to'>
                                                <p>Erre</p>
                                                    <CurrencyRow
                                                    currencyOptions={currencyOptions}
                                                    selectedCurrency={toCurrency}
                                                    onChangeCurrency={e => setToCurrency(e.target.value)}
                                                    onChangeAmount={handleToAmountChange}
                                                    amount={toAmount}
                                                    />
                                            </div>
                                            <div className='result'>Váltás...</div>
                                            <button>Váltás</button>
                                        </div>
                                </div>
                                
                        </form>
                    </div>
                 </div>
              </div>
    )
    
    
  
}

export default UserAccount;