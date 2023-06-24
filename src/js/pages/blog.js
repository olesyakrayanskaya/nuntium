import {
    url,
    getData,
    createArticle,
    createArticlesItem,
} from '../main';
import { getDataFeatured, createBannerTop } from '../banner';
import '../../scss/main.scss';

const articlesInner = document.querySelector('.articles__inner');

getDataFeatured()
    .then((data) => {
        createBannerTop('banner', data);
    });

getData(`${url}blog/articles/`)
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            const articlesItem = createArticlesItem(data[i]);
            articlesInner.append(articlesItem);
            const article = createArticle('articles__article article_sm', data[i]);
            articlesItem.append(article);
        }
    });
