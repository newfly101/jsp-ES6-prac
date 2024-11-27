function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer variable: ' + outerVariable);
        console.log('Inner variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');