async function getDataById(id) {
    const url = 'https://course.vue.panfilov.academy/rest/v1/blog/article';
    const urlById = `${url}/${id}`;
    const response = await fetch(urlById);
    return response.json();
}

getDataById(2)
    .then((data) => {
        console.log(data);
    });
