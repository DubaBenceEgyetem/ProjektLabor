import React, { useRef } from 'react';
import './Navbar.css';
import Content from '../Content/Content';


const Navbar = () =>
{
    
    

    return(
        <div className='Navbar'>
            <a id='Főoldal'>Főoldal</a> 
            <a id='Contact' href='#Kapcsolat'>Kapcsolat</a>
            <a id='Ügyintézés' href='#Kapcsolat'>Ügyintézés</a>
        </div>
    );
}

export default Navbar;