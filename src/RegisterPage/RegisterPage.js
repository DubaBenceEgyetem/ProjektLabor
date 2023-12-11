import React, { Fragment, useState } from 'react';
import './RegisterPage.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function RegisterPage()
{
    const [name1, setKereszt] = useState('');
    const [name2, setVezet] = useState('');
    const [check, setSzamla] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setTelefon] = useState('');
    const [password, setJelszo] = useState('');


    const handleName1Change = (value) => 
    {
        setKereszt(value);
    }
    
    const handleName2Change = (value) => 
    {
        setVezet(value);
    }

    
    const handlePhoneChange = (value) => 
    {
        setTelefon(value);
    }
    
    const handleEmailChange = (value) => 
    {
        setEmail(value);
    }
    
    const handlePasswordChange = (value) => 
    {
        setJelszo(value);
    }

    const handleCheckChange = (value) => 
    {
        setSzamla(value);
    }

    
    const handleSave = () =>
    {
        const data = {
            Kereszt_nev : name1,
            Vezetek_nev : name2,
            Email : email,
            Jelszo : password,
            PhoneNo : phone,
            szamla : check
            //ÁDÁM ELNEVEZÉSEI KELLENEK
        }
        const url = 'https://localhost:44310/api/Test/Registration';
        const isEmptyField = Object.values(data).some(value => value.trim() === '');
        axios.post(url,data).then((result) =>{
            if (isEmptyField) {  
                toast.error('Töltse ki a hiányzó mezőket', {
                    position: 'bottom-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    newestOnTop: false,
                    closeOnClick: true,
                    rtl: false,
                    pauseOnFocusLoss: true,
                    draggable: true,
                    pauseOnHover: true,
                    theme: 'dark',
                  });
                }
            else
            {
                toast.error('Sikeres regisztráció', {
                    position: 'bottom-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    newestOnTop: false,
                    closeOnClick: true,
                    rtl: false,
                    pauseOnFocusLoss: true,
                    draggable: true,
                    pauseOnHover: true,
                    theme: 'dark',
                  });
            }
        })
        .catch((error)=>
            {
                alert(error)
            }
        );
    }



    return(
        <Fragment>
            <ToastContainer 
             position="bottom-center"
             autoClose={5000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="dark"/>
            <div className='RegisterPageWrapper' id='RegisterForm'>
                <div className='RegisterPageInputHolder'>
                    <h1>Regisztráció</h1><br></br>
                    <input type='text' placeholder='Keresztnév' id='kereszt' onChange={(e) => handleName1Change(e.target.value)}></input>
                    <input type='text' placeholder='Vezetéknév' id='vezet' onChange={(e) => handleName2Change(e.target.value)}></input>
                <input type='email' className='InputHolder' placeholder='Email cím' id='email' onChange={(e) => handleEmailChange(e.target.value)}></input><br></br>
                <input type='text' className='InputHolder' placeholder='Telefonszám' id='phone' onChange={(e) => handlePhoneChange(e.target.value)}></input><br></br>
                <input type='text' className='InputHolder' placeholder='Számlaszám' id='check' onChange={(e) => handleCheckChange(e.target.value)}></input><br></br>
                <input type='password' className='InputHolder' placeholder='Jelszó' id='password' onChange={(e) => handlePasswordChange(e.target.value)}></input><br></br>
                <div id='ErrorLabel' className='ErrorLabel'></div>
                <button type='submit' onClick={() => handleSave()}>Regisztrálás</button><br></br>
                <a href='/'>Belépés</a>         
                </div>
            </div>
        </Fragment>
    );

}

export default RegisterPage;