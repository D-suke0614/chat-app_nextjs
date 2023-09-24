import React from "react";
import headerStyle from "./Header.module.scss";
import { Button } from "@mui/material";
import { FirebaseError } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useAuthContext } from "@/feature/auth/provider/AuthProvider";
import Image from "next/image";

function Header() {
  const { user } = useAuthContext();
  const photoURL: string = user?.photoURL ? user.photoURL : "";
  const userName: string = user?.displayName ? user?.displayName : "";
  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (err) {
      if (err instanceof FirebaseError) {
        console.log(err);
      }
    }
  };

  return (
    // [TODO] 仮置きしているスタイルの修正
    <div className={headerStyle.header}>
      {user ? (
        <>
          <div className={headerStyle.headerInfo} onClick={handleSignOut}>
            <Image
              className={headerStyle.userIcon}
              src={photoURL}
              alt=""
              width={40}
              height={40}
            />
            <h4 className={headerStyle.userName}>{userName}</h4>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
