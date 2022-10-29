import React, { useState } from "react"

// create auth context 
 const AuthContext = React.createContext()

// creating context provider
export const AuthProvider = ({ children }) => {
    // creating state variable to store auth code
    const [authCode, setAuthCode] = useState("")

    // returning context provider to wrap other components
    return <AuthContext.Provider value={{ authCode, setAuthCode }}>{children}</AuthContext.Provider>
}
//  exporting auth context to access from other components
export default AuthContext