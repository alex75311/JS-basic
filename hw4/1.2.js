// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
// объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
// его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date.
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
// в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
// Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
// свойству highlighted значение true.

'use strict'

function Post1(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post1.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost1(author, text, date) {
    Post1.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost1.prototype = Object.create(Post1.prototype);

AttachedPost1.prototype.makeTextHighlighted = function () {
    this.highlighted = true;

}
const a1 = new AttachedPost1('John', 'hello', '25-05-2020');
a1.makeTextHighlighted()

class Post2{
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit = function (text) {
        this.text = text;
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted = function () {
        this.highlighted = true;
    }
}

const a2 = new AttachedPost2('Ivan', 'Bye','25-05-2020')
a2.makeTextHighlighted()
