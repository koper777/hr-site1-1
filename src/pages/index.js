import React from "react"
import MasterLayout from "../components/master-layout"
import IndexHero from "../components/index-hero"
import Content from "../components/content"
import Package from "../components/package"

const IndexPage = () => {
  return (
    <MasterLayout>
      <IndexHero />
      <Content>
        <h1>Популярні країни</h1>
        <p>Найкращі курорти для бронювання</p>
        <div className="flex-wrapper">
          <Package title="Франція" img="https://images.unsplash.com/photo-1578854176045-e0373d37bbdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"/>
          <Package title="Лондон" img="https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          <Package title="Чехія" img="https://images.unsplash.com/photo-1605276002425-dcdff4deed88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          <Package title="Іспанія" img="https://images.unsplash.com/photo-1512753360435-329c4535a9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
          <Package title="Німеччина" img="https://images.unsplash.com/photo-1591743320843-2160277b6668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80"/>
          <Package title="Амстердам" img="https://images.unsplash.com/photo-1459679749680-18eb1eb37418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
        </div>
      </Content>
    </MasterLayout>
  )
}

export default IndexPage
