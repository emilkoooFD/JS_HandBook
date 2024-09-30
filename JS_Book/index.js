// Особенности оператора присваивания
age += 2; // age = age + 2
age -= 2; // age = age - 2
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age++; // age = age + 1
age--; // age = age - 1

// Примитивные типы
/*
1. number
2. string
3. boolean
4. undefined
5. null
6. Symbol
7. BigInt
 */
str.repeat(n) // повторяет строку n-ное кол-во раз 


// Оператор SWITCH
const role = 'admin';

switch (role) {
    case 'admin': // role === 'admin'
        console.log('Admin');
        break;
    case 'seo':
        console.log('Seo');
        break;
    case 'manager':
        console.log('Manager');
        break;
    default:
        console.log('Мы тебя не знаем ')
};

// Для любых условий
const num = 1;

switch (true) {
    case num > 1: // true === num > 1
        console.log('Положительный');
        break;
    case num < 1:
        console.log('Отрицательный');
        break;
    default:
        console.log('Ноль')
};


// ТЕРНАРНЫЙ ОПЕРАТОР
const zero = 0;
const ten = 10;

if (zero < ten) {
    console.log('Больше')
} else {
    console.log('Не больше')
}

// Сам тернарный оператор от примера выше
zero < ten ? console.log('Больше') : console.log('Не больше')
// Можно присвоить перменной 
const res = zero < ten ? 'Больше' : 'Не больше'
console.log(res) // или
console.log(`Ответ: ${zero < ten ? 'Больше' : 'Не больше'}`)


// Оператор нулевого слияния
// Оператор ?? считает 0 за валидное состояние
const age = 0;
console.log(age || 18); // 18
console.log(age ?? 18); // 0

// АНОНИМНАЯ функция - функция переданная в константу или переменную
// Отличие от обычной функции в том что мы не можем вызвать функцию до ее объявления
const numToNum = function (num) {
    return num * num;
};
// СТРЕЛОЧНАЯ функция
// Так же как и анонимная нельзя вызвать до ее объявления
const numToNumArrow = (num) => num * num;


// МАССИВЫ
const arr = ['admin', 'user', 'manager']
// Получить первый элемент массива короткий способ
arr.at(0)
// Получить последний элемент массива короткий способ
arr.at(-1)

// Альтернативное создание массива
const usersName = new Array('Bob', 'Kate', 'Sam')

// Управление массивом
// Изменение элемента в массиве
arr[1] = 'abc'

// Добавление элемента в конец массива
arr.push('abc')

// Добавление элемента в начало массива
arr.unshift('abc')

// Удаление элемента с конца массива
arr.pop()

// Удаление элемента с начала массива
arr.shift()

// Поиск элемента в массиве и возврат индекс этого элемента
// если элемент не найден выведет -1
arr.indexOf('admin') // 0

// Также поиск элемента в массиве, но при нахождении выводит true при ненаходе false
arr.includes('admin') // true

// Изменение массива с помощью slice()(не модифицирует исходный массив)
// 1 способ (берет элемент со второго индекса и последующие и возвращает их)
arr.slice(2)
// 2 способ (первая цифра от , а вторая до(не включая последнюю))
arr.slice(2, 4)
// получить последний элемент в массиве
arr.slice(-1)
// splice() - принцип работы такой же, но он модифицирует исходный массив
arr.splice(2) // console.log(arr) => manager'
// 2 способ (со второго индекса 2 элемента)
arr.splice(2, 2)
// первернуть массив
arr.reverse()
// Конкатенация массивов
arr.concat(arr1)

// Получение
// получить ключ
Object.keys(arr)
// получить значение
Object.values(arr)
// получить и ключ и значение
Object.entries(arr)

// Преобразование строки в массив
const url = 'auth/user/login';
const resSplit = url.split('/'); // ['auth', 'user', 'login']
// Преобразование элментов массива в строку
const arrJoin = arr.join('-') // admin-user-manager


// ДЕСТРУКТУРИЗАЦИЯ - чтобы вытащить элементы массива в перменнные
const user = ['Anton', 30, 'Moscow'];
const [userName, userAge, userCity] = user
console.log(userName, userAge, userCity) // Anton 30 Moscow


// REST оператор(можно использовать только в конце)
const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data
console.log(one, two, others) // 1 2 [3,4,5,6]


// ЦИКЛЫ
// проход в массиве с массивами
const arr = [[1, 'задача 1'],[2, 'задача 2']]

for (let i = 0; i < arr.length; i++) {
    console.log(`Цикл 1 : ${i}`)
    for (let j = 0; j < arr[i].length; i++) {
        console.log(`Цикл 2 : ${arr[i][j]}`)
    }
}

// WHILE(цикл)
for (let i = 1; i < 5; i++) {
    console.log(`Вывод: ${i}`)
}
// тоже самое только с while
let i = 1;
while (i < 5) {
    i++
    console.log(`Вывод: ${i}`)
}

// FOR OF
const arrNum = [1, 2, 3, 4, 5, 6]
for (let element of arrNum) {
    console.log(element) // 1 2 3 4 5 6
}

