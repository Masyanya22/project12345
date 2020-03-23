let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату?", "YYYY-MM-DD");
let expense = prompt("");
let coast = prompt("");
let expense2 = prompt("");
let coast2 = prompt("");

let expenses = {
    expense: coast,
    expense2: coast2
};

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
};

alert(money/30);