
 function clearInput() {
     document.getElementById("weight").value = "";
     document.getElementById("height").value = "";
     document.getElementById("result").innerHTML = "";
 }



let button = document.querySelector('#calculate-btn');
button.addEventListener('click', (e)=> {
    e.preventDefault();
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let answer = (weight / ((height*height) /10000)).toFixed(2);
    console.log(answer)
    let result = document.getElementById('result');
    result.innerHTML = answer

    if (answer<=18.5){
        result.innerHTML = ' you are underweight : ' + answer
    }else if (answer > 18.5){
        result.innerHTML = ' you are normal weight : ' + answer   
    }else if(answer>=30){
        result.innerHTML = ' you are normal overweight: ' + answer   

    }
 })

