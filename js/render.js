function renderPage() {
    fetchData('data/data.json')
        .then(data => {
            const container = document.getElementById('content');
            container.innerHTML = `<h1>${data.title}</h1><p>${data.message}</p>`;
        })
        .catch(err => {
            console.error('Failed to load data', err);
        });
}

document.addEventListener('DOMContentLoaded', renderPage);
