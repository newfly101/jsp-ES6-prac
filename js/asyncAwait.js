async function main() {
    try {
        const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const jsonRes1 = await res1.json();
        console.log('jsonRes1', jsonRes1);

        const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        const jsonRes2 = await res2.json();
        console.log('jsonRes2', jsonRes2);
    } catch (e) {
        console.log(e);
    } finally {
        console.log("모든 작업 끝");
    }
}

main();