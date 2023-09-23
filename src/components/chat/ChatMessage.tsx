import React from "react";
import { Avatar } from "@mui/material";
import chatMessageStyle from "./ChatMessage.module.scss";
import Image from "next/image";

interface Props {
  chat: {
    chatData: {
      message: string;
      timestamp: string;
      userInfo: {
        name: string;
        icon: string;
        uid: string;
      };
    };
  };
}

function ChatMessage({ chat }: Props) {
  const { message, timestamp, userInfo } = chat.chatData;
  console.log("chat", chat);
  return (
    <div className={chatMessageStyle.message}>
      <Avatar />
      <div className={chatMessageStyle.messageInfo}>
        <h4>
          {userInfo?.name}
          <span className={chatMessageStyle.timeStamp}>{timestamp}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
