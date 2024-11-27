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