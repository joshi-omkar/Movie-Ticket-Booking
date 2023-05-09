const searchBar = document.getElementById("search-bar");
const moviesContainer = document.querySelector(".movies");
const searchMovies = async () => {
  const searchQuery = searchBar.value;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=c4540fc94d15227a9266c3801640f813&query=${searchQuery}`
  );
  const data = await response.json();
  const movies = data.results.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  moviesContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    const movieTitle = document.createElement("h2");
    movieTitle.innerText = movie.title;
    movieEl.appendChild(movieTitle);

    const movieImg = document.createElement("img");
    movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieEl.appendChild(movieImg);

    moviesContainer.appendChild(movieEl);
  });
};

searchBar.addEventListener("input", searchMovies);
