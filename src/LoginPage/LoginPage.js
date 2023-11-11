import React, { Fragment, useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginPage()
{
    const navigate = useNavigate();
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
  

    const onSubmit = (e) =>
    {
        e.preventDefault() 
        const data = {
            Email : email,
            Jelszo : password,
                                //ÁDÁM ELNEVEZÉSEI KELLENEK
        }
        const url = 'https://localhost:44310/api/Test/Login';
        axios.post(url,data).then((result) =>{
          
                  
                if(email.trim()  === "" || password.trim() === "")
                alert("Fill the empty spaces")
            else if(result.data == 'User is valid')
                {
                    navigate('/UserAccount')
                }
            else
                alert(result.data)
            
        }

        )
        .catch((error)=>
            {
            
                console.error(error); // Loggoljuk a hibát a konzolra
                alert(error.message);
            }
        );
    }
 

    return(
        <Fragment>           
            <div className='LoginPageWrapper' id='LoginForm'>
                <form className='LoginPageInputHolder' onSubmit={onSubmit}>
                    <h1>Belépés</h1><br></br>
                    <input type='email' className='InputHolder' placeholder='Email cím' id='email' onChange={(e) => handleEmailChange(e.target.value)}></input><br></br>
                    <input type='password' className='InputHolder' placeholder='Jelszó' id='password' onChange={(e) => handlePasswordChange(e.target.value)}></input><br></br>
                <button type='submit'>Belépés</button><br></br>
                <a href='/forgot' id='forgot'>Elfelejtetted a jelszavad?</a><br></br>
                <a href='/register' id='register'>Regisztráció</a>     
                </form>
            </div>
        </Fragment>
    );

}
export default LoginPage;