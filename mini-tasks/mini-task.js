/**
 * Цель:
Разработка объекта warehouse для хранения и управления товарами с тремя основными методами.

Содержание лекции:
Общий обзор:
Создаем объект warehouse с массивом товаров goods.
Товары имеют идентификатор и могут включать различные характеристики, в том числе вес.
Методы для управления складом:
A. Добавление товара (addGoods):
B. Поиск товара по идентификатору (findGoodById):
C. Получение суммарного веса всех товаров (getTotalWeight):
 */

/* Товары */
const car = {
    id: 1,
    weight: {
      kg: 1000
    },
    brand: 'Ford'
  }
  
  const chair = {
    id: 2,
    weight: {
      kg: 2
    }
  }
  
  const paper = {
    id: 3,
    color: 'red'
  }
  
  const table = {
    id: 4,
    color: 'green',
    weight: {
      kg: 15
    }
  }
  
  const warehouse = {
    goods: [],
    findGoodById: function (id) {
      return this.goods.find(g => g.id === id)
    },
    addGood: function (good) {
      const findItemId = this.findGoodById(good.id)
      if (findItemId) {
        console.log('Этот товар уже был добавлен')
        return
      }
      this.goods.push(good)
    },
    getWeightKg: function () {
      return this.goods.reduce((acc, el) => acc += el.weight?.kg ? el.weight.kg : 0, 0)
    },
  };
  
  warehouse.addGood(car)
  warehouse.addGood(chair)
  warehouse.addGood(chair)
  warehouse.addGood(paper)
  warehouse.addGood(table)
  console.log(warehouse.goods)
  console.log(warehouse.getWeightKg(warehouse.goods))
  let searchId = warehouse.findGoodById(1)
  console.log(searchId)
  
/**************************************************************************/

/*
Написать методы, позволяющие выводить имена различных сущностей компании (компания, владелец, сотрудники)
с использованием this для обращения к соответствующему объекту.
Практические Шаги
Добавление Метода getName для Компании:
Использование обычной функции (не стрелочной), чтобы this ссылался на текущий объект компании.
Метод для Владельца (CEO):
Аналогично создание метода getName, где this будет ссылаться на объект CEO, 
несмотря на его вложенность в объект компании.
Метод для Сотрудников:
В случае массива сотрудников, каждый объект сотрудника будет иметь свою версию метода getName, 
что обеспечит правильную ссылку через this на данные конкретного сотрудника.
 */ 
const company = {
  name: "ООО Агро",
  employees: [
    { 
      name: "Света", 
    }
  ],
  ceo: {
    name: "Вася",
  },
  getNameCompany: function () {
      console.log(this.name)
  },
  getNameCeo: function () {
      console.log(this.ceo.name)
  },
  getNameEmployees: function () {
      const employeesName = this.employees.map(el => el.name).join('')
      console.log(employeesName)
  }
};

company.getNameCompany()
company.getNameCeo()
company.getNameEmployees()

// ИЛИ

const company2 = {
  name: "ООО Агро",
  employees: [
    { 
      name: "Света", 
      getName: function () {
        console.log(this.name)
      }
    }
  ],
  ceo: {
    name: "Вася",
    getName: function () {
      console.log(this.name)
    }
  },
  getName: function () {
      console.log(this.name)
  },
};

company2.getName()
company2.ceo.getName()
company2.employees.map(employee => employee.getName())


/**********************************************************/

// Процесс разбивается на несколько частей: создание объекта пользователя, 
// написание функции сброса пароля, использование метода bind для привязки функции к объекту пользователя, 
// и наконец, вызов функции сброса пароля.

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = "1";
  }
}

const user = {
  login: 'example@mail.com',
  password: '12345'
};

const removeUserPassword = removePassword.bind(user)
removeUserPassword(true)
console.log(user)

/**********************************************************/

// Функция Конвертации: Функция для конвертации сумм из одной валюты в другую.

function convert(sum, initCur, convCur) {
  const valets = [
      {name: 'RUB', mult: 1},
      {name: 'USD', mult: 60},
      {name: 'EUR', mult: 90}
  ]

  const initial = valets.find(cur => cur.name === initCur)
  if (!initial) {
      return null
  }

  const convert = valets.find(val => val.name === convCur)
  if (!convert) {
      return null
  }

  return new Intl
      .NumberFormat('ru-RU', {style: 'currency', currency: convert.name})
      .format(sum * initial.mult / convert.mult)
  
}

