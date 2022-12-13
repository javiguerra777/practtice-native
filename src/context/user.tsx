import { createContext, useMemo, useState } from "react";

interface UserContext {
  username: string;
  changeUsername: (name: string) => void;
}

export const UserCtx = createContext<UserContext | null>({} as UserContext);

function UserCtxProvider({ children }: any) {
  const [username, setUsername] = useState('');
  const changeUsername = (name: string) => {
    setUsername(name);
  }
  const value = useMemo(() => ({
    username, changeUsername
  }), [username])
  return (
    <UserCtx.Provider value={value}>
      {children}
    </UserCtx.Provider>
  )
}

export default UserCtxProvider;