const COLLECTION = document.querySelectorAll('.piano-key');

// COLLECTION.forEach((elem) => {
//     elem.addEventListener('mousedown', (event) => {
//         event.target.classList.add('active');
//     })
//     elem.addEventListener('mouseup', (event) => {
//         event.target.classList.remove('active');
//     })
// })

const PIANO = document.getElementById("piano");

// PIANO.addEventListener('mousedown', (event) => {
//             event.target.classList.add('active');
//         })
// PIANO.addEventListener('mouseup', (event) => {
//             event.target.classList.remove('active');
//         })

const startSound = (event) => {
    event.target.classList.add("active");
}

const stopSound = (event) => {
    event.target.classList.remove("active");
}

const startCorrespondOver = (event) => {
    if (event.target.classList.contains("piano-key")) {
        event.target.classList.add("active");
    }

    COLLECTION.forEach((elem) => {
        elem.addEventListener("mouseover", startSound)
        elem.addEventListener("mouseout", stopSound)
    });
}

const stopCorrespondOver  = () => {
    COLLECTION.forEach((elem) => {
        elem.classList.remove("active");
        elem.removeEventListener("mouseover", startSound)
        elem.removeEventListener("mouseout", stopSound)
    });
}

PIANO.addEventListener("mousedown", startCorrespondOver, false)
PIANO.addEventListener("mouseup", stopCorrespondOver)
