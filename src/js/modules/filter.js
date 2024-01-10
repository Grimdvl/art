const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        const allMarks = wrapper.querySelectorAll('.all');
        
        allMarks.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    menu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.tagName === 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
            
            const btnClass = target.classList[0];
            
            const markType = wrapper.querySelectorAll(`.${btnClass}`);
            typeFilter(markType);
        }
    });
};

export default filter;