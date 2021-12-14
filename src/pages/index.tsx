import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ChampList from "../components/ChampList"
import ListBackground from "../components/ListBackground"

const IndexPage = () => (
  // <Provider store={store}>
  <Layout>
    <Seo title="Home" />
    <ListBackground />
    <ChampList />
  </Layout>
  // </Provider>
)

export default IndexPage
