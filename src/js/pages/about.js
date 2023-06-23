import { url } from '../main';
import '../../scss/main.scss';

const aboutInner = document.querySelector('.about__inner');

export default async function getData(u) {
    const response = await fetch(u);
    return response.json();
}

getData(`${url}about`)
    .then((data) => {
        console.log(data, 'about');
        const aboutTitle = document.createElement('h1');
        aboutTitle.className = 'about__title';
        aboutTitle.innerHTML = `${data.title}`;
        aboutInner.before(aboutTitle);
        const article = document.createElement('article');
        article.className = 'about__article';
        article.innerHTML = `${data.content}`;
        aboutInner.append(article);
    });
