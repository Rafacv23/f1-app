import React from "react"
import "./styles/App.css"
import { Routes, Route } from "react-router-dom"
import Seasons from "./pages/seasons.jsx"
import Home from "./pages/home"
import Header from "./containers/header"
import NotFound from "./pages/not-found"
import Season from "./pages/season"

function App () {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/seasons" element={<Seasons/>}/>
        <Route path="/seasons/:seasonYear" element={<Season />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
