import React from "react";
import { TextField, Button } from "@mui/material";
import chatStyle from "./Chat.module.scss";
import ChatMessage from "./ChatMessage";

function Chat() {
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
        <TextField fullWidth size="small" />
        <Button>送信</Button>
      </div>
    </div>
  );
}

export default Chat;
