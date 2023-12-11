import React, { useRef } from 'react';
import './Navbar.css';
import Content from '../Content/Content';
import {Link} from 'react-router-dom'


const Navbar = () =>
{
    
    

    return(
        <div className='Navbar'>
            <Link key={'Rólunk'} id='Us' to='#Rólunk'>Rólunk</Link>
            <Link key={'Kapcsolat'} id='Contact' to='#Kapcsolat'>Kapcsolat</Link>
            <Link  key={'Ügyintézés'} id='Ügyintézés' to='#Ügyintézés'>Ügyintézés</Link>
            <Link  key={'Hitelek'} id='Hitelek' to='#Hitelek'>Hitelek</Link>
        </div>
    );
}

export default Navbar;