import React from "react"
import { Link, useHistory } from "react-router-dom"
import { FcHome, FcList} from "react-icons/fc"
import { CgProfile } from "react-icons/cg"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <div className="navbar">
      <Link className="navbar__link" to="/"><FcHome/>Home</Link>
      <Link className="navbar__link" to="/tutors">Tutors</Link>
      <Link className="navbar__link" to="/parents"><CgProfile/>Parents</Link>
      <Link className="navbar__link" to="/reviews"><FcList/>Reviews</Link>
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
