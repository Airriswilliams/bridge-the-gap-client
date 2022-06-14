export const getTutors = () => {
    return fetch("http://localhost:8000/tutors", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleTutor = (id) => {
    return fetch(`http://localhost:8000/tutors/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }).then((response) => response.json());
  };

  export const reviewTutor = (tutor) => {
    return fetch(`http://localhost:8000/tutors/${tutor.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tutor),
    });
  };

  export const getLanguages = () => {
    return fetch("http://localhost:8000/languages", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}