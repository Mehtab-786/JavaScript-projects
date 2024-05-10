// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

let form =document.querySelector("form")

form.addEventListener("submit",function(e) {
        e.preventDefault()
        let result = document.querySelector("#results")
        
        let heightValue = parseInt(document.querySelector("#height").value);
        let weightValue = parseInt(document.querySelector("#weight").value);
        console.log(heightValue,weightValue)

        if (isNaN(heightValue) || heightValue <= 0) {
                result.innerHTML = `Please enter the correct height value`;
            } else if (isNaN(weightValue) || weightValue <= 0 || weightValue > 120) {
                result.innerHTML = `Please enter the correct weight value`;
            } else {
                let bmi = (weightValue / ((heightValue / 100) * (heightValue / 100))).toFixed(2);
                result.innerHTML = `Your BMI is: ${bmi}`;
            }
        });
         
