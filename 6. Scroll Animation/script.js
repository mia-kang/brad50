const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const bottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const top = box.getBoundingClientRect().top;

        if(top < bottom) {
            box.classList.add('active');
        } else {
            box.classList.remove('active')
        }

    });

}

