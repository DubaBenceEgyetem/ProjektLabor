import React, {useState, useEffect} from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  ChannelList,
  Channel,
  Window,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator,
  ChannelHeader,
  useChatContext,
  useChannelStateContext,
} from "stream-chat-react";

const apiKey = process.env.REACT_APP_STREAM_API_KEY;

const user = {
  id: "igen",
  name: "admin",
  image: "https://getstream.imgix.net/images/random_svg/FS.png",
};

const filters = { type: "messaging", members: { $in: [user.id] } };
const sort = { last_message_at: -1 };

const Users = () => {
  const { client } = useChatContext();
  const { channel } = useChannelStateContext();
  const [channelUsers, setChannelUsers] = useState([]);

  useEffect(() => {
    const updateChannelUsers = (event) => {
      if (!event || channel.state.members[event.user.id] !== undefined) {
        setChannelUsers(
          Object.values(channel.state.members).map((user) => ({
            name: user.user_id,
            online: user.user.online,
          }))
        );
      }
    };

    updateChannelUsers();

    client.on("user.presence.changed", updateChannelUsers)

    return () => {
      client.off("user.presence.changed", updateChannelUsers)
    };
  }, [client, channel])

  return (
    <ul className="users-list">
      {channelUsers.map((member) => (
        <li key={member.name}>
          {member.name} - {member.online ? "online" : "offline"}
        </li>
      ))}
    </ul>
  );
}


export default function UserChat() 
{
  console.log("Before useEffect");
   const [channel, setChannel] = useState(null)
   const [client, setClient] = useState(null)
 
   useEffect(() => {
   
 
    async function init() {
      console.log("After useEffect");
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(user, chatClient.devToken(user.id));

      const channel = chatClient.channel("messaging", "chat", {
        image: "https://www.drupal.org/files/project-images/react.png",
        name: "Segíthetek?",
        members: [user.id],
      });

      await channel.watch()
      setChannel(channel)
      setClient(chatClient)
    }
   
  init()

    if (client) return () => client.disconnectUser()
  }, [client]);

  if (!channel || !client) return <LoadingIndicator />;

  return (
    <Chat client={client} theme="messaging dark">
      <ChannelList 
      filters={filters} 
      sort={sort} />
      <Channel>
        <Window>
          <Users />
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};
