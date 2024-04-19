// 14 - Botao "dark mode" que muda o fundo para preto e a letra para branco e seu texto para "dark mode", e vice versa

const fundo = document.querySelector('#fundo');
const btn_darkmode = document.querySelector('#dark-mode');
const body = document.querySelector('#fundo-body');
const h1 = document.querySelector('#dark');
const aside = document.querySelector('#a-dark');

btn_darkmode.addEventListener('click', () => {
    fundo.classList.toggle('dark-mode');
    body.classList.toggle('body-dark');
    h1.classList.toggle('dark');
    aside.classList.toggle('dark');

    if (btn_darkmode.innerHTML === 'Dark Mode') {
        btn_darkmode.innerHTML = 'Light Mode';
    } else {
        btn_darkmode.innerHTML = 'Dark Mode';
    }
});