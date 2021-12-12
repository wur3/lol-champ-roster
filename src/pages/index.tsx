import * as React from "react"
import { Provider } from 'react-redux'
import { configureStore} from '@reduxjs/toolkit'
import champReducer from '../reducers/Champ'

import Layout from "../components/layout"
import Seo from "../components/seo"
import ChampList from "../components/ChampList"
import ListBackground from "../components/ListBackground"
import { setup } from 'axios-cache-adapter';

const api = setup({
  // `axios` options
  baseURL: 'https://ddragon.leagueoflegends.com',

  // `axios-cache-adapter` options
  cache: {
    maxAge: 15 * 60 * 1000
  }
})

const store = configureStore({
  reducer: {
    champ: champReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const IndexPage = () => (
  <Provider store={store}>
    <Layout>
      <Seo title="Home" />
      <ListBackground api={api} />
      <ChampList api={api} />
    </Layout>
  </Provider>
)

export default IndexPage
