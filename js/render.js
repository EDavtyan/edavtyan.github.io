import { fetchData, parseMarkdown } from './utils.js';

function renderPage() {
    fetchData('data/data.json')
        .then(data => {
            const container = document.getElementById('feed');
            container.innerHTML = `<h1>${data.title}</h1><p>${data.message}</p>`;
        })
        .catch(err => {
            console.error('Failed to load data', err);
        });
}

function renderPost(post) {
    const container = document.getElementById('feed');

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString();

    let images = '';
    if (Array.isArray(post.images)) {
        images = post.images.map(src => `<img src="${src}" alt="">`).join('');
    }

    postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <div class="date">${formattedDate}</div>
        <div class="body">${parseMarkdown(post.body)}</div>
        <div class="images">${images}</div>
    `;

    container.appendChild(postDiv);
}

function loadPosts() {
    fetchData('data/posts.json')
        .then(posts => {
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));
            posts.forEach(renderPost);
        })
        .catch(err => console.error('Failed to load posts', err));
}

document.addEventListener('DOMContentLoaded', () => {
    renderPage();
    loadPosts();
});
