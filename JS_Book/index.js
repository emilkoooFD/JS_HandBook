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
