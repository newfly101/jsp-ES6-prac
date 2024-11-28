class Person {
    constructor(name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
    }
    introduce() {
        return `Hello ${this.name} !`;
    }
    static multipleNumbers(x,y) {
        return x * y;
    }
}
const john = new Person('John', 'john@naver.com', '7-10-91');
console.log(john);