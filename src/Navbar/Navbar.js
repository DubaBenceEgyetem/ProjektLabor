import React, { useRef } from 'react';
import './Navbar.css';
import Content from '../Content/Content';


const Navbar = () =>
{
    
    

    return(
        <div className='Navbar'>
              <a key={'Rólunk'} id='Us' href='#Rólunk'>Rólunk</a>
            <a key={'Kapcsolat'} id='Contact' href='#Kapcsolat'>Kapcsolat</a>
            <a  key={'Ügyintézés'} id='Ügyintézés' href='#Ügyintézés'>Ügyintézés</a>
            <a  key={'Hitelek'} id='Hitelek' href='#Hitelek'>Hitelek</a>
        </div>
    );
}

export default Navbar;