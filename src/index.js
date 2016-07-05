import netflixResult from 'netflix-result'
export default function (searchClick) {

  const searchButton = document.querySelector('.search__button');
  const movieSearch = document.querySelector('.search__text');

 console.log(searchButton);

function buttonClick() {
  netflixResult(searchClick, movieSearch.value);
}

searchButton.addEventListener('click', buttonClick);
}
