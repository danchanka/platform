(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{650:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return a})),o.d(n,"metadata",(function(){return c})),o.d(n,"toc",(function(){return l})),o.d(n,"default",(function(){return s}));var t=o(3),r=o(7),i=(o(0),o(751)),a={title:"How-to: Using objects as templates"},c={unversionedId:"How-to_Using_objects_as_templates",id:"How-to_Using_objects_as_templates",isDocsHomePage:!1,title:"How-to: Using objects as templates",description:"Example 1",source:"@site/docs/How-to_Using_objects_as_templates.md",slug:"/How-to_Using_objects_as_templates",permalink:"/platform/docs/next/How-to_Using_objects_as_templates",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Using_objects_as_templates.md",version:"current",sidebar:"docs",previous:{title:"How-to: Numbering",permalink:"/platform/docs/next/How-to_Numbering"},next:{title:"How-to: Overriding values",permalink:"/platform/docs/next/How-to_Overriding_values"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],d={toc:l};function s(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},d,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"example-1"},"Example 1"),Object(i.b)("h3",{id:"condition"},"Condition"),Object(i.b)("p",null,"We have a book for which a name and price are defined. List and edit forms are defined for the book."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n\nFORM book 'Book'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name, price\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name, price\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n;\n")),Object(i.b)("p",null,"We need to make a button that creates a new book based on the current one, and opens a form to edit it."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"copy 'Copy' (Book book)  {\n    NEWSESSION {\n        NEW newBook = Book {\n            name(newBook) <- name(book);\n            price(newBook) <- price(book);\n            SHOW book OBJECTS b = newBook DOCKED;\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES(b) copy TOOLBAR\n;\n")),Object(i.b)("p",null,"When the button is pressed, a new ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Change_sessions"},"change session")," will be created within which the book will be created and the new form will work with. If the user closes the form without saving, the new book will not be saved to the database and will be lost. The word ",Object(i.b)("strong",{parentName:"p"},"TOOLBAR")," specifies that this button should be displayed in the toolbar of the table with the list of orders."),Object(i.b)("h2",{id:"example-2"},"Example 2"),Object(i.b)("h3",{id:"condition-1"},"Condition"),Object(i.b)("p",null,"We have the concepts of order documents and invoices, as well as forms for listing and editing them. Lines are defined for each document."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"// Orders\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n// Accounts\nCLASS Invoice 'Invoice';\ndate 'Date' = DATA DATE (Invoice);\nnumber 'Number' = DATA INTEGER (Invoice);\n\nCLASS InvoiceDetail 'Invoice line';\ninvoice 'Invoice' = DATA Invoice (InvoiceDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (InvoiceDetail) NONULL;\nnameBook 'Book' (InvoiceDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (InvoiceDetail);\nprice 'Price' = DATA NUMERIC[14,2] (InvoiceDetail);\n\nFORM invoice 'Invoice'\n    OBJECTS i = Invoice PANEL\n    PROPERTIES(i) date, number\n\n    OBJECTS d = InvoiceDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS invoice(d) == i\n;\n")),Object(i.b)("p",null,"We need to implement an ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that will create an invoice based on an order and open a form for editing it."),Object(i.b)("h3",{id:"solution-1"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"createInvoice 'Create invoice' (Order o)  {\n    NEWSESSION {\n        NEW i = Invoice {\n            date(i) <- date(o);\n            number(i) <- number(o);\n\n            FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\n                invoice(id) <- i;\n\n                book(id) <- book(od);\n\n                quantity(id) <- quantity(od);\n                price(id) <- price(od);\n            }\n            SHOW invoice OBJECTS i = i DOCKED;\n        }\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) createInvoice TOOLBAR\n;\n")),Object(i.b)("h2",{id:"example-3"},"Example 3"),Object(i.b)("h3",{id:"condition-2"},"Condition"),Object(i.b)("p",null,"Similar to ",Object(i.b)("strong",{parentName:"p"},"Example 2"),"."),Object(i.b)("p",null,"We need to implement an\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that will open a dialog for the invoice with a list of orders and add lines from the selected one."),Object(i.b)("h3",{id:"solution-2"},"Solution"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"fillOrder 'Fill in by order' (Invoice i)  {\n    DIALOG orders OBJECTS o INPUT DO {\n        date(i) <- date(o);\n        number(i) <- number(o);\n\n        FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\n            invoice(id) <- i;\n\n            book(id) <- book(od);\n\n            quantity(id) <- quantity(od);\n            price(id) <- price(od);\n        }\n    }\n}\nEXTEND FORM invoice\n    PROPERTIES(i) fillOrder\n;\n")),Object(i.b)("p",null,"No manipulation with change sessions is required because the button will be called from the account edit form and changes will occur within that session."))}s.isMDXComponent=!0},751:function(e,n,o){"use strict";o.d(n,"a",(function(){return b})),o.d(n,"b",(function(){return O}));var t=o(0),r=o.n(t);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=r.a.createContext({}),s=function(e){var n=r.a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},b=function(e){var n=s(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=s(o),u=t,O=b["".concat(a,".").concat(u)]||b[u]||p[u]||i;return o?r.a.createElement(O,c(c({ref:n},d),{},{components:o})):r.a.createElement(O,c({ref:n},d))}));function O(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=o.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var d=2;d<i;d++)a[d]=o[d];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);