import React, { Fragment, useState } from 'react';
import './LoginPage.css';
import axios from 'axios';


function LoginPage()
{
    const [email, setEmail] = useState('');
    const [password, setJelszo] = useState('');

    const handlePasswordChange = (value) => 
    {
        setJelszo(value);
    }
    
    const handleEmailChange = (value) => 
    {
        setEmail(value);
    }

    const  handleLogin = () =>
    {
        const data = {
            Email : email,
            Jelszo : password
                                //ÁDÁM ELNEVEZÉSEI KELLENEK
        }
        const url = 'https://localhost:44310/api/Test/Login';
        axios.post(url,data).then((result) =>{
            alert(result.data);
        })
        .catch((error)=>
            {
                alert(error)
            }
        );
    }


    return(
        <Fragment>           
            <div className='LoginPageWrapper' id='LoginForm'>
                <form className='LoginPageInputHolder'>
                    <h1>Belépés</h1><br></br>
                    <input type='email' className='InputHolder' placeholder='Email cím' id='email' onChange={(e) => handleEmailChange(e.target.value)}></input><br></br>
                    <input type='password' className='InputHolder' placeholder='Jelszó' id='password' onChange={(e) => handlePasswordChange(e.target.value)}></input><br></br>
                <button type='submit' onClick={() => handleLogin()}>Belépés</button><br></br>
                <a href='/forgot' id='forgot'>Elfelejtetted a jelszavad?</a><br></br>
                <a href='/register' id='register'>Regisztráció</a>     
                </form>
            </div>
        </Fragment>
    );

}
export default LoginPage;