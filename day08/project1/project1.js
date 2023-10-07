const button = document.querySelectorAll(".button");
const body = document.querySelector("body");


button.forEach((item) => {
    item.addEventListener("click", (e) => {
        // console.log(e.target.id);
        if(e.target.id === "red"){
            body.style.backgroundColor = "red"
        }
        else if(e.target.id==="green"){
            body.style.backgroundColor = "green"
        }
        else if (e.target.id === "blue"){
            body.style.backgroundColor = "blue"
        }
        else if (e.target.id === "yellow"){
            body.style.backgroundColor = "rgb(150, 150, 4)"
        }
        else if (e.target.id === "orange") {
            body.style.backgroundColor = "orange"
        }
        else if (e.target.id === "white") {
            body.style.backgroundColor = "white"
        }
    })
})
