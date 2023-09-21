import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import chatStyle from "./Chat.module.scss";
import ChatMessage from "./ChatMessage";
import { getDatabase, push, ref } from "firebase/database";
import { FirebaseError } from "firebase/app";

function Chat() {
  const [message, setMessage] = useState("");

  const sendChat = async () => {
    if (!message) return;
    console.log("message", message);
    try {
      const db = getDatabase();
      const dbRef = ref(db, "chat");
      // await push(dbRef, {
      //   message
      // })
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
        />
        <Button onClick={sendChat}>送信</Button>
      </div>
    </div>
  );
}

export default Chat;
