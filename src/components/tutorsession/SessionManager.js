export const getSessions = () => {
    return fetch("http://localhost:8000/sessions", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createSession = (session) => {
    return fetch("http://localhost:8000/sessions", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session),
    }).then(getSessions);
  };

  export const deleteSession = (sessionId) => {
    return fetch(`http://localhost:8000/sessions/${sessionId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    });
  };

export const leaveSession = (sessionId) => {
    return fetch(`http://localhost:8000/sessions/${sessionId}/leave`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    });
  };

  export const joinSession = (sessionId) => {
    return fetch(`http://localhost:8000/sessions/${sessionId}/signup`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    });
  };

  export const getLanguages = () => {
    return fetch("http://localhost:8000/languages", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}