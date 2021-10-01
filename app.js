let category = document.getElementById('category');
let selectedOption = category.options[0].value;
category.addEventListener('change', function(e){
    selectedOption = category.options[category.selectedIndex].value;
})

document.getElementById('charge').addEventListener('click', function(e){
    let unit = document.getElementById('unit').value
    let result = document.getElementById('result')
    if(selectedOption === "Domestic"){
        if(unit.trim()===""){
            result.innerText = "* input required "
        }
        if(unit.trim()<0){
            result.innerText = "* positive values only "
        }
        else if(unit<=100){
            result.innerText = "Charge : 0 Rs"
        }
        else if(unit<=200){
            let final = unit - 100;
            final *= 1.5;
            result.innerText = `Charge : ${final+20} Rs`
        }
        else if(unit<=500){
            let final = unit - 100;
            let finalTwo  = final - 100;
            finalTwo *= 3;
            finalTwo +=100*2;
            result.innerText = `Charge : ${finalTwo+30} Rs`
        }
        else if(unit > 500){
            let final = unit - 100;
            let finalTwo = final - 400;
            finalTwo *= 6.6;
            finalTwo +=100*3.5;
            finalTwo +=300*4.6;
            result.innerText = `Charge : ${finalTwo+50} Rs`
        }
    }
    else{
        if(unit.trim()===""){
            result.innerText = "* input required "
        }
        if(unit.trim()<0){
            result.innerText = "* positive values only "
        }
        else if(unit<100){
            result.innerText = `Charge : ${unit*5} Rs`
        }
        else if(unit>=100){
            result.innerText = `Charge : ${(unit*8.05).toFixed(2)} Rs`
        }
    }
})
document.getElementById('reset').addEventListener('click', function(e){
    document.getElementById('unit').value = ""
    document.getElementById('result').innerText = ""
})