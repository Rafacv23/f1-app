import React, { useEffect, useState } from "react"
import SeasonHeader from "../containers/season-header"
import { useParams } from "react-router-dom"
import { getConstructorStandings } from "../data/seasons-data"

const Constructors = ({ year }) => {
  const { seasonYear } = useParams()
  const [constructors, setConstructors] = useState([])

  useEffect(() => {
    async function fetchDriverStandings () {
      try {
        const data = await getConstructorStandings(seasonYear)
        const constructorStandings = data[0]?.ConstructorStandings || []
        setConstructors(constructorStandings)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDriverStandings()
  }, [seasonYear])

  return (
        <div>
            <SeasonHeader></SeasonHeader>
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

export default Constructors
