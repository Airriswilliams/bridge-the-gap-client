export const getSessions = () => {
    return fetch("http://localhost:8000/sessions", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const leaveSession = (sessionId) => {
    return fetch(`http://localhost:8000/sessions/${sessionId}/leave`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    });
  };

  export const joinSession = (sessionId) => {
    return fetch(`http://localhost:8000/sessions/${sessionId}/signup`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    });
  };