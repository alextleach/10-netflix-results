export default function netflixResult(element,movieTitle) {

  fetch ('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
    .then((res) => res.json())
    .then((netflixData) => {

    const movieTitle = element.querySelector('.movie__title__h2');
    movieTitle.innerText = netflixData.show_title;

    const movieGenre = element.querySelector('.movie__title__genre');
    movieGenre.innerText = netflixData.category;

    const movieRating = element.querySelector('.movie__title--rating');
    movieRating.innerText = netflixData.rating;

    const movieSummary = element.querySelector('.movie__summary');
    movieSummary.innerText = netflixData.summary;

    const movieActors = element.querySelector('.movie__actors');
    movieActors.innerText = netflixData.show_cast;

    const movieImage = element.querySelector('.movie__image--img');
    movieImage.src = netflixData.poster;

    console.log(netflixData);

  });

  console.log(element);


};
