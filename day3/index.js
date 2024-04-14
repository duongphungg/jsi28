// const callApi = (apiLink) => {
//     let response = fetch(apiLink)
//     .then((response) => {
//         return response.json()

//     .then(data => {
//         return data
//     })
    
//     .catch(error => {
//         return error
//         console.log(error)
//     })
//     })
// }

// callApi



// Gọi dữ liệu
    async function callAPI(apilink) {
        let response = await fetch(apilink)

        let userData = await response.json()

        console.log(userData)
    }

    callAPI('https://jsonplaceholder.typicode.com/users')

// Hiển thị dữ liệu