import React from "react"
import "../styles/home.css"
// import NextRace from "../containers/next-race"
import Championship from "../containers/championship"

const Home = ({ year, formatDate }) => {
  return (
    <div className="home">
      <h1>{year} F1 Season</h1>
      <div className="data">
        {/* <NextRace formatDate={formatDate}></NextRace> */}
        <Championship year={year}></Championship>
      </div>
    </div>
  )
}

export default Home
