import React from "react"
import { Link, useParams } from "react-router-dom"

const RaceResultsHeader = () => {
  const { raceId } = useParams()
  const { seasonYear } = useParams()
  return (
    <div>
      <div className="season-header">
          <Link className="season-header-btn" to={`/seasons/${seasonYear}/races/${raceId}/qualy`}>Qualyfiying</Link>
          <Link className="season-header-btn" to={`/seasons/${seasonYear}/races/${raceId}/results`}>Race Results</Link>
          <Link className="season-header-btn" to={`/seasons/${seasonYear}/races/${raceId}/drivers`}>Drivers Championship</Link>
          <Link className="season-header-btn" to={`/seasons/${seasonYear}/races/${raceId}/constructors`}>Constructors Championship</Link>
      </div>
    </div>
  )
}

export default RaceResultsHeader
