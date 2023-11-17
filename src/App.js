
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
import { AuthProvider } from './Context/UserContext.js';



function App() {



  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Routes>
              <Route path='' element={[<Navbar/>,<Content/>,<LoginPage/>,<Footer/>]} />
              <Route path='/register'  element={[<Navbar/>,<Content/>,<RegisterPage/>, <Footer/>]}/>
              <Route path='/UserAccount' element={[<UserAccount/>, <SupportAdmin/>]}/>
          </Routes>
          </BrowserRouter>
      </AuthProvider> 

    </div>
  
  );
}

export default App;
