import React from "react"
import { Link, useParams } from "react-router-dom"

const SeasonHeader = () => {
  const { seasonYear } = useParams()

  return (
        <div className="season-header">
            <Link className="season-header-btn" to={`/seasons/${seasonYear}/races`}>Races</Link>
            <Link className="season-header-btn" to={`/seasons/${seasonYear}/drivers`}>Drivers Championship</Link>
            <Link className="season-header-btn" to={`/seasons/${seasonYear}/constructors`}>Constructors Championship</Link>
        </div>
  )
}

export default SeasonHeader
