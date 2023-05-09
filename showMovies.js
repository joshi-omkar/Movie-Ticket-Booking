const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=c4540fc94d15227a9266c3801640f813`;

const moviesContainer = document.querySelector(".movies");

const showMovies = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
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
    })
    .catch((error) => {
      console.error(error);
    });
};
showMovies()