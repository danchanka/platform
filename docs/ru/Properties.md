---
title: 'Свойства'
sidebar_label: Обзор
---

*Свойство* - это элемент системы, который принимает на вход набор объектов (*параметров*) и возвращает в качестве результата ровно один объект (*возвращаемое значение*). 

Тип и особенности вычисления каждого свойства определяются [оператором](Property_operators_paradigm.md), создающим это свойство.

### Ограничение типов {#types}

В силу особенностей реализации все возвращаемые не `NULL` значения свойства должны быть одного типа. То есть свойство не может для одного набора параметров возвращать, например, строку, а для другого - число.

Такое же ограничение существует и для каждого параметра свойства: свойство не может иметь не `NULL` значение для набора объектов, в котором, например, первый параметр строка, и при этом иметь не `NULL` значение для другого набора объектов, в котором первый параметр - объект.

### Язык

Для создания свойств используется [инструкция `=`](=_statement.md). 

### Примеры

```lsf
cost 'Стоимость' (i) = DATA NUMERIC[12,3] (Item);		// cвойство задано контекстно-независимым оператором-свойством DATA
weightedSum 'Взвешенная сумма' (a, b) = 2*a + 3*b; 		// cвойство задано выражением
diff = a - b; 											// заголовком этого свойства будет 'diff', а параметрами - (a, b)

teamName 'Название команды' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; // свойство задано оператором DATA с указанием дополнительных опций свойства
```
