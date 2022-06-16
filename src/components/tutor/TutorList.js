import React, {useEffect} from "react"
import { useState } from "react/cjs/react.development"
import { useHistory, Link } from "react-router-dom";
import { MdRateReview} from "react-icons/md"

import { getTutors} from "./TutorManager.js"

export const TutorList = (props) => {
    const [ tutors, setTutors] = useState([])
    const history = useHistory();


    useEffect(() => {
        getTutors().then(data => setTutors(data))
    }, [])

  


    return (
        <article className="tutors">
            <h2>Meet our awesome Tutors!</h2>
            <h3>Our tutors have experience teaching children Java Script, React, Angular, Django, HTML & CSS</h3>
            {
                tutors.map(tutor => {
                    return <section key={`tutor--${tutor.id}`} className="tutor">
                        <div className="tutor__name"> {tutor.name}</div>
                        <div className="tutor__bio">About: {tutor.bio}</div>
                        <div className="tutor__schedule">Available on {tutor.schedule}</div>
                        <div className="tutor__image">
                            <img
                            src={`http://localhost:8000${tutor.image_url}`}/>
                            </div>

                 <header>
                 <Link to={`/tutors/${tutor.id}/review`}>
                    <MdRateReview /> Share Your Experience
                  </Link>
      </header>

                    </section>
                })
            }



        </article>
    )

}

