import { useAuthContext } from "@/feature/auth/provider/AuthProvider";
import Login from "../components/login/Login";
import Chat from "../components/chat/Chat";
import Header from "../components/header/Header";

export default function Home() {
  const { user } = useAuthContext();
  console.log("user", user);
  return (
    <>
      <Header />
      <div className="chatApp">{user ? <Chat /> : <Login />}</div>
    </>
  );
}
