import React from "react";
import {ChatEngineWrapper as CE, ChatFeed, Socket} from 'react-chat-engine'

const ChatEngine = props => {
    return (
        <div
            className="transition-5"
            style={{width: '100%',  
            backgroundColor: '#fff',
            height: props.visible ? '100%' : '0%',
            zIndex: props.visible ? '100' : '0'
            }}
        >
           { 
          props.visible &&
          <CE>
             <Socket 
                projectID = {process.env.REACT_APP_CE_PROJEKT_ID}
                userName = {props.user.email}
                userSecret = {props.user.email}
             />
            <ChatFeed activeChat = {props.chat.id}/>

           </CE>
            }  

        </div>      

    )
}

export default ChatEngine