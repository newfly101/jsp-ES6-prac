const Score = (() => {
    let count = 0;
    return {
        current: () => { return count},
        increment: () => { count++},
        reset: () => {count = 0}
    }
})()
console.log(typeof Score);
console.log(Score);