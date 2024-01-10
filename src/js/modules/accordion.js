const accordion = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector);
        //   blocks = document.querySelectorAll(itemsSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            const isActive = this.classList.contains('active-style');

            if (isActive) {
                this.classList.remove('active-style');
                this.nextElementSibling.classList.remove('active-content');
                this.nextElementSibling.style.maxHeight = '0px';
            } else {
                btns.forEach(otherBtn => {
                    otherBtn.classList.remove('active-style');
                    otherBtn.nextElementSibling.classList.remove('active-content');
                    otherBtn.nextElementSibling.style.maxHeight = '0px';
                });

                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            }
        });
    });

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;