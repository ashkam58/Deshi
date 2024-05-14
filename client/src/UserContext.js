import {createContext} from "react";

export const userContext = createContext({});

export function UserContextProvider({children}){
    return(
        <div>
            {children}
        </div>
    )

}