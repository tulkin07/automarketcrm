import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const  useAuthContext = ()=>useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [isAuth,setAuth] = useState(true)
 
  return <AuthContext.Provider value={{isAuth,setAuth}}>{children}</AuthContext.Provider>;
};


export default AuthProvider