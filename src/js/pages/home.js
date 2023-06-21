import url from '../main';
import getData from './about';
import '../../scss/main.scss';

function createArticle(image) {
    const header = document.getElementById('headerID');
    console.log(header);
    const banner = document.createElement('section');
    banner.className = 'banner';
    banner.style.backgroundImage = `url('${image}')`;
    console.log(banner);
    header.after(banner);
    const article = document.createElement('article');
    article.className = 'banner__article article';
    banner.append(article);
}

getData(`${url}blog/featured/`)
    .then((data) => {
        console.log(data);
        const {
            tag,
            title,
            author,
            createdAt: date,
            readTime,
            description: articleText,
            image,
        } = data;
        console.log(tag, title, author, date, readTime, articleText, image);
        const options = {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        };
        const createdDate = new Date(date * 1000);
        const readTimeMin = Math.ceil(readTime / 60);
        const createdDateFormated = createdDate.toLocaleDateString('en-US', options);
        const articleTitle = title.replace(tag, '');
        console.log(createdDateFormated, readTimeMin, articleTitle);
        createArticle(image);
        console.log('featured');
    });
