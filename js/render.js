import { fetchData, parseMarkdown, incrementLike, getLikes, incrementView, getViews } from './utils.js';

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
    incrementView(post.id);
    const container = document.getElementById('feed');

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const date = new Date(post.date);
    const formattedDate = date.toLocaleDateString();

    let images = '';
    if (Array.isArray(post.images)) {
        images = post.images.map(src => `<img src="${src}" alt="">`).join('');
    }

    const likes = getLikes(post.id);
    const views = getViews(post.id);

    postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <div class="date">${formattedDate}</div>
        <div class="body">${parseMarkdown(post.body)}</div>
        <div class="images">${images}</div>
        <div class="meta">Views: <span class="views">${views}</span> Likes: <span class="likes">${likes}</span></div>
        <button class="like-btn">Like</button>
    `;

    const likeBtn = postDiv.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => {
        const newLikes = incrementLike(post.id);
        postDiv.querySelector('.likes').textContent = newLikes;
    });

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
