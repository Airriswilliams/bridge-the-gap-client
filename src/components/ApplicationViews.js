import React from "react"
import { Route } from "react-router-dom"
import { TutorList } from "./tutor/TutorList.js"
import { ParentList } from "./parent/ParentList.js"
import { ReviewList } from "./review/ReviewList.js"
import { SessionList } from "./tutorsession/SessionList.js"
import { TutorReview } from "./tutor/ReviewForm.js"
import { EditReview } from "./tutor/UpdateReview.js"
import { SessionForm } from "./tutorsession/SessionForm.js"

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
            <Route exact path="/sessions">
                <SessionList />
            </Route>

            <Route exact path="/sessions/new">
          <SessionForm />
        </Route>

            <Route exact path="/reviews">
                <ReviewList />
            </Route>

            <Route exact path="/tutors/:tutorId(\d+)/review">
          <TutorReview />
        </Route>

        <Route exact path="/reviews/:reviewId(\d+)">
          <EditReview />
        </Route>
        </main>
    </>
    );
}
