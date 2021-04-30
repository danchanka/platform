(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{382:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(747)),i={title:"How-to: Events"},l={unversionedId:"How-to_Events",id:"version-v4/How-to_Events",isDocsHomePage:!1,title:"How-to: Events",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Events.md",slug:"/How-to_Events",permalink:"/platform/How-to_Events",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Events.md",version:"v4",lastUpdatedAt:1619768637,formattedLastUpdatedAt:"4/30/2021",sidebar:"version-v4/learn",previous:{title:"How-to: SEEK",permalink:"/platform/How-to_SEEK"},next:{title:"How-to: Declarative logic",permalink:"/platform/How-to_Declarative_logic"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]}],d={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("h3",{id:"task"},"Task"),Object(o.b)("p",null,"We have an order with a date, a number and a marker of whether it is closed."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\nisClosed 'Closed' = DATA BOOLEAN (Order);\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n")),Object(o.b)("p",null,"We need to make it so that orders are closed automatically at the end of the day."),Object(o.b)("h3",{id:"solution"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nWHEN SET(date(Order o) < currentDate()) DO\n    isClosed(o) <- TRUE;\n\n// Option 2\nWHEN CHANGED(currentDate()) AND date(Order o) < currentDate() DO\n    isClosed(o) <- TRUE;\n")),Object(o.b)("p",null,"In the first case, the event will only be executed in one transaction at the time the expression inside the ",Object(o.b)("a",{parentName:"p",href:"/platform/Change_operators_SET_CHANGED_..._"},Object(o.b)("inlineCode",{parentName:"a"},"SET")," operator")," operator changes. That is, at the moment when the order date becomes smaller than the current date. However, if the user manually changes the order date to one greater than the current date and saves, the system will automatically execute this event and close the order. Therefore, the second option is preferable, since it will only come into effect when the current date changes at midnight."),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("h3",{id:"task-1"},"Task"),Object(o.b)("p",null,"Similar to ",Object(o.b)("a",{parentName:"p",href:"#example-1"},Object(o.b)("strong",{parentName:"a"},"Example 1")),", but the order contains lines for the quantity, price and total."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nquantity 'Qty' = DATA NUMERIC[15,3] (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\nsum 'Amount' = DATA NUMERIC[16,2] (OrderDetail);\n")),Object(o.b)("p",null,"We need to make it so that when the price or quantity changes, their product is automatically recorded as the total amount."),Object(o.b)("h3",{id:"solution-1"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL (CHANGED(quantity(OrderDetail d)) OR CHANGED(price(d)))\n            AND NOT CHANGED(sum(d)) DO {\n    sum(d) <- NUMERIC[16,2](quantity(d) * price(d));\n}\n")),Object(o.b)("p",null,"Events of type ",Object(o.b)("inlineCode",{parentName:"p"},"LOCAL")," count all property changes relative not to the state of the database but to the values at the time of the previous occurrence of this event (or rather, the end of its handling). We need to check that ",Object(o.b)("inlineCode",{parentName:"p"},"sum")," has not changed, to avoid erasing changes made by previous changes. For example, if order lines have been imported from a file, in which the quantity, price and amount are recorded, then this event will no longer take effect."),Object(o.b)("h2",{id:"example-3"},"Example 3"),Object(o.b)("h3",{id:"task-2"},"Task"),Object(o.b)("p",null,"Similar to ",Object(o.b)("a",{parentName:"p",href:"#example-2"},Object(o.b)("strong",{parentName:"a"},"Example 2")),", but a book is specified for the order line. Each book also has a default price."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nFORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, sum\n    FILTERS order(d) == o\n;\n")),Object(o.b)("p",null,"We need to make sure that when the book is changed, the price is automatically appended to the order line. This event should only work on the order edit form."),Object(o.b)("h3",{id:"solution-2"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"WHEN LOCAL FORMS order SETCHANGED(book(OrderDetail d)) DO {\n    price(d) <- price(book(d));\n}\n")),Object(o.b)("p",null,"In this case, the event will be triggered only when the book is changed or set. When a book is dropped, the price will not change."),Object(o.b)("p",null,"Without the ",Object(o.b)("inlineCode",{parentName:"p"},"FORMS")," block, this event would be triggered by any change to the order line book. For example, when an order was imported in any other form."),Object(o.b)("h2",{id:"example-4"},"Example 4"),Object(o.b)("h3",{id:"task-3"},"Task"),Object(o.b)("p",null,"Similar to ",Object(o.b)("a",{parentName:"p",href:"#example-1"},Object(o.b)("strong",{parentName:"a"},"Example 1")),"."),Object(o.b)("p",null,"We need to organize logging of the deletion of orders"),Object(o.b)("h3",{id:"solution-3"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderLog 'Order deletion log';\ndate 'Order date' = DATA DATE (OrderLog);\nnumber 'Order number' = DATA INTEGER (OrderLog);\n\ndateTime 'Date' = DATA DATETIME (OrderLog);\nuser 'User' = DATA User (OrderLog);\n\nWHEN DROPPED(Order o IS Order) DO {\n    NEW l = OrderLog {\n        date(l) <- PREV(date(o));\n        number(l) <- PREV(number(o));\n\n        dateTime(l) <- currentDateTime();\n        user(l) <- currentUser();\n    }\n}\n")),Object(o.b)("p",null,"When deleting an order and triggering an event with the ",Object(o.b)("inlineCode",{parentName:"p"},"DROPPED")," modifier, it is important to remember that the object no longer exists and all properties that take it as input will give ",Object(o.b)("inlineCode",{parentName:"p"},"NULL")," values. Therefore, we need to access them not directly, but through the ",Object(o.b)("inlineCode",{parentName:"p"},"PREV")," operator."))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,l(l({ref:t},d),{},{components:n})):a.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);