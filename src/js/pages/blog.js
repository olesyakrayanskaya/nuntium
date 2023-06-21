import { url } from '../main';
import getData from './about';
import '../../scss/main.scss';

getData(`${url}blog/articles/`)
    .then((data) => {
        console.log(data, 'blog');
    });
