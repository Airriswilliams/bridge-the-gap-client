import React, {useEffect} from "react"
import { useState } from "react/cjs/react.development"
import { getParents } from "./ParentManager.js"


export const ParentList = (props) => {
    const [ parents, setParents] = useState([])

    useEffect(() => {
        getParents().then(data => setParents(data))
    }, [])


    return (
        <article className="parents">
            <h2>Bridge the Gap's Parents and Students</h2>
            {
                parents.map(parent => {
                    return <section key={`parent--${parent.id}`} className="parent">
                        <div className="child__name">Parent of {parent.child_name}</div>
                        <div className="child__age">My child is {parent.child_age} years old</div>


                    </section>
                })
            }



        </article>
    )

}