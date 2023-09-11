import React, { useState, useEffect } from "react"
import CurrentSeasonHeader from "../containers/current-season-header"
import "../styles/current-season.css"
import { getCurrentSeason } from "../data/seasons-data.js"
import { Link } from "react-router-dom"

const CurrentSeason = ({ year }) => {
  const [season, setSeason] = useState({ season: "", Races: [] })

  useEffect(() => {
    async function fetchSeason () {
      try {
        const data = await getCurrentSeason()
        setSeason(data)
      } catch (error) {
        console.error("Error fetching current season:", error)
      }
    }
    fetchSeason()
  }, [])

  const getTotalRounds = () => {
    return season.Races.length
  }

  return (
    <div className="current-season">
      <CurrentSeasonHeader seasonYear={year} />
      <h2>Season {season.season}</h2>
      <p>Total Rounds: {getTotalRounds()}</p>
      {season.Races.length > 0 ? (
        <div>
          <h3>Race Schedule:</h3>
          <ul>
            {season.Races.map((race) => (
              <li key={race.round}>
                <p>{race.raceName} - {race.Circuit.circuitName}</p>
                  <p>Round: {race.round}</p>
                  <p>Date: {race.date}</p>
                  <p>URL: <a href={race.url} target="_blank" rel="noopener noreferrer"> Wiki</a></p>
                  <Link to={`/seasons/${season.season}/races/${race.round}/qualy`}>Qualy</Link>
                  <Link to={`/seasons/${season.season}/races/${race.round}/results`}>Results</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No race data available for the current season.</p>
      )}
    </div>
  )
}

export default CurrentSeason
