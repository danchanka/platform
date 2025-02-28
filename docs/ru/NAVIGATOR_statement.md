---
title: 'Инструкция NAVIGATOR'
---

Инструкция `NAVIGATOR` - управление и настройка [навигатора](Navigator.md).

### Синтаксис

Синтаксис представляет собой вложенные друг в друга блоки *инструкций навигатора*. Внешний блок инструкции описывается после ключевого слова `NAVIGATOR`:

    NAVIGATOR {
        navigatorStatement1 
        ...
        navigatorStatementN
    }

Каждый `navigatorStatementi` описывает одну инструкцию навигатора и может в конце содержать вложенный блок других инструкций навигатора. Инструкции навигатора бывают трех типов:  

    NEW elementDescription [options] [{ ... }];
    MOVE name [caption] [options] [{ ... }];
    name [caption] [options] [{ ... }];

где `elementDescription` в инструкции `NEW` описывает тип элемента, который должен быть создан, и может быть в одном из трех видов:

    FOLDER name [caption] 
    FORM [name [caption] =] formName
    ACTION [name [caption] =] actionName
    [name [caption] =] formElseActionName

Инструкция навигатора должна завершаться точкой с запятой, если в ней не содержится вложенный блок других инструкций.

Опции элемента навигатора `options` могут перечисляться друг за другом в произвольном порядке. Поддерживается следующий набор опций:

    WINDOW windowName
    BEFORE elementName
    AFTER elementName
    FIRST 
    IMAGE fileName

### Описание

Инструкция `NAVIGATOR` позволяет настроить навигатор. Каждый блок инструкций навигатора, заключенный в фигурные скобки, позволяет изменять потомков некоторого [элемента навигатора](Navigator.md), будем называть этот элемент *текущим*. Во внешнем блоке, идущем после ключевого слова `NAVIGATOR`, текущим элементом является корневая системная папка `System.root`. Существует три типа инструкций навигатора:

-   *Инструкция создания* (`NEW`) позволяет создать новый элемент навигатора, делая его потомком текущего элемента. Создаваемые элементы навигатора могут быть трех типов: папка, элемент-форма, элемент-действие. Тип создаваемого элемента указывается с помощью ключевых слов `FOLDER`, `FORM`, `ACTION`, причем в случае создания элемента-формы ключевое слово `FORM` указывать необязательно. Блок инструкций навигатора, содержащийся в этой инструкции (если он есть), описывает потомков создаваемого элемента.
-   *Инструкция перемещения* (`MOVE`) позволяет переместить в качестве потомка в текущий элемент навигатора некоторый существующий элемент. Перемещаемый элемент навигатора предварительно удаляется из предыдущего места. Блок инструкций навигатора, содержащийся в этой инструкции, описывает потомков добавляемого элемента. 
-   *Инструкция редактирования* позволяет изменить указанный элемент навигатора, который должен являться потомком текущего элемента (не обязательно непосредственным). Блок инструкций навигатора, содержащийся в этой инструкции, описывает потомков указанного элемента.

Инструкции перемещения и редактирования позволяют изменить заголовок и опции элемента навигатора.

Иерархия, описываемая в рамках одной инструкции `NAVIGATOR`, может иметь произвольный уровень вложенности и описывать любое количество элементов на каждом из уровней.

### Параметры

- `name`

    Имя элемента навигатора. В инструкции создания является [простым идентификатором](IDs.md#id) и должно быть уникальным в пределах текущего [пространства имен](Naming.md#namespace), в остальных инструкциях является [составным идентификатором](IDs.md#cid). Имя может быть не задано при создании элемента-формы или элемента-действия, в этом случае в качестве имени элемента будет использовано имя формы либо имя действия соответственно.

- `caption`

    Заголовок элемента навигатора. [Строковый литерал](Literals.md#strliteral). В инструкции создания, если заголовок не задан, то заголовком будет являться имя создаваемого элемента. В остальных инструкциях изменяет существующий заголовок.

- `actionName`

    [Идентификатор действия](IDs.md#propertyid), для которого будет создан элемент навигатора. Действие не должно принимать на вход параметры.

- `formName`

    [Идентификатор формы](IDs.md#propertyid), для которой будет создан элемент навигатора.

- `formElseActionName`

    [Идентификатор формы или действия](IDs.md#propertyid), для которых будет создан элемент навигатора. Первоначально считается, что в `formElseActionName` задается форма, и только если она не найдена, что в `formElseActionName` задается действие. Действие не должно принимать на вход параметры.

- `options`

    - `WINDOW windowName`

        Указание [окна](Navigator_design.md), в котором будет отображаться элемент и его потомки (если для них не указано другое окно). 

        - `windowName`

            Имя окна. Составной идентификатор.

    - `BEFORE elementName`
    - `AFTER elementName` 

        Указание того, что элемент должен быть добавлен или перенесен до (`BEFORE`) или после (`AFTER`) указанного элемента навигатора. Указанный элемент должен быть непосредственным потомком текущего элемента. Если опция указана в инструкции редактирования, то и сам элемент также должен быть непосредственным потомком текущего элемента, иначе необходимо использовать инструкцию `MOVE`.

        - `elementName`

            Имя элемента навигатора. Составной идентификатор. 

    - `FIRST`

        Ключевое слово, которое указывает на то, что элемент должен быть добавлен или перенесен на первое место в списке потомков текущего элемента. Если опция указана в инструкции редактирования, то элемент должен быть непосредственным потомком текущего элемента, иначе необходимо использовать инструкцию `MOVE`.

    - `IMAGE fileName`

        Указание относительного пути к файлу с картинкой, которая будет отображаться в качестве иконки элемента навигатора. 

        - `fileName`

            Путь к файлу. Строковый литерал. Путь указывается относительно каталога `images`.

### Примеры

```lsf
FORM items;
FORM stocks;
FORM legalEntities;
FORM shipments;
hello()  { MESSAGE 'Hello world'; }
hi()  { MESSAGE 'Hi'; }

NAVIGATOR {
    NEW FOLDER catalogs 'Справочники' WINDOW toolbar { // создаем новую папку навигатора и делаем, чтобы все ее потомки отображались в окно с вертикальным тулбаром
        NEW items; // создаем в папке элемент-форму для формы items, имя элемента по умолчанию равняется имени формы
    }
    catalogs {  // инструкция редактирования элемента навигатора
        NEW FORM stocksNavigator 'Склады' = stocks; // создаем элемент-форму stocksNavigator для формы stocls и добавляем в папку catalogs последним элементом
        NEW legalEntities AFTER items; // создаем элемент-форму с именем legalEntities в папку catalogs непосредственно за элементом items
        NEW shipments;
    }
    NEW FOLDER documents 'Документы' WINDOW toolbar { // создаем еще одну папку, элементы которой будут также отображаться в окно с вертикальным тулбаром
                                                      // сами папки будут отображаться в окне root, и при выборе одной из них в окне с вертикальным
                                                      // тулбаром будут показаны потомки именно этой папки
        NEW ACTION hi;   // создаем элемент-действие
        NEW ACTION h=hello;   // создаем элемент-действие
        MOVE shipments BEFORE h; // инструкция перемещения элемента shipments из папки catalogs в папку document перед элементом hello
    }
}
```
