import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ChampList from "../components/ChampList"
import Background from "../components/Background"
import ChampInfo from "../components/ChampInfo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Background />
    {/* <ChampList /> */}
    <ChampInfo />
  </Layout>
)

export default IndexPage
