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
        console.log(constructorStandings)
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
            <ul>
              {constructors.map((constructor) => (
                <li key={constructor.Constructor.constructorId}>
                  <p>{constructor.Constructor.name}</p>
                  <p>Nationality: {constructor.Constructor.nationality}</p>
                  <p>Position: {constructor.position}</p>
                  <p>Points: {constructor.points}</p>
                  <p>Wins: {constructor.wins}</p>
                </li>
              ))}
            </ul>
        </div>
  )
}

export default Constructors
