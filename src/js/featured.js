import url from './main';
import getData from './pages/about';

getData(`${url}blog/featured/`)
    .then((data) => {
        console.log(data);
    });
