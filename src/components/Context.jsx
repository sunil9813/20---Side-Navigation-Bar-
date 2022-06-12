import React, { useContext, useState } from "react"
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)
  const openSidebar = () => {
    setSidebar(true)
  }
  const closeSidebar = () => {
    setSidebar(false)
  }
  return <AppContext.Provider value={{ sidebar, setSidebar, openSidebar, closeSidebar }}>{children}</AppContext.Provider>
}
export { AppContext, AppProvider }

//custome hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

// AppProvider le wrapped garnu parxa <App> ma in index.js ma
