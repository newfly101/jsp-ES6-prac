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