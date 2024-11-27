const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const [day1, day2, day3, day4, day5] = week;

console.log(day1);

const studentDetails = {
    firstName: 'John',
    lastName: 'Doe',
}

const {firstName: fName = 'not given', lastName} = studentDetails;
console.log(fName);
console.log(lastName);

// reducer
const arr = [0,1,2,3,4];
let result = arr.reduce( (acc, cur, idx, arr) => {
    console.log(`합산 : ${acc}, 현재값: ${cur}, index: ${idx}`);
    return acc + cur;
})
console.log(`합산 : ${result}`);