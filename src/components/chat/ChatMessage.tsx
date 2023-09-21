import React from "react";
import { Avatar } from "@mui/material";
import chatMessageStyle from "./ChatMessage.module.scss";

function ChatMessage() {
  return (
    <div className={chatMessageStyle.message}>
      <Avatar />
      <div className={chatMessageStyle.messageInfo}>
        <h4>
          D.suke
          <span className={chatMessageStyle.timeStamp}>2023-09-21</span>
        </h4>
        <p>チャットメッセージです。テストテストテスト</p>
      </div>
    </div>
  );
}

export default ChatMessage;
