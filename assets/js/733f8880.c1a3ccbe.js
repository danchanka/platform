(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{384:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(746)),i={title:"How-to: Events"},l={unversionedId:"How-to_Events",id:"version-v4/How-to_Events",isDocsHomePage:!1,title:"How-to: Events",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Events.md",slug:"/How-to_Events",permalink:"/platform/How-to_Events",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Events.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"How-to: SEEK",permalink:"/platform/How-to_SEEK"},next:{title:"How-to: Declarative logic",permalink:"/platform/How-to_Declarative_logic"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 1",id:"example-1-1",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 2",id:"example-2-1",children:[{value:"Condition",id:"condition-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]},{value:"Example 3",id:"example-3-1",children:[{value:"Condition",id:"condition-5",children:[]},{value:"Solution",id:"solution-5",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-6",children:[]},{value:"Solution",id:"solution-6",children:[]}]}],c={toc:d};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have an order with a date, a number and a marker of whether it is closed."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\nisClosed 'Closed' = DATA BOOLEAN (Order);\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n")),Object(a.b)("p",null,"We need to make it so that orders are closed automatically at the end of the day."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nWHEN SET(date(Order o) < currentDate()) DO\n    isClosed(o) <- TRUE;\n\n// Option 2\nWHEN CHANGED(currentDate()) AND date(Order o) < currentDate() DO\n    isClosed(o) <- TRUE;\n")),Object(a.b)("p",null,"In the first case, the event will only be executed in one transaction at the time the expression inside the ",Object(a.b)("a",{parentName:"p",href:"/platform/Change_operators_SET_CHANGED_..._"},"SET")," operator changes. That is, at the moment when the order date becomes smaller than the current date. However, if the user manually changes the order date to one greater than the current date and saves, the system will automatically execute this event and close the order. Therefore, the second option is preferable, since it will only come into effect when the current date changes at midnight."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),", but the order contains lines with quantity, price and total."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nquantity 'Qty' = DATA NUMERIC[15,3] (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\nsum 'Amount' = DATA NUMERIC[16,2] (OrderDetail);\n")),Object(a.b)("p",null,"We need to make it so that when the price or quantity changes, their product is automatically written to the total amount."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL (CHANGED(quantity(OrderDetail d)) OR CHANGED(price(d)))\n            AND NOT CHANGED(sum(d)) DO {\n    sum(d) <- NUMERIC[16,2](quantity(d) * price(d));\n}\n")),Object(a.b)("p",null,"Events of type ",Object(a.b)("strong",{parentName:"p"},"LOCAL")," count all property changes relative not to the state of the database but to the values at the time of the previous occurrence of this event (or rather, the end of its handling). We need to check that ",Object(a.b)("strong",{parentName:"p"},"sum")," has not changed, to avoid erasing changes made by previous changes. For example, if order lines have been imported from a file, in which the quantity, price and amount are recorded, then this event will not be triggered."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 2"),", but a book is specified for the order line. Each book also has a default price."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nFORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, sum\n    FILTERS order(d) == o\n;\n")),Object(a.b)("p",null,"We need to make sure that when the book is changed, the price is automatically set to the order line. This event should only work on the order edit form."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL FORMS order SETCHANGED(book(OrderDetail d)) DO {\n    price(d) <- price(book(d));\n}\n")),Object(a.b)("p",null,"Event"),Object(a.b)("h2",{id:"example-1-1"},"Example 1"),Object(a.b)("h3",{id:"condition-3"},"Condition"),Object(a.b)("p",null,"We have an order with a date, a number and a marker of whether it is closed."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\nisClosed 'Closed' = DATA BOOLEAN (Order);\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n")),Object(a.b)("p",null,"We need to make it so that orders are closed automatically at the end of the day."),Object(a.b)("h3",{id:"solution-3"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nWHEN SET(date(Order o) < currentDate()) DO\n    isClosed(o) <- TRUE;\n\n// Option 2\nWHEN CHANGED(currentDate()) AND date(Order o) < currentDate() DO\n    isClosed(o) <- TRUE;\n")),Object(a.b)("p",null,"In the first case, the event will only be executed in one transaction at the time the expression inside the ",Object(a.b)("a",{parentName:"p",href:"/platform/Change_operators_SET_CHANGED_..._"},"SET")," operator changes. That is, at the moment when the order date becomes smaller than the current date. However, if the user manually changes the order date to one greater than the current date and saves, the system will automatically execute this event and close the order. Therefore, the second option is preferable, since it will only come into effect when the current date changes at midnight."),Object(a.b)("h2",{id:"example-2-1"},"Example 2"),Object(a.b)("h3",{id:"condition-4"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),", but the order contains lines for the quantity, price and total."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nquantity 'Qty' = DATA NUMERIC[15,3] (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\nsum 'Amount' = DATA NUMERIC[16,2] (OrderDetail);\n")),Object(a.b)("p",null,"We need to make it so that when the price or quantity changes, their product is automatically recorded as the total amount."),Object(a.b)("h3",{id:"solution-4"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL (CHANGED(quantity(OrderDetail d)) OR CHANGED(price(d)))\n            AND NOT CHANGED(sum(d)) DO {\n    sum(d) <- NUMERIC[16,2](quantity(d) * price(d));\n}\n")),Object(a.b)("p",null,"Events of type\xa0",Object(a.b)("strong",{parentName:"p"},"LOCAL"),"\xa0count all property changes relative not to the state of the database but to the values at the time of the previous occurrence of this event (or rather, the end of its handling). We need to check that ",Object(a.b)("strong",{parentName:"p"},"sum")," has not changed, to avoid erasing changes made by previous changes. For example, if order lines have been imported from a file, in which the quantity, price and amount are recorded, then this event will no longer take effect."),Object(a.b)("h2",{id:"example-3-1"},"Example 3"),Object(a.b)("h3",{id:"condition-5"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 2"),", but a book is specified for the order line. Each book also has a default price."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nFORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, sum\n    FILTERS order(d) == o\n;\n")),Object(a.b)("p",null,"We need to make sure that when the book is changed, the price is automatically appended to the order line. This event should only work on the order edit form."),Object(a.b)("h3",{id:"solution-5"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL FORMS order SETCHANGED(book(OrderDetail d)) DO {\n    price(d) <- price(book(d));\n}\n")),Object(a.b)("p",null,"In this case, the event will be triggered only when the book is changed or set. When a book is dropped, the price will not change."),Object(a.b)("p",null,"Without the ",Object(a.b)("strong",{parentName:"p"},"FORMS")," block, this event would be triggered by any change to the order line book. For example, when an order was imported in any other form."),Object(a.b)("h2",{id:"example-4"},"Example 4"),Object(a.b)("h3",{id:"condition-6"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to organize logging of the deletion of orders"),Object(a.b)("h3",{id:"solution-6"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderLog 'Order deletion log';\ndate 'Order date' = DATA DATE (OrderLog);\nnumber 'Order number' = DATA INTEGER (OrderLog);\n\ndateTime 'Date' = DATA DATETIME (OrderLog);\nuser 'User' = DATA User (OrderLog);\n\nWHEN DROPPED(Order o IS Order) DO {\n    NEW l = OrderLog {\n        date(l) <- PREV(date(o));\n        number(l) <- PREV(number(o));\n\n        dateTime(l) <- currentDateTime();\n        user(l) <- currentUser();\n    }\n}\n")),Object(a.b)("p",null,"When deleting\xa0an order and triggering an event with the ",Object(a.b)("strong",{parentName:"p"},"DROPPED")," modifier, it is important to remember that the object no longer exists and all properties that take it as input will give ",Object(a.b)("strong",{parentName:"p"},"NULL")," values. Therefore, we need to access them not directly, but through the ",Object(a.b)("strong",{parentName:"p"},"PREV")," operator."))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);