// Можно вывести индекс
for (let [i, el] of arr.entries()) {
    console.log(`Раунд №${i + 1}: ${el}`) // Pаунд №1: 1 .....
}

// FOR IN(проход по индексу массива)
for (const index in arrNum) {
    console.log(index) // 0 1 2 3 4 5 
    console.log(arrNum[index]) // 1 2 3 4 5 6
}


// Функция высшего порядка — это функция, которая принимает другие функции в качестве аргументов 
// или возвращает функцию в результате своей работы.
function add(a, b) {
    return a + b
}

function calculate(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res
}

calculate(3, 5, add)

// Возврат функции
function power(pow) {
    return function (num) {
        num ** pow
    }
}

// В виде стрелочной функции
const func = pow => num => num ** pow

/* 
К функции power прописываем значение 2 аргумента pow,
но нам нужно еще прописать аргумент для функции внутри
поэтому функцию power помещаем в перменную, потому что в переменную записывается
как раз возвращаемое значение. Вывод: в power аргумент 2, а в возвращаемой функции 3
вот и получается 3 ^ 2
*/
const powerOfTwo = power(2);
powerOfTwo(3)

// Либо другой способ, более короткий(3 ^ 2)
power(2)(3)


// forEach(вторым элементом аргумента можно получить index и массив)
// нельзя прервать цикл как в for
const arrScore = [10, 5, 0, 15]
arrScore.forEach((arrEl, i, arr) => {
    console.log(`Раунд №${i + 1}: ${arrEl}`) 
})


// map() - отличие от forEach в том что map() возвращает новый массив
const transactionInUSD = [10, -8, 35, 100, -24]

const transactionInRUB = transactionInUSD.map((transaction, i, arr) => transaction * 60)

console.log(transactionInRUB) // [600, -480, 2100, 6000, 1480]


// filter(если элемент нужно оставить возвращ true если убрать false)
// дословно: оставить(отфильтровать) массив по условию el > 0
const filteredArr = transactionInUSD.filter(el => el > 0) // [10, 35, 100]

// reduce()
// acc - то значение куда будут аккумулироваться все операции по алансу,
// после фигурных скобок задали ему начальное значение '0'
const operations = [100, -20, 7, -30, 50];
const finalBalance = operations.reduce((acc, operation) => {
    return acc += operation
}, 0)
/*
Цикл 1: acc = 0, value = 100
Цикл 2: acc = 100, value = -20
Цикл 3: acc = 80, value = 7
Цикл 4: acc = 87, value = -30
Цикл 5: acc = 57, value = 50
107
 */


// find и findIndex
// find() - находит первый элемент совпавший по условию и возвращает его
// если элемент не найден то выведет undefined
const numm = [1, 4, 4, 10, 20];
const elGT5 = num.find(el => el > 5) // 10

//findIndex() - возвращает индекс первого попавшегося по условию элемента
// если элемент не найден то выведет -1
const elGT5Index = num.findIndex(el => el > 5) // 3

// some() - ищет элемент в массиве и если он найден возвращает true если нет false
const resSome = num.some(el => el === 4) // true

// flat() и flatMap()
// flat() - делает плоским массив [[1,2],[3,4]] => [1,2,3,4]
// flatMap() - модифицирует и потом делает плоским массив


// sort - сортировка (работает и со строками и с числами)
// < 0 - сохраняем порядок
// > 0 - изменяем порядок
// сортировка по возрастанию
num.sort((a,b) => {
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
})
// сортировка по убыванию
num.sort((a,b) => {
    if (a < b) {
        return 1
    }
    if (a > b) {
        return -1
    }
})

// сокращенно
num.sort((a,b) => a - b)
num.sort((a,b) => a + b)


// Методы строк (все они не изменяют исходный массив)
str.toLowerCase() // все маленькие буквы
str.toUpperCase() // все большие буквы
str.replace('В', 'Ф') // замена В на Ф
str.trim() // отчистит от пробелов начало и конец строки

// Деструктуризация в строках
const userFullName = 'Иванов Иван Иванович'
const [userSurname, userNamee, userLastname] = userFullName.split(' ');
/*
Иванов
Иван
Иванович
 */

// padStart() и padEnd()
const starWars = 'Звездные Войны'
// пепвая цифра - длина строки
// вторая что нужно вставить спереди строки
starWars.padStart(3, '*') // ***Звездные Войны
starWars.padEnd(3, '*') // Звездные Войны***

// isNaN() - проверка на число (выведет false если не число)


// ОБЪЕКТЫ
// Итерация по объектам
// С помощью for in
const cities = {
    msk: {
        lt: 120,
        temp: 25
    },
    spb: {
        lt: 100,
        temp: 20
    }
}

let sumTemp = 0;
let citiesCount = Object.keys(cities).length;
for (const key in cities) {
    console.log(key) // msk spb
    sumTemp = cities[key].temp
}
console.log(sumTemp / citiesCount)

