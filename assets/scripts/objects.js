const addBtn = document.getElementById("add-movie-btn");
const filterBtn = document.getElementById("search-btn");
const movieList = document.getElementById("movie-list");

const movies = [];

const renderMovie = (filter="") => {
  movieList.innerHTML = "";

  const filteredMovies = !filter?movies:movies.filter((value,index,array)=>{
      return value.info.title.includes(filter);
  })
  filteredMovies.forEach((movie) => {
    const newMovie = document.createElement("li");
    let text = movie.info.title + " - ";
    for (const iMovie in movie.info) {
      if (iMovie !== "title") {
        text = text + `${iMovie} : ${movie.info[iMovie]}`;
      }
    }
    newMovie.textContent = text;
    movieList.append(newMovie);
  });
  if (movieList.length === 0 || filteredMovies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
};

const addBtnHandler = () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("extra-name").value;
  const value = document.getElementById("extra-value").value;
  if (title.trim() === "" || description.trim() === "" || value.trim() === "") {
    alert("Please validate movie correctly");
    return;
  }
  const movie = {
    info: {
      title,
      [description]: value,
    },
    id: Math.random(),
  };
  movies.push(movie);
  renderMovie();
};

const filterBtnHandler = () =>{
    const filterMovie = document.getElementById("filter-title").value;
    renderMovie(filterMovie);
}

addBtn.addEventListener("click", addBtnHandler);
filterBtn.addEventListener("click", filterBtnHandler);
