// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.
"use strict";
function getSum(a, b) {
    return +a + +b
}

function getDiff(a, b) {
    return +a - +b
}

function getMult(a, b) {
    return +a * +b
}

function getDiv(a, b) {
    if (b == 0) {
        // throw new Error('Делить на ноль нельзя')
        return 'Делить на ноль нельзя'
    }
    return +a / +b
}

function Calc(arg1, arg2, operation) {
    switch (operation) {
        case "+": return getSum(arg1, arg2)
        case "-": return getDiff(arg1, arg2)
        case "*": return getMult(arg1, arg2)
        case "/": return getDiv(arg1, arg2)
    }
}

console.log(Calc(2, 2, '+'));
console.log(Calc(2, 2, '-'));
console.log(Calc(2, 2, '/'));
console.log(Calc(2, 2, '*'));
