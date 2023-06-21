export const url = 'https://course.vue.panfilov.academy/rest/v1/';

export function createArticle(className, data) {
    const article = document.createElement('article');
    article.className = `${className} article`;
    const articleTag = document.createElement('span');
    articleTag.className = 'article__tag';
    articleTag.innerHTML = `${data.tag}`;
    article.append(articleTag);
    const articleTitle = document.createElement('h2');
    articleTitle.className = 'article__title';
    article.append(articleTitle);
    const articleLink = document.createElement('a');
    articleLink.href = '#';
    articleLink.target = '_blank';
    articleLink.innerHTML = `${data.title.replace(data.tag, '')}`;
    articleTitle.append(articleLink);
    const articleInfo = document.createElement('div');
    articleInfo.className = 'article__info';
    article.append(articleInfo);
    const articleAuthor = document.createElement('span');
    articleAuthor.className = 'article__author';
    articleAuthor.innerHTML = `${data.author}`;
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
    const articleText = document.createElement('p');
    articleText.className = 'article__text';
    articleText.innerHTML = `${data.description}`;
    article.append(articleText);
    return article;
}
