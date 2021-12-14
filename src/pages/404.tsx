import { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import ListBackground from "../components/ListBackground"

const Error404Page: React.FC<PageProps> = () => (
  <Layout>
    <ListBackground />
    <h1>You are here!</h1>
    <h2>But nothing found for you #404</h2>
  </Layout>
)

export default Error404Page