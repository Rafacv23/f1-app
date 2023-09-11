import React from "react"
import { Link } from "react-router-dom"
import "../styles/header.css"
import Text from "../components/text.jsx"

const Header = ({ year }) => {
  return (
        <header className="header">
            <Text text="F1 App 🏁🏎️"></Text>
            <Link className="header-btn" to={"/"}>Home</Link>
            <Link className="header-btn" to={"/current/races"}>{year} Season</Link>
            <Link className="header-btn" to={"/seasons"}>Previous Seasons</Link>
        </header>
  )
}

export default Header
