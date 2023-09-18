import { Button } from "@mui/material";
import { UserCredential, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../lib/firebase/firebase";
import loginStyles from "./Login.module.scss";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const signIn = async () => {
    await signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        if (result?.user) {
          setMessage(`success`);
        }
      })
      .catch((err: any) => {
        setMessage(`failure`);
      });
    handleOpen();
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <>
      <div className={loginStyles.login}>
        <Button onClick={signIn}>ログイン</Button>
      </div>
      <div>
        <Snackbar
          open={isOpen}
          onClose={handleClose}
          action={action}
          message={message}
          autoHideDuration={5000}
        />
      </div>
    </>
  );
}
