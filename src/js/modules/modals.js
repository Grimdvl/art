const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll(),
              width = document.querySelector('#width'),
              height = document.querySelector('#height'),
              checkboxes = document.querySelectorAll('.checkbox');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                
                if (modalSelector == '.popup_calc_profile' && (height.value === '' || width.value === '')) {
                    console.log('input width & height pls');
                    return;
                }

                if (modalSelector == '.popup_calc_end') {
                    let isChecked = false;
                    checkboxes.forEach(checkbox => {
                        if (checkbox.checked) {
                            isChecked = true;
                        }
                    });
                    
                    if (!isChecked) {
                        console.log('Choose warm or cold, please');
                        return;
                    }
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                // document.body.style.overflow = 'hidde1n';
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = '0px';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                // document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = '0px';
            }
        });


    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.classList.remove('modal-open');
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    // showModalByTime('.popup-consultation', 60000);
};

export default modals;