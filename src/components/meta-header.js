import React from "react"
import * as metaHeaderStyles from "./meta-header.module.scss"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhoneSquare,
  FaSearchLocation,
} from "react-icons/fa"

const MetaHeader = () => {
  return (
    <div className={metaHeaderStyles.metaHeader}>
      <div className={metaHeaderStyles.metaHeaderContent}>
        <FaPhoneSquare />
        <p>&nbsp; +380974695546 &nbsp; &nbsp; | &nbsp; &nbsp; </p>
        <FaSearchLocation />
        <p>&nbsp; Київ, Україна</p>
        <ol>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ol>
      </div>
    </div>
  )
}

export default MetaHeader
