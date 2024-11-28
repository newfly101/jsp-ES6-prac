// function log(date, importance, message) {
//     console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
// }
//
// log(new Date(), "DEBUG", "some messages");


/* 커링 */
// const log = (date) => {
//     return (importance) => {
//         return (message) => {
//             return `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`;
//         }
//     }
// }
// const getLog = log(new Date())("DEBUG")("some messages");
// console.log(getLog);

/* 커링 단순화 */
// const log = (date) => (importance) => (message) => {
//     return `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`;
// }
// const getLog = log(new Date())("DEBUG")("some messages");
// console.log(getLog);

/* 파라미터가 몇 개인지 상관 없이 한번에 처리하려면 */

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                // return curried.apply(this, [...args, ...args2]);
                return curried.apply(this, args.concat(args2));
            }
        }
    };
};
const sum = (x,y,z,j) => x+y+z+j;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4));