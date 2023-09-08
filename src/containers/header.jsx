import React from "react"
import { Link } from "react-router-dom"
import "../styles/header.css"
import Text from "../components/text.jsx"

const Header = () => {
  return (
        <header className="header">
            <Text text="This is a F1 App 🏁🏎️"></Text>
            <Link className="header-btn" to={"/"}>Home</Link>
            <Link className="header-btn" to={"/current"}>Current Season</Link>
            <Link className="header-btn" to={"/seasons"}>Seasons</Link>
        </header>
  )
}

export default Header
