function* sayNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const number = sayNumbers();

console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);