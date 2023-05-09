const API_KEY = "c4540fc94d15227a9266c3801640f813";
const API_URL = "https://api.themoviedb.org/3/";
const IMG_URL = "https://image.tmdb.org/t/p/w300";

let genre = null;

function getMovies() {
  let url = `${API_URL}discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
  if (genre !== null) {
    url += `&with_genres=${genre}`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let moviesRender = data.results.map((movie, index) => {
        return `
          <div class="movie" data-index="${index}">
            <img src="${IMG_URL}${movie.poster_path}" style="background-image: url(${IMG_URL}${movie.poster_path})">
            <span>${movie.title}</span>
            <small>${movie.release_date}</small>
          </div>
        `;
      });
      document.querySelector(".covers").innerHTML = moviesRender.join("");
    });
}
function filterMovies(event) {
  genre = event.target.getAttribute("data-id");
  getMovies();
}

document.querySelectorAll(".genres li").forEach((li) => {
  li.addEventListener("click", filterMovies);
});

getMovies();
