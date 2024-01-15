const mask = (selector) => {
    let setCursorPosition = (pos, elem) => {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function createMask(event) {
        let matrix = '+7 (___) ____ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        if (event.inputType === 'deleteContentBackward' && val.length <= 3) {
            this.value = matrix;
            setCursorPosition(3, this);
            return;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length === 2) {
                this.value = '';
            }
        } else if (event.type === 'focus' || event.type === 'click') {
            if (this.value.length <= 3) {
                setCursorPosition(this.value.length, this);
            } else {
                setCursorPosition(3, this);
            }
        }
    }

    function preventCursorMove(event) {
        if (event.key === 'ArrowLeft' && (this.selectionStart <= 3 || this.selectionEnd <= 3)) {
            event.preventDefault();
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
        input.addEventListener('click', createMask);
        input.addEventListener('keydown', preventCursorMove);
    });
};

export default mask;
