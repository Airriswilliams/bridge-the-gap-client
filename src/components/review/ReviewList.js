import React, {useEffect} from "react"
import { useHistory } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { getReviews } from "./ReviewManager.js"


export const ReviewList = (props) => {
    const [ reviews, setReviews] = useState([])

    useEffect(() => {
        getReviews().then(data => setReviews(data))
    }, [])

    return (
        <article className="reviews">
     
            <h2>Tutor Reviews</h2>
            {
                reviews.map(review => {
                    return <section key={`review--${review.id}`} className="review">
                        <div className="review__tutor">Tutor Name: {review.tutor.name}</div>
                        <div className="review__review">Review: {review.tutor_review}</div>
                        {/* <div className="review_parent">Review: {review.parent.user.first_name}</div> */}

                    </section>
                       
                    })
                }

       


        </article>

                    
    )

}