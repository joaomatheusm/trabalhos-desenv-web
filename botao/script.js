// 11 - Botao que ao apertar vai para um lugar aleatorio da tela

const btn = document.querySelector('#no-button');

function getButtonDimensions() {
    const buttonWidth = getComputedStyle(btn).width.replace('px', '');
    const buttonHeight = getComputedStyle(btn).height.replace('px', '');

    return {
        width: buttonWidth,
        height: buttonHeight
    };
}

let windowWidth = innerWidth;
let windowHeight = innerHeight;

window.addEventListener('resize', () => {
    windowWidth = innerWidth;
    windowHeight = innerHeight;
});

btn.addEventListener('click', () => {
    btn.style.position = 'absolute';
    btn.style.left = `${Math.floor(Math.random() * (windowWidth - getButtonDimensions().width))}px`;
    btn.style.top = `${Math.floor(Math.random() * (windowHeight - getButtonDimensions().height))}px`;
});