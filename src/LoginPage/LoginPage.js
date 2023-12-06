import React, { Fragment, useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
   
    const {userDispatch} = useUserContext();
    const handlePasswordChange = (value) => {
        setPassword(value);
        setPasswordError(""); 
    }

    const handleEmailChange = (value) => {
        setEmail(value);
        setEmailError("Incorrect"); 
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
                if (email.trim() === "" || password.trim() === "") {  //üresek a mezők
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

                    setEmailError(email.trim() === "");
                    setPasswordError(password.trim() === "");

                } else if (result.status === (200 || 304)) { // fixelni kell
                    userDispatch(
                        {
                            type: 'login',
                            payload: 
                            {

                                user : result.data.UserData,
                            }
                        }
                    )
                    
                    console.log(result.data)
                    navigate('/UserAccount')
                } else {
                    toast.error('Hibás email vagy jelszó', {
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
            .catch((error) => {
                console.error(error);
                alert(error.message);
            });
    }

    return (
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
            <div className='LoginPageWrapper' id='LoginForm'>
                <form className='LoginPageInputHolder' onSubmit={onSubmit}>
                    <h1>Belépés a fiókba</h1><br></br>
                    <input
                        value={email}
                        type='email'
                        className={`InputHolder ${!!emailError ? 'error' : ''}`}
                        placeholder='Email cím'
                        id='email'
                        onChange={(e) => handleEmailChange(e.target.value)}
                    ></input><br></br>
                    <input  
                        value={password}
                        type='password'
                        className={`InputHolder ${!!passwordError ? 'error' : ''}`}
                        placeholder='Jelszó'
                        id='password'
                        onChange={(e) => handlePasswordChange(e.target.value)}
                    ></input><br></br>
                    <button type='submit'>Belépés</button><br></br>
                    <a href='/forgot' id='forgot'>Elfelejtetted a jelszavad?</a>
                    <a href='/register' id='register'>Regisztráció</a>
                </form>
            </div>
        </Fragment>
    );
}
export default LoginPage;