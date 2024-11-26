const form = document.querySelector('form');
const div = form.querySelector('div');
const p = form.querySelector('p');

form.onclick = function (event) {
    event.target.style.backgroundColor = 'cyan';

    if (event.target === p) {
        event.stopPropagation();
        console.trace(`event bubble stopped = ${event.target.tagName}`);
        event.target.style.backgroundColor = '';
    } else {
        setTimeout(() => {
            console.log(`target = ${event.target.tagName}, this = ${this.tagName}`);
            event.target.style.backgroundColor = '';
        }, 1000);
    }
};

// event capturing
for(let element of document.querySelectorAll('*')) {
    element.addEventListener("click", e => console.log(`캡처링 : ${element.tagName}`), {capture: true});
    element.addEventListener("click", e => console.log(`버블링 : ${element.tagName}`));
}