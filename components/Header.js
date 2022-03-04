import React from 'react'
import HeaderStyles from "../styles/Header.module.css"
const Header = () => {
  return (
     <div>
         <h1 className={HeaderStyles.title}>
             <span>WebDev</span> News
             </h1>
             <p className={HeaderStyles.description} > Keep up to date with the latest web dev news </p>
     </div>
  )
}

export default Header


