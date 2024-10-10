const character = document.getElementById('character');

let keyState = {};
window.addEventListener('keydown', function (e) {
    keyState[e.keyCode || e.which] = true;
}, true);
window.addEventListener('keyup', function (e) {
    keyState[e.keyCode || e.which] = false;
}, true);

let x = 0;

function gameLoop() {
    let move = 0;
    if (keyState[37]) {
        move = -1;
        character.classList.add('left');
        character.classList.remove('right');
    }
    if (keyState[39]) {
        move = 1;
        character.classList.add('right');
        character.classList.remove('left');
    }

    x += move;

    if (!move) {
        character.classList.add('resting');
        character.classList.remove('left');
        character.classList.remove('right')

    }
    character.style.marginLeft = x * 10 + "px"

    setTimeout(gameLoop, 10);
}
gameLoop();