export function fetchData(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });
}

export function parseMarkdown(text = '') {
    return text
        .replace(/^##\s+(.+)$/gm, '<h2>$1</h2>')
        .replace(/^#\s+(.+)$/gm, '<h1>$1</h1>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`(.+?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

function getStore() {
    return JSON.parse(localStorage.getItem('postStats') || '{}');
}

function saveStore(store) {
    localStorage.setItem('postStats', JSON.stringify(store));
}

export function getLikes(id) {
    const store = getStore();
    return store[id] ? store[id].likes || 0 : 0;
}

export function incrementLike(id) {
    const store = getStore();
    if (!store[id]) {
        store[id] = { views: 0, likes: 0 };
    }
    store[id].likes = (store[id].likes || 0) + 1;
    saveStore(store);
    return store[id].likes;
}

export function getViews(id) {
    const store = getStore();
    return store[id] ? store[id].views || 0 : 0;
}

export function incrementView(id) {
    const store = getStore();
    if (!store[id]) {
        store[id] = { views: 0, likes: 0 };
    }
    store[id].views = (store[id].views || 0) + 1;
    saveStore(store);
    return store[id].views;
}
