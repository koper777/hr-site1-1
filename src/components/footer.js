import React from "react"

import { Link } from "gatsby"

import * as footerStyles from "./footer.module.scss"

import memberImage from "../images/member.png"
import acceptImage from "../images/accept.png"

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

const Footer = () => {
  return (
    <div>
      <div className={footerStyles.footerSection}>
        <div className={footerStyles.footerContent}>
          <div className={footerStyles.partnerSection}>
            <h3>Члени</h3>
            <ul>
              <li>
                <Link to="/">
                  <img src={memberImage} />
                </Link>
              </li>
            </ul>
          </div>

          <div className={footerStyles.paymentSection}>
            <h3>Ми приймаємо</h3>
            <ul>
              <li>
                <Link to="/">
                  <img src={acceptImage} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={footerStyles.footerSectionSecond}>
        <div className={footerStyles.footerContent}>
          <ul className={footerStyles.navList}>
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/package">Країни</Link>
            </li>
            <li>
              <Link to="/services">Послуги</Link>
            </li>
            <li>
              <Link to="/about">Про нас</Link>
            </li>
            <li>
              <Link to="/contact">Контакти</Link>
            </li>
          </ul>

          <ul className={footerStyles.socialMediaList}>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>

      <div className={footerStyles.copyrightSection}>
        <p>©2023 EUROTRAIL. Всі права захищені</p>
      </div>
    </div>
  )
}

export default Footer
