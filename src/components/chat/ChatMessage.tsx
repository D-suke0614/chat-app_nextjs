import React, { useState } from "react";
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
  index: number | undefined;
}

function ChatMessage({ chat, index }: Props) {
  const { message, timestamp, userInfo } = chat.chatData;
  const { user } = useAuthContext();

  return (
    <>
      {user?.uid === userInfo?.uid ? (
        <div className={`${chatMessageStyle.message} message-${index}`}>
          <div className={chatMessageStyle.messageInfoRight}>
            <h4>
              {userInfo?.name}
              <span className={chatMessageStyle.timeStamp}>{timestamp}</span>
            </h4>
            <p className={chatMessageStyle.rightMessage}>{message}</p>
          </div>
        </div>
      ) : (
        <div className={`${chatMessageStyle.message} message-${index}`}>
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
            <p className={chatMessageStyle.leftMessage}>{message}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatMessage;
