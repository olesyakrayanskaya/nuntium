import { url } from '../main';
import '../../scss/main.scss';

export default async function getData(u) {
    const response = await fetch(u);
    return response.json();
}

getData(`${url}about`)
    .then((data) => {
        console.log(data, 'about');
    });
