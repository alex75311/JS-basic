// Вывести в консоль значения выражений и объяснить почему получились такие значения
// используя комментарии к каждому выражению:
// 10 + 10 + "10"
// 10 + "10" + 10
// 10 + 10 + +"10"
// 10 / -""
// 10 / +"2,5"

'use strict'
console.log(10 + 10 + "10")
// сперва складываем числа 10+10, затем к полученной строке конкатенируем строку "10"

console.log(10 + "10" + 10)
// т.к. строка находится посередине, сперва левая 10 переводится в троку и конкатенируется, затем правая

console.log(10 + 10 + +"10")
// складываются первые 2 числа, затем унарный + переводит строку в число и прибавляет его к полученному в первом действии

console.log(10 / -"")
// унарный - не может перевести пустую строку в число

console.log(10 / +"2,5")
// допущена опечатка в виде запятой