function Person(name, email, birthday) {
    let person = Object.create(personPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}
const personPrototype = {
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const john = new Person('John', 'john@naver.com', '7-10-91');
const han = new Person('han', 'han@naver.com', '22-8-94');

console.log(john);