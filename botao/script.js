// 11 - Botao que ao apertar vai para um lugar aleatorio da tela

const btn = document.querySelector('#no-button');

function getButtonWidth() {
    let buttonWidth = (btn.style.width).split('');
    buttonWidth.splice(-2);
    buttonWidth = Number(buttonWidth.join(''));

    return buttonWidth;
}

function getButtonHeight() {
    let buttonWidth = (btn.style.width).split('');
    buttonWidth.splice(-2);
    buttonWidth = Number(buttonWidth.join(''));

    return buttonWidth;
}

function init() {
    btn.style.position = 'absolute';
    btn.style.width = '80px';
    btn.style.height = '30px';
}

let windowWidth = innerWidth;
let windowHeight = innerHeight;

window.addEventListener('resize', () => {
    windowWidth = innerWidth;
    windowHeight = innerHeight;
});

btn.addEventListener('click', () => {
    init();
    btn.style.left = `${Math.floor(Math.random() * (windowWidth - getButtonWidth()))}px`;
    btn.style.top = `${Math.floor(Math.random() * (windowHeight - getButtonHeight()))}px`;
});