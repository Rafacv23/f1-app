import React from "react"
import { Link } from "react-router-dom"

const SeasonHeader = () => {
  return (
        <div className="season-header">
            <Link className="season-header-btn" to={"/current/races"}>Races</Link>
            <Link className="season-header-btn" to={"/seasons/current/drivers"}>Drivers Championship</Link>
            <Link className="season-header-btn" to={"/seasons/current/constructors"}>Constructors Championship</Link>
        </div>
  )
}

export default SeasonHeader
