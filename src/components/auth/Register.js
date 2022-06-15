import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import './Auth.css'
// TODO: This should get you started on registering a new user. 
// Add new fields depending on your server side registration
export const Register = () => {
  const username = useRef()
  const password = useRef()
  const child__name = useRef()
  const child__age = useRef()
  const first_name = useRef()
  const last_name = useRef()
  const email = useRef()
  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault()

    const newUser = {
      "username": username.current.value,
      "password": password.current.value,
      "child_name": child__name.current.value,
      "child_age": child__age.current.value,
      "first_name": first_name.current.value,
      "last_name": last_name.current.value,
      "email": email.current.value
    }

    registerUser(newUser).then(res => {
      if ("token" in res) {
        localStorage.setItem("auth_token", res.token)
        history.push("/")
      }
    })
  }

return (
  <main>
    <form onSubmit={handleRegister}>
      <h3>Register an account</h3>
      <fieldset>
        <label htmlFor="inputUsername">Username</label>
        <input ref={username} type="text" name="username" placeholder="Username" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputUsername">First Name</label>
        <input ref={first_name} type="text" name="firstname" placeholder="Firstname" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputUsername">Last Name</label>
        <input ref={last_name} type="text" name="lastname" placeholder="Lastname" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputUsername">Email Address</label>
        <input ref={email} type="text" name="email" placeholder="Email" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputPassword"> Password </label>
        <input ref={password} type="password" name="password" placeholder="Password" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputPassword"> Child's Name </label>
        <input ref={child__name} type="child__name" name="child__name" placeholder="Enter your child's name" required />
      </fieldset>
      <fieldset>
        <label htmlFor="inputPassword"> Child's Age </label>
        <input ref={child__age} type="child__age" name="child__age" placeholder="Enter your child's age" required />
      </fieldset>
      <fieldset>
        <button type="submit">Register</button>
      </fieldset>
    </form>
    <section>
      Already registered? <Link to="/login">Login</Link>
    </section>
  </main>
)
}
