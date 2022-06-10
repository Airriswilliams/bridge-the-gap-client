export const getParents = () => {
    return fetch("http://localhost:8000/parents", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}