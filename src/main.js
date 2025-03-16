import { handlerForm } from './js/pixabay-api';
import { refs } from './js/consts';

console.log(refs.form);
refs.form.addEventListener('submit', handlerForm);
