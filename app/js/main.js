const icons = document.querySelectorAll('.section-1__icons i');
let i = 1;

setInterval(() => {
    i++

    const icon = document.querySelector('.section-1__icons .change');

    icon.classList.remove('change');

    if(i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    } else {
        icon.nextElementSibling.classList.add('change');
    }

}, 4000);

const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
});