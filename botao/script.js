// 11 - Botao que ao apertar vai para um lugar aleatorio da tela

const btn = document.querySelector('#no-button');

function getButtonWidth() {
    let buttonWidth = getComputedStyle(btn).width.split('');
    buttonWidth.splice(-2);
    buttonWidth = Number(buttonWidth.join(''));

    return buttonWidth;
}

function getButtonHeight() {
    let buttonHeight = getComputedStyle(btn).height.split('');
    buttonHeight.splice(-2);
    buttonHeight = Number(buttonHeight.join(''));

    return buttonHeight;
}

console.log(getComputedStyle(btn).height);
console.log(getButtonWidth());

let windowWidth = innerWidth;
let windowHeight = innerHeight;

window.addEventListener('resize', () => {
    windowWidth = innerWidth;
    windowHeight = innerHeight;
});

btn.addEventListener('click', () => {
    btn.style.position = 'absolute';
    btn.style.left = `${Math.floor(Math.random() * (windowWidth - getButtonWidth()))}px`;
    btn.style.top = `${Math.floor(Math.random() * (windowHeight - getButtonHeight()))}px`;
});