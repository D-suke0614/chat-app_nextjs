import { useAuthContext } from "@/feature/auth/provider/AuthProvider";
import Login from "./components/login/Login";

export default function Home() {
  const { user } = useAuthContext();
  console.log("user", user);
  return (
    <div className="chatApp">
      {user ? <h1>{`Welcome ${user.displayName}`}</h1> : <Login />}
    </div>
  );
}
