import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <div className="navbar">
      <Link className="navbar__link" to="/">Home</Link>
      <Link className="navbar__link" to="/tutors">Tutors</Link>
      <Link className="navbar__link" to="/parents">Parents</Link>
      <Link className="navbar__link" to="/reviews">Reviews</Link>
      <Link className="navbar__link" to="/sessions">Sessions</Link>
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
    </div>
  )
}
