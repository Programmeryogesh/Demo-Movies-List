// <-------------Search Movies----------->
async function fetchMovieData() {
  const url = 'https://imdb-top-100-movies.p.rapidapi.com';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8e2b36aaf6msh416e8100d6f8de2p17acddjsn0debffdef58d',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  }
  
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
async function searchMovies() {
  const searchQuery = document.getElementById("searchInput").value.toLowerCase()

  try {
    const movieData = await fetchMovieData();
    const filteredMovies = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery)
    );
    displayMovies(filteredMovies);
  } catch (error) {
    console.error(error);
  }
  
}

function displayMovies(moviesToShow) {
  moviesToShow.forEach((movie) => {
    let MoviesList = document.getElementById("MovieList");
    
    let listItem = document.createElement("li");
    listItem.classList.add("movie_card");
    MoviesList.appendChild(listItem);

    let div = document.createElement("div");
    div.classList.add("cover-img");

    let img = document.createElement("img");
    div.appendChild(img);
    listItem.appendChild(div);

    let title = document.createElement("div");
    title.classList.add("title");
    listItem.appendChild(title);

    let type = document.createElement("div");
    type.classList.add("type");
    listItem.appendChild(type);

    let genre = document.createElement("p");
    type.appendChild(genre);

    let year = document.createElement("p");
    type.appendChild(year);

    img.setAttribute("src", movie.image);

    title.innerHTML = movie.title;
    genre.innerHTML = movie.genre;
    year.innerHTML = movie.year;
  });
}


// <-----------home page----------->
let search = document.getElementById("return-home");

search.addEventListener("click", () => {
  window.location.href = "index.html";
});