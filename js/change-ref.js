const fullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
}
const fullName2 = function (city, country) {
    console.log(`${this.firstName} ${this.lastName} ${city} ${country}`);
}
const persion1 = {
    firstName: 'James',
    lastName: 'January',
}

fullName(); // undefined undefined
fullName.call(persion1); // James January
fullName2.call(persion1, 'Oslo', 'Norway'); // James January Oslo Norway

fullName2.apply(persion1, ['Oslo', 'Norway']);

//bind()
function func(lang) {
    if (lang === "kor"){
        console.log(`language : ${this.korGreeting}`);
    } else {
        console.log(`language : ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting: '해윙',
    engGreeting: 'hello',
};

const boundFunc = func.bind(greeting);
boundFunc('kor');