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
    a= parseInt(a);
    b=parseInt(b);
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

function sortOperations(calcString){
    let partialResult = 0;

    if (calcString == ""){
        return 0;
    }
    else{
        let arr= calcString.split(" ");
        partialResult = operate(arr[1], arr[0], arr[2]);
        console.log(partialResult);
        if (arr.length>3){
            arr.splice(0,3, partialResult);
            calcString=arr.join(" ");
            sortOperations(calcString);
        }
        else{
            displayValue = "";
        }
    }
    return partialResult;
}

//------------- button funcionality---------------

let buttonNumbers = document.querySelectorAll(".numerical-button");
let buttonOperations = document.querySelectorAll(".operation-button")

buttonNumbers.forEach((button) => {
    button.addEventListener("click", ()=>{
        displayValue += button.textContent;
        display(displayValue);
    });
});

buttonOperations.forEach((button) =>{
    button.addEventListener("click", () => {
        if (button.value == "="){
            let result= sortOperations(displayValue);
            console.log(`this is result ${result}`);
            display(result);
        }
        else{
            displayValue += " " + button.textContent + " ";
            display(displayValue);
        }
       
        
    });
});

function display(displayContent){
    let screenText = document.querySelector(".screen-text");
    screenText.textContent=displayContent;
}