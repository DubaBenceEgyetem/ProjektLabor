import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faSpinner} from '@fortawesome/free-solid-svg-icons';
import Avatar from "./Avatar";
import Image from './ECorp.png'
import axios from "axios";

    

const EmailForm = props => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)


    function getOrCreateUser(callback){
        //require('dotenv').config();
        axios.put(
            "https://api.chatengine.io/users/",
            {
                "username": email,
                "secret": email,
                "email": email,
            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
                
        )
            .then(r => callback(r.data), console.log(process.env.REACT_APP_CE_PRIVATE_KEY))
    }

    function getOrCreateChat(callback){
        axios.put(
            "https://api.chatengine.io/chats/",
            {
                "usernames": ["Admin", email],
                "is_direct_chat": true
            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
            .then(r => callback(r.data))
    }

    function handleSubmit(event){
        event.preventDefault();
        setLoading(true)

        console.log('sending email', email)

        getOrCreateUser(
            user => {
                props.setUser(user)
                getOrCreateChat(
                    chat => props.setChat(chat)
                )
            }
        )
    }

    return (
        <div
        style={{width: '100%',  
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
        height: props.visible ? '100%' : '0%',
        opacity: props.visible ? '1' : '0'}}>

            <div style={{height: '0px'}}>
                <div style={{
                    position: 'relative',
                    top: '-90px',
                    width: '100%',
                    height: '308px',
                    backgroundColor: '#7a39e0',
                    transform: 'skewY(-12deg)',}}/>
            </div>

            <div
                className="transition-5"
                style={{
                    position: 'absolute', 
                    height: '100%', 
                    width: '100%', 
                    textAlign: 'center', 
                    backgroundColor: 'white',
                    zIndex: loading ? '10': '-1',
                    opacity: loading ? '0.33' : '0',

                }}
            />
        <FontAwesomeIcon icon={faSpinner} spinPulse style={{color: "#4b256a", 
        position: 'absolute', 
        top: 'calc(50% - 40px)', 
        left: 'calc(50% - 30px)',  
        fontWeight: '600', fontSize: '50px',
         display: "flex",
        zIndex: loading ? '10': '-1',
        opacity: loading ? '1' : '0', }} />

        <div style={{position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <img  src={Image} alt="Ecorp"
                    style={{
                    position: 'relative', 
                    left: 'calc(25% - 85px)',
                    top: '5%',
                    borderRadius: '50%',
                    height:65,
                    width:65,
                    boxShadow:'0, 0, 16, 6 rgba(0, 0, 0 , 0.33)',
                    cursor: 'pointer'
                }}/>
                
        

        <div style={{
            position: 'relative',
            width: '100%', 
            top: '10%', 
            color: 'white', 
            fontSize: '25px', 
            fontWeight: '600',
        }}>
            Welcome to my support!
        </div>

            <form 
            onSubmit={e => handleSubmit(e)}
            style={{position: 'relative', width: '100%', top: '19.75%'}}
            >

                <input
                    style={{
                        width: '66%',
                        textAlign: 'center',
                        outline: 'none',
                        padding: '12px',
                        borderRadius: '12px',
                        border: '2px solid #7a39e0',
                    }}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />

            </form>
            <div 
            style={{ 
                position: 'absolute', 
                width: '100%', 
                top: '60%', 
                color: '#7a39e0', 
                fontSize: '24px', 
                fontWeight: '600'
            }}>
                A kezdéshez add meg <br/> az email címedet.
            </div>
        </div>
    </div>
    )
}
export default EmailForm