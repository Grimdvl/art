const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    const uploadImage = (event) => {
        event.parentNode.classList.add('active');
        let imgLink = URL.createObjectURL(event.files[0]);
        event.previousElementSibling.style.backgroundImage = `url(${imgLink})`;
        event.previousElementSibling.textContent = '';
        event.previousElementSibling.style.borderRadius = 0;
        event.previousElementSibling.style.border = 0;
        event.previousElementSibling.style.content = 'none';
        if (event.previousElementSibling && event.previousElementSibling.childNodes.length > 0) {
            event.previousElementSibling.childNodes[0].style.display = 'none';
        }
    };

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');
            
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.nextElementSibling.textContent = name;

            uploadImage(input);
        });
        input.addEventListener('change', () => {
            uploadImage(input);
        });
    });
};

export default drop;