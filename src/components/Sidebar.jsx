import { Close } from "@mui/icons-material"
import React from "react"
import { links, social } from "./data"
import { useGlobalContext } from "./Context"

export const Sidebar = () => {
  const { sidebar, closeSidebar } = useGlobalContext()
  return (
    <>
      <main className={`${sidebar ? "sidebar" : "overlaySidebar"}`}>
        <div className='header'>
          <label htmlFor=''>NAVIGATION</label>
          <button className='btnClose' onClick={closeSidebar}>
            <Close />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url} className='active'>
                {link.icon}
                <span> {link.text}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {social.map((icon) => (
            <li key={icon.id}>
              <a href={icon.url}>
                {icon.icon}
                <span> {icon.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
