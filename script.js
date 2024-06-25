let inputValue1 = document.getElementById('w')
let inputValue2 = document.getElementById('h') 
let newweight = document.getElementById("sample w")
let newheight = document.getElementById("sample h")
let newbmi = document.getElementById("bmi") 
let display = document.getElementById('display')
function calcBMI(){    
    let weight = inputValue1.value
    let height = inputValue2.value
    weight = Number(inputValue1.value)
    height = Number(inputValue2.value)
    newweight.textContent = `Weight: ${inputValue1.value}kg`
    newheight.textContent = `Height: ${inputValue2.value}m`
    bmi = weight/height**2
    newbmi.textContent = `BMI: ${bmi}kg/m2`
    console.log(bmi);
    if(bmi < 18.5){
        display.textContent = "You are underweight 🤔"
    }else if (bmi >= 18.5 && bmi <= 24.9) {
        display.textContent = "You have a normal weight 👌"
    }else if (bmi >=25 && bmi <= 29.9 ) {
        display.textContent = "You are overweight 😆"
    }else{
        display.textContent = "You are obese 😢"
    }
} 