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

    // доделать что б картикна появлялась на страничке 
    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');
            
            input.parentNode.classList.add('active');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.nextElementSibling.textContent = name;

            let imgLink = URL.createObjectURL(input.files[0]);
            input.previousElementSibling.style.backgroundImage = `url(${imgLink})`;
            input.previousElementSibling.textContent = '';
            input.previousElementSibling.style.borderRadius = 0;
            input.previousElementSibling.style.border = 0;
            input.previousElementSibling.style.content = 'none';
            if (input.previousElementSibling && input.previousElementSibling.childNodes.length > 0) {
                input.previousElementSibling.childNodes[0].style.display = 'none';
            }
        });
        input.addEventListener('change', () => {
            input.parentNode.classList.add('active');
            let imgLink = URL.createObjectURL(input.files[0]);
            input.previousElementSibling.style.backgroundImage = `url(${imgLink})`;
            input.previousElementSibling.textContent = '';
            input.previousElementSibling.style.borderRadius = 0;
            input.previousElementSibling.style.border = 0;
            input.previousElementSibling.style.content = 'none';
            if (input.previousElementSibling && input.previousElementSibling.childNodes.length > 0) {
                input.previousElementSibling.childNodes[0].style.display = 'none';
            }
        });
    });
};

export default drop;