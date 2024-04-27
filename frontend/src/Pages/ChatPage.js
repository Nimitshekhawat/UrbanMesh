import React, { useEffect, useState } from "react";
import axios from "axios";
//for fretching the api from backend to front end we use axios

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");

    setChats(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChats();
    console.log("mil gya");
  }, []);

  return (
    <div>
      {
        /* {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))} */
        chats.map((chat) => (
          <div key={chat._id}>
            {chat.chatName}
          </div>
        ))
      }
    </div>
  );
};

export default Chatpage;
