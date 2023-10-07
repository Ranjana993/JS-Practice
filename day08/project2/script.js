const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Plz give a valid height :( "
        result.style.display = "block"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Plz give a valid weight :( "
        result.style.display = "block"
    }
    else {
        const bmi = (weight / ((height * height) / 10000).toFixed(2));
        // show the result 
        result.innerHTML = `Your bmi result is ${bmi} 🙌🏼`
        result.style.display = "block"
    }



})



