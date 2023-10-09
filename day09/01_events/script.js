// ? 2nd way...
// document.getElementById("owl").onclick = function(){
// alert("Owl")
// }

//? 3rd way..

// document.getElementById("owl").addEventListener("click", function () {
//     alert("clicked owl")
// })

// attchEvent()
// jQuery ->  on


// ?TO BE READ => FOR interview
// type
// timeStamp
// defaultPrevented
// target
// toElement
// srcElement
// currentTarget
// clientX
// clientY
// screenX
// screenY
// altKey
// ctrlKey
// shiftKey
// keyCode
//

// ? EVENT PROPOGATION.....
// document.getElementById("images").addEventListener("click", function (e) {
//     console.log("UL Clicked")
// }, false)

// document.getElementById("owl").addEventListener("click", function (e) {
//     console.log("owl clicked")
//     // e.stopPropagation();
// }, false)

// document.getElementById("google").addEventListener("click", function (e) {
//     e.preventDefault()
//     console.log("google clicked");
// }, false)

// Projects ways 

document.querySelector("#images").addEventListener("click", function (e) {
    console.log(e.target.parentNode);
    let removeIt = e.target.parentNode
    // removeIt.remove() //1st 
    removeIt.parentNode.removeChild(removeIt) // 2nd
})