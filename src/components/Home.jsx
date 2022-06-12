import React, { useContext } from "react"
import { Menu } from "@mui/icons-material"
import { AppContext, useGlobalContext } from "./Context"

export const Home = () => {
  // 1st method:
  //const data = useContext(AppContext)

  // 2nd method:
  //const data = useGlobalContext()
  const { openSidebar, closeSidebar } = useGlobalContext()
  //console.log(data)

  return (
    <>
      <section>
        <button className='btn' onClick={openSidebar}>
          <Menu className='icon' />
        </button>
      </section>
    </>
  )
}
