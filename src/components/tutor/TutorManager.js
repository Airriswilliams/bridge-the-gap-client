export const getTutors = () => {
    return fetch("http://localhost:8000/tutors", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}