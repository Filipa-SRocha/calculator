let displayValue="";

// ----- math functions --------

function add(a,b){
    return (isInt(a) && isInt(b)) ? a+b : ((a+b).toFixed(2));
    //return a+b;
}

function multiply(a,b){
    return (isInt(a) && isInt(b)) ? a*b : ((a*b).toFixed(2));
}

function subtract(a,b){
    return (isInt(a) && isInt(b)) ? a-b : ((a-b).toFixed(2));
}

function divide(a,b){

    return (isInt(a) && isInt(b)) ? a/b : ((a/b).toFixed(2));
}

function isInt(n){
    return n%1===0;
}

function getNumbers(strA, strB){
    let a = strA.includes(".") ? parseFloat(strA) : parseInt(strA);
    let b = strB.includes(".") ? parseFloat(strB) : parseInt(strB);
 
    return [a,b];
}

function operate(operator,numA,numB){
    let numbers = getNumbers(numA,numB);
    a = numbers[0];
    b = numbers[1];

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

let partialResult = 0;
function sortOperations(calcString){
 

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

//calculator other functions

function display(displayContent){
    let screenText = document.querySelector(".screen-text");
    if (displayContent.length>30){
        clear();
        display("Limit Reached!");
    }
    else{
        screenText.textContent=displayContent;
    }
   
}

function clear(){
    displayValue ="";
    display(displayValue);
}



//------------- button funcionality---------------

let buttonNumbers = document.querySelectorAll(".numerical-button");
let buttonOperations = document.querySelectorAll(".operation-button")
let buttonClear = document.querySelector("#clear");

buttonClear.addEventListener("click", clear);

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

