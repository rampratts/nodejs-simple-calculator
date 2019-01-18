const doCalculation = (operation, num1, num2) => {
    switch(operation){
        case "+":
            return sum(num1, num2);
        case "-":
            return sub(num1, num2);
        case "*":
            return mul(num1, num2);
        case "/":
            return div(num1, num2);
        default:
            return "Operation not valid";
    }
}

const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const mul = (num1, num2) => num1 * num2;

const div = (num1, num2) => num2 === 0 ? "Cannot divide by zero" : num1/num2;

module.exports = {doCalculation};


