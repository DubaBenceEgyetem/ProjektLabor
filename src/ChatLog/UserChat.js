import { Channel, ChannelHeader, ChannelList, Chat, LoadingIndicator, MessageInput, MessageList, Window, ChannelListMessenger, useChatContext  } from "stream-chat-react";
import { useUserContext } from "../Context/UserContext";
import "stream-chat-react/dist/css/index.css"



export function UserChat () {
  const {user, streamChat} = useUserContext()

  if (streamChat == null) return <LoadingIndicator/>

  return(
   
  <Chat client = {streamChat}>
      <ChannelList List={Channels} sendChannelsToList 
      //filters={{members: {$in: [user.id]}}}
      />
      <Channel>
        <Window>
        <ChannelHeader/>
        <MessageList/>
        <MessageInput/>
        </Window>
      </Channel>
  </Chat>
  )
}

function Channels({loadedChannels} = ChannelListMessenger) {
  const {setActiveChannel, channel: activeChannel} = useChatContext()
  
  return (
    <div className="w-60 flex flex-col gap-4 m-3 h-full">
     

    </div>
  )
}