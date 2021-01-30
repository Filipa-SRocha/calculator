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

// ----------- calculator design -----------

function drawCalculator(){
    //let buttons = document.querySelector("#buttons-container");
    let numbers = document.querySelector("#numbers-container");
    let op= document.querySelector("#op-container");
    // butoes numericos
    for(let i=1; i<10; i++){
        let numericalButton = document.createElement("div");
        numericalButton.classList.add("numerical-button");
        numericalButton.textContent = i;
        numbers.appendChild(numericalButton);
    }

    const operations= ["+", "-", "/", "*"];

    for (i=0; i<4; i++){
        let operation= document.createElement("div");
        operation.classList.add("operation-button");
        operation.textContent = operations[i];
        op.appendChild(operation);
    }
    



}



drawCalculator();