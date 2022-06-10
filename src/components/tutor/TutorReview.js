import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { reviewTutor, getSingleTutor } from "./TutorManager.js";


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
      <h2 className="reviewForm__tutor_review">Tutor Review</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="review">Review: </label>
          <textarea
            name="review"
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
            review: review.tutor_review,
            game: parseInt(tutorId.tutorId),
          };

          // Send POST request to your API
          reviewTutor(newReview).then(() =>
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








