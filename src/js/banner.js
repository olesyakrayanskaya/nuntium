import { createArticle, url } from './main';

export async function getDataFeatured() {
    const response = await fetch(`${url}blog/featured/`);
    return response.json();
}

export function createBannerTop(className, data) {
    const header = document.getElementById('headerID');
    const banner = document.createElement('section');
    banner.className = `${className}`;
    banner.style.backgroundImage = `url('${data.image}')`;
    header.after(banner);
    const article = createArticle('banner__article article', data);
    banner.append(article);
}
