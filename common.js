// common.js
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');
});
