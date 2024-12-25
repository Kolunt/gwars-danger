// ==UserScript==
// @name        Wargroup Alert
// @namespace   https://github.com/Kolunt
// @version     0.1
// @description Скрипт для мониторинга страницы wargroup.php на предмет появления определенных значений
// @author      _Колунт_
// @match       https://www.gwars.io/wargroup.php*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Массив с комбинациями для поиска
    const dangerCombinations = [
        '#4457',
        '#9669'
    ];

    // Функция для проверки наличия опасных комбинаций на странице
    function checkForDanger() {
        const pageText = document.body.innerText.toLowerCase();  // Получаем весь текст страницы и приводим его к нижнему регистру

        for (let combination of dangerCombinations) {
            if (pageText.includes(combination.toLowerCase())) {  // Проверяем наличие опасной комбинации
                alert('Опасность! Запрещены бои с синдикатами The Bombardiers 4457 и New Domination 9669');  // Показываем предупреждение
                clearInterval(checkInterval);  // Остановить периодический вызов функции
                break;  // Прервать цикл при первом найденном совпадении
            }
        }
    }

    // Функция для запуска проверки каждые 5 секунд
    let checkInterval = setInterval(checkForDanger, 5000);  // Каждые 5 секунд вызываем функцию checkForDanger

    // Выполняем первую проверку сразу после загрузки страницы
    checkForDanger();
})();
