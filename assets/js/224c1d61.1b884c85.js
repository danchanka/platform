(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(747)),i={title:"How-to: CHANGE"},c={unversionedId:"How-to_CHANGE",id:"version-v4/How-to_CHANGE",isDocsHomePage:!1,title:"How-to: CHANGE",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_CHANGE.md",slug:"/How-to_CHANGE",permalink:"/platform/How-to_CHANGE",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_CHANGE.md",version:"v4",lastUpdatedAt:1619622551,formattedLastUpdatedAt:"4/28/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Actions",permalink:"/platform/How-to_Actions"},next:{title:"How-to: EXEC",permalink:"/platform/How-to_EXEC"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],d={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have a sales order for the books."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nCLASS Customer 'Customer';\nname = DATA ISTRING[50] (Customer);\n\ndate 'Date' = DATA DATE (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n\ndiscount 'Discount, %' = DATA NUMERIC[5,2] (Order);\n\nFORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, nameCustomer, discount\n;\n")),Object(a.b)("p",null,"We need to create an action to place the order on 30 days from today and apply a 5% discount."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setDateDiscount 'Apply discount (late delivery)' (Order o)  {\n    date(o) <- sum(currentDate(), 30);\n    discount(o) <- 5.0;\n}\n\nEXTEND FORM order\n    PROPERTIES(o) setDateDiscount\n;\n")),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("a",{parentName:"p",href:"#example-1"},Object(a.b)("strong",{parentName:"a"},"Example 1")),", except that a specification was added to the order. The current price for each book is also defined."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\nprice 'Current price' (Book b) = DATA NUMERIC[14,2] (Book);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nEXTEND FORM order\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, price\n;\n")),Object(a.b)("p",null,"We need to create an action to populate all the lines in the order with current prices for the corresponding books."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"fillPrice 'Set current prices' (Order o)  {\n    price(OrderDetail d) <- price(book(d)) WHERE order(d) == o;\n}\n\nEXTEND FORM order\n    PROPERTIES(o) fillPrice\n;\n")),Object(a.b)("p",null,"Make sure to use WHERE in the action. Otherwise, the prices will be set for all lines of all orders in the database."))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?o.a.createElement(b,c(c({ref:t},d),{},{components:r})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);