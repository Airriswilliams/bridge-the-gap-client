export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createReview = (review) => {
    return fetch("http://localhost:8000/reviews", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    }).then(getReviews);
  };
  
  export const getSingleReview = (id) => {
    return fetch(`http://localhost:8000/reviews/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }).then((response) => response.json());
  };

  export const deleteReview = (reviewId) => {
    return fetch(`http://localhost:8000/reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    });
  };
  
  