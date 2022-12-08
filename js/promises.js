// function getLastEvent(){
//     let username = prompt(`need username`);
//     const url = ` https://api.github.com/users/${username}/events/public`
//     fetch(url, {headers: {'Authorization': githubToken}})
//         .then(data => data.json())
//         .then((data => {
//             let result = data[0].created_at.slice(0,10)
//             $(`#input`).append(`<div class="row"> ${username}, last commit was ${result} </div>`);
//         }))
// }
//
// getLastEvent()