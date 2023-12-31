import React, { Fragment, useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'


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
                if (email.trim() === "" || password.trim() === "") { 
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

                } else if (result.status == 200) { 
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
                } 
            })
            .catch((error) => {
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
                        className='InputHolder'
                        placeholder='Email cím'
                        id='email'
                        onChange={(e) => handleEmailChange(e.target.value)}
                    ></input><br></br>
                    <input  
                        value={password}
                        type='password'
                        className='InputHolder'
                        placeholder='Jelszó'
                        id='password'
                        onChange={(e) => handlePasswordChange(e.target.value)}
                    ></input><br></br>
                    <button type='submit'>Belépés</button><br></br>
                    <Link to='/forgot' id='forgot'>Elfelejtetted a jelszavad?</Link>
                    <Link to='/register' id='register'>Regisztráció</Link>
                </form>
            </div>
        </Fragment>
    );
}
export default LoginPage;