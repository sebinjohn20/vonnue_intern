let errorParagraph = document.getElementById("error");
console.log(errorParagraph);

function purchase() {
    console.log("button clicked");
    errorParagraph.textContent = "something went wrong,";
    console.log(errorParagraph)
}
