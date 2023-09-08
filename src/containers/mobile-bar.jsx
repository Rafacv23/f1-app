import React, { useState } from "react"
import { Link } from "react-router-dom"
import Text from "../components/text"
import "../styles/mobile-bar.css"
import Btn from "../components/btn"

const MobileBar = ({ year }) => {
  const [display, setDisplay] = useState(false)

  const active = () => {
    setDisplay(!display)
    console.log(display)
  }
  return (
        <nav className={display ? "nav-active" : "nav"}>
            <Btn className="display-btn" onClick={() => active()}></Btn>
            <Text text="F1 App 🏁🏎️"></Text>
            <Link className={display ? "bar-btn-active" : "bar-btn"} to={"/"} onClick={() => active()}>Home</Link>
            <Link className={display ? "bar-btn-active" : "bar-btn"} to={"/current/races"} onClick={() => active()}>{year} Season</Link>
            <Link className={display ? "bar-btn-active" : "bar-btn"} to={"/seasons"} onClick={() => active()}>Previous Seasons</Link>
        </nav>
  )
}

export default MobileBar
