import React, { useState, useEffect } from "react"
import { Link, useParams, Outlet, Route, Routes } from "react-router-dom"
import { getOneSeason } from "../data/seasons-data"
import SeasonHeader from "../containers/season-header"
import "../styles/races.css"
import Result from "./result"
import Qualy from "./qualy"

const Races = ({ year }) => {
  const { seasonYear } = useParams()
  const [season, setSeason] = useState([])

  useEffect(() => {
    async function fetchSeasons () {
      const data = await getOneSeason(seasonYear)
      setSeason(data)
    }
    fetchSeasons()
  }, [])

  const getTotalRounds = () => {
    return season.Races ? season.Races.length : 0
  }

  return (
    <div className="">
    <SeasonHeader></SeasonHeader>
      {season ? (
  <div className="races-container">
  <h2>Season {seasonYear === "current" ? year : seasonYear}, {getTotalRounds()} Rounds</h2>
    <h3>Race Schedule</h3>
    <ul>
      {season.Races && season.Races.length > 0 ? (
        season.Races.map((race) => (
          <li key={race.date} className="race-item">
            <p className="circuit">{race.raceName} - {race.Circuit.circuitName}</p>
            <p className="round">Round {race.round}</p>
            <p className="date">{race.date}</p>
            <div className="buttons">
            <Link to={`./${race.round}/qualy`} className="qualy-btn">Qualy</Link>
            <Link to={`./${race.round}/results`} className="qualy-btn">Race</Link>
            </div>
            <a href={race.url} target="_blank" rel="noopener noreferrer" className="url"> Wiki</a>
          </li>
        ))
      ) : (
        <p>No data about the races of this season.</p>
      )}
    </ul>
    <Routes>
      <Route path="/" element={<Outlet/>}/>
      <Route path="./:raceId/results" element={<Result/>}/>
      <Route path="./:raceId/qualy" element={<Qualy seasonYear={seasonYear}/>}/>
    </Routes>
  </div>
      ) : (
  <p>Loading...</p>
      )}

    </div>
  )
}

export default Races
