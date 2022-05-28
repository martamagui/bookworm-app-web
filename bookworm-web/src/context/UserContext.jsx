import React, { useContext, useState } from 'react'
import { useEffect } from 'react'

export const UserContext = React.createContext({
    userToken: null
})

export function UserContextProvider({ children }) {

    const [userToken, setUserToken] = useState(
        () => {
            try {
                const token = window.localStorage.getItem("bookWormToken")
                return token
            } catch (error) {
                return null
            }
        }
    )

    return (
        <UserContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </UserContext.Provider>
    )
}