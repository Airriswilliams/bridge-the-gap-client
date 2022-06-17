import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <ul className="navbar">
      <Link to="/">Home</Link>
      <li className="navbar__item">
        <Link className="navbar__link" to="/tutors">Tutors</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/parents">Parents</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/reviews">Reviews</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/sessions">Sessions</Link>
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
            <Link className="navbar__link" to="/login">Login</Link>
            <Link className="navbar__link" to="/register">Register</Link>
          </>
      }
    </ul>
  )
}
