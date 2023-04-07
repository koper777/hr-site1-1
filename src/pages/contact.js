import React from "react"
import MasterLayout from "../components/master-layout"
import Content from "../components/content"
import CommonHero from "../components/common-hero"

const ContactPage = () => {
  return (
    <MasterLayout>
      <CommonHero>
        <h1>Контакти</h1>
      </CommonHero>
      <Content>
        <ul>
          <li>+380974695546</li>
          <li>Telegram: @zlatahrtim</li>
          <li>Київ, Україна</li>
        </ul>
      </Content>
    </MasterLayout>
  )
}

export default ContactPage
