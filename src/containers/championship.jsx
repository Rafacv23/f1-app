import React, { useEffect, useState } from "react"
import { getDriverStandings, getConstructorStandings } from "../data/seasons-data"
import Btn from "../components/btn"
import "../styles/championship.css"

const Championship = ({ year }) => {
  const [drivers, setDrivers] = useState([])
  const [teams, setTeams] = useState([])
  const [showDrivers, setShowDrivers] = useState(true)

  const toggleDisplay = () => {
    setShowDrivers(!showDrivers)
  }

  useEffect(() => {
    async function fetchDriverStandings () {
      try {
        const data = await getDriverStandings(year)
        const driverStandings = data[0]?.DriverStandings || []
        setDrivers(driverStandings)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDriverStandings()
  }, [year])

  useEffect(() => {
    async function fetchDriverStandings () {
      try {
        const data = await getConstructorStandings(year)
        const constructorStandings = data[0]?.ConstructorStandings || []
        setTeams(constructorStandings)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDriverStandings()
  }, [year])
  return (
        <div className="championship-container">
          <div className="buttons-championship">
            <Btn className="btns" text="Drivers" onClick={showDrivers ? null : toggleDisplay}></Btn>
            <Btn className="btns" text="Constructors" onClick={showDrivers ? toggleDisplay : null}></Btn>
          </div>
          {showDrivers
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
            : <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Team</th>
                  <th>Nationality</th>
                  <th>Wins</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((constructor) => (
                  <tr key={constructor.Constructor.constructorId}>
                    <td>{constructor.position}</td>
                    <td>{constructor.Constructor.name}</td>
                    <td>{constructor.Constructor.nationality}</td>
                    <td>{constructor.wins}</td>
                    <td>{constructor.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>}
        </div>
  )
}

export default Championship