console.log(convert(10000, 'RUB', 'USD'))
console.log(convert(10000, 'USD', 'RUB'))
console.log(convert(10000, 'RUB', 'EUR'))
console.log(convert(10000, 'EUR', 'RUB'))
console.log(convert(10000, 'USD', 'EUR'))
console.log(convert(10000, 'EUR', 'USD'))

/**********************************************************/

// Задача: Создать функцию isBirthday, 
// которая принимает данные пользователя (объект с полями имя и дата рождения) и проверяет, 
// является ли сегодня днем рождения пользователя.

const userObj = {
  name: 'Emil',
  birthday: '2024/09/18'
}

function birthdayNow(user) {
  const birthdayUserNumber = new Date(user.birthday)
  const dateNow = new Date()
  if (birthdayUserNumber.getMonth() !== dateNow.getMonth()) {
      console.log(`У пользователя ${user.name} НЕ сегодня День Рождения!`)
  } else if (birthdayUserNumber.getDate() !== dateNow.getDate()) {
      console.log(`У пользователя ${user.name} НЕ сегодня День Рождения!`)
  } else {
      console.log(`У пользователя ${user.name} сегодня День Рождения!`)
  }
}

birthdayNow(userObj)

/**********************************************************/

// Таймер пиццы Сделать таймер пиццы (функция, принимающая время), 
// который будет выводить в консоль секунды, оставшиеся до готовности пицы и сообщение по готовности. 
// 00:04 00:03 00:02 00:01 00:00 🍕!!!

function pizza(ms) {
  const end = new Date().getTime() + ms
  const interval = setInterval(() => {
      console.log(
          new Intl.DateTimeFormat('ru-RU', {
              minute: 'numeric',
              second: 'numeric'
          }).format(end + 100 - new Date()) // добавил 100 потому что есть погрешность в счетчике
      )
  }, 1000)
  setTimeout(() => {
      clearInterval(interval)
      console.log('🍕!!!')
  }, ms)
}

pizza(5000)

/**********************************************************/

// Основные пункты и задачи:
// Определение функции конструктора Cart:
// Создание корзины (Cart) без принимаемых аргументов.
// Создание пустого массива товаров (products) в качестве свойства корзины.
// Добавление метода AddProduct:
// Функция принимает продукт и добавляет его в массив products, если такого продукта нет (проверка по идентификатору).
// Реализация метода увеличения количества товара (increaseAmount):
// Функция принимает идентификатор продукта и увеличивает его количество на единицу.
// Реализация метода уменьшения количества товара (decreaseAmount):
// Функция принимает идентификатор продукта и уменьшает его количество на единицу.
// Продукты с количеством 0 удаляются из корзины.

const Cart = function() {
  this.products = []
}

Cart.prototype.addProduct = function(product) {
  if (this.products.find(elem => elem.id === product.id)) {
      console.log(`Товар ${product.name} был уже добавлен!`)
      return
  }
  this.products.push(product)
}
Cart.prototype.increaseAmount = function(id) {
  this.products = this.products.map(prod => {
      if (prod.id === id) {
          prod.count++
          return prod
      }
      return prod
  })
}
Cart.prototype.decreaseAmount = function(id) {
  this.products = this.products.map(prod => {
      if (prod.id === id) {
          prod.count--
          return prod
      }
      return prod
  }).filter(prod => prod.count > 0)
}

const bread = {id: 1, name: 'Bread', count: 1}
const tomato = {id: 2, name: 'Tomato', count: 5}
const chocolate = {id: 3, name: 'Chocolate', count: 3}

const cart = new Cart()

cart.addProduct(bread)
cart.addProduct(tomato)
cart.addProduct(chocolate)

cart.increaseAmount(1)

console.log(cart)

/**********************************************************/

// Задача:
// Создать класс User с приватными полями: логин (login) и пароль (password).
// Реализовать методы для работы с этими полями.
// Как сделать:

// Определение класса с приватными полями:
// Создать класс User с приватными полями login и password.
// Работа с конструктором:
// В конструкторе класса передать логин и пароль.
// Инициализировать логин напрямую и пароль через сеттер.
// Шифрование пароля:
// При установке пароля его необходимо "шифровать" — инвертировать (например, из 123 делаем 321).
// Геттеры и сеттеры:
// Реализовать сеттер для пароля, который приватно шифрует и сохраняет его.
// Реализовать геттер для логина, возвращающий логин.
// Сделать так, чтобы пароль нельзя было прочитать напрямую, только проверить или изменить через специальные методы.
// Методы для проверки и изменения пароля:
// checkPassword(password): сверяет переданный пароль с сохранённым и возвращает true или false.
// changePassword(oldPassword, newPassword): позволяет изменить пароль, если старый введен корректно.

