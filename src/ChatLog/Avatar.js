import React, {useState} from 'react';
import Image from './ECorp.png'
import './Style.css'




import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { all } from 'axios';

const Avatar = props => {
 
    const [hovered, setHovered] = useState(false)
    return (
        <div className='transition-3' 
        style = {{ position: 'fixed', bottom: '24px', right: '24px'}}>
            <div 
            style={{ position: 'absolute', left: 'calc(-100% - 44px - 28px)', 
                        top: 'calc(50% - 24px)', zIndex: '10000',
                        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
                        padding: '12px 12px 12px 16px',
                        borderRadius: '24px', 
                        backgroundColor: '#f9f0ff',
                        color: 'black', opacity: hovered ? '1': '0',
                         }}
            >Szia! Tudok segíteni?</div>

             <div>   
           <img src={Image} onClick={() => props.onClick && props.onClick()} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}   style={{ position: 'center',height:84, width:84, cursor:'pointer', backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', backgroundSize: '84px',  borderRadius: '50%', boxShadow:'0, 0, 16, 6 rgba(0, 0, 0 , 0.33)' }}></img>
           </div>
        </div>  
    )
   
} 
export default Avatar