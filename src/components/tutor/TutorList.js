import React, {useEffect} from "react"
import { getTutors } from "./TutorManager.js"

export const TutorList = (props) => {
    const [ tutors, setTutors] = useState([])

    useEffect(() => {
        getTutors().then(data => setTutors(data))
    }, [])


    return (
        <article className="tutors">
            {
                tutors.map(tutor => {
                    return <section key={`tutor--${tutor.id}`} className="tutor">
                        <div className="tutor__bio">About{tutor.bio}</div>
                        <div className="tutor__schedule">Available on{tutor.schedule}</div>
                        <div className="tutor__image">{tutor.image_url}</div>


                    </section>
                })
            }



        </article>
    )

}