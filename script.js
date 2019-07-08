var convertButton = document.querySelector('.convert-button');
var urlInput = document.querySelector('.URL-input');

convertButton.addEventListener('click', () => {
    console.log(`URL: ${urlInput.value}`);
    sendURL(urlInput.value);
});

function sendURL(url) {
    window.location.href = `http://127.0.0.1:4000/download?url=${url}`;
    // fetch(`http://127.0.0.1:4000/download?url=${url}`, {
    //     method: 'GET'
    // })
    // .then(res => res.json())
    // .then(json => console.log(json));
}