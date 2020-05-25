// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
// принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
// должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.

'use strict'

function Product1(name, price) {
    this.name = name;
    this.price = price;
}

Product1.prototype.make25PercentDiscount = function () {
        this.price *= 0.75;
}

const p1 = new Product1('Phone', 12345);
p1.make25PercentDiscount();

class Product2{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

const p2 = new Product2('Notebook', 54321);
p2.make25PercentDiscount();
