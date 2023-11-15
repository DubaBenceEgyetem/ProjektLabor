import React, { useRef } from 'react';
import './Navbar.css';
import Content from '../Content/Content';


const Navbar = () =>
{
    
    

    return(
        <div className='Navbar'>
            <a key={'Főoldal'} id='Főoldal'>Főoldal</a> 
            <a key={'Kapcsolat'} id='Contact' href='#Kapcsolat'>Kapcsolat</a>
            <a  key={'Ügyintézés'} id='Ügyintézés' href='#Ügyintézés'>Ügyintézés</a>
        </div>
    );
}

export default Navbar;