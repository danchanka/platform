(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{198:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),a=(t(0),t(746)),i={title:"How-to: \u0414\u0438\u0437\u0430\u0439\u043d"},c={unversionedId:"How-to_Design",id:"version-v4/How-to_Design",isDocsHomePage:!1,title:"How-to: \u0414\u0438\u0437\u0430\u0439\u043d",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Design.md",slug:"/How-to_Design",permalink:"/platform/ru/How-to_Design",editUrl:"https://github.com/danchanka/platform/edit/master/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Design.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"How-to: \u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",permalink:"/platform/ru/How-to_Filtering_and_ordering"},next:{title:"How-to: \u0414\u0435\u0440\u0435\u0432\u044c\u044f",permalink:"/platform/ru/How-to_Trees"}},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]}],u={toc:l};function d(e){var n=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0415\u0441\u0442\u044c \u0444\u043e\u0440\u043c\u0430 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0434\u0430\u043d \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433 \u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043f\u043e \u043d\u0435\u043c\u0443 \u043e\u043f\u043b\u0430\u0442\u044b."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Book);\n\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA INTEGER (Order);\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (OrderDetail);\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS Payment '\u041e\u043f\u043b\u0430\u0442\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (Payment) NONULL DELETE;\n\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Payment);\nsum '\u0421\u0443\u043c\u043c\u0430' = DATA NUMERIC[14,2] (Payment);\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) READONLY nameBook, quantity, price\n    FILTERS order(d) == o\n\n    OBJECTS p = Payment\n    PROPERTIES(p) READONLY date, sum\n    FILTERS order(p) == o\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(a.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u0437\u0430\u0439\u043d \u0444\u043e\u0440\u043c\u044b \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0441\u0442\u0440\u043e\u043a\u0438 \u0438 \u043e\u043f\u043b\u0430\u0442\u044b \u0448\u043b\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0432\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438 \u0438 \u043e\u0442\u0434\u0435\u043b\u044f\u043b\u0438\u0441\u044c \u043e\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440\u0430."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"DESIGN orders {\n    // \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0432 \u0441\u0430\u043c\u043e\u0435 \u043d\u0430\u0447\u0430\u043b\u043e \u0444\u043e\u0440\u043c\u044b\n    NEW orderList FIRST {\n        fill = 1; // \u043f\u043e\u043c\u0435\u0447\u0430\u0435\u043c, \u0447\u0442\u043e \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \"\u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0442\u044c\u0441\u044f\" \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435\n        type = SPLITV; // \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440 - \u0442\u043e \u0435\u0441\u0442\u044c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e 2 \u043f\u043e\u0442\u043e\u043c\u043a\u0430\n        MOVE BOX(o); // \u043f\u0435\u0440\u0432\u044b\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432\n        NEW orderDetails {\n            fill = 2; // \u0423\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c, \u0447\u0442\u043e \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c \u0432 2 \u0440\u0430\u0437\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u043c\u0435\u0441\u0442\u0430, \u0447\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 o.box (\u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0442\u0430\u043a\u0438\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 fill, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0440\u0430\u0432\u0435\u043d 1)\n            type = TABBED; // \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043f\u0430\u043d\u0435\u043b\u044c\u044e \u0441 \u0432\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438\n            MOVE BOX(d) { // \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0440\u043e\u043a \u0441 \u043a\u043d\u0438\u0433\u0430\u043c\u0438\n                caption = '\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430';\n            }\n            MOVE BOX(p) { // \u0432\u0442\u043e\u0440\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u043f\u043b\u0430\u0442\n                caption = '\u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u043b\u0430\u0442\u044b';\n            }\n        }\n    }\n}\n")),Object(a.b)("p",null,"\u0424\u043e\u0440\u043c\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"),Object(a.b)("p",null,Object(a.b)("img",{src:t(815).default})),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u041f\u0440\u0438\u043c\u0435\u0440\u0443 1, \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0444\u043e\u0440\u043c\u0443 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u044b \u043f\u043e \u0434\u0430\u0442\u0435 \u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044e."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Customer);\n\ncustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = DATA Customer (Order);\nnameCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' (Order o) = name(customer(o));\n\nfilterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = name(filterCustomer());\n\nEXTEND FORM orders\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) BEFORE o PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    PROPERTIES(o) READONLY nameCustomer\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n")),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0434\u0438\u0437\u0430\u0439\u043d \u0440\u0430\u043d\u0435\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"DESIGN orders {\n    orderList {\n        NEW orderHeader FIRST { // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0432 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440 \u043f\u0435\u0440\u0432\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c\n            fill = 1; // \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043e\u043d \"\u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u043b\u0441\u044f\" \u0432\u043d\u0443\u0442\u0440\u0438 orderList, \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u043d\u0435\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432\n            // \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0442\u0438\u043f \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 CONTAINERV, \u0442\u043e \u0435\u0441\u0442\u044c \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432 \u043d\u0435\u043c \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442\u0441\u044f \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437\n            NEW filters { // \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u043c \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u0437\u0430 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044e\n                caption = '\u0424\u0438\u043b\u044c\u0442\u0440\u044b';\n                type = CONTAINERH; // \u0434\u0435\u043b\u0430\u0435\u043c \u0435\u0433\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u043c, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0448\u043b\u0438 \u0441\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e\n                MOVE PROPERTY(df) {\n                    caption = '\u0414\u0430\u0442\u0430 \u0441';\n                }\n                MOVE PROPERTY(dt) {\n                    caption = '\u0414\u0430\u0442\u0430 \u043f\u043e';\n                }\n                MOVE PROPERTY(nameFilterCustomer());\n            }\n            MOVE BOX(o); // \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u043c \u0432 \u043d\u0435\u0433\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u043e\u0432\u043d\u043e \u0434\u0432\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\n        }\n    }\n}\n")),Object(a.b)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 :"),Object(a.b)("p",null,Object(a.b)("img",{src:t(816).default})))}d.isMDXComponent=!0},746:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),p=r,m=s["".concat(i,".").concat(p)]||s[p]||O[p]||a;return t?o.a.createElement(m,c(c({ref:n},u),{},{components:t})):o.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},815:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/46367472-e61d767b2d23f25ba4d185f7ff52153a.png"},816:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/46367474-9917b884043cb4dbc2c0a5c491e51227.png"}}]);