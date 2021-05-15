const pad = document.getElementsByClassName('drum-pad');
const machine = document.getElementById('wrapper');
const keyup = 'keyup';
const click = 'click';
const active = 'active';
const display = 'display';

const keyClick = (e) => {
    const key = e.key.toUpperCase();
    const id = 'Key-' + key;

    const target = document.getElementById(id);
    if (target) handlePlay(target); 
}

machine.addEventListener(keyup, keyClick)

const padClick = (e) => {
    const element = e.target;
    handlePlay(element);
}

const handlePlay = (element) => {
    element.classList.toggle(active);
    const audio = element.firstElementChild;
    audio.play();

    const text = element.id;
    document.getElementById(display).innerText = text;

    setTimeout(() => {
        element.classList.toggle(active);
    }, 100); 
}

Array.from(pad).forEach(key => {
    key.addEventListener(click, padClick);
})