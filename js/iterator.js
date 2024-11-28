// function makeIterator(numbers) {
//     let nextIndex = 0;
//
//     return {
//         next: function () {
//             return nextIndex < numbers.length ?
//                 { value: numbers[nextIndex++], done: false } :
//                 { value: undefined, done: true }
//         }
//     }
// }

const numberArr = [1,2,3];
// const numberIterator = makeIterator(numberArr);
const numberIterator = numberArr[Symbol.iterator]();
// 반복자를 반환하는 메서드 => 이것을 이용해서 반복자를 반환
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());

