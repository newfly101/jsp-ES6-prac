class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    introduce() {
        return `Hello ${this.name}!`;
    }
}

class Client extends Person {
    constructor(name, email, phone, address) {
        // 부모 클래스에서 상속받아서 속성을 불러올 때 super() 사용
        super(name, email);

        this.phone = phone;
        this.address = address;
    }
}

const john = new Client('John', 'john@naver.com', '010-4451-3570', '서울');
console.log(john.introduce());
console.log(john);
