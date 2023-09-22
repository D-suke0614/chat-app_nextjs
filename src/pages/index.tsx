import { useAuthContext } from "@/feature/auth/provider/AuthProvider";
import Login from "../components/login/Login";
import Chat from "../components/chat/Chat";
import Header from "../components/header/Header";
import utilsStyle from "../styles/utils.module.scss";

export default function Home() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <>
      <Header />
      <div className={utilsStyle.chatApp}>{user ? <Chat /> : <Login />}</div>
    </>
  );
}
