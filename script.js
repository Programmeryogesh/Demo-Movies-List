// <-------------menu-toggle---------->

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggle-button");
  var menu = document.querySelector(".menu");

  toggleButton.addEventListener("click", function () {
    menu.style.width = menu.style.width === "200px" ? "0px" : "200px";
  });
});

// <--------------------search Button--------------------->

let search = document.getElementById("search");

search.addEventListener("click", () => {
  window.location.href = "search.html";
});

// <--------------API DATA---------------->

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
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

fetchMovieData();

async function uploadMovies() {
  let listMovie = await fetchMovieData();

  let MoviesList = document.getElementById("Movies");

  listMovie.forEach((element, index) => {
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

    img.setAttribute("src", element.image);

    title.innerHTML = element.title;
    genre.innerHTML = element.genre;
    year.innerHTML = element.year;
  });
}

uploadMovies();

// <--------------All Movies Btn----------------->

async function showAllMovies() {
  const movieListContainer = document.getElementById("Movies");
  movieListContainer.innerHTML = "";

  try {
    const movieData = await fetchMovieData();
    movieData.forEach((movie) => {
      let listItem = document.createElement("li");
      listItem.classList.add("movie_card");
      movieListContainer.appendChild(listItem);

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
  } catch (error) {
    console.error(error);
  }
}

// <----------------comedyMovie----------------->
async function showComedyMovies() {
  const movieListContainer = document.getElementById("Movies");
  movieListContainer.innerHTML = ""; 

  try {
    const movieData = await fetchMovieData();
   
    const comedyMovies = movieData.filter(movie => movie.genre.includes('Comedy'));

    
    comedyMovies.forEach((comedyMovie) => {
    
      let listItem = document.createElement("li");
      listItem.classList.add("movie_card");
      movieListContainer.appendChild(listItem);

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

      img.setAttribute("src", comedyMovie.image);

      title.innerHTML = comedyMovie.title;
      genre.innerHTML = comedyMovie.genre;
      year.innerHTML = comedyMovie.year;
    });
  } catch (error) {
    console.error(error);
  }
}



// <----------------DramaMovie----------------->
async function showDramaMovies() {
  const movieListContainer = document.getElementById("Movies");
  movieListContainer.innerHTML = ""; 

  try {
    const movieData = await fetchMovieData();
   
    const comedyMovies = movieData.filter(movie => movie.genre.includes('Drama'));

    
    comedyMovies.forEach((DramaMovie) => {
    
      let listItem = document.createElement("li");
      listItem.classList.add("movie_card");
      movieListContainer.appendChild(listItem);

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

      img.setAttribute("src", DramaMovie.image);

      title.innerHTML = DramaMovie.title;
      genre.innerHTML = DramaMovie.genre;
      year.innerHTML = DramaMovie.year;
    });
  } catch (error) {
    console.error(error);
  }
}


// <----------------actionMovie----------------->
async function showActionMovie() {
  const movieListContainer = document.getElementById("Movies");
  movieListContainer.innerHTML = ""; 

  try {
    const movieData = await fetchMovieData();
   
    const comedyMovies = movieData.filter(movie => movie.genre.includes('Action'));

    
    comedyMovies.forEach((ActionMovie) => {
    
      let listItem = document.createElement("li");
      listItem.classList.add("movie_card");
      movieListContainer.appendChild(listItem);

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

      img.setAttribute("src", ActionMovie.image);

      title.innerHTML = ActionMovie.title;
      genre.innerHTML = ActionMovie.genre;
      year.innerHTML = ActionMovie.year;
    });
  } catch (error) {
    console.error(error);
  }
}

