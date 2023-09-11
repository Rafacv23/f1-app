import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getRaceResult } from "../data/seasons-data"
import RaceResultsHeader from "../containers/race-results-header"

const Result = () => {
  const { raceId } = useParams()
  const { seasonYear } = useParams()
  const [race, setRace] = useState([])

  useEffect(() => {
    async function fetchSeasons () {
      const data = await getRaceResult(seasonYear, raceId)
      setRace(data)
    }
    fetchSeasons()
  }, [raceId, seasonYear])

  return (
    <div>
    <RaceResultsHeader></RaceResultsHeader>
      Race Results Round {raceId}, Season {seasonYear}
      {race.map((r) => (
        <div key={r.raceName}>
          <ul>
            <li>{r.raceName}</li>
            <li>{r.Circuit.circuitName}</li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Number</th>
                <th>Driver</th>
                <th>Car</th>
                <th>Laps</th>
                <th>Time/Retired</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {r.Results.map((driver) => (
                <tr key={driver.driverId}>
                  <td>{driver.position}</td>
                  <td>{driver.number}</td>
                  <td>{driver.Driver.givenName} {driver.Driver.familyName}</td>
                  <td>{driver.Constructor.name}</td>
                  <td>{driver.laps ? driver.laps : "DNS"}</td>
                  <td>{driver.Time ? driver.Time.time : "DNF"}</td>
                  <td>{driver.points}</td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
      ))}
    </div>
  )
}

export default Result
