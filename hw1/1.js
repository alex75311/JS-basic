// Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
// градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
// Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию

'use strict';
let cels = prompt('Введите температуру в градумах Цельсия');
let farentgeit = (9/5) * cels + 32;
alert(farentgeit);
