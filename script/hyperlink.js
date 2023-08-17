document.addEventListener("DOMContentLoaded", function () {
  const goToMovie = document.getElementById("goToMovie");

  goToMovie.addEventListener("click", function () {
    // Navigate to the desired HTML page
    window.location.href = "movie.html";
  });
});
