---
title: 'Показ сообщения (MESSAGE, ASK)'
---

Оператор *показа сообщения* создает [действие](Actions.md), которое показывает пользователю окно с текстовым сообщением. Сообщение задается как некоторое [свойство](Properties.md), значение которого и будет использовано в качестве сообщения.

### Управление потоком

По умолчанию созданное действие останавливает поток выполнения до тех пор, пока пользователь не закроет сообщение. Однако это поведение можно изменить при помощи соответствующей опции - в этом случае созданное действие завершается сразу, а сообщение показывается пользователю при первой возможности (то есть при следующем взаимодействии с пользователем). Первый режим работы оператора будем называть *синхронным*, второй - *асинхронным*.

### Диалоговая форма {#dialog}

Также часто бывает необходимо не просто проинформировать пользователя о чем-либо, а еще и, например, запросить подтверждение на продолжение действия. Для таких случаев в операторе есть возможность вместо просто показа сообщения (с единственной кнопкой `OK`), задать вопрос с возможностью отмены (`ОК` / `Отмена`) и тем самым по сути осуществить [ввод значения](Value_input.md). [Отменой](Value_input.md#result) при таком вводе, соответственно, считается нажатие кнопки `Отмена` (непосредственно вводимого значения при таком вопросе не существует).

Кроме того, в вопрос можно добавить третий вариант - тогда вопрос будет выглядеть как (`Да` / `Нет` / `Отмена`). В этом случае считается, что [результатом ввода](Value_input.md#result) будет значение логического класса (`Да` - `TRUE`, `Нет` - `NULL`). Отменой ввода, как и в первом случае, считается нажатие кнопки `Отмена`.

Форму оператора, в которой пользователю задается вопрос, будем называть *диалоговой*. 

Также как и в остальных операторах ввода значения, в диалоговой форме этого оператора можно задавать [основное и альтернативное](Value_input.md#result) действия. Первое вызовется, если ввод был успешно завершен, второе - в обратном случае (если ввод был отменен).

Диалоговая форма оператора доступна только в синхронном режиме.

### Язык

Для объявления действия, показывающего сообщение, используется [оператор `MESSAGE`](MESSAGE_operator.md). Для показа сообщения в форме диалога используется [оператор `ASK`](ASK_operator.md).

### Примеры


```lsf
message  { MESSAGE 'Hello World!'; }                                // простое текстовое сообщение

isGood = DATA BOOLEAN (Item);
stringData(Item i)   {
    MESSAGE IF isGood(i) THEN 'Good' ELSE 'Bad';   // в зависимости от того, какой item будет передан действию, будет показываться окно с текстом 'Good', либо с текстом 'Bad'
}

testMessage()  {                    // В этом случае пользователю будет выдано пять текстовых сообщений
    LOCAL i = INTEGER();
    i() <- 0;
    WHILE i() < 5 DO {
        i() <- i() + 1;
        MESSAGE i();
    }
}

testMessageNowait()  {              // В случае NOWAIT пользователю будет выдано одно текстовое сообщение, объединяющее сообщения от пяти вызовов MESSAGE
    LOCAL i = INTEGER();
    i() <- 0;
    WHILE i() < 5 DO {
        i() <- i() + 1;
        MESSAGE i() NOWAIT;
    }
}
```

  


```lsf
testAsk ()  {
    ASK 'Вы действительно хотите продолжать ?' DO {
        MESSAGE 'Вы продолжили';
    }

    ASK 'Использовать старые значения ?' useOld = YESNO DO {
        IF useOld THEN
            MESSAGE 'Используем старые значения';
        ELSE
            MESSAGE 'Используем новые значения';
    }
}
```
