 import React from "react";
import User from "./User";

 const UserContext= React.createContext('Vounne')




 const UserProvider = UserContext.Provider
 const UserConsumer= UserContext.Consumer
 export{ UserProvider, UserConsumer}
 export default UserContext





