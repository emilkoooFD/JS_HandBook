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