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

// FOR IN(проход по индексу массива)
for (const index in arrNum) {
    console.log(index) // 0 1 2 3 4 5 
    console.log(arrNum[index]) // 1 2 3 4 5 6
}