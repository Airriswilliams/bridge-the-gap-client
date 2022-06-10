import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <ul className="navbar">
      <Link to="/">Home</Link>
      <li className="navbar__item">
        <Link to="/tutors">Tutors</Link>
      </li>
      <li className="navbar__item">
        <Link to="/parents">Parents</Link>
      </li>
      <li className="navbar__item">
        <Link to="/reviews">Reviews</Link>
      </li>
      {
        localStorage.getItem("auth_token") !== null ?
          <button onClick={() => {
            localStorage.removeItem("auth_token")
            history.push({ pathname: "/" })
          }}>
            Logout
          </button>
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
      }
    </ul>
  )
}
