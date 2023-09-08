import React, { useState, useEffect } from "react"
import { getSeasons } from "../data/seasons-data.js"
import "../styles/seasons.css"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import Season from "./season"

const Seasons = () => {
  const [seasons, setSeasons] = useState([])

  const orderSeasons = (array) => {
    return array.sort((a, b) => {
      return b.season - a.season
    })
  }

  useEffect(() => {
    async function fetchSeasons () {
      const data = await getSeasons()
      const orderedSeasons = orderSeasons(data)
      setSeasons(orderedSeasons)
    }
    fetchSeasons()
  }, [])

  return (
    <div>
      <h1>Temporadas de Fórmula 1</h1>
      <ul className="season-list">
        {seasons.map((season) => (
          <li className="list" key={season.season}>
            <Link className="season-item" to={`/seasons/${season.season}`}>{season.season}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path=":seasonYear" element={<Season />} />
      </Routes>
    </div>
  )
}

export default Seasons
