'use strict';

let money = prompt('Ваш бюджет на месяц?');

let date = prompt('Введите дату в формате YYYY-MM-DD');

let first_q = prompt('Введите обязательную статью расходов в этом месяце');

let second_q = prompt('Во сколько обойдется?');

let appData = {
    bud: money,
    timeData: date,
    expenses: {
        first_q: second_q
    },
    optionalExpenses: {},
    income: [],
    savings: false

};

let test = appData.bud / 30;
alert(test)