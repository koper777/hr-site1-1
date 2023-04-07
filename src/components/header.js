import React from "react"
import { Link } from "gatsby"

import * as headerStyles from "./header.module.scss"

import img from "../images/logo.png"

const Header = () => {
  return (
    <div className={headerStyles.headerSection}>
      <div className={headerStyles.headerContent}>
        <Link to="/">
          <div className={headerStyles.logoSection}>
            <div className={headerStyles.logoWrapper}>
              <img src={img} />
            </div>
            <h1>EUROTRAIL</h1>
          </div>
        </Link>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/package" activeClassName={headerStyles.activeList}>
              Країни
            </Link>
          </li>
          <li>
            <Link to="/services" activeClassName={headerStyles.activeList}>
              Послуги
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={headerStyles.activeList}>
              Про нас
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={headerStyles.activeList}>
              Контакти
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
