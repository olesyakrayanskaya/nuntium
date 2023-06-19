import url from '../main';

async function getDataById(id) {
    const response = await fetch(`${url}blog/article/${id}`);
    return response.json();
}

getDataById(2)
    .then((data) => {
        console.log(data);
    });
