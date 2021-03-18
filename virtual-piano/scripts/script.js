const COLLECTION = document.querySelectorAll('.piano-key');

COLLECTION.forEach((elem) => {
    elem.addEventListener('click', (event)=> {
        event.target.classList.add('active');
    })
})