function B() {
    // 비동기로 작업 실행
    setTimeout(function () {
        console.log('B--1......');
    }, 1500);
}

function A() {
    console.log('A--1......');
    B();
    console.log('A--2......');
}

A();