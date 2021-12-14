import React from "react"
import { Provider } from "react-redux"
import { store } from "./state/createStore"

interface Props {
  element: React.ReactChild
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({element}: Props) => {
  return <Provider store={store}>{element}</Provider>
}

