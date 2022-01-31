const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progressbar = document.getElementById('progressbar');
const circles = document.querySelectorAll('.circle');

let current = 1;

next.addEventListener('click', () => {

    current++;

    if(current > circles.length) {
        current = circles.lenth;
    }

    update();
})


prev.addEventListener('click', ()=>{

    current--;

    if(current < 1) {
        current = 1;
    }

    update();

})


function update() {
    circles.forEach((circle, idx) => {
        if(idx < current) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    } )

    const actives = document.querySelectorAll('.active');


    progressbar.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';


    // console.log(progressbar.style.width);

    if(current === 1) {
        prev.disabled = true;
    } else if(current === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false;
    }



}
