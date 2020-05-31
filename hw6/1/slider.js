// Сделать чтобы при переключении слайдов слайды перемещались(пролистывались) вправо/влево в
// зависимости куда нажали.


'use strict';

let slider = document.querySelector('.slider');
let hiddenLeftArrow = document.querySelector('.hiddenLeftArrow');
let hiddenRightArrow = document.querySelector('.hiddenRightArrow');

window.addEventListener('load', function () {
    images.init();
});

window.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowLeft') {
        images.setNextLeftImage()
    } else if (event.key == 'ArrowRight') {
        images.setNextRightImage()
    }
});

hiddenLeftArrow.addEventListener('click', function () {
    images.setNextLeftImage();
});

hiddenRightArrow.addEventListener('click', function () {
    images.setNextRightImage();
});

let images = {
    currentIdx: 0,
    slides: [],

    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageCurrentIdx();
        setInterval(() => this.setNextRightImage(), 3000);
    },

    showImageCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },

    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx === 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageCurrentIdx();
    },

    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx === this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageCurrentIdx();
    },

    hideVisibleImage() {
        this.slides[this.currentIdx].classList.add('hidden-slide');
    },

    autoPlay() {
        setInterval(this.setNextRightImage, 500);
    },
};

function setSizes(slider) {
    let width = slider.getAttribute('data-width');
    let heigth = slider.getAttribute('data-heigth');
    if (width) {
        slider.style.width = width;
    }
    if (heigth) {
        slider.style.height = heigth;
    }
}

setSizes(slider);
