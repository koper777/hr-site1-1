import React from "react"
import MasterLayout from "../components/master-layout"
import Content from "../components/content"
import CommonHero from "../components/common-hero"
import Package from "../components/package"

const PackagePage = () => {
  return (
    <MasterLayout>
      <CommonHero>
        <h1>Країни</h1>
      </CommonHero>
      <Content>
        <h1>Популярні країни</h1>
        <div className="flex-wrapper">
          <Package title="Франція" img="https://images.unsplash.com/photo-1578854176045-e0373d37bbdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" />
          <Package title="Англія" img="https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          <Package title="Чехія" img="https://images.unsplash.com/photo-1605276002425-dcdff4deed88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <Package title="Іспанія" img="https://images.unsplash.com/photo-1512753360435-329c4535a9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <Package title="Німеччина" img="https://images.unsplash.com/photo-1591743320843-2160277b6668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80" />
          <Package title="Нідерланди" img="https://images.unsplash.com/photo-1459679749680-18eb1eb37418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <Package title="Італія" img="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80" />
          <Package title="Норвегія" img="https://images.unsplash.com/photo-1520769669658-f07657f5a307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <Package title="Данія" img="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
          <Package title="Швеція" img="https://images.unsplash.com/photo-1580339841933-f06ca55842d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
          <Package title="Герція" img="https://images.unsplash.com/photo-1595358419970-639c920d89f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <Package title="Швеція" img="https://images.unsplash.com/photo-1569510982863-00502bd764d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </div>
      </Content>
    </MasterLayout>
  )
}

export default PackagePage
