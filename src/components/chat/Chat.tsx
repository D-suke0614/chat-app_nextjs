import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import chatStyle from "./Chat.module.scss";
import ChatMessage from "./ChatMessage";
import { getDatabase, push, ref, onChildAdded } from "firebase/database";
import { FirebaseError } from "firebase/app";
import { useAuthContext } from "@/feature/auth/provider/AuthProvider";

function Chat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    try {
      const db = getDatabase();
      const dbRef = ref(db, "chat");
      return onChildAdded(dbRef, (snapshot) => {
        const chatData = snapshot.val() ?? {};
        console.log("fetch chatData", chatData);
        setChats(chatData);
      });
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e);
      }
      return;
    }
  }, []);

  const sendMessage = async () => {
    if (!message) return;
    console.log("message", message);
    try {
      const db = getDatabase();
      const dbRef = ref(db, "chat");
      const chatData = {
        message: message,
        timestamp: "2023-09-24 15:00:00",
        userInfo: {
          name: user?.displayName,
          icon: user?.photoURL,
          uid: user?.uid,
        },
      };
      console.log("chatData", chatData);
      await push(dbRef, {
        chatData,
      });
      setMessage("");
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
  };

  return (
    <div className={chatStyle.chat}>
      <div className={chatStyle.chatContainer}>
        {/* chatを表示する */}
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <div
        className={chatStyle.chatInput}
        // sx={{
        //   width: 500,
        //   maxWidth: "100%",
        // }}
      >
        <TextField
          fullWidth
          size="small"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <Button onClick={sendMessage}>送信</Button>
      </div>
    </div>
  );
}

export default Chat;
