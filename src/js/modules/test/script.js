const dropArea = document.querySelector('#drop-area');
const inputFile = document.querySelector('#input-file');
const imageView = document.querySelector('#img-view');

inputFile.addEventListener('change', uploadImage);

function uploadImage () {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = '';
    imageView.style.border = 0;
}

dropArea.addEventListener('dragover', function(e) {
    e.preventDefault();
});
dropArea.addEventListener('drop', function(e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});