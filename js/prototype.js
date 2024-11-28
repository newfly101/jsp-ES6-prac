function Person(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
}
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const john = new Person('John', 'john@naver.com', '7-10-91');
const han = new Person('han', 'han@naver.com', '22-8-94');

console.log(john);