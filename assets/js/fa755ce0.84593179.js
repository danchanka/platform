(window.webpackJsonp=window.webpackJsonp||[]).push([[661],{730:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(747)),i={title:"How-to: WHILE"},l={unversionedId:"How-to_WHILE",id:"version-v4/How-to_WHILE",isDocsHomePage:!1,title:"How-to: WHILE",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_WHILE.md",slug:"/How-to_WHILE",permalink:"/platform/How-to_WHILE",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_WHILE.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"How-to: IF/CASE",permalink:"/platform/How-to_IF_CASE"},next:{title:"How-to: NEWSESSION",permalink:"/platform/How-to_NEWSESSION"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],c={toc:d};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have an order for which a date is defined."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\ndate 'Date' = DATA DATE (Order);\n")),Object(a.b)("p",null,"We need to display a message containing the number of orders for each date from a given interval."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"countOrders (DATE date) = GROUP SUM 1 BY date(Order o);\n\nmessageCountOrders 'Count the number of orders' (DATE dFrom, DATE dTo)  {\n    // Option 1\n    LOCAL date = DATE ();\n    date() <- dFrom;\n\n    WHILE date() <= dTo DO {\n        MESSAGE 'Number of orders for ' + date () + ' : ' + OVERRIDE countOrders(date()), 0.0;\n        date() <- sum(date(), 1);\n    }\n\n    // Option 2\n    FOR iterate(DATE date, dFrom, dTo) DO\n        MESSAGE 'Number of orders for ' + date + ' : ' + OVERRIDE countOrders(date()), 0.0;\n}\n")),Object(a.b)("p",null,"Both these options will provide the same result."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"sum")," property defined in the ",Object(a.b)("strong",{parentName:"p"},"Time"),"\xa0system\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Modules"},"module")," is used to add one day to the given date."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),". We have also defined order lines, so that each line contains the (full) amount and the discount."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nsum 'Amount' = DATA NUMERIC[14,2] (OrderDetail);\ndiscountSum 'Discount amount' = DATA NUMERIC[14,2] (OrderDetail);\n")),Object(a.b)("p",null,'We need to create an action that "distributes" given discount by line, starting from the line with the largest amount.'),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"distributeDiscount 'Distribute discount' (Order o, NUMERIC[14,2] discount)  {\n    LOCAL discount = NUMERIC[14,2] ();\n    discount() <- discount;\n\n    LOCAL leftSum = NUMERIC[14,2] (OrderDetail);\n    leftSum(OrderDetail d) <- sum(d) WHERE order(d) == o;\n\n    WHILE discount() > 0 DO {\n        FOR OrderDetail d == [ GROUP LAST OrderDetail od ORDER leftSum(od), od BY order(od)](o) DO { // finding the row with the largest \"remaining\" amount\n            discountSum(d) <- MIN leftSum(d), discount();\n            discount() <- discount() (-) discountSum(d);\n        }\n        IF (GROUP SUM 1 IF leftSum(OrderDetail d) > 0) THEN\n            BREAK; // nothing left to break down\n    }\n}\n")),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"The logic for changing the balance for the book is defined as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\n\nCLASS Ledger 'Change balance';\ndate 'Date' = DATA DATE (Ledger);\nbook 'Book' = DATA Book (Ledger);\nquantity 'Qty' = DATA NUMERIC[14,2] (Ledger);\n")),Object(a.b)("p",null,"We need to create an action that will calculate the accumulated (integral) balance for a given time period."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"calculateIntegral (DATE dFrom, DATE dTo)  {\n    LOCAL date = DATE();\n    date() <- dFrom;\n\n    LOCAL balance = NUMERIC[14,2] (Book);\n    balance(Book b) <- [ GROUP SUM quantity(Ledger l) IF date(l) < dFrom BY book(l)](b);\n\n    LOCAL cumBalance = NUMERIC[14,2] (Book);\n\n    WHILE date() <= dTo DO {\n        cumBalance(Book b) <- cumBalance(b) (+) balance(b); //\n        balance(Book b) <- balance(b) (+) [ GROUP SUM quantity(Ledger l) BY book(l), date(l)](b, date());\n        date() <- sum(date(), 1);\n    }\n\n    FOR cumBalance(Book b) DO {\n        MESSAGE 'Accumulated balance for book ' + b + ' : ' + cumBalance(b);\n    }\n}\n")))}u.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=u(n),p=o,m=s["".concat(i,".").concat(p)]||s[p]||b[p]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);