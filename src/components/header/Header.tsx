import React from "react";
import headerStyle from "./Header.module.scss";
import { Button } from "@mui/material";
import { FirebaseError } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { useAuthContext } from "@/feature/auth/provider/AuthProvider";

function Header() {
  const { user } = useAuthContext();
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
        <div className={headerStyle.signOut}>
          <Button onClick={handleSignOut}>ログアウト</Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
