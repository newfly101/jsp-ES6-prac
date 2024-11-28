function fetchData() {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            resolve('성공');
        } else {
            reject('실패');
        }
    });
}

fetchData()
    // resolve된 경우
    .then(function (result) {
    console.log(result);
    })
    // reject 된 경우
    .catch(function (error) {
        console.log(error);
    })