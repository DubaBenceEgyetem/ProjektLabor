
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
import ProtectedRoute from './Auth/ProtectedRoute.js'
import { AuthProvider } from './Context/UserContext.js';





function App() {



  return (
    <div className="App">  
<React.StrictMode> 
  <AuthProvider>
          <BrowserRouter>
            <Routes>
                <Route path='' element={[<Navbar/>,<LoginPage/>,<Content/>,<Footer/>]} />
                <Route path='/register'  element={[<Navbar/>,<RegisterPage/>,<Content/>,<Footer/>]}/>
                <Route path='/UserAccount' element={<ProtectedRoute><UserAccount/></ProtectedRoute>}/>
            </Routes>
            </BrowserRouter>
        </AuthProvider> 
  </React.StrictMode>
     

    </div>
  
  );
}

export default App;
