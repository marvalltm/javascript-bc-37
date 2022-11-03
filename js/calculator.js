/**
 * TASK 1
 * Написати калькулятор. Калькулятор вміє виконувати операції '+' '-' '*' '/' '%'
 * Винеести ініціалізацію роботи калькулятора до функції main()
 * Створити окрему функцію для кожної окремої дії.
 * Функція main має в собі функціонал, який при завантажені сторінки буде
 * виводити prompt і очікувати строку у форматі "<перший_аргумент> <дія> <другий аргумент>"
 * Обробити ситуацію коли користувач не вірно вводить формат данных.
 *
 * Написати коментарі до функцій.
 */

/**
 * Ініціалізую роботу калькулятора.
 */
const main = function () {
  const userInput = prompt(
    'Введыть будь ласка операнди та дію між ними у форматі "2 + 4"'
  );

  const operands = parseString(userInput);
  if (operands) {
    const operation = checkOperation(operands[1]);
    const result = operation(Number(operands[0]), Number(operands[2]));
    alert('Результат: ' + result);
  } else {
    sendErrorMessage();
  }
};

/**
 * Перевіряє що 1 і 3 елементи дорівнють числу.
 * А 2 елемнт дорівнює дії.
 * @param {Array} array
 * @returns {Boolean} Резут превірки.
 */
const checkArrayElements = function (array) {
  let result = true;
  const operaion = ['+', '-', '*', '/', '%'];

  if (!Number(array[0]) || !Number(array[2])) {
    result = false;
  }

  if (!operaion.includes(array[1])) {
    result = false;
  }

  return result;
};

/**
 * Розбыває строку на масив.
 * Повертає массив, якщо той відповідає перевіркі checkArrayElements
 * @param {String} string
 * @returns {Array || Boolean}
 */
const parseString = function (string) {
  const parsedStrinToArray = string.split(' ');

  return checkArrayElements(parsedStrinToArray) && parsedStrinToArray;
};

/**
 * Додає одне число до іншого.
 * @param {Number} number1
 * @param {Number} number2
 * @returns {Number} результат дії дадавання
 */
const summ = function (number1, number2) {
  return number1 + number2;
};

/**
 * Віднімає одне число від іншого.
 * @param {Number} number1
 * @param {Number} number2
 * @returns {Number} результат дії віднімання
 */
const subtraction = function (number1, number2) {
  return number1 - number2;
};

/**
 * Множить одне число на інше.
 * @param {Number} number1
 * @param {Number} number2
 * @returns {Number} результат дії множення
 */
const multiplication = function (number1, number2) {
  return number1 * number2;
};

/**
 * Ділить одне число на інше.
 * @param {Number} number1
 * @param {Number} number2
 * @returns {Number} результат дії ділення
 */
const division = function (number1, number2) {
  return number1 / number2;
};

/**
 * Розраховує відсоток одного числа від іншого.
 * @param {Number} number1
 * @param {Number} number2
 * @returns {Number} результат дії процент
 */
const percent = function (number1, number2) {
  return (number2 / 100) * number1;
};

/**
 * Повертає математичну операцію.
 * @param {String} operation
 * @returns {Function} Математична операція.
 */
const checkOperation = function (operation) {
  switch (operation) {
    case '+':
      return summ;
    case '-':
      return subtraction;
    case '*':
      return multiplication;
    case '/':
      return division;
    case '%':
      return percent;
    default:
      break;
  }
};

/**
 * Виводить повідомлення про не вірний формат данних
 */
const sendErrorMessage = function () {
  alert('Не вірний формат введених данних');
};

main();
