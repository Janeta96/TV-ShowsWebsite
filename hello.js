// //used fetch API
// //to get the response
// function searchMovie(query) {
//     const url = `https://api.tvmaze.com/search/shows?q=${query}`;
//     fetch(url)
//         //gives a promise
//         .then((response) =>
//             console.lg("got response");
//             console.log(response);
//             if(response.status >= 200 && response.status <400){
//              return response.json())//returns another promise because it takes a while to get the body (another promise because it's a long body)
//             }
//             else {
//                 throw "HTTP ERROR";
//             }
//         })
//         .then((jsonData) => {
//             const results = jsonData.map(element => element.movie.name);
//             renderResults(results);
//             document.getElementById( "errorMessage").innerHTML= "";
//
//         })//every time we have some new response from the server
//         .catch((error) => {
//             document.getElementById( "errorMessage").innerHTML= error;
//             renderResults([]);
//
//         });
// }
// function renderResults(results){
//     document.getElementById("resultsList");
//     list.innerHTML="";
//     results.forEach(result => {
//         const element = document.createElement("li");
//         element.innerText =result;
//         list.appandChild(element);
//     });
// }
// let searchTimeoutToken = 0;
// window.onload = () => {
//     const searchFiledElement = document.getElementById("searchField");
//     searchFiledElement.onkeyup = (event) => {
//         clearTimeout(searchTimeoutToken);
//         if(searchFiledElement.value.trim().length === 0){//trim will delete all the spaces from the beginning and from the end of the string of your research
//             return;
//         }
//         searchTimeoutToken = setTimeout(() => {
//             searchMovie(searchFiledElement.value);
//
//         }, 250);
//     };
// }
//
//
// // console.log("We got a response, but the body is not ready yet");
// // console.log(response);