// c помощью for of
// нужно писать через Object.keys()
for (const key of Object.keys(cities)) {
    console.log(key)
    sumTemp = cities[key].temp
}

Object.keys(cities) // делает из ключей объекта массив [msk, spb]

// Деструктуризация объектов
const userObj = {
    name: 'Вася',
    age: 30,
    city: 'Moscow'
}

const {city, ...userWithoutAge} = userObj
city // Moscow
userWithoutAge // {name: 'Вася', age: 30}

// Перенос св-в из одного объекта в другой
const additionalData = {
    skills: ['Разработка', 'Дизайн'],
    creditCard: '1234-1234-1234-1234'
}

userObj = {
    ...userObj, // спред оператор
    ...additionalData // спред оператор
}

userObj // {name: 'Вася', age: 30, city: 'Moscow', skills: ['Разработка', 'Дизайн'], creditCard: '1234-1234-1234-1234'}

// Optional chaining
// Допустим у нас в объект с бэка не пришло какое-то свойство
console.log(userObj.skills.union) // undefined
console.log(userObj.skills.union.pay) // здесь вылезет ошибка и сломает нам приложение
/*
чтобы не вылезала ошибка можно сделать проверку,
но это будет слишком громадно, поэтому для таких случаев есть '?'
он означает, что если не будет union то верну undefined 
и даже если не будет pay все равно верну undefined а не ошибку
т.е. мы подстраховываемся насчет того что есть такое св-во или его нет
 */
console.log(userObj.skills?.union?.pay)

// Чтобы два объекта не были в одной памяти:
const userRAM = {
    name: 'Anton',
    age: 30
}

const newUserRAM = userRAM
newUserRAM.name = 'Igor'
console.log(userRAM) // name: Igor
console.log(newUserRAM) // name: Igor
// чтобы такого не было можно воспользоваться спред оператором
const newUserRAM2 = {
    ...userRAM
}
newUserRAM.name = 'Igor'
console.log(userRAM) // name: Anton
console.log(newUserRAM) // name: Igor


// Обращение к this внутри метода объекта
const userThis = {
    name: 'Alex',
    surname: 'Babich',
    age: 30,
    getFullName: function () {
        console.log(this)
        const fullName = `${this.name} ${this.surname}`
        console.log(fullName)

        // использование this в функции, которая находится внутри метода
        // приведет к ошибке или неправильным результатам 
        // function canDrink() {
        //     if (this.age >= 18) {
        //         console.log(`Может выпить`)
        //     } else {
        //         console.log(`Не может выпить`)
        //     }
        // }

        // чтобы достучаться до this объекта нужно сделать все тоже самое 
        // но только в стрелочной функции
        const canDrink = () => {
            if (this.age >= 18) {
                console.log(`${fullName} может выпить`)
            } else {
                console.log(`${fullName} не может выпить`)
            }
        }
        canDrink()
    }
}
userThis.getFullName()

// Вывод аргументов функции(работает тоько с обычными функциями)
function sumNum(num1, num2) {
    console.log(arguments[0])
    return num1 + num2;
}
console.log(sumNum(1, 4)) // 1 5


// call и apply
// чтобы выдернуть метод для свободного использования нужно
const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: [],
    addDamage(part, rate) {
        this.damages.push(`
            У Авто ${this.make} ${this.model} ${this.year} добавлено: повреждение ${part} со степенью ${rate}
            `)
    }
};

const audi = {
    make: 'AUDI',
    model: 'Q7',
    year: 2024,
    damages: []
}

const addDamageFunc = bmw.addDamage
// Если нужно сделать универсальную функцию от метода(так работать не будет)
addDamageFunc('Бампер', 2)

// на помощь приходит call(a-объект, b-part(аргумент метода), c-rate(аргумент метода)) - 
// ручное управление чем будет работать this 'используется при ниобходимости сразу же вызвать функцию'
addDamageFunc.call(audi, 'Бампер', 2)

// тоже самое и apply - только у apply аргументы метода будут в массиве
addDamageFunc.apply(bmw, ['Бампер', 2])


// bind() - похож на call и apply, но bind в отличие от них откладывает вызов функции 
// 'используется, когда нужно вызвать функцию позже'
const opel = {
    make: 'OPEL',
    model: 'INSIGNIA',
    year: 2012,
    damages: []
}

const carManipulation = {
    addDamage(part, rate) {
        this.damages.push({part, rate})
        console.log(`Добавлены повреждения!`)
    }
}

const addDamageOpel = carManipulation.addDamage().bind(opel)
addDamageOpel('Крыло', 3)
// другая вариация
const addDamageOpelRoof = carManipulation.addDamage().bind(opel, 'Крыша')
addDamageOpel(3)


// ЗАМЫКАНИЯ
// Официально: замыкание - это комбинация функции и лексического окружения, в котором она была создана.
// Простыми словами: функция "помнит" контекст своего создания и имеет к нему доступ.
function changeBalance() {
    let balance = 0;
    return function(sum) {
        balance += sum
        console.log(`Баланс: ${balance}`)
    }
}

