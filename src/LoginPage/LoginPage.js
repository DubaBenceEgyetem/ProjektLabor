import React, { Fragment } from 'react';
import './LoginPage.css';

function LoginPage()
{
    return(
        <Fragment>           
            <div className='LoginPageWrapper' id='LoginForm'>
                <form className='LoginPageInputHolder'>
                    <h1>Belépés</h1><br></br>
                    <input type='email' className='InputHolder' placeholder='Email cím' id='email'></input><br></br>
                    <input type='password' className='InputHolder' placeholder='Jelszó' id='password'></input><br></br>
                <button type='submit'>Belépés</button><br></br>
                <a href='/forgot' id='forgot'>Elfelejtetted a jelszavad?</a><br></br>
                <a href='/register' id='register'>Regisztráció</a>     
                </form>
            </div>
        </Fragment>
    );

}
export default LoginPage;