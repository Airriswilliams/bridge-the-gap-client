import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSingleTutor } from "./TutorManager.js";
import { createReview } from "../review/ReviewManager.js";

export const TutorReview = () => {
 const history = useHistory();
//  get original review with original data
 const [currentReview, setCurrentReview] = useState({});
 const tutorId = useParams();
 const [review, setReview] = useState({
     review: "",
     tutor: tutorId.tutorId,
    });
    // get single review
  useEffect(() => {
      getSingleTutor(tutorId.tutorId).then((data) => setCurrentReview(data));
  }, []);

  const changeReviewState = (domEvent) => {
      const newReview = Object.assign({}, review);
      newReview[domEvent.target.name] = domEvent.target.value;
      setReview(newReview);
  };

  return (
    <form className="reviewForm">
      <h2 className="reviewForm__tutor_review">How Was Your Experience?</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="review">Review: </label>
          <textarea
            name="tutor_review"
            required
            autoFocus
            className="form-control"
            value={review.tutor_review}
            onChange={changeReviewState}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          // Prevent form from being submitted
          evt.preventDefault();

          const newReview = {
            tutor_review: review.tutor_review,
            tutor_id: parseInt(tutorId.tutorId),
          };

          // Send POST request to your API
          createReview(newReview).then(() =>
            history.push(`/reviews/${tutorId.tutorId}`)
          );
        }}
        className="btn btn-primary"
      >
        Submit Review
      </button>
    </form>
  );
};








