const audio = {
    title: 'a',
    play() {
        console.log(`play this : `, this);
    }
}

audio.play();

function playAudio() {
    console.log(this);
}

playAudio();

function Audio(title) {
    this.title = title;
    console.log(this);
}

const audio2 = new Audio('a');

const emp = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop', 'jazz'],
    displayCategories() {
        this.categories.forEach((category) => {
            console.log(this);
           // console.log(`title:${this.title}, category:${category}`);
        });
    }
}
emp.displayCategories();