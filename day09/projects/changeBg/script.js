
function generateRandomColor() {
    const hex = "0123456789ABCDEF";
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(generateRandomColor());


let startInterval;
const start = document.getElementById("start")
start.addEventListener("click", function () {
    startInterval = setInterval(changeBg, 1000);

    function changeBg() {
        document.body.style.backgroundColor = generateRandomColor()
    }
})

const end = document.getElementById("end")
end.addEventListener("click", function () {
    clearInterval(startInterval)
    alert("Stopped...")
    startInterval = null;
})