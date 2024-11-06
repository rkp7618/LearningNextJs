'use client'
import React, {createContext } from 'react'
export const MyContext=createContext()
const Context = ({children}) => {
    const userName="Rahul Kumar"
  return (
    <div>
        <MyContext.Provider value={userName}>
            {children}
        </MyContext.Provider>
    </div>
  )
}

export default Context