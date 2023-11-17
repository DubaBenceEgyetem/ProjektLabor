import React, { useState } from "react";

import EmailForm from './EmailForm'
import ChatEngine from './ChatEngine'

const SupportWindow = props =>{

    const [user, setUser] = useState(null);
    const [chat, setChat] = useState(null);

    return(
        <div className="transition-5" 
        style={{ position: 'fixed',
        bottom: '116px',
        right: '24px',
        width: '320px',
        height: '430px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: `2px solid #7a39e0`,
        overflow: 'hidden',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        opacity: props.visible ? '1' : '0'}}>
        
            <EmailForm 
                setUser = {user => setUser(user)}
                setChat = {chat => setChat(chat)}
                visible = {user === null || chat === null}
            />

            <ChatEngine
                visible = {user !== null && chat !== null}
                chat = {chat}
                user = {user}
            />

        </div>
    )
}
export default SupportWindow