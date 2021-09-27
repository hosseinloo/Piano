"use strict"

const NOTE = document.getElementById('note');
const KEYS = document.querySelectorAll('.key-p');
const BLACK_WORD = document.querySelectorAll('.sharp .hints');
const WHITE_WORD = document.querySelectorAll('.key .hints');

window.addEventListener('keydown', function(e) {
    const KEY = document.querySelector(`.key-p[data-key="${e.keyCode}"]`);
    const AUDIO = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!KEY) return;
    const KEY_NOTE = KEY.getAttribute('data-note');
    
    KEY.classList.add('playing');
    NOTE.innerHTML = KEY_NOTE;
    AUDIO.currentTime = 0;
    AUDIO.play();
    if (KEY) {
        setTimeout(() => {
            NOTE.innerHTML = "";
        }, 6000)
    }
});


function removeTransition() {
    this.classList.remove('playing');
}

KEYS.forEach(el => el.addEventListener('transitionend', removeTransition));

WHITE_WORD.forEach((el, index) => {
        el.style = `transition-delay: ${index * 90}ms`;
})
BLACK_WORD.forEach((el, index) => {
    el.style = `transition-delay: ${index * 80}ms`;
})

