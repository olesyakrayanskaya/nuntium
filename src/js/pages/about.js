import url from '../main';

export default async function getData(u) {
    const response = await fetch(u);
    return response.json();
}

getData(`${url}about`)
    .then((data) => {
        console.log(data);
    });
