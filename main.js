const pad = document.getElementsByClassName('drum-pad');
const machine = document.getElementById('wrapper');

const keyClick = (e) => {
    const key = e.key.toUpperCase();
    const id = 'Key-' + key;

    const target = document.getElementById(id);

    if (target) {
        handlePlay(target);
    }
}

machine.addEventListener('keyup', keyClick)

const padClick = (e) => {
    const element = e.target;
    handlePlay(element);
}

const handlePlay = (element) => {

    const audio = element.firstElementChild;
    audio.play();

    const text = element.id;
    document.getElementById('display').innerText = text;
}

Array.from(pad).forEach(key => {
    key.addEventListener('click', padClick);
})