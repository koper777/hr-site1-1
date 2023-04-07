import React from "react"
import packageImage from "../images/singapore.jpg"

import * as packageStyles from "./package.module.scss"
import { Link } from "gatsby"

const Package = (props) => {
  return (
    <div className={packageStyles.packageWrapper}>
      <Link to="/services">
        <img src={props.img} />
        <div className={packageStyles.frontMatter}>
          <h2>{props.title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default Package
