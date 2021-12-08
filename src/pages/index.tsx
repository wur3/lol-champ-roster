import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ChampList from "../components/ChampList"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ChampList />
    
  </Layout>
)

export default IndexPage