const change = changeBalance();
const change2 = changeBalance();
change(100) // Баланс: 100
change(-50) // Баланс: 50
change(150) // Баланс: 200

change2(100) // Баланс: 100


// DOM
// Найти элемент
const input1 = document.querySelector('.input') // по классу
const input2 = document.querySelector('#input') // по айди

// Взять значение например из инпута
const inputValue = document.querySelector('.input').value

// Поменять текст чего-то
document.querySelector('.panel').innerText = inputValue;

// Почистить инпут
document.querySelector('.input').value = ''

// Слушатели событий - нужны чтобы прослеживать ваши действия на сайте(привязать к какому-либо элементу)
element.addEventListener('click', () => {}) // прослеживает клик на элемент
// или альтернативный вариант
element.onclick(() => {})
element.addEventListener('submit', () => {}) // при отправки формы
element.onsubmit(() => {})
element.addEventListener('keydown', () => {}) // событие нажатия клавиши(нужно обрабатывать по code) code можно посмотреть в event
element.onkeydown(() => {})
// и т.д.
// но можно сделать слушатель события в html на элемент, а весьфункционал поместить в функцию
// которая будет вызываться в html элементе
// Например onclick="changeClick()", onclick - слушатель события , changeClick() - функционал слушателя;
<button class="button" onclick="changeClick()">Change</button>

// Изменение класса
elem.classList.add('elem') // добавить класс
elem.classList.remove('elem') // удалить класс
elem.classList.toggle('elem') // удалить и добавить класс(если есть - удаляет, если нет - добавляет)


// MAPS и SETS
// Объект Set – это особый вид коллекции: «множество» значений (без ключей), 
// где каждое значение может появляться только один раз.
const flights = ['Russia', 'USA', 'London', 'USA', 'Russian']
const setFlights = new Set(flights) // {'Russian', 'USA', 'London'}
setFlights.size // размер объекта (3)
setFlights.has('Russia') // проверка элемента в объекте (true)
setFlights.add('Germany') // добавление элемента 
setFlights.delete('London') // удаление элемента

// Работа с Set
for (const flight of setFlights) {
    console.log(flight) // Russia USA Germany
}
// Превращение set в массив
[...setFlights] // [Russia, USA, Germany]

setFlights.values() // возвращает перебираемый объект для значений

// Map – это коллекция ключ/значение, 
// как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
new Map() // создаёт коллекцию.
const weatherMap = new Map()

map.set(key, value) // записывает по ключу key значение value.
weatherMap.set('Moscow', '+20')
          .set('Kazan', '+28')
          .set(1, 5)
          .set(1, true)

map.get(key) // возвращает значение по ключу или undefined, если ключ key отсутствует.
weatherMap.set('Moscow') // +20

map.has(key) // возвращает true, если ключ key присутствует в коллекции, иначе false.
weatherMap.has('Moscow') // true

map.delete(key) // удаляет элемент (пару «ключ/значение») по ключу key.
weatherMap.delete('Moscow')

map.clear() // очищает коллекцию от всех элементов.
map.size // возвращает текущее количество элементов.

// Перебор Map
map.keys() // возвращает итерируемый объект по ключам,
map.values() // возвращает итерируемый объект по значениям,
map.entries() // возвращает итерируемый объект по парам вида [ключ, значение], 
// этот вариант используется по умолчанию в for..of

// BigInt
const max = 2 ** 53 -1 // максимальное число с которым можно работать корректно(с большим числом могут быть проблемы)
// тоже самое
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
// чтобы работать с большими числами отличными от максимального используем BigInt
221739571235082135719283759082135n
// или 
BigInt(221739571235082135719283759082135)

// Интернационализация чисел
const options = {
    style: 'currency',
    currency: 'RUB'
}

console.log(new Intl.NumberFormat('ru-RU', options).format(23000)) // 23 000,00 Р


// Работа с Датой(new Date())
const now = new Date() // Создание даты(на момент создания)

new Date('01-01-2024') // mm-dd-yyyy
new Date('01/01/2024')
new Date('2024/01/01')
new Date('01 Jan 2024')

new Date(2024, 1, 1)
new Date(2024, 1, 1 + 100) // прибавить 100 дней к текущей дате
Date.now() // текущая дата в миллисекундах 

now.getFullYear() // год
now.getMonth() // месяц
now.getDate() // дата
now.getDay() // день недели
now.getHours() // часы
now.getMinutes() // минуты
now.getSeconds() // секунды
now.getTime() // время в миллисекундах

// Операции с датами
const date1 = new Date(2024, 10, 18)
const date2 = new Date(2024, 10, 14)
Number(date1) // дата в миллисекундах
Number(date2)
date2 - date1 // получим разницу в миллисекундах
(date2 - date1) / (1000 * 60 * 60 * 24) // разницу в датах переводим из миллисекунд в дни

// так же можно сравниват даты
date1 > date2 // true
date1 == date2 // false
date1 === date2 // false
// решается это через преобразование в миллисекунды(в число)
Number(date1) === Number(date2) // true
date1.getTime() === date2.getTime() // true
+date1 === +date2 // true

