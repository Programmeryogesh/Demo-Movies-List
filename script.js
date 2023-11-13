// <-------------menu-toggle---------->

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggle-button");
  var menu = document.querySelector(".menu");

  toggleButton.addEventListener("click", function () {
    menu.style.width = menu.style.width === "200px" ? "0px" : "200px";
  });
});

// <--------------------search--------------------->

let search = document.getElementById("search");

search.addEventListener("click", () => {
  window.location.href = "search.html";
});

// <--------------API DATA---------------->
async function fetchMovieData() {
  const url = "https://imdb-top-100-movies.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e449f55a31mshc0d18bd35759299p107472jsnd3c7e5feef98",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchMovieData();

let MovieList = document.getElementById("Movies") ;

let listItem = document.createElement("li");
listItem.classList.add("movie_card");

MovieList.appendChild(listItem);
let div = document.createElement("div")
div.classList.add("cover-img");

let img = document.createElement("img");
div.appendChild(img);

let title = document.createElement("div")
title.classList.add("title");
MovieList.appendChild(title);

let type = document.createElement("div");
type.classList.add("type");
MovieList.appendChild(type);

let genre = document.createElement("p")
type.appendChild(genre);

let year = document.createElement("p")
type.appendChild(year);

async function uploadMovies(){
    let listMovie = await fetchMovieData();
  console.log(listMovie[0]);
}

uploadMovies();

// img.setAttribute('src', listMovie[1].image)

// title.innerHTML = listMovie[1].title;
// genre.innerHTML = listMovie[1].genre;
// year.innerHTML = listMovie[1].year;