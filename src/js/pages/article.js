import { url, getData } from '../main';
import '../../scss/main.scss';

async function getDataById(id) {
    const response = await fetch(`${url}blog/article/${id}`);
    return response.json();
}

function createBannerArticle(className, data) {
    const header = document.getElementById('headerID');
    const banner = document.createElement('section');
    banner.className = `${className}`;
    banner.style.backgroundImage = `url('${data.image}')`;
    header.after(banner);
}

function createArticle(className, data) {
    const article = document.createElement('article');
    article.className = `${className}`;
    const articleTitle = document.createElement('h2');
    articleTitle.className = 'article__title';
    articleTitle.innerHTML = `${data.title}`;
    const articleLink = document.createElement('a');
    articleLink.href = './article.html';
    article.append(articleLink);
    articleLink.append(articleTitle);
    const articleInfo = document.createElement('div');
    articleInfo.className = 'article__info';
    article.append(articleInfo);
    const articleAuthor = document.createElement('span');
    articleAuthor.className = 'article__author';
    articleAuthor.innerHTML = `${data.author.name}`;
    articleInfo.append(articleAuthor);
    const articleDot = document.createElement('div');
    articleDot.className = 'article__dot';
    articleInfo.append(articleDot);
    const articleCreatedTime = document.createElement('span');
    articleCreatedTime.className = 'article__time';
    const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    };
    const createdDate = new Date(data.createdAt * 1000);
    articleCreatedTime.innerHTML = `${createdDate.toLocaleDateString('en-US', options)}`;
    articleInfo.append(articleCreatedTime);
    const articleReadTime = document.createElement('span');
    articleReadTime.className = 'article__readtime';
    articleReadTime.innerHTML = `( ${Math.ceil(data.readTime / 60)} mins read)`;
    articleInfo.append(articleReadTime);
    const articleHashTag = document.createElement('span');
    articleHashTag.className = 'article__hashtags';
    articleHashTag.innerHTML = `${data.tag.name}`;
    article.append(articleHashTag);
    const articleText = document.createElement('p');
    articleText.className = 'article__text';
    articleText.innerHTML = `${data.description}`;
    article.append(articleText);
    return article;
}

function createAboutAuthor(data) {
    const aboutAuthorArticle = document.querySelector('.about-author__article');
    const aboutAuthorTitle = document.createElement('h2');
    aboutAuthorTitle.className = 'about-author__title';
    aboutAuthorTitle.innerHTML = `${data.author.name}`;
    aboutAuthorArticle.append(aboutAuthorTitle);
    const aboutAuthorNick = document.createElement('span');
    aboutAuthorNick.className = 'about-author__autor';
    aboutAuthorNick.innerHTML = `@${data.author.nick}`;
    aboutAuthorArticle.append(aboutAuthorNick);
    const aboutAuthorText = document.createElement('p');
    aboutAuthorText.className = 'about-author__text';
    aboutAuthorText.innerHTML = `${data.author.about}`;
    aboutAuthorArticle.append(aboutAuthorText);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const articleID = urlParams.get('article') || 1;
const linkBack = document.querySelector('#back');
const linkNext = document.querySelector('#next');
const textBack = document.querySelector('#title-back');
const textNext = document.querySelector('#title-next');

const articlesData = await getData(`${url}blog/articles/`);

getDataById(articleID)
    .then((data) => {
        createBannerArticle('banner', data);
        const article = createArticle('banner__article article article_lg', data);
        const articleWrapper = document.querySelector('.article__wrapper');
        articleWrapper.append(article);
        createAboutAuthor(data);
        linkBack.href = `./article.html?article=${data.prevId || 1}`;
        linkNext.href = `./article.html?article=${data.nextId || 1}`;
        const prevArticleTitle = articlesData[data.prevId].title;
        const nextArticleTitle = articlesData[data.nextId].title;
        textBack.innerHTML = `${prevArticleTitle || articlesData[1].title}`;
        textNext.innerHTML = `${nextArticleTitle || articlesData[1].title}`;
    });
