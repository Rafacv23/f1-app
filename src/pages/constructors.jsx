import React, { useEffect, useState } from "react"
import SeasonHeader from "../containers/season-header"
import { useParams } from "react-router-dom"
import { getConstructorStandings } from "../data/seasons-data"

const Constructors = () => {
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
            <h2>Constructor Championship</h2>
            {constructors.length > 0 ? <ul>
              {constructors.map((constructor) => (
                <li key={constructor.Constructor.constructorId}>
                  <p>{constructor.Constructor.name}</p>
                  <p>Nationality: {constructor.Constructor.nationality}</p>
                  <p>Position: {constructor.position}</p>
                  <p>Points: {constructor.points}</p>
                  <p>Wins: {constructor.wins}</p>
                </li>
              ))}
            </ul> : <p>Loading data...</p> }
        </div>
  )
}

export default Constructors
