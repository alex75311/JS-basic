// a. Сделайте модальное (появляющееся и исчезающее) окно
// b. (не обязательное задание) Сделайте анимацию при появлении и исчезании. Анимации можно взять здесь:
// 1. https://github.com/miniMAC/magic (демо https://www.minimamente.com/project/magic/ )
// 2. https://github.com/daneden/animate.css (демо https://daneden.github.io/animate.css/ )
// 3. http://animista.net/

'use strict';

const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.remove('scale-up-hor-center');
    modal.classList.add('scale-out-center');
    setTimeout(function () {
        modal.classList.add('hidden');
    }, 400);

});

showBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.remove('scale-out-center');
    modal.classList.add('scale-up-hor-center');
});
