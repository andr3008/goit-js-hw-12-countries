import './sass/main.scss';
import countryCards from '../templates/temp.hbs';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';
const refs = getRefs();
refs.inputSearch.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;

  const searchQuery = form.elements.query.value;

  API.fetchCountryByName(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderCountryCard(name) {
  const markup = countryCards(name);
  console.log(markup);
  refs.cardContainer.innerHTML = markup;
}
function onFetchError(error) {
  console.log(error);
}
