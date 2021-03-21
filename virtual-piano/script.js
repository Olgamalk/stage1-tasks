const COLLECTION = document.querySelectorAll('.piano-key');
const PIANO = document.getElementById("piano");

const startSound = (event) => {
    event.target.classList.add("piano-key-active");
}

const stopSound = (event) => {
    event.target.classList.remove("piano-key-active");
}

const startCorrespondOver = (event) => {
    if (event.target.classList.contains("piano-key")) {
        event.target.classList.add("piano-key-active");
    }

    COLLECTION.forEach((elem) => {
        elem.addEventListener("mouseover", startSound)
        elem.addEventListener("mouseout", stopSound)
    });
}

const stopCorrespondOver  = () => {
    COLLECTION.forEach((elem) => {
        elem.classList.remove("piano-key-active");
        elem.removeEventListener("mouseover", startSound)
        elem.removeEventListener("mouseout", stopSound)
    });
}

PIANO.addEventListener("mousedown", startCorrespondOver, false);
PIANO.addEventListener("mouseup", stopCorrespondOver);

PIANO.addEventListener("mousedown", (event) => {
    if(event.target.classList.contains('piano-key')) {
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
    }   
  });

function playAudio (src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

const button = document.querySelectorAll(".btn");
 button.addEventListener("click", (e) => {
     const txt = e.target.innerText;
     if (txt === 'Notes') {
         e.target.innerText = 'Letter';
     }
 })




// При клике на кнопку добавляйте ей btn-active, а со второй убирайте и потом через for(let elem of pianoKeys){
//     elem.classList.add("название класса")} так сразу будет добавляться класс ко всем piano-key

const fullScreen = document.querySelector(".fullscreen");
fullScreen.addEventListener('click', (event) => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});