// Методы вывода без локализации:
now.toString() // Wed Sep 18 2024 14:52:11 GMT+0300 (Москва, стандартное время)
now.toDateString() // Wed Sep 18 2024
now.toTimeString() // 14:53:02 GMT+0300 (Москва, стандартное время)

// Интернационализация дат
const optionsFirst = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

new Intl.DateTimeFormat('ru-RU').format(now) // 18.10.2024
const optionsDate = {
    hour: 'numeric',
    minute: 'numeric'
}
new Intl.DateTimeFormat('ru-RU', optionsDate).format(now) // 15:10
const optionsDate2 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long'
}
new Intl.DateTimeFormat('en-US', optionsDate).format(now) // 3:10 PM
new Intl.DateTimeFormat('en-US', optionsDate2).format(now) // December at 3:10 PM
// вместо ru-RU можно просто прописать navigator.language - язык берется у пользователя



// ТАЙМЕРЫ
// Функция setTimeout() позволяет отложить выполнение кода на определенный промежуток времени.
setTimeout(() => {
    console.log('Boom!')
}, 2000) // через 2 сек выведет в консоль Boom!
// 2000 - это через сколько секунд нужно выполнить код(в миллисекундах)
setTimeout((message) => {
    console.log(message)
}, 2000, 'Boom!') // (выведет тоже самое)
// здесь поработали с аргументом, их может быть несколько, например
setTimeout((message1, message2) => {
    console.log(message1, message2)
}, 2000, 'Boom!', 'Opsss') // вывод: Boom! Opsss

// отмена таймера
const boomTimer = setTimeout(() => {
    console.log('Boom!')
}, 2000)
clearTimeout(boomTimer) // остановка


// setInterval() - позволяет выполнять функции повторно через определенные интервалы времени
const interval = setInterval(() => {
    console.log(new Date())
}, 1000)
// остановка setInterval
setTimeout(() => {
    clearInterval(interval)
}, 5000) // через 5 сек остановиться setInterval



// ООП
// функциональный метод
const User = function(email, password) {
    this.email = email;
    this.password = password;
}

const user1 = new User('a@a.ru', '123')
user1 // User {email: 'a@a.ru', password: '123'}

// Prototype
const Book = function(title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
}
// чтобы добавить метод, но не для Book, а для других созданных книг на основе Book
Book.prototype.read() = function() {
    this.isRead = true;
}

const lordOfTheRing = new Book('Lord of the ring', 'Tolkien') // Book {title: 'Lord of the ring', author: 'Tolkien', isRead: false}
lordOfTheRing.read() // Book {title: 'Lord of the ring', author: 'Tolkien', isRead: true}

// Чтобы проверить св-ва которые создали осознанно в начале и те которые добавили в процессе есть метод,
// возвращает true или false
lordOfTheRing.hasOwnProperty('read') // false
lordOfTheRing.hasOwnProperty('author') // true


// Class(классы)
// const Book = function(title, author) {
//     this.title = title;
//     this.author = author;
//     this.isRead = false;
// }
// чтобы добавить метод, но не для Book, а для других созданных книг на основе Book
// Book.prototype.read() = function() {
//     this.isRead = true;
// }

// const lordOfTheRing = new Book('Lord of the ring', 'Tolkien')

// Переделаем все это в Class
class BookClass {
    isRead = false;

    constructor(title, author) {
        this.title = title;
        this.author = author;
    };

    read() {
        this.isRead = true;
    };
}

const lotr = new BookClass('lotr', 'Tolkien') // BookClass {title: 'lotr', author: 'Tolkien', isRead: false}

// Setters и getters
class Task {
    constructor(title, dueDate) {
        this.title = title,
        this.dueDate = dueDate
    }

    get isOverdue() {
        return this.dueDate < new Date()
    }

    set dueDate(date) {
        if (date < new Date()) {
            return
        }
        this._dueDate = date
    }
}

const newTask = new Task('Task1', new Date())

console.log(newTask.isOverdue)
// Дата поменялась
newTask.dueDate = new Date('2025/01/02') // Task { title: 'Task1', dueTo: 2024-09-20T07:05:06.098Z }
console.log(newTask)

// Static
class Test {
    static a = 1
    static hello() {
        console.log('Hello')
    }
}
// Без static мы можем пользоваться методами и св-вами только через создание объекта
const test = new Test()
test.hello() // Hello
//После того как прописали static можем вызвать у самого класса этот метод и св-ва
Test.hello() // Hello
Test.a // 1

// Чтобы совершать каку-то логику static {}
static {
    let b = 0;
    a = 5;
}
Test.a // "а" уже будет = 5

// Приватные методы и свойства
class Car {
    #vin = 5123;
    speed = 150;

