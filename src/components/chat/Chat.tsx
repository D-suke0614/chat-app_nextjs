import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import chatStyle from "./Chat.module.scss";
import ChatMessage from "./ChatMessage";
import { getDatabase, push, ref, onChildAdded } from "firebase/database";
import { FirebaseError } from "firebase/app";
import { useAuthContext } from "@/feature/auth/provider/AuthProvider";

type chatType = {
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

function Chat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<chatType[]>([]);
  const { user } = useAuthContext();

  const sendMessage = async () => {
    if (!message) return;
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

  useEffect(() => {
    try {
      const db = getDatabase();
      const dbRef = ref(db, "chat");
      return onChildAdded(dbRef, (snapshot) => {
        const chatData = snapshot.val() ?? {};
        setChats((preValue) => [...preValue, chatData]);
      });
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e);
      }
      return;
    }
  }, []);

  return (
    <div className={chatStyle.chat}>
      <div className={chatStyle.chatContainer}>
        {/* chatを表示する */}
        {chats.map((chat: chatType, index: number) => (
          <ChatMessage chat={chat} index={index} key={index} />
        ))}
      </div>

      <div className={chatStyle.chatInput}>
        <TextField
          fullWidth
          size="small"
          value={message}
          placeholder="メッセージを入力"
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
