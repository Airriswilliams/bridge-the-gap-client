import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { BridgeTheGap } from "./components/BridgeTheGap.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <BridgeTheGap />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
