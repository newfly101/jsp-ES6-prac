// item 추가 되는 count
const count = 20;
let itemIndex = 0;

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const list = document.querySelector('.list');

        if (entry.isIntersecting) {
            for (let i = itemIndex; i < itemIndex + count; i++) {
                let item = document.createElement('p');

                item.textContent = i+1;
                item.className += 'item';
                list.appendChild(item);
            }

            itemIndex = itemIndex + count;
        }
    })
}, {root: null, threshold: 1});

observer.observe(document.querySelector('.end'));