    #changeVin() {
        console.log('changed')
    }

    test() {
        this.#changeVin()
    }
}
const car = new Car()
car.speed // к speed мы можем обратиться
car.#vin // а вот к #vin мы не можем обратиться, потому что он приватный
// приватные методы и св-ва использовать можно только внутри класса
// но есть нюанс, если приватный метод или св-во засунуть в публичный метод, например
car.test() // changed


// Наследование в ES6
class BookExtends {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    buy() {
        console.log('Buy')
    }
}

// наследуем
class AudioBook extends BookExtends {
    constructor(title, author, lenMinutes) {
        // для активации конструктора родительского класса
        super(title, author)
        this.lenMinutes = lenMinutes;
    }
    log() {
        console.log(`${this.title} - ${this.lenMinutes}`)
    }
}

// Builder и Chaining
class Wallet {
    balance;
    add(sum) {
        balance += sum
        // чтобы работало надо добавить
        return this
    }
    remove(sum) {
        balance -= sum
        // чтобы работало надо добавить
        return this
    }
}
const wallet = new Wallet()
const resWallet1 = wallet.add(100)
const resWallet2 = wallet.remove(30)
const resWallet3 = wallet.remove(50)
// после добавления return this можно будет писать так
const resWallet4 = wallet.add(100).remove(30).add(150).add(70) // 150 называется chaining

// Builder
class Builder {
    home = {}
    addRoof(roof) {
        this.home.roof = roof
        return this
    }
    addTable(table) {
        this.home.table = table
        return this
    }
    execute() {
        return this.home
    }
}
const home = new Builder().addRoof('Крыша').addTable('Стол').execute() // { roof: 'Крыша', table: 'Стол' }


// SOLID 
// Solid - описывает принципы дизайна и построения архитектуры в объектно-ориентированном программировании (ООП), 
// помогая создавать расширяемые и поддерживаемые приложения.

// S - Single Responsibility Principle (Принцип единой ответственности)
// Класс должен иметь только одну причину для изменения, выполняя одну функцию.
class Characters {
    #inventory = [];
    #health;

    addItem(item) {
        this.#inventory.push(item)
    }
    recieveDamage(damage) {
        this.#health -= damage
    }

    // вот это не нужно писать в этот класс, здесь они не нужны
    // нужно реализовать в другом классе
    saveCharacter() {
        localStorage.setItem('char', this)
    }
    loadCharacter() {
        ////....
    }
}

// O - Open/Closed Principle (Принцип открытости/закрытости)
// Классы должны быть открыты для расширения, но закрыты для модификации.
class Treasure {

}

class Coin extends Treasure {

}

class Crystal extends Treasure {

}

class Inventory {
    #score;
    pick(treasure) {
        if(treasure instanceof Coin) {
            this.#score += 1
        }
        if(treasure instanceof Crystal) {
            this.#score += 10
        }
    }
}

// а что если я захочу добавить Brilliant,
// получается что каждый раз мне нужно прописывать if(условие)
class Brilliant extends Treasure {

}

// поэтому переделаем 
class Treasure {
    value = 0;
}

class Coin extends Treasure {
    value = 1;
}

class Crystal extends Treasure {
    value = 10;
}

class Brilliant extends Treasure {
    value = 20;
}

class Inventory {
    #score;
    pick(treasure) {
        this.#score += treasure.value
    }
}

// L - Liskov Substitution Principle (Принцип подстановки Барбара Лисков)
// Объекты в программе можно заменять их подтипами, не изменяя корректность программы.
class UserLiskov {
    #role = 'user';
    getRole() {
        return this.#role 
    }
}

class Admin extends UserLiskov {
    #role = ['user', 'admin'];
    getRole() {
        // чтобы не было ошибки из-за того что не можем вызвать метод toUpperCase на массив
        return this.#role.join(', ')
    }
}

function logRole(user) {
    console.log(`Role: ${user.getRole().toUpperCase()}`)
}
logRole(new UserLiskov()) // Role: USER
// Ошибки не будет, потому что предотвратили ее
logRole(new Admin()) // Role: USER, ADMIN

// I - Interface Segregation Principle (Принцип разделения интерфейса)
// Не следует вынуждать класс реализовывать интерфейсы и методы, которые он не будет использовать.
class Weapon {
    // оружие может бить
    strike() {

    }
    // оружие может стрелять
    shoot() {

    }
}

class Rifle extends Weapon {
    strike() {
        // бить пистолетом не эффективно
    }
    
    shoot() {
        // стрелять винтовкой хорошо
    }
}

class Sword extends Weapon {
    strike() {
        // бить мечом хорошо
    }
    
    shoot() {
        // но стрелять мечом невозможно
    }
}
// вот поэтому надо в общем классе Weapon указывать св-ва и методы только общие, а не все подряд
// т.е. одному наследованному классу нужен метод shoot(), а другому нет

// D - Dependency Inversion Principle (Принцип инверсии зависимостей)
// Зависимости внутри системы строятся на основе абстракций, а не деталей. 
// Высокоуровневые модули не должны зависеть от низкоуровневых.
class DB {
    save(items) {
        console.log(`Saved: ${items}`)
    }
}

