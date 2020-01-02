let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Ввeдите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдётся?', '');
            
            if ((typeof(a))==='string' && (typeof(a)) != null
                && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Hahhah loser!');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Not better but not good!');
        } else {
            console.log('Oh my gad!!!!!!')
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt("Под какой %?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome); 
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесёт доп. доход? (перечислети через запятую)", '');
        while (items == "" || items == null) {
            let items = prompt("Что принесёт доп. доход? (перечислети через запятую)", '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?", ''));
        appData.income.sort();
        appData.income.forEach(function(element) {
            alert('Способ доп. зароботка: ' + element);
        });
    },
    checkProgram: function() {
        for (let i in appData) {
            console.log('Наша программа включает в себя данные: ' + i)
        }
    }
};