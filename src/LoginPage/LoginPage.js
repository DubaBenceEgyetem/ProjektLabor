import React, { Fragment, useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext';


function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
   
    const {userDispatch} = useUserContext();
    const handlePasswordChange = (value) => {
        setPassword(value);
        setPasswordError(false); 
    }

    const handleEmailChange = (value) => {
        setEmail(value);
        setEmailError(false); 
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            Email: email,
            Jelszo: password,
            
        }
        const url = 'https://localhost:44310/api/Test/Login';
        axios.post(url, data)
            .then((result) => {
                if (email.trim() === "" || password.trim() === "") {
                    document.getElementById("ErrorLabel2").innerHTML = "Töltse ki a hiányzó mezőket*";

                    setEmailError(email.trim() === "");
                    setPasswordError(password.trim() === "");

                } else if (result.status === (200 ||304)) { // fixelni kell
                    userDispatch(
                        {
                            type: 'login',
                            payload: 
                            {
                                user : result.data,
                            }
                        }
                    )
                    console.log(result)
                    navigate('/UserAccount')
                } else {
                    document.getElementById("ErrorLabel2").innerHTML = "Hibás email vagy jelszó*";
                    
                    setEmailError(true);
                    setPasswordError(true);
                }
            })
            .catch((error) => {
                console.error(error);
                alert(error.message);
            });
    }

    return (
        <Fragment>
            <div className='LoginPageWrapper' id='LoginForm'>
                <form className='LoginPageInputHolder' onSubmit={onSubmit}>
                    <h1>Belépés</h1><br></br>
                    <input
                        type='email'
                        className={`InputHolder ${emailError ? 'error' : ''}`}
                        placeholder='Email cím'
                        id='email'
                        onChange={(e) => handleEmailChange(e.target.value)}
                    ></input><br></br>
                    <input
                        type='password'
                        className={`InputHolder ${passwordError ? 'error' : ''}`}
                        placeholder='Jelszó'
                        id='password'
                        onChange={(e) => handlePasswordChange(e.target.value)}
                    ></input><br></br>
                    <span id='ErrorLabel2' className='ErrorLabel2'></span>
                    <button type='submit'>Belépés</button><br></br>
                    <a href='/forgot' id='forgot'>Elfelejtetted a jelszavad?</a><br></br>
                    <a href='/register' id='register'>Regisztráció</a>
                </form>
            </div>
        </Fragment>
    );
}
export default LoginPage;