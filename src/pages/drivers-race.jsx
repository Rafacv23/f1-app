import React, { useState, useEffect } from "react"
import { getDriverStandingsPerRace } from "../data/seasons-data"
import { useParams } from "react-router-dom"
import RaceResultsHeader from "../containers/race-results-header"

const Drivers = () => {
  const { seasonYear } = useParams()
  const { raceId } = useParams()
  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    async function fetchDriverStandings () {
      try {
        const data = await getDriverStandingsPerRace(seasonYear, raceId)
        const driverStandings = data[0]?.DriverStandings || []
        setDrivers(driverStandings)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDriverStandings()
  }, [seasonYear])

  return (
    <div>
      <RaceResultsHeader></RaceResultsHeader>
      <h2>Drivers Championship</h2>
      {drivers.length > 0
        ? <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Nationality</th>
            <th>Car</th>
            <th>Wins</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.Driver.driverId}>
              <td>{driver.position}</td>
              <td>
                {driver.Driver.givenName} {driver.Driver.familyName}
              </td>
              <td>{driver.Driver.nationality}</td>
              <td>{driver.Constructors[0]?.name}</td>
              <td>{driver.wins}</td>
              <td>{driver.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
        : <p>Loading data...</p>}
    </div>
  )
}

export default Drivers
