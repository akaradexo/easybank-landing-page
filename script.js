
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('nav ul');
closeBtn.style.display = "none";

window.addEventListener('mousemove', () => {
    if (window.innerWidth > 678) {
        openBtn.style.display = "none";
        closeBtn.style.display = "none";
    }
});

openBtn.addEventListener('click', () => {
    menu.classList.add('show_menu');
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    setTimeout(() => {
        menu.classList.add('opacity_1');
    }, 0);
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('show_menu');
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    menu.classList.add('opacity_0');
});


