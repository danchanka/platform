(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{162:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),a=(t(0),t(750)),i={title:"How-to: CHANGE"},c={unversionedId:"How-to_CHANGE",id:"version-v4/How-to_CHANGE",isDocsHomePage:!1,title:"How-to: CHANGE",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_CHANGE.md",slug:"/How-to_CHANGE",permalink:"/platform/docs/How-to_CHANGE",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_CHANGE.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"How-to: Actions: Overview",permalink:"/platform/docs/How-to_Actions"},next:{title:"How-to: EXEC",permalink:"/platform/docs/How-to_EXEC"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],s={toc:l};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have a sales order for the books."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nCLASS Customer 'Customer';\nname = DATA ISTRING[50] (Customer);\n\ndate 'Date' = DATA DATE (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n\ndiscount 'Discount, %' = DATA NUMERIC[5,2] (Order);\n\nFORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, nameCustomer, discount\n;\n")),Object(a.b)("p",null,"We need to create an action to place the order on 30 days from today and apply a 5% discount."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setDateDiscount 'Apply discount (late delivery)' (Order o)  {\n    date(o) <- sum(currentDate(), 30);\n    discount(o) <- 5.0;\n}\n\nEXTEND FORM order\n    PROPERTIES(o) setDateDiscount\n;\n")),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),", except that a specification was added to the order. The current price for each book is also defined."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\nprice 'Current price' (Book b) = DATA NUMERIC[14,2] (Book);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nEXTEND FORM order\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, price\n;\n")),Object(a.b)("p",null,"We need to create an action to populate all the lines in the order with current prices for the corresponding books."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"fillPrice 'Set current prices' (Order o)  {\n    price(OrderDetail d) <- price(book(d)) WHERE order(d) == o;\n}\n\nEXTEND FORM order\n    PROPERTIES(o) fillPrice\n;\n")),Object(a.b)("p",null,"Make sure to use WHERE in the action. Otherwise, the prices will be set for all lines of all orders in the database."))}d.isMDXComponent=!0},750:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=d(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return t?o.a.createElement(b,c(c({ref:r},s),{},{components:t})):o.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);