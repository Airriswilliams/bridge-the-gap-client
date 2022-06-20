import React, {useEffect} from "react"
import { useState } from "react/cjs/react.development"
import { getParents } from "./ParentManager.js"
import "./Parent.css"



export const ParentList = (props) => {
    const [ parents, setParents] = useState([])

    useEffect(() => {
        getParents().then(data => setParents(data))
    }, [])


    return (
        <article className="parents">
            <h2>Parent Profile</h2>
            <section key={`parent--${parents?.id}`} className="parents">
                        <div className="child__name">Child Name: {parents?.child_name}</div>
                        <div className="child__age">Age: {parents?.child_age} years old</div>
                        <div className="child__session">Upcoming Sessions: {parents?.sessions?.map(session => {
                        return session.date
                    }).join(",")}</div>



                    </section>
           



        </article>
    )

}