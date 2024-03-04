import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@config/firebase";

interface IUserState {
  email: string;
  uid: string;
  displayName?: string;
  photoURL?: string;
}

interface IAppContext {
  user: IUserState | null;
  setUser: React.Dispatch<React.SetStateAction<IUserState | null>>;
}

const AppContext = createContext<IAppContext | null>(null);

export const useAppContext = () => useContext(AppContext);

interface IAppContextProvider {
  children: JSX.Element | JSX.Element[];
}

export const AppContextProvider: React.FC<IAppContextProvider> = ({
  children,
}) => {
  const [user, setUser] = useState<IUserState | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (response) {
        setUser({
          uid: response.uid!,
          email: response.email!,
          displayName: response.displayName || "",
          photoURL: response.photoURL || "",
        });
      }
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
