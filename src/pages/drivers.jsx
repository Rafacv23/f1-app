import React, { useState, useEffect } from "react"
import SeasonHeader from "../containers/season-header"
import { getDriverStandings } from "../data/seasons-data"
import { useParams } from "react-router-dom"

const Drivers = () => {
  const { seasonYear } = useParams()
  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    async function fetchDriverStandings () {
      try {
        const data = await getDriverStandings(seasonYear)
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
      <SeasonHeader />
      <h2>Driver Championship</h2>
      {drivers.length > 0 ? <ul>
        {drivers.map((driver) => (
          <li key={driver.Driver.driverId}>
            <a href={driver.Driver.url} target="_blank" rel="noopener noreferrer">
              {driver.Driver.givenName} {driver.Driver.familyName}
            </a>
            <p>Nationality: {driver.Driver.nationality}</p>
            <p>Constructor: {driver.Constructors[0].name}</p>
            <p>Position: {driver.position}</p>
            <p>Points: {driver.points}</p>
            <p>Wins: {driver.wins}</p>
          </li>
        ))}
      </ul> : <p>Loading data...</p>}
    </div>
  )
}

export default Drivers
