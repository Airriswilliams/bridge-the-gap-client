import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./BridgeTheGap.css";

export const BridgeTheGap = () => {


    return (
    <>
        <Route render={() => {
            if (localStorage.getItem("auth_token")) {
                return (
                 <>
                  <div className="header">
                  <div className="topSection">
                    <h1>BTG</h1>
                        <NavBar />
                        </div>
                        <ApplicationViews />
                    </div>
                </>
                ) 
            } else {
                return <Redirect to="/login" />
                    
            }
        }} />
        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>
                    
    </>
)
    }


