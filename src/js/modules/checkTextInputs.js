const checkTextInputs = (selector, limit = 20) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (selector === '[name="name"]') {
                if (e.key.match(/[^а-яё]/i) || this.value.length >= limit) {
                    e.preventDefault();
                }
            } else {
                if ((e.key.match(/[^а-яё]/i) && e.key !== ' ') || this.value.length >= limit) {
                    e.preventDefault();
                }
            }
        });

        if (selector === '[name="name"]') {
            input.setAttribute('autocomplete', 'off');
        }
    });
};

export default checkTextInputs;