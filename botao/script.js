// 11 - Botao que ao apertar vai para um lugar aleatorio da tela

const btn = document.querySelector('#no-button');

let windowWidth = innerWidth;
let windowHeight = innerHeight;

window.addEventListener('resize', () => {
    windowWidth = innerWidth;
    windowHeight = innerHeight;
});

btn.addEventListener('click', () => {
    btn.style.position = 'absolute';
    btn.style.left = `${Math.floor(Math.random() * (windowWidth - btn.offsetWidth))}px`;
    btn.style.top = `${Math.floor(Math.random() * (windowHeight - btn.offsetHeight))}px`;
});