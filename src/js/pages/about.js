export default async function getData(url = '') {
    const response = await fetch(url);
    return response.json();
}

getData('https://course.vue.panfilov.academy/rest/v1/about')
    .then((data) => {
        console.log(data);
    });
