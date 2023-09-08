import React from "react"
import "./styles/App.css"
import { Routes, Route } from "react-router-dom"
import Seasons from "./pages/seasons.jsx"
import Home from "./pages/home"
import Header from "./containers/header"
import NotFound from "./pages/not-found"
import CurrentSeason from "./pages/current-season"
import Drivers from "./pages/drivers"
import Constructors from "./pages/constructors"
import Races from "./pages/races"

function App () {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/seasons" element={<Seasons/>}/>
        <Route path="/current" element={<CurrentSeason/>}/>
        <Route path="/seasons/:seasonYear/races" element={<Races />} />
        <Route path="/seasons/:seasonYear/drivers" element={<Drivers />} />
        <Route path="/seasons/:seasonYear/constructors" element={<Constructors />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
