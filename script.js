let phones = [
    '590.423.4568',
    '650.124.7234',
    '650.507.9879',
    '011.44.1343.529268',
    '011.44.1344.478968',
    '011.44.1644.429267',
    '11.44.1343.52',
    '11.44.1643.52'
];

let phones1 = phones.map(phone => {
    let lastDot = phone.lastIndexOf('.');
    let prefix = phone.slice(0, lastDot + 1);
    let visiblePart = phone.slice(lastDot + 1, lastDot + 2);
    return prefix + visiblePart + '****';
});

console.log(phones1);

let cards = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699'
];

let maskedCards = cards.map(card => {
    let digits = card.replace(/\s/g, '');
    let firstFour = digits.slice(0, 4);
    let lastFour = digits.slice(-4);
    return firstFour + '*****' + lastFour;
});

console.log(maskedCards);


let prices = [
    'Цена товара - 1200$',
    'Стоимость - 500$',
    'Цена не определена',
    '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$',
];

function getInfo(prices) {
    let startsWithCount = 0;
    let endsWithCount = 0;
    
    for (let price of prices) {
        if (price.startsWith('Цена')) {
            startsWithCount++;
        }
        if (price.endsWith('$')) {
            endsWithCount++;
        }
    }
    
    return [startsWithCount, endsWithCount];
}

console.log(getInfo(prices)); // [3, 4]



function kingSayd(string) {
    if (string.startsWith('Король сказал:')) {
        console.log(string);
    } else {
        console.log('Король сказал: ' + string);
    }
}

// Примеры:
kingSayd("сегодня хорошая погода");
kingSayd("Король сказал: завтра будет дождь");

function isItFridayTodaySimple() {
    const today = new Date();
    const currentDay = today.getDay(); // 0-воскресенье, 5-пятница
    
    if (currentDay === 5) {
        console.log('Сегодня пятница!');
    } else if (currentDay === 4) {
        console.log('Завтра пятница!');
    } else if (currentDay === 6) {
        console.log('Пятница была вчера');
    } else {
        let daysUntilFriday;

if (currentDay <= 5) {
    daysUntilFriday = 5 - currentDay;
} else { // currentDay = 6 (суббота)
    daysUntilFriday = 6; // или 5 - 6 + 7 = 6
}
        let dayWord = daysUntilFriday === 1 ? 'день' : 'дня';
        console.log(`Пятница будет через ${daysUntilFriday} ${dayWord}`);
    }
}

// Пример использования:
isItFridayToday();