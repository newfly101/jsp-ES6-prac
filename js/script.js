window.onload = function () {
    let text = document.getElementById("text");
    // console.log(text);

    text.innerText = "HTML 문서 loaded";
}

const button = document.querySelector("button");
button.addEventListener("click", function () {
    alert('button clicked');
});