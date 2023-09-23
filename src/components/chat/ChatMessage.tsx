import React from "react";
import { Avatar } from "@mui/material";
import chatMessageStyle from "./ChatMessage.module.scss";
import Image from "next/image";
import { useAuthContext } from "@/feature/auth/provider/AuthProvider";

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
  const { user } = useAuthContext();
  console.log("chat", chat);
  console.log("user", user);
  return (
    <>
      {user?.uid === userInfo?.uid ? (
        <div className={chatMessageStyle.message}>
          <div className={chatMessageStyle.messageInfoRight}>
            <h4>
              {userInfo?.name}
              <span className={chatMessageStyle.timeStamp}>{timestamp}</span>
            </h4>
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <div className={chatMessageStyle.message}>
          <Image
            className={chatMessageStyle.userIcon}
            src={userInfo?.icon}
            alt=""
            width={60}
            height={60}
          />
          <div className={chatMessageStyle.messageInfo}>
            <h4>
              {userInfo?.name}
              <span className={chatMessageStyle.timeStamp}>{timestamp}</span>
            </h4>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatMessage;
