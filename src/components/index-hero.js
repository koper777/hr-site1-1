import React from "react"
import { Link } from "gatsby"

import * as welcomeStyles from "./index-hero.module.scss"

const IndexHero = () => {
  return (
    <div className={welcomeStyles.welcomeSection}>
      <div className={welcomeStyles.welcomeContent}>
        <h1>
          Ласкаво просимо до <br />
          EUROTRAIL
        </h1>
        <p>Наближаємо ваші мрії</p>
        <Link to="/package" className={welcomeStyles.welcomeButton}>
          Забронюйте
        </Link>
      </div>
    </div>
  )
}

export default IndexHero
