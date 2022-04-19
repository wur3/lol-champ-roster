import * as React from "react";
import { useEffect } from "react";
import CachedApi from "./CachedApi";
import { MemoizedBackground } from "./components/Background";

import ChampList from "./components/ChampList";
import { useDispatch } from "react-redux";
import { setVersion } from "./reducers/Version";
import { setLanguage } from "./reducers/Language";
import LanguageDropdown from "./components/LanguageDropdown";
import VersionDropdown from "./components/VersionDropdown";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Champion from "./pages/Champion";

const api = CachedApi.axiosInstance()
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    api.get('/api/versions.json')
    .then(res => {
      const vs: String[] = Object.values(res.data)
      dispatch(setVersion({ num: vs[0], all: vs}))
    })
    api.get('/cdn/languages.json')
    .then(res => {
      const ls: String[] = Object.values(res.data)
      dispatch(setLanguage({ code: ls[0], all: ls }))
    })
  }, [])

  return (
    <Routes>
      <Route path="/" element={
        <>
          <MemoizedBackground />
          <VersionDropdown />
          <LanguageDropdown />
          <ChampList />
        </>
      } />
      <Route path="champion/:champion" element={<Champion />} />
    </Routes>
  )
}

export default App;
