import { createArticle, url } from '../main';
import '../../scss/main.scss';

async function getDataFeatured() {
    const response = await fetch(`${url}blog/featured/`);
    return response.json();
}

function createBannerTop(className, data) {
    const header = document.getElementById('headerID');
    const banner = document.createElement('section');
    banner.className = `${className}`;
    banner.style.backgroundImage = `url('${data.image}')`;
    header.after(banner);
    const article = createArticle('banner__article', data);
    banner.append(article);
}

getDataFeatured()
    .then((data) => {
        createBannerTop('banner', data);
    });
