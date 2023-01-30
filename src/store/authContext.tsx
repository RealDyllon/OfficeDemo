import React, { Dispatch, SetStateAction, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const authContextInitialValue = {
  isLoggedIn: false,
  setIsLoggedIn: () => null
}

export const AuthContext = React.createContext<AuthContextType>(authContextInitialValue)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (<AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    {children}
      </AuthContext.Provider>)
}

