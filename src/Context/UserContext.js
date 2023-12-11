import React, { createContext, Dispatch, useContext, useReducer } from "react";

const userReducer = (state, action) => {
  let {user}   = action.payload;

  switch (action.type) {
    case "login":
      return user;
    case "logout":
      return null;
      default:
        return state;
  }
};


const UserContext = createContext({})

export function useUserContext()
{
    return useContext(UserContext);
}
export const AuthProvider = ({children}) =>
    {
            const [user, userDispatch] = useReducer(userReducer, null);
                return(
                    <UserContext.Provider           
                    value= {{
                        user, 
                        userDispatch
                    }}
                    >
                        {children}
                    </UserContext.Provider>
                )

    }
    
