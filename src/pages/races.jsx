import React, { useState, useEffect } from "react"
import { Link, useParams, Outlet, Route, Routes } from "react-router-dom"
import { getOneSeason } from "../data/seasons-data"
import SeasonHeader from "../containers/season-header"
import "../styles/races.css"
import Result from "./result"
import Qualy from "./qualy"

const Races = () => {
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
    <p>Season Name: {seasonYear}</p>
    <p>Total Rounds: {getTotalRounds()}</p>
    <p>Winner: {season.winner}</p>
    <h3>Race Schedule:</h3>
    <ul>
      {season.Races && season.Races.length > 0 ? (
        season.Races.map((race) => (
          <li key={race.date}>
            <p>{race.raceName} - {race.Circuit.circuitName}</p>
            <p>Round: {race.round}</p>
            <p>Date: {race.date}</p>
            <Link to={`./${race.round}/qualy`}>Qualy</Link>
            <Link to={`./${race.round}/results`}>Results</Link>
            <p>URL: <a href={race.url} target="_blank" rel="noopener noreferrer"> Wiki</a></p>
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
