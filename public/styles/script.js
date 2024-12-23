document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/example')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            content.innerHTML = `<p>${data.message}</p>`;
        })
        .catch(error => console.error('Error fetching data:', error));
});
