---
title: 'Оператор DELETE'
---

Оператор `DELETE` - создание [действия](Actions.md), которое [удаляет объекты](Class_change_CHANGECLASS_DELETE.md).

### Синтаксис

    DELETE expr [WHERE whereExpr]

### Описание

Оператор `DELETE` создает действие, удаляющее объекты, для которых выполняется определенное условие. Этот оператор может добавить свой локальный [параметр](Actions.md), который будет соответствовать перебираемым объектам. В этом случае блок `WHERE` является обязательным. 

### Параметры

- `expr`

    [Выражение](Expression.md) или [типизированный параметр](IDs.md#paramid). В качестве типизированного параметра можно использовать как уже объявленный параметр, так и объявить новый локальный параметр. При использовании выражения добавлять новые локальные параметры нельзя.

- `whereExpr`

    [Выражение](Expression.md), значение которого является условием создаваемого действия. Если не задано, считается равным `TRUE`.

### Примеры

```lsf
// удаление объекта
deleteObject(obj)  { DELETE obj; }

// удаление всех неактивных товаров
CLASS Article;
active = DATA BOOLEAN (Article);
deleteInactiveArticles()  {
    DELETE Article a WHERE a IS Article AND NOT active(a); // добавляется локальный параметр a, соответствующий перебираемым объектам
}
```
