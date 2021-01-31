let displayValue="";

// ----- math functions --------

function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    switch (operator){
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
        default:
            window.alert(`Operation ${operator} not defined!`);        
    }
}


//------------- button funcionality---------------



let buttonNumbers = document.querySelectorAll(".numerical-button");
let buttonOperations = document.querySelectorAll(".operation-button")

buttonNumbers.forEach((button) => {
    button.addEventListener("click", ()=>{
        displayValue += button.textContent;
        display();
    });
});

buttonOperations.forEach((button) =>{
    button.addEventListener("click", () => {
        displayValue += button.textContent;
        display();
    });
});



function display(){
    let screenText = document.querySelector(".screen-text");
    screenText.textContent=displayValue;
}