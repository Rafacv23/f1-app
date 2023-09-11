import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getQualyResult } from "../data/seasons-data"
import RaceResultsHeader from "../containers/race-results-header"

const Qualy = () => {
  const { raceId, seasonYear } = useParams()
  const [qualy, setQualy] = useState([])

  useEffect(() => {
    async function fetchQualyResults () {
      try {
        const data = await getQualyResult(seasonYear, raceId)
        setQualy(data)
      } catch (error) {
        console.error("Error fetching qualy results:", error)
      }
    }
    fetchQualyResults()
  }, [raceId, seasonYear])

  return (
    <div>
      <RaceResultsHeader />
      <div>
        Qualifying Results Round {raceId}, Season {seasonYear}
      </div>
      {qualy.map((q) => (
        <div key={q.raceName}>
          <ul>
            <li>{q.raceName}</li>
            <li>{q.Circuit.circuitName}</li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Number</th>
                <th>Driver</th>
                <th>Car</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
              </tr>
            </thead>
            <tbody>
              {q.QualifyingResults.map((driver) => (
                <tr key={driver.driverId}>
                  <td>{driver.position}</td>
                  <td>{driver.number}</td>
                  <td>
                    {driver.Driver.givenName} {driver.Driver.familyName}
                  </td>
                  <td>{driver.Constructor.name}</td>
                  <td>{driver.Q1}</td>
                  <td>{driver.Q2}</td>
                  <td>{driver.Q3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default Qualy
