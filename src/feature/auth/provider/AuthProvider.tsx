import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { User } from "@firebase/auth";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

type StateType = {
  isAuthorized: boolean;
};

/**
 * undefined: 初期値
 * null: not login状態
 * User: login状態
 */
export type GlobalAuthState = {
  user: User | null | undefined;
};

const initialState: GlobalAuthState = {
  user: undefined,
};

const AuthContext = createContext<GlobalAuthState>(initialState);

type props = { children: ReactNode };

export const AuthProvider = ({ children }: props) => {
  const [user, setUser] = useState<GlobalAuthState>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);
      const auth = getAuth();
      return onAuthStateChanged(auth, (user) => {
        setUser({
          user,
        });
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(user));
        }
        setLoading(false);
      });
    } catch {
      setUser(initialState);
    }
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
