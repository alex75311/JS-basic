// Сделайте несколько карточек товара, примерно такого вида:
// При нажатии на кнопку «Подробнее» вместо картинки должен появляться текст с описанием товара, примерно так:
// Подсказки:
// 1. Имейте в виду, что назначить обработку события можно по отдельности каждому элементу, а не всем
// сразу, т.е., например, для этих кнопок:
// const buttons = document.querySelectorAll('button');
// мы не можем написать:
// buttons.addEventListener('click', function() {});
// т.к. это коллекция, а не одна конкретная кнопка, воспользуйтесь например методом forEach
// https://mzl.la/1AOMMWX
// 2. С помощью querySelector можно искать не только в документе, но и внутри какого-то элемента,
// например: https://codepen.io/IgorKubikov/pen/arWKyz?editors=1010
// 3. У объекта события MouseEvent, которое происходит при клике есть свойство target, которое указывает на
// каком элементе произошел клик, а у него в свою очередь есть свойство parentNode, которое содержит родительский
// элемент. Подробнее: https://codepen.io/IgorKubikov/pen/arWKpo?editors=1010

'use strict'

const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
})

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}


function showMoreText(card) {
    card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores blanditiis, eum harum inventore mollitia officia officiis perspiciatis ratione unde veniam.'
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}

function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}
