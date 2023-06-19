import url from '../main';
import getData from './about';

getData(`${url}blog/articles/`)
    .then((data) => {
        console.log(data);
    });
