import * as React from "react"

import Layout from "../components/layout"
import ChampList from "../components/ChampList"
import { MemoizedBackground } from "../components/Background"

const IndexPage = () => (
  <Layout>
    <MemoizedBackground />
    <ChampList />
  </Layout>
)

export default IndexPage
