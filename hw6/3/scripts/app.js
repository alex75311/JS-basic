'use strick';

let buttons = document.querySelectorAll('.toBasketBtn');
let tableHover = document.querySelector('.table-hover');
let totalValue = document.querySelector('.total');

let total = 0;
let productsInBasket = tableHover.querySelectorAll('.prodInBasket');

buttons.forEach(function (button) {
    button.addEventListener('click', addBasket);
});

function addBasket(event) {
    let idx = +event.target.dataset['id'];
    let name = event.target.dataset['name'];
    let price = +event.target.dataset['price'];
    let flag = false;

    if (productsInBasket.length) {
        productsInBasket.forEach(function (product) {
            ths = product.querySelectorAll('th')
            if (ths[0].dataset['id'] == idx) {
                let count = +ths[3].dataset['count'];
                ths[3].textContent = ++count;
                ths[3].dataset['count'] = count;
                flag = true;
            }
        })
    }
    if (!flag) {
            addNewProduct(idx, name, price);
        }

    total += price;
    // console.log(tableHover);
    totalValue.textContent = total;
    checkProdInBasket()
}


function checkProdInBasket() {
    productsInBasket = tableHover.querySelectorAll('.prodInBasket');
}

function addNewProduct(idx, name, price) {
    let newRow = document.createElement('tr');
    newRow.className = 'prodInBasket';
    newRow.innerHTML = `<th data-id="${idx}">${idx}</th><th>${name}</th><th>${price}</th><th data-count="1">1</th>`;
    tableHover.insertAdjacentElement('afterbegin', newRow);
}
