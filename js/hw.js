let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Ввeдите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдётся?', '');
    
    if ((typeof(a))==='string' && (typeof(a)) != null
        && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    }
};

appData.moneyPerDay = appData.budget / 30;
alert('Ужудневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Hahhah loser!');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Not better but not good!');
} else {
    console.log('Oh my gad!!!!!!')
}