class MongoDB extends DB {
    save(items) {
        console.log(`Saved to Mongo: ${items}`)
    }
}

class ToDoList {
    items = [1, 2, 3]
    db;

    constructor(db) {
        this.db = db
    }

    saveToDB() {
        this.db.save(this.items)
    }
}

const list1 = new ToDoList(new DB())
list1.saveToDB() // Saved: 1, 2, 3
const list2 = new ToDoList(new MongoDB)
list2.saveToDB() // Saved to Mongo: 1, 2, 3


// Асинхронный код в JS
// Асинхронные операции позволяют делегировать выполнение длительных задач (например, таймеры и запросы на сервер) 
// веб-АПИ, не блокируя главный поток.

// Запросы на сервер
// AJAX: Asynchronous JavaScript and XML, позволяет браузеру асинхронно отправлять запросы и общаться с сервером.

// Получение данных(старый метод XML)
const request = new XMLHttpRequest()
request.open('GET', 'https://dummyjson.com/products/1')
request.send()

request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText)
    console.log(data)
})


// Promises
// Promises и fetch
// Promise - это объект, представляющий собой конечный результат асинхронной операции. 
// Promise может находиться в одном из трех состояний:
// pending (в ожидании) — начальное состояние, промис ещё не выполнен.
// fulfilled (выполнено успешно) — асинхронная операция завершилась успешно, промис возвращает результат.
// rejected (выполнено с ошибкой) — произошла ошибка в процессе выполнения асинхронной операции.
const resPromise = fetch('https://dummyjson.com/products/1');
console.log(resPromise) // Promise {<pending>} - грубо говоря обертка

// Цепочка promise
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(({ products }) => {
        // получили список продуктов
        console.log(products)
        // для получения отдельного продукта по цепочке
        return fetch('https://dummyjson.com/products/' + products[0].id)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

// Обработка reject(catch)
// Чтобы не делать проверку ошибок на каждой операции есть глобальная обработка ошибок catch
// в самом конце нужно прописать:
.then(response => response.json())
.then(data => {
    console.log(data)
}).catch(error => console.log(error)) // вот это
// и после этого, при возникновении какой-либо ошибки в начале, дальше компиляция кода не пойдет,
// она остановится на этой ошибке

// Finally()
// Все то, что будет прописано в finally() будет выведено в конце кода
// (даже если в начале сработала ошибка и компиляция дальше не пошла)
then(response => response.json())
.then(data => {
    console.log(data)
}).catch(error => console.log(error))
.finally(() => {
    console.log('Finally')
})

// РУчное создание ошибок
fetch('https://dummyjson.com/products')
    .then(response => {
        if(!response.ok) {
            throw new Error(`Is Error ${response.status}`)
        }
        return response.json()
    })
    ///////.......///////
.catch(error => {
    const el = document.querySelector('.filter')
    el.textContent = error.message
})


// Очередность выодов синхроннных и асинхронных кодов
// Пример
console.log(1)

setTimeout(() => {
    console.log(2)
}, 0)

Promise.resolve(3).then(res => console.log(res))

console.log(4)
// Первым выведется 1 потом 4, это синхронный код выводится в первую очередь и по очереди
// 3 выводится Promise, хоть и setTimeout и Promise два асинхронных кода,
// но у Promise есть приоритет между другими асинхронными кодами
// ну и 4 выведется 2
// Итог: 1 4 3 2


// Создание простого Promise
const prom = new Promise((resolve, reject) => {
    if (new Date < new Date('01/01/2025')) {
        reject(new Error('Error!!!'))
    }
    resolve('Success!')
})

// в then есть 2 аргумента
// Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», 
// и получает результат.
// Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», 
// и получает ошибку.

// использование промиса
prom
// вывод resolve
.then(data => console.log(data))
// вывод ошибки reject
.catch(error => console.log(error))
// создал Promise он имеет 1 аргумент это функция, у этой функции 2 аргумента
// Вызов resolve(value) завершает промис с успехом.
// Вызов reject(error) завершает промис с ошибкой и попадание в catch

// TimeOut на promise в функции
function timeout(sec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, sec * 1000)
    })
}

timeout(1)
    // через 1 секунды выведется в консоль 1
    .then(() => {
        console.log(1)
        // вернем timeout и можем работать с ним дальше
        return timeout(1)
    })
    .then(() => {
        //выведем в консоль цифру 2 с таймаутом 1 секунда
        console.log(2)
        // также возвращаем timeout для дальнейшей работы
        return timeout(2)
    })
    .then(() => {
        //выведем в консоль цифру 3 с таймаутом 2 секунда
        console.log(3)
    })
// и т.д.


// withResolvers
const { resolve, reject, promise } = Promise.withResolvers()


// Современный Асинхронный JS
// Async await
function getProducts() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => console.log(data))
}
// переделаем функцию fetch запроса на async await

async function getProducts() {
    const productsResponse = await fetch('https://dummyjson.com/products')
    const { products } = await productsResponse.json()
    console.log(products)
}
// оба будут работать одинаково
// если нужно сделать еще запрос, просто прописываем в функции еще один fetch запрос


