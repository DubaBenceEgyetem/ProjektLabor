
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar.js';
import RegisterPage from './RegisterPage/RegisterPage.js';
import LoginPage from './LoginPage/LoginPage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Footer/Footer.js';
import Content from './Content/Content.js';
import UserAccount from './UserAccount/UserAccount.js';
import './App.css';
import Card from './Card/Card.js';


function App() {



  

  return (
    <div className="App">
      <div>
       <BrowserRouter>
         <Routes>
             <Route path='/' element={[<Navbar/>,<Content/>,<LoginPage/>,<Footer/>]} />
             <Route path='/register'  element={[<Navbar/>,<Content/>,<RegisterPage/>, <Footer/>]}/>
             <Route path='/UserAccount' element={<UserAccount/>}/>
             <Route path='/UserAccount/Cards' element={<Card/>}/>
         </Routes>
        </BrowserRouter>
      </div> 
    </div>
  
  );
}

export default App;
