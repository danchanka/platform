---
title: 'Блок событий'
---

Блоки событий [инструкции `FORM`](FORM_statement.md) - набор конструкций, управляющих [событиями](Form_events.md) в интерактивном представлении формы.

### Синтаксис

    EVENTS formEventDecl1, ..., formEventDeclN

Где каждый `formEventDecli` имеет следующий синтаксис:

    ON eventType eventActionId(param1, ..., paramK) | { eventActionOperator }

### Описание

Блок событий позволяет задать обработчики [событий формы](Form_events.md), которые возникают в результате определенных действий пользователя. В одном блоке можно через запятую указать произвольное количество обработчиков событий. Если для события указывается несколько обработчиков, то они гарантированно будут выполняться в порядке их задания. 

### Параметры 

- `eventType`

    Тип события формы. Задается одним из следующих ключевых слов:

    - `INIT` 
    - `OK`
    - `OK BEFORE`
    - `OK AFTER`
    - `APPLY`
    - `APPLY BEFORE` 
    - `APPLY AFTER` 
    - `CANCEL`
    - `CLOSE`
    - `DROP`
    - `CHANGE objName` - указывает, что действие должно быть выполнено при изменении значения объекта с именем `objName.`
    - `QUERYOK`
    - `QUERYCANCEL`

- `eventActionId`

    [Идентификатор действия](IDs.md#propertyid), которое будет являться обработчиком события.

- `param1, ..., paramK`

    Список параметров действия. Каждый параметр задается именем объекта формы. Имя объекта, в свою очередь, задается [простым идентификатором](IDs.md).

- `actionOperator`

    [Контекстно-зависимый оператор-действие](Action_operators.md). В качестве параметров этого оператора можно использовать имена уже объявленных объектов на форме.


### Примеры

```lsf
showImpossibleMessage()  { MESSAGE 'It\'s impossible'; };

posted = DATA BOOLEAN (Invoice);

FORM invoice 'Инвойс' // создаем форму по редактированию инвойса
    OBJECTS i = Invoice PANEL // создаем объект класса инвойс

//    ...  задаем остальное поведение формы

    EVENTS
        ON OK { posted(i) <- TRUE; }, // указываем, что при нажатии пользователем OK должно выполняться действия, которое выполнит действия по "проведению" данного инвойса
        ON DROP showImpossibleMessage() // по нажатию кнопки formDrop выдаем сообщение, что такого не может быть, так как эта кнопка по умолчанию будет показываться только в форме по выбору инвойса, а эта форма по сути является формой редактирования инвойса
;

CLASS Shift;
currentShift = DATA Shift();

CLASS Cashier;
currentCashier = DATA Cashier();

CLASS Receipt;
shift = DATA Shift (Receipt);
cashier = DATA Cashier (Receipt);

FORM POS 'POS' // объявляем форму для продажи товара покупателю в торговом зале

    OBJECTS r = Receipt PANEL // добавляем объект, в котором будет храниться текущий чек
//    ... объявляем поведение формы

;

createReceipt ()  {
    NEW r = Receipt {
        shift(r) <- currentShift();
        cashier(r) <- currentCashier();

        SEEK POS.r = r;
    }
}

EXTEND FORM POS // добавляем свойство через расширение формы, чтобы можно было сделать SEEK к уже созданному объекту на форме
    EVENTS
        ON INIT createReceipt() // при открытии формы выполняем действие по созданию нового чека, которое заполняет смену, кассира и прочую информацию
;
```
