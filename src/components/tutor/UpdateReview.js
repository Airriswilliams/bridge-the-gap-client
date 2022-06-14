import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editReview, getSingleReview } from "../review/ReviewManager.js";

export const EditReview = () => {
    const history = useHistory()

// get original review with original data
    const [currentReview, setCurrentReview] = useState({});
    const reviewId = useParams();
    const [toggle, setToggle] = useState(false);
// get single review
    useEffect(() => {
        getSingleReview(reviewId.reviewId).then((data) => setCurrentReview(data));
    }, [])

    const changeReviewState = (domEvent) => {
        const newReview = Object.assign({}, currentReview);
        newReview[domEvent.target.name] = domEvent.target.value;
        setCurrentReview(newReview)
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
                value={currentReview.tutor_review}
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
                id: currentReview.id,
                tutor_review: currentReview.tutor_review,
                tutor: parseInt(currentReview.tutor.id),
              };
    
              // Send POST request to your API
              editReview(newReview).then(() =>
                history.push(`/reviews`)
              );
            }}
            className="btn btn-primary"
          >
            Submit Review
          </button>
        </form>
      );
    }



