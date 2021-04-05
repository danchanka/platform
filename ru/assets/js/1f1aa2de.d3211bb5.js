(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return O}));var r=t(3),o=t(7),i=(t(0),t(751)),a={title:"How-to: \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435"},c={unversionedId:"How-to_Using_objects_as_templates",id:"How-to_Using_objects_as_templates",isDocsHomePage:!1,title:"How-to: \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Using_objects_as_templates.md",slug:"/How-to_Using_objects_as_templates",permalink:"/platform/ru/docs/next/How-to_Using_objects_as_templates",editUrl:"https://github.com/danchanka/platform/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Using_objects_as_templates.md",version:"current",sidebar:"docs",previous:{title:"How-to: \u041d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f",permalink:"/platform/ru/docs/next/How-to_Numbering"},next:{title:"How-to: \u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439",permalink:"/platform/ru/docs/next/How-to_Overriding_values"}},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:[]}]}],d={toc:l};function O(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(i.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(i.b)("p",null,"\u0415\u0441\u0442\u044c \u043a\u043d\u0438\u0433\u0430, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u0434\u0430\u043d\u044b \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0446\u0435\u043d\u0430. \u0414\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u0437\u0430\u0434\u0430\u043d\u044b \u0444\u043e\u0440\u043c\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Book) IN id;\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (Book);\n\nFORM book '\u041a\u043d\u0438\u0433\u0430'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name, price\n\n    EDIT Book OBJECT b\n;\n\nFORM books '\u041a\u043d\u0438\u0433\u0438'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name, price\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n;\n")),Object(i.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043a\u043d\u0438\u0433\u0438 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u0443\u044e \u0438 \u043e\u0442\u043a\u0440\u043e\u0435\u0442 \u0444\u043e\u0440\u043c\u0443 \u043f\u043e \u0435\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e."),Object(i.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"copy '\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c' (Book book)  {\n    NEWSESSION {\n        NEW newBook = Book {\n            name(newBook) <- name(book);\n            price(newBook) <- price(book);\n            SHOW book OBJECTS b = newBook DOCKED;\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES(b) copy TOOLBAR\n;\n")),Object(i.b)("p",null,"\u041f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438 \u043a\u043d\u043e\u043f\u043a\u0438 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u043d\u043e\u0432\u0430\u044f ",Object(i.b)("a",{parentName:"p",href:"/platform/ru/docs/next/Change_sessions"},"\u0441\u0435\u0441\u0441\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u043e\u0437\u0434\u0430\u0441\u0442\u0441\u044f \u043a\u043d\u0438\u0433\u0430 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u043e\u0432\u0430\u044f \u0444\u043e\u0440\u043c\u0430. \u0415\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u043a\u0440\u043e\u0435\u0442 \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u0442\u043e \u043d\u043e\u0432\u0430\u044f \u043a\u043d\u0438\u0433\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0430 \u0432 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u0430. \u0421\u043b\u043e\u0432\u043e ",Object(i.b)("strong",{parentName:"p"},"TOOLBAR")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u044d\u0442\u0443 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0430\u0434\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0432 \u0442\u0443\u043b\u0431\u0430\u0440\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432."),Object(i.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(i.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(i.b)("p",null,"\u0412\u0432\u0435\u0434\u0435\u043d\u044b \u043f\u043e\u043d\u044f\u0442\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0437\u0430\u043a\u0430\u0437\u0430 \u0438 \u0441\u0447\u0435\u0442\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0444\u043e\u0440\u043c\u044b \u043f\u043e \u0438\u0445 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0443 \u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e. \u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0437\u0430\u0434\u0430\u043d\u044b \u0441\u0442\u0440\u043e\u043a\u0438."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"// \u0417\u0430\u043a\u0430\u0437\u044b\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Order);\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (OrderDetail);\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n\nFORM order '\u0417\u0430\u043a\u0430\u0437'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n// \u0421\u0447\u0435\u0442\u0430\nCLASS Invoice '\u0421\u0447\u0435\u0442';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Invoice);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Invoice);\n\nCLASS InvoiceDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0441\u0447\u0435\u0442\u0430';\ninvoice '\u0421\u0447\u0435\u0442' = DATA Invoice (InvoiceDetail) NONULL DELETE;\n\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (InvoiceDetail) NONULL;\nnameBook '\u041a\u043d\u0438\u0433\u0430' (InvoiceDetail d) = name(book(d));\n\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (InvoiceDetail);\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (InvoiceDetail);\n\nFORM invoice '\u0421\u0447\u0435\u0442'\n    OBJECTS i = Invoice PANEL\n    PROPERTIES(i) date, number\n\n    OBJECTS d = InvoiceDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS invoice(d) == i\n;\n")),Object(i.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c ",Object(i.b)("a",{parentName:"p",href:"/platform/ru/docs/next/Actions"},"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u0441\u0447\u0435\u0442 \u0438 \u043e\u0442\u043a\u0440\u043e\u0435\u0442 \u0444\u043e\u0440\u043c\u0443 \u043f\u043e \u0435\u0433\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e."),Object(i.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"createInvoice '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0447\u0435\u0442' (Order o)  {\n    NEWSESSION {\n        NEW i = Invoice {\n            date(i) <- date(o);\n            number(i) <- number(o);\n\n            FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\n                invoice(id) <- i;\n\n                book(id) <- book(od);\n\n                quantity(id) <- quantity(od);\n                price(id) <- price(od);\n            }\n            SHOW invoice OBJECTS i = i DOCKED;\n        }\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) createInvoice TOOLBAR\n;\n")),Object(i.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3"},"\u041f\u0440\u0438\u043c\u0435\u0440 3"),Object(i.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(i.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",Object(i.b)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 2"),"."),Object(i.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/ru/docs/next/Actions"},"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u043b\u044f \u0441\u0447\u0435\u0442\u0430 \u0432\u044b\u0437\u043e\u0432\u0435\u0442 \u0434\u0438\u0430\u043b\u043e\u0433 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0437 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e."),Object(i.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"fillOrder '\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u043e \u0437\u0430\u043a\u0430\u0437\u0443' (Invoice i)  {\n    DIALOG orders OBJECTS o INPUT DO {\n        date(i) <- date(o);\n        number(i) <- number(o);\n\n        FOR order(OrderDetail od) == o NEW id = InvoiceDetail DO {\n            invoice(id) <- i;\n\n            book(id) <- book(od);\n\n            quantity(id) <- quantity(od);\n            price(id) <- price(od);\n        }\n    }\n}\nEXTEND FORM invoice\n    PROPERTIES(i) fillOrder\n;\n")),Object(i.b)("p",null,"\u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u044f \u0441 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u0442\u0430\u043a \u043a\u0430\u043a \u043a\u043d\u043e\u043f\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0438\u0437 \u0444\u043e\u0440\u043c\u044b \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0447\u0435\u0442\u0430, \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u0435\u0435 \u0441\u0435\u0441\u0441\u0438\u0438."))}O.isMDXComponent=!0},751:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),O=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=O(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=O(t),p=r,s=b["".concat(a,".").concat(p)]||b[p]||u[p]||i;return t?o.a.createElement(s,c(c({ref:n},d),{},{components:t})):o.a.createElement(s,c({ref:n},d))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);