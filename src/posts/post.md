---
path: functions
date: 2018-11-19T14:08:12.975Z
title: Functions
---
Функции - это объект.

```
function noop() {}console.log(typeof noop) // function - чтоб было удобно отличать объект от функцииconsole.log(noop instanceof Object) // trueconsole.dir(noop)
```

Функции - это объект первого класса.

* function() {} - у них есть литерал
* let handle = function() {} - объект можно поместить в переменную
* array.push(function() {}) - объект можно передать в массив
* window.person = function() {} - объект можно указать в качестве свойства другого объекта
* invite(function() {}) - объект можно передать в функцию
* return function() {}- объект можно вернуть из функции
* person.name = 'Handle' - у объекта есть свойства

Создание функций

* Объявление функции _// Function Declaration_
* Выражении функции  _// Function Expression_
* Вызов конструктора
