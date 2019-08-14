var randomNumber = Math.floor(Math.random() * 100) + 1;

var attempts = document.querySelector('.attempts');
var lastResult = document.querySelector('.lastResult');
var tip = document.querySelector('.tip');
var row = document.querySelector('.row');
var trySubmit = document.querySelector('.trySubmit');
var tryField = document.querySelector('.tryField');

var attemptCount = 1;
var resetButton;

function checkTry() {
    var userTry = Number(tryField.value);
    if(attemptCount === 1) {
        attempts.textContent = 'Прошлые попытки: ';
    }
    attempts.textContent += userTry + ' ';

    if(userTry === randomNumber) {
        lastResult.textContent = 'Поздравляю! Вы угадали число!';
        lastResult.style.backgroundColor = 'green';
        row.style.borderColor = 'green';
        tip.textContent = '';
        setGameOver();
    } else if (attemptCount === 10) {
        lastResult.textContent = 'Попытки закончились, игра завершена(((';
        setGameOver();
    } else {
        lastResult.textContent = 'Неправильно!';
        lastResult.style.backgroundColor = 'red';
        lastResult.style.color = 'white';
        if (userTry < randomNumber) {
            tip.textContent = 'Вы ввели слишком маленькое число!';
        } else if (userTry > randomNumber) {
            tip.textContent = 'Вы ввели слишком большое число!';
        }
    }

    attemptCount++;
    tryField.value = '';
    tryField.focus();
}

trySubmit.addEventListener('click', checkTry);

function setGameOver() {
    tryField.disabled = true;
    trySubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Новая игра';
    row.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    attemptCount = 1;

    var resetResult = document.querySelectorAll('.resetResult p');
    for(var i = 0; i < resetResult.length; i++) {
        resetResult[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    tryField.disabled = false;
    trySubmit.disabled = false;
    attempts.textContent = '';
    tip.textContent = '';
    tryField.value = '';
    tryField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
