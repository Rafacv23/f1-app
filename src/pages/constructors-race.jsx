import React, { useState, useEffect } from "react"
import { getConstructorStandingsPerRace } from "../data/seasons-data"
import { useParams } from "react-router-dom"
import RaceResultsHeader from "../containers/race-results-header"

const Drivers = ({ year }) => {
  const { seasonYear } = useParams()
  const { raceId } = useParams()
  const [constructors, setConstructors] = useState([])

  useEffect(() => {
    async function fetchConstructorStandings () {
      try {
        const data = await getConstructorStandingsPerRace(seasonYear, raceId)
        const constructorStandings = data[0]?.ConstructorStandings || []
        setConstructors(constructorStandings)
      } catch (error) {
        console.error(error)
      }
    }
    fetchConstructorStandings()
  }, [seasonYear, raceId])

  return (
    <div>
      <RaceResultsHeader></RaceResultsHeader>
      <h2>{seasonYear === "current" ? year : seasonYear} Constructors Championship</h2>
            {constructors.length > 0
              ? <table>
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
                {constructors.map((constructor) => (
                  <tr key={constructor.Constructor.constructorId}>
                    <td>{constructor.position}</td>
                    <td>{constructor.Constructor.name}</td>
                    <td>{constructor.Constructor.nationality}</td>
                    <td>{constructor.wins}</td>
                    <td>{constructor.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
              : <p>Loading data...</p>}
              </div>
  )
}

export default Drivers
