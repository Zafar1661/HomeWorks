var counterElement = document.getElementById("counter");
var counter = 0

document.querySelector("#add-count-button").onclick = function (){
    counter++;
    counterElement.innerHTML = counter

}

document.querySelector("#lower-count-button").onclick = function () {
    counter - 1 >= 0 ? counter-- : 0;
    counterElement.innerHTML = counter
}