// Обработка исключений при асинхронном программировании
// try {} catch {}
async function getProducts() {
    // дословно: try - выполни этот блок кода
    try {
        const productsResponse = await fetch('https://dummyjson.com/products')
        if(!productsResponse.ok) {
            throw Error(productsResponse.status)
        }
        const { products } = await productsResponse.json()
        console.log(products)

        const productResponse = await fetch('https://dummyjson.com/products/1')
        if(!productResponse.ok) {
            throw Error(productResponse.status)
        }
        const product = await productResponse.json()
        console.log(product)
    // если поймаешь ошибку лови ее здесь(catch)
    } catch(e) {
        console.error(e)
    // также есть finally
    } finally {
        console.log('Finally!!!')
    }
}

getProducts()


// Последовательный запрос данных
async function getAllProducts() {
    const response = await fetch('https://dummyjson.com/products');
    return response.json()
}

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id);
    return response.json()
}

async function main() {
    const { products } = await getAllProducts()
    for (const product of products) {
        const res = await getProduct(product.id)
        console.log(res)
    }
}

main()


// Параллельный запрос
async function getAllProducts() {
    const response = await fetch('https://dummyjson.com/products');
    return response.json()
}

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id);
    return response.json()
}

async function main() {
    const res = await Promise.all([
        getProduct(1),
        getProduct(2),
        getProduct(3),
        getProduct(4),
        getProduct(5)
    ])
    console.log(res)
}

main()


// Пример использования: авторизация пользователя
async function main() {
    const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'emilys',
            password:'emilyspass'
        })
    })
    const data = await res.json()
    console.log(data)
}

// Продвинутый DOM и Events
// сделать скролл до элемента
const el = document.createElement('.down')
const rect = el.getBoundingClientRect()

function generate(event) {
    window.scrollTo({
        left: window.scrollX + rect.left,
        top: window.scrollY + rect.topб,
        // для плавности скрола
        behavior: 'smooth'
    })
}
// при нажатии на кнопку будет происходить скролл до указанного элемента

// Типы событий и обработчики
button.addEventListener('click', function(event) {
    console.log('Event1')
})
button.addEventListener('click', function(event) {
    console.log('Event2')
})
// Удаление слушателя событий
// аргументу слушателя(функцие) нужно присвоить переменную
const eventHandler = function(event) {
    console.log('Event1')
}
// прописываем новую фугкцию в слухач
button.addEventListener('click', eventHandler)
// и во втором слушателе удаляем первый слушатель
button.addEventListener('click', function(event) {
    console.log('Event2')
    button.removeEventListener('click', eventHandler)
})
// обработчиков событий множество, на нажатие клавиатурой, мышкой, левой кнопкой или правой,
// или просто наведение и т.д.

// ВСПЛЫТИЕ СОБЫТИЙ
// есть 3 элемента есть {cont, в нем лежит {desc и в desc лежит {button}}}
const button = document.querySelector('.button')
const desc = document.querySelector('.desc')
const cont = document.querySelector('.cont')
// обработчик события для button
button.addEventListener('click', function(event) {
    console.log('Event-button')
    // выводит от какого элемента был target
    console.log(event.target)
    //выводит действительный target
    console.log(event.currentTarget)
    this.style.backgroundColor = 'purple'
})
// обработчик события для desc
desc.addEventListener('click', function(event) {
        console.log('Event-desc')
        // выводит от какого элемента был target
        console.log(event.target)
        //выводит действительный target
        console.log(event.currentTarget)
        // остановить событие
        event.stopPropagation()
        this.style.backgroundColor = 'blue'
})
// обработчик события для cont
cont.addEventListener('click', function(event) {
        console.log('Event-cont')
        // выводит от какого элемента был target
        console.log(event.target)
        //выводит действительный target
        console.log(event.currentTarget)
        this.style.backgroundColor = 'green'
})


// Делегирование событий
// Например у нас 100 пользователей и нам нужно чтобы при нажатии на каждого что-то происходило
const root = document.querySelector('#root')

for (let i = 0; i < 100; i++) {
    // задаем атрибут data-id и его значение будет индекс(i)
    const el = document.createElement('div')
    el.setAttribute('data-id', i)
    el.innerHTML = `User ${i}`
    // чтобы не делать обработчик события на каждый элемент(их может быть 1000 или 10000)
    // не нужно создавать столько обработчиков
    // el.addEventListener('click', () => {
    //     console.log(`Deleted user ${i}`)
    // })
    root.append(el)
}

// создаем один обработчик события на родительский элемент
root.addEventListener('click', (e) => {
    // получаем их атрибут data-id
    const i = e.target.getAttribute('data-id')
    console.log(i)
})


// Перемещение по DOM
const rootDOM = document.querySelector('#root')
rootDOM.childNodes // покажет все дочерние элементы
rootDOM.children // покажет все дочерние элементы
rootDOM.parentElement // покажет непосредственного родителя
rootDOM.parentElement // тоже самое