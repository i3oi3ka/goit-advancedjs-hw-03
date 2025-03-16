const refs = {
  form: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

const KEY = '49310743-65b3f3ce2dd3324f0da11ae2e';
const BASE_URL = 'https://pixabay.com';
const ENDPOINT = 'api';
const ACTIVE_CLASS = 'active';

export { refs, KEY, BASE_URL, ENDPOINT, ACTIVE_CLASS };
