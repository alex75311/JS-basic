"use strict"

// Реализация пунктов 1 и 2

/**
 * Получает класс кнопки източника, класс вызываемого модального окна, класс кнопки закрыть
 * @param targetButtonClass
 * @param openWindowClass
 * @param closeButtonClass
 */
function modalWindowAddEvent(targetButtonClass, openWindowClass, closeButtonClass) {
    let targetButton = document.querySelectorAll(targetButtonClass);
    let openWindow = document.querySelector(openWindowClass);
    let closeButton = document.querySelector(closeButtonClass);


    targetButton.forEach(function (item) {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            openWindow.style.display = 'block';
        })
    })

    closeButton.addEventListener('click', () => {openWindow.style.display = ''});

}

modalWindowAddEvent('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
modalWindowAddEvent('.phone_link', '.popup', '.popup .popup_close');

// Реализация пункта 3
function tabs (blocksClass, contentsClass, masterClass, activeClass) {
    let blocks = document.querySelectorAll(blocksClass),
        contents = document.querySelectorAll(contentsClass),
        master = document.querySelector(masterClass)

    master.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains(blocksClass.replace('.', '')) || target.parentNode.classList.contains(blocksClass.replace('.', ''))) {
            blocks.forEach((item, i) => {
                if (item == target || item == target.parentNode ) {
                    hideBlock();
                    showBlock(i);
                }
            })
        }
    })

    function showBlock(i = 0) {
        blocks[i].classList.add(activeClass);
        contents[i].style.display = 'block';
    }

    function hideBlock() {
        contents.forEach(item => {
            item.style.display = 'none';
        })
        blocks.forEach(item => {
            item.classList.remove(activeClass);
        })
    }
    hideBlock();
    showBlock();
}

tabs('.glazing_block', '.window-content', '.glazing_slider', 'active')

// Реализация пункта 4
tabs('.no_click', '.decoration-content-item', '.decoration_slider', 'after_click')

// Реализация пункта 5
setTimeout(function() {
    document.querySelector('.popup').style.display = 'block'
},5 * 1000)
