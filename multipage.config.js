const path = require('path');

result = {}

result.entry = {
    'index': path.join(__dirname, './index.js'),
    'main': path.join(__dirname, '../src/js/main.js'),
    'featured': path.join(__dirname, '../src/js/featured.js'),
    'about': path.join(__dirname, '../src/js/pages/about.js'),
    'article': path.join(__dirname, '../src/js/pages/article.js'),
    'blog': path.join(__dirname, '../src/js/pages/blog.js'),    
}

result.pages = [
    { chunks: ['index'], page: 'index.html', template: path.join(__dirname, '../src/pages/home.html'), },
    { chunks: ['featured'], page: 'pages/home.html', template: path.join(__dirname, '../src/pages/home.html') },
    { chunks: ['about'], page: 'pages/about.html', template: path.join(__dirname, '../src/pages/about.html') },
    { chunks: ['article'], page: 'pages/article.html', template: path.join(__dirname, '../src/pages/article.html') },
    { chunks: ['blog'], page: 'pages/blog.html', template: path.join(__dirname, '../src/pages/blog.html') },
]

module.exports = result;