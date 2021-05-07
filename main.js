const keys = document.getElementsByClassName('drum-pad')

const keyClick = (e) => {
    const element = e.target;

    const audio = element.firstElementChild;
    audio.play();

    const text = element.id;
    document.getElementById('display').innerText = text;
}

Array.from(keys).forEach(key => {
    key.addEventListener('click', keyClick)
})