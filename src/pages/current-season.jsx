import React, { useState, useEffect } from "react"
import CurrentSeasonHeader from "../containers/current-season-header"
import "../styles/current-season.css"
import "../styles/races.css"
import { getCurrentSeason } from "../data/seasons-data.js"
import { Link } from "react-router-dom"

const CurrentSeason = ({ year, formatDate }) => {
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
      <h2>Season {season.season}, {getTotalRounds()} Rounds</h2>
      {season.Races.length > 0 ? (
        <div>
          <h3>Race Schedule</h3>
          <ul className="races-container">
            {season.Races.map((race) => (
              <li key={race.round} className="race-item">
                <p className="circuit">{race.raceName} - {race.Circuit.circuitName}</p>
                  <p className="round">Round {race.round}</p>
                  <p className="date">{formatDate(race.date)}</p>
                  <div className="buttons">
                    <Link className="qualy-btn" to={`/seasons/${season.season}/races/${race.round}/qualy`}>Qualy</Link>
                    <Link className="qualy-btn" to={`/seasons/${season.season}/races/${race.round}/results`}>Race</Link>
                  </div>
                  <a className="url" href={race.url} target="_blank" rel="noopener noreferrer"> Wiki</a>
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
