window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("piano-key-active");
});

window.addEventListener('keyup', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
    key.classList.remove("piano-key-active");
});