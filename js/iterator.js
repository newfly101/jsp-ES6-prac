function makeIterator(numbers) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < numbers.length ?
                { value: numbers[nextIndex++], done: false } :
                { value: undefined, done: true }
        }
    }
}

const numberArr = [1,2,3];
const numberIterator = makeIterator(numberArr);

console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());