class User {
  // Приватные поля
  #login;
  #password;

  constructor(login, password) {
      this.#login = login
      this.#password = this.#reversePassword(password)
  }

  #reversePassword(password) {
      return password.split('').reverse().join('')
  }

  // Проверка пароля
  checkPassword(oldPass) {
      return this.#reversePassword(oldPass) === this.#password
  }

  // Смена пароля
  changePassword(oldPass, newPass) {
      if(!this.checkPassword(oldPass)) {
          return false
      }
      this.#password = this.#reversePassword(newPass)
      return true
  }
}

const userClass = new User('qwerty', '12345')
console.log(userClass.changePassword('12345', '67890'))
console.log(userClass)

/**********************************************************/

// Основные понятия:
// Классы: В основе упражнения лежит создание трех классов: Enemy, Sword, 
// и конкретный тип врага Orc, наследующий свойства Enemy.
// Enemy: Имеет свойство health и метод receiveDamage для уменьшения здоровья.
// Sword: Обладает свойством damage и методом strike, позволяющим нанести урон врагу.
// Orc: Является уточненной версией Enemy, может получать урон только в 50% случаев.
// Реализация упражнения:
// Создание класса Enemy:
// Имеет приватное свойство health.
// Конструктор для инициализации health.
// Метод receiveDamage, вносящий изменения в health.
// Создание класса Sword:
// Имеет свойство damage.
// Метод strike, который наносит урон объекту Enemy или его наследнику.
// Создание класса Orc:
// Наследует от Enemy.
// Конструктор также принимает health.
// Переопределяет метод receiveDamage, реализуя 50% шанс получения урона.
// Взаимодействие классов:
// При использовании меча (Sword), его метод strike вызывает метод receiveDamage у объекта Enemy или Orc,
// модифицируя их health.

class Enemy {
  health;
  constructor(health) {
      this.health = health
  }

  receiveDamage(damage) {
      this.health -= damage
      console.log(this.health)
  }
}

class Orc extends Enemy {
  constructor(health) {
      super(health)
  }
  receiveDamage(damage) {
      if(Math.random() > 0.5) {
          this.health -= damage
      }
      console.log(this.health)
  }
}

class Sword {
  #damage;
  constructor(damage) {
      this.#damage = damage
  }

