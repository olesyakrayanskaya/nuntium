import getData from './about';

getData('https://course.vue.panfilov.academy/rest/v1/blog/articles/')
    .then((data) => {
        console.log(data);
    });
