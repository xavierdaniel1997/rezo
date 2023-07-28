import {createContext} from "react";

const UserContext = createContext({
  user: {
    name: "Jeo",
    email: "darvin@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
