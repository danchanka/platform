(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(751)),i={title:"How-to: Design"},l={unversionedId:"How-to_Design",id:"How-to_Design",isDocsHomePage:!1,title:"How-to: Design",description:"Example 1",source:"@site/docs/How-to_Design.md",slug:"/How-to_Design",permalink:"/platform/docs/next/How-to_Design",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Design.md",version:"current",sidebar:"docs",previous:{title:"How-to: Filtering and ordering",permalink:"/platform/docs/next/How-to_Filtering_and_ordering"},next:{title:"How-to: Trees",permalink:"/platform/docs/next/How-to_Trees"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],c={toc:s};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a form with the list of orders, where each order is associated with a list of books and its posted payments."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS Payment 'Payment';\norder 'Order' = DATA Order (Payment) NONULL DELETE;\n\ndate 'Date' = DATA DATE (Payment);\nsum 'Amount' = DATA NUMERIC[14,2] (Payment);\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) READONLY nameBook, quantity, price\n    FILTERS order(d) == o\n\n    OBJECTS p = Payment\n    PROPERTIES(p) READONLY date, sum\n    FILTERS order(p) == o\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(a.b)("p",null,"We need to customize the design of the form, so that the lines and payments can be displayed on dedicated tabs which are separated from the list of orders using a vertical splitter."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"DESIGN orders {\n    // adding a new container to the very beginning of the form\n    NEW orderList FIRST {\n        fill = 1; // marking that this container should \"stretch\" in the upper container\n        type = SPLITV; // vertical splitter - that is, there can only be 2 children\n        MOVE BOX(o); // the first container will be the list of orders\n        NEW orderDetails {\n            fill = 2; // Specifying that the specification will take up 2 times more space than the o.box container (for all such containers fill, by default, is 1)\n            type = TABBED; // the container will be a tabbed panel\n            MOVE BOX(d) { // the first tab will be a list of rows with books\n                caption = 'Order content';\n            }\n            MOVE BOX(p) { // the second tab will be the list of payments\n                caption = 'Payments made';\n            }\n        }\n    }\n}\n")),Object(a.b)("p",null,"The form will look like this:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(817).default})),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to Example 1, except we have added filters by date and customer to the form."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[100] (Customer);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n\nfilterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer 'Customer' = name(filterCustomer());\n\nEXTEND FORM orders\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) BEFORE o PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    PROPERTIES(o) READONLY nameCustomer\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n")),Object(a.b)("p",null,"We need to add filtering elements to the design of the previously created form."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"DESIGN orders {\n    orderList {\n        NEW orderHeader FIRST { // creating a new container and adding the first component to the vertical splitter\n            fill = 1; // it is necessary to make it \"stretched\" inside the orderList, as it will have a list of orders\n            // by default, the type of the new container is CONTAINERV, that is, all the components in it are arranged from top to bottom\n            NEW filters { // creating a container in which all the components that are responsible for filtering will be placed\n                caption = 'Filters';\n                type = CONTAINERH; // making it horizontal so that all components go from left to right\n                MOVE PROPERTY(df) {\n                    caption = 'Date from';\n                }\n                MOVE PROPERTY(dt) {\n                    caption = 'Date to';\n                }\n                MOVE PROPERTY(nameFilterCustomer());\n            }\n            MOVE BOX(o); // moving the container with the order list to it, since there should be exactly two components in the splitter\n        }\n    }\n}\n")),Object(a.b)("p",null,"Result:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(818).default})))}d.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,O=u["".concat(i,".").concat(p)]||u[p]||m[p]||a;return n?o.a.createElement(O,l(l({ref:t},c),{},{components:n})):o.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},817:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367472-e61d767b2d23f25ba4d185f7ff52153a.png"},818:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367474-9917b884043cb4dbc2c0a5c491e51227.png"}}]);