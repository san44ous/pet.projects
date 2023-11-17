addEventListener("DOMContentLoaded", function (event) {

    //практика
    //task 1; Сделайте так, чтобы по нажатию на кнопку выводился alert

    alert('My first project');

    document.querySelector("button").addEventListener("click", function () {
        alert('My first event');
    });


});