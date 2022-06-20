export const getParents = () => {
    return fetch("http://localhost:8000/", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}