  strike(enemy) {
      enemy.receiveDamage(this.#damage)
  }
}

const enemy = new Orc(100)
const sword = new Sword(30)
sword.strike(enemy)
sword.strike(enemy)
sword.strike(enemy)
sword.strike(enemy)

/**********************************************************/

// Выполнение запроса:
// Создаем новый объект XMLHttpRequest.
// Открываем соединение с методом GET и указываем URL.
// Отправляем запрос.
// Подписываемся на событие получения данных и обрабатываем пришедшие данные.
// Обработка данных:
// Прием данных в формате JSON и их парсинг.
// Использование деструктуризации для извлечения массива продуктов из полученных данных.
// Рассчет суммарной стоимости продуктов с помощью метода reduce.
// Вывод суммы в консоль.
// Расчет средней цены:
// Деление суммарной стоимости на количество продуктов для получения средней цены.
// Вывод средней цены в консоль.

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products')
request.send()

request.addEventListener('load', function() {
    const { products } = JSON.parse(this.responseText)
    const sum = products.reduce((acc, p) => acc += p.price, 0)
    console.log(products)
    console.log(sum / products.length)

})

/**********************************************************/

// Получение списка категорий:
// Создайте функцию getCategories для выполнения запроса к бэкэнду и получения списка категорий.
// Используйте fetch для запроса на определённый URL.
// Преобразуйте ответ от сервера в формат JSON с помощью .json().
// Обработайте полученные данные (массив категорий) для дальнейшего использования.
// Отображение селекта с категориями:
// Создайте функцию createSelect, принимающую массив опций (категорий).
// Найдите элемент в DOM, где будет расположен селект, используя querySelector.
// Сгенерируйте HTML-код селекта с опциями, используя шаблонные строки и метод map для массива категорий.
// Каждая опция <option> в цикле должна иметь значение (value) равное названию категории и отображаемый текст также соответствующий названию категории.
// Вставьте сгенерированный HTML-код селекта в выбранный элемент интерфейса.
// Интеграция и обработка ошибок:
// Вызовите getCategories для начала процесса загрузки категорий и дальнейшего отображения.
// В обработке промисов добавьте блок .catch() для ловли и обработки возможных ошибок, выводя их в консоль или предусмотрите другой способ уведомления об ошибке.
// Проверка работы:
// Сохраните изменения и запустите страницу.
// Убедитесь, что селект успешно отображается и содержит все категории, полученные от бэкэнда.

function createSelect(array) {
  const root = document.querySelector('#root')
  root.innerHTML = `<select>
      ${array.map(el => `<option value=${el}>${el}</option>`)}
  </select>`
}

function getCategories() {
  fetch('https://dummyjson.com/products/category-list')
  .then(res => res.json())
  .then(data => createSelect(data))
  .catch(error => console.error("Error fetching categories:", error))
}

getCategories()

/**********************************************************/

// Цель: Создать функцию myFetch для выполнения GET запросов, используя XML request, и возвращение результата через Promise.
// Шаги реализации:
// Определение Функции:
// Функция myFetch принимает в качестве аргумента URL.
// Возвращает Promise, внутри которого осуществляется запрос.
// Создание XML Request внутри Promise:
// Инициализация нового XML request.
// Открытие соединения с методом GET на указанный URL.
// Отправка запроса.
// Обработка Событий Request:
// load (загрузка): В случае успешного получения данных используется resolve для возвращения полученного ответа.
// error (ошибка): При возникновении ошибки при запросе используется reject с описанием ошибки.
// timeout (тайм-аут): Если запрос не выполняется в пределах установленного времени, происходит reject с ошибкой таймаута.
// Тестирование и Использование myFetch:
// Вызов myFetch с конкретным URL.
// Обработка полученных данных с помощью .then().
// Обработка возможных ошибок с помощью .catch().
// Пример использования с JSON:
// Для получения данных в формате JSON необходимо преобразовать полученный текст с помощью JSON.parse.
// Дополнительная Обработка Статусов Ответа:
// Можно добавить дополнительную проверку статуса ответа (например, на 404), и в случае ошибки выполнить reject.

function myFetch(url) {
  return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url);
      request.send();
      
      request.addEventListener('load', function() {
          resolve(JSON.parse(this.responseText).products)
      });
      request.addEventListener('error', function() {
          reject(new Error(this.status))
      });
      request.addEventListener('timeout', function() {
          reject(new Error('TimeOut'))
      });
  })
}

myFetch('https://dummyjson.com/products')
  .then(data => console.log(data))
  .catch(error => console.error(error))

/**********************************************************/

// Цель упражнения
// Применить на практике знания JavaScript и работы с API.
// Определить текущее местонахождение пользователя и его город.
// Используемые технологии
// JavaScript и Web API для получения геолокации.
// BigDataCloud API для определения города по координатам.
// Основные шаги
// Получение текущих координат пользователя через Geolocation API:
// Используем метод navigator.geolocation.getCurrentPosition.
// Обрабатываем успех и ошибку через переданные функции.
// В случае успеха, получаем координаты широты и долготы.
// Для удобства оборачиваем вызов API в Promise, чтобы использовать async/await.
// Определение города пользователя:
// Используем открытое API BigDataCloud для получения информации о местоположении по координатам.
// Отправляем GET-запрос с координатами как параметрами.
// Получаем ответ с информацией, включая название города.
// Обработка ошибок:
// Для любых запросов используем конструкцию try-catch, чтобы корректно обработать возможные ошибки.
// Важные моменты
// Необходимо заботиться о разрешении на использование геолокации у пользователя.
// Учитывать возможные ошибки и их корректную обработку.

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
              resolve({
                  latitude: coords.latitude,
                  longitude: coords.longitude
              });
          }, 
          (err) => {
              reject(err)
          }
      )
  })
}

async function getMyCity() {
  try {
      const { latitude, longitude } = await getMyCoordinates();
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
      if (!response.ok) {
          throw new Error(response.status)
      }
      const data = await response.json()
      console.log(data.city)
  } catch(e) {
      console.error(e)
  }
}

getMyCity()