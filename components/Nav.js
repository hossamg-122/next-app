import navStyles from "../styles/Nav.module.css"
import React from 'react'
import Link from "next/link"

const Nav = () => {
  return (
   <nav className={navStyles.nav} >
       <ul>
           <li> <Link href="/" >Home</Link>  </li>
           
           <li> <Link href="/about" >About</Link>  </li>
       </ul>
   </nav>
  )
}

export default Nav