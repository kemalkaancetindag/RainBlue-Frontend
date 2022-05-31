import React, { createContext, useState } from "react";



export const UserContext = createContext({});
const UserProvider = ({ children }) => {
  const [user, setOuterUser] = useState(null);   
  
   

   

    return (
      <>
        <UserContext.Provider value={{ user, setOuterUser }}>
          {children}
        </UserContext.Provider>
      </>
    );
 };

export default UserProvider;