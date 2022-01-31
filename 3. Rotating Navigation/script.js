const shownavbtn = document.getElementById('shownav');
const nonavbtn = document.getElementById('nonav');
const container = document.getElementById('container');
const circle = document.getElementById('circle');

shownavbtn.addEventListener('click', ()=>{
    container.classList.add('rotate');
    circle.classList.add('rotate');
});

nonavbtn.addEventListener('click', ()=>{
    container.classList.remove('rotate');
    circle.classList.remove('rotate');
});

