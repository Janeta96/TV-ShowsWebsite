function searchTvShows(query) {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    fetch(url)
        .then((response) => {
            if (response.status >= 200 && response.status < 400) {
                return response.json();
            } else {
                throw new Error("HTTP ERROR");
            }
        })
        .then((jsonData) => {
            console.log(jsonData);
            const resultsContainer = document.getElementById("resultsList");
            resultsContainer.innerHTML = "";

            if(jsonData.length === 0){
                const noResultsMessage = document.createElement("p");
                noResultsMessage.innerHTML="Your search didn't have any matches.";
                noResultsMessage.classList.add("no-results-message");
                resultsContainer.appendChild(noResultsMessage);

            } else {
                jsonData.forEach((element) => {
                    const showName = element.show.name;
                    const showImage = element.show.image.medium;

                    const resultContainer = document.createElement("div");
                    const imageElement = document.createElement("img");
                    const textElement = document.createElement("p");

                    // Set image source
                    imageElement.src = showImage;

                    // Set show name as text content
                    textElement.innerText = showName;

                    // Add click event to the text element
                    imageElement.addEventListener("click", function () {
                        // Get the IMDb ID from the API response (if available)
                        const imdbId = element.show.externals && element.show.externals.imdb;

                        // Redirect to IMDb page if IMDb ID is available
                        if (imdbId) {
                            window.open(`https://www.imdb.com/title/${imdbId}`, "_blank");
                        } else {
                            console.log("IMDb ID not available");
                            // Handle the case when IMDb ID is not available
                        }
                    });

                    // Append elements to the result container
                    resultContainer.appendChild(imageElement);
                    resultContainer.appendChild(textElement);

                    // Append the result container to the results container
                    resultsContainer.appendChild(resultContainer);
                });
            }

            document.getElementById("errorMessage").innerHTML = "";
        })
        .catch((error) => {
            document.getElementById("errorMessage").innerHTML = error.message;
        });
}

let searchTimeoutToken = 0;
window.onload = () => {
    const searchFieldElement = document.getElementById("searchFields");
    const searchButton = document.getElementById("featured-button");

    searchButton.onclick = (event) => {
        clearTimeout(searchTimeoutToken);

        if (searchFieldElement.value.trim().length === 0) {
            return;
        }

        searchTimeoutToken = setTimeout(() => {
            searchTvShows(searchFieldElement.value);
        }, 250);
    };

    document.getElementById("logo").addEventListener("click", function () {
        console.log("Logo Clicked");
        document.getElementById("resultsList").innerHTML = "";
        document.getElementById("errorMessage").innerHTML = "";
    });
}



