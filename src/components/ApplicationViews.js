import React from "react"
import { Route } from "react-router-dom"
import { TutorList } from "./tutor/TutorList.js"
import { ParentList } from "./parent/ParentList.js"
import { ReviewList } from "./review/ReviewList.js"
import { TutorReview } from "./tutor/ReviewForm.js"

export const ApplicationViews = () => {
    return (
    <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/tutors">
                <TutorList />
            </Route>

            <Route exact path="/parents">
                <ParentList />
            </Route>

            <Route exact path="/reviews">
                <ReviewList />
            </Route>

            <Route exact path="/tutors/:tutorId(\d+)/review">
          <TutorReview />
        </Route>
        </main>
    </>
    );
}
