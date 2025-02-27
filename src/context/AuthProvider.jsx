import React, { createContext } from 'react'
import { useState,useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {

    const [userData, setuserData] = useState("")
    

    useEffect(() => {
        setLocalStorage()
        const {employees}=getLocalStorage()
        
        setuserData(employees)    
      
    },[])
    
  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider