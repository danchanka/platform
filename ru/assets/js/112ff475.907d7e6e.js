(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(747)),i={title:"How-to: \u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"},c={unversionedId:"How-to_Data_export",id:"version-v4/How-to_Data_export",isDocsHomePage:!1,title:"How-to: \u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Data_export.md",slug:"/How-to_Data_export",permalink:"/platform/ru/How-to_Data_export",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/ru/How-to_Data_export.md",version:"v4",lastUpdatedAt:1619790850,formattedLastUpdatedAt:"30.04.2021",sidebar:"version-v4/learn",previous:{title:"How-to: \u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u043c\u0438",permalink:"/platform/ru/How-to_Working_with_external_formats"},next:{title:"How-to: \u0418\u043c\u043f\u043e\u0440\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/platform/ru/How-to_Data_import"}},p=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:[]}]}],b={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u044b \u043d\u0430 \u043f\u0440\u043e\u0434\u0430\u0436\u0443 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043a\u043d\u0438\u0433."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Time;\n\nCLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Book) IN id;\n\nCLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Customer) IN id;\naddress '\u0410\u0434\u0440\u0435\u0441' = DATA ISTRING[50] (Customer) IN base;\n\nCLASS Currency '\u0412\u0430\u043b\u044e\u0442\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Currency) IN id;\n\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA STRING[10] (Order);\n\ncustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = DATA Customer (Order);\nnameCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' (Order o) = name(customer(o));\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (OrderDetail);\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n\ncurrency '\u0412\u0430\u043b\u044e\u0442\u0430' = DATA Currency (OrderDetail);\nnameCurrency '\u0412\u0430\u043b\u044e\u0442\u0430' (OrderDetail d) = name(currency(d));\n\nFORM order '\u0417\u0430\u043a\u0430\u0437'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number, nameCustomer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, nameCurrency, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number, nameCustomer\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(o.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u0432 XML-\u0444\u043e\u0440\u043c\u0430\u0442."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"GROUP Info;\nGROUP Customer : Info;\n\nGROUP Specification;\n\nGROUP price;\n\nFORM Order\n    PROPERTIES timeStamp = currentDateTime() ATTR\n\n    OBJECTS order = Order\n    PROPERTIES(order) IN Info date, number\n    PROPERTIES IN Customer nameCustomer(order) EXTID 'name', =address(customer(order)) EXTID 'address'\n\n    PROPERTIES IN Specification count = [GROUP SUM 1 BY order(OrderDetail d)](order) ATTR\n\n    OBJECTS Detail = OrderDetail IN Specification\n    PROPERTIES(Detail) nameBook, quantity,\n                       nameCurrency IN price EXTID 'currency' ATTR, price IN price EXTID 'value'\n    FILTERS order(Detail) = order\n;\n\nexportToXML '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 XML' (Order o) {\n    EXPORT Order OBJECTS order = o XML;\n    open(exportFile());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToXML TOOLBAR\n;\n")),Object(o.b)("p",null,"\u0414\u043b\u044f \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438 \u0432 XML \u0444\u043e\u0440\u043c\u0430\u0442, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430 ",Object(o.b)("a",{parentName:"p",href:"/platform/ru/Structured_view"},"\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"),", \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",Object(o.b)("a",{parentName:"p",href:"/platform/ru/EXPORT_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",Object(o.b)("inlineCode",{parentName:"a"},"EXPORT")),". \u041e\u043d \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0444\u043e\u0440\u043c\u044b \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043b \u0438 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442 \u0435\u0433\u043e \u0432 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(o.b)("inlineCode",{parentName:"p"},"exportFile"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u0430\u0442\u0435\u043c \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f ",Object(o.b)("inlineCode",{parentName:"p"},"open"),". \u041e\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0444\u0430\u0439\u043b \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0430\u0441\u0441\u043e\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0441 \u0435\u0433\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c (\u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 .xml)."),Object(o.b)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0439 xml \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<Order timeStamp="13.11.18 12:28:58">\n   <Info>\n      <date>13.11.18</date>\n      <number>12</number>\n      <Customer>\n         <name>\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 2</name>\n         <address>\u0410\u0434\u0440\u0435\u0441 2</address>\n      </Customer>\n   </Info>\n   <Specification count="2">\n      <Detail>\n         <nameBook>\u041a\u043d\u0438\u0433\u0430 2</nameBook>\n         <quantity>1</quantity>\n         <price currency="USD">3.99</price>\n      </Detail>\n      <Detail>\n         <nameBook>\u041a\u043d\u0438\u0433\u0430 1</nameBook>\n         <quantity>2</quantity>\n         <price currency="EUR">4.99</price>\n      </Detail>\n   </Specification>\n</Order>\n')),Object(o.b)("p",null,"\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0442\u044d\u0433 ",Object(o.b)("inlineCode",{parentName:"p"},"Order")," \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u0444\u043e\u0440\u043c\u044b. \u0412\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043c\u0435\u043d\u0430 \u0442\u044d\u0433\u043e\u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u043b\u0438\u0431\u043e \u0438\u043c\u0435\u043d\u0435\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",Object(o.b)("inlineCode",{parentName:"p"},"date"),", ",Object(o.b)("inlineCode",{parentName:"p"},"number")," \u0438\u043b\u0438 ",Object(o.b)("inlineCode",{parentName:"p"},"count"),"), \u043b\u0438\u0431\u043e \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",Object(o.b)("inlineCode",{parentName:"p"},"EXTID")," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",Object(o.b)("inlineCode",{parentName:"p"},"name")," \u0438 ",Object(o.b)("inlineCode",{parentName:"p"},"address"),"). \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",Object(o.b)("inlineCode",{parentName:"p"},"EXTID")," \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0435\u0435 \u0432 \u0442\u0435\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u043d\u043e \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."),Object(o.b)("p",null,'\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f "\u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445" \u0442\u044d\u0433\u043e\u0432 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ',Object(o.b)("inlineCode",{parentName:"p"},"Info"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Customer")," \u0438\u043b\u0438 ",Object(o.b)("inlineCode",{parentName:"p"},"Specification"),") \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0433\u0440\u0443\u043f\u043f\u044b, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0434\u0440\u0443\u0433 \u0432 \u0434\u0440\u0443\u0433\u0430, \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0437\u0430\u0442\u0435\u043c \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0443\u0436\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430."),Object(o.b)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",Object(o.b)("inlineCode",{parentName:"p"},"ATTR"),' \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u044d\u0433, \u0430 \u0432 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e "\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e" \u0442\u044d\u0433\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ',Object(o.b)("inlineCode",{parentName:"p"},"timeStamp")," \u0438\u043b\u0438 ",Object(o.b)("inlineCode",{parentName:"p"},"count"),")."),Object(o.b)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432 \u0442\u044d\u0433 ",Object(o.b)("inlineCode",{parentName:"p"},"price")," \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0432\u0430\u043b\u044e\u0442\u044b, \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0433\u0440\u0443\u043f\u043f\u0430 \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0437\u0430\u0442\u0435\u043c \u043f\u043e\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f \u0434\u0432\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 : ",Object(o.b)("inlineCode",{parentName:"p"},"nameCurrency")," (\u0441 \u0432\u0430\u043b\u044e\u0442\u043e\u0439) \u0438 ",Object(o.b)("inlineCode",{parentName:"p"},"price")," (\u0441\u0430\u043c\u0430 \u0446\u0435\u043d\u0430). \u0414\u043b\u044f \u0432\u0430\u043b\u044e\u0442\u044b \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",Object(o.b)("inlineCode",{parentName:"p"},"ATTR")," - \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d\u0430 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0442\u044d\u0433 ",Object(o.b)("inlineCode",{parentName:"p"},"price")," \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u043c. \u0414\u043b\u044f \u0446\u0435\u043d\u044b \u0436\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 ",Object(o.b)("inlineCode",{parentName:"p"},"EXTID 'value'"),", \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0447\u0435\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0438\u0448\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 \u0442\u044d\u0433 ",Object(o.b)("inlineCode",{parentName:"p"},"price"),". \u0411\u0435\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u044d\u0442\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u044b \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u043b \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<price><currency>USD</currency><price>4.99</price></price>\n")),Object(o.b)("p",null,"\u0415\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 XML, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0443, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438."),Object(o.b)("p",null,"\u041b\u044e\u0431\u043e\u0439 \u0442\u044d\u0433 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u043c \u0444\u0430\u0439\u043b\u0435 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u0447\u0435\u0442\u044b\u0440\u0435\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c")," (\u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",Object(o.b)("inlineCode",{parentName:"li"},"PROPERTIES"),")."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"\u041e\u0431\u044a\u0435\u043a\u0442\u043e\u043c")," (\u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",Object(o.b)("inlineCode",{parentName:"li"},"OBJECTS"),")."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"\u0413\u0440\u0443\u043f\u043f\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432")," (\u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",Object(o.b)("inlineCode",{parentName:"li"},"GROUP")," \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u043c\u0438 \u0444\u043e\u0440\u043c\u044b)."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"\u0424\u043e\u0440\u043c\u043e\u0439")," (\u0441\u0430\u043c\u044b\u0439 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0442\u044d\u0433)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u0415\u0441\u043b\u0438 \u0442\u044d\u0433 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u043f\u043e\u0434\u0440\u044f\u0434 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",Object(o.b)("inlineCode",{parentName:"p"},"Detail"),"), \u0442\u043e \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d ",Object(o.b)("em",{parentName:"p"},"\u043e\u0431\u044a\u0435\u043a\u0442")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u0415\u0441\u043b\u0438 \u0442\u044d\u0433 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0442\u044d\u0433\u0438, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u0430\u043c \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",Object(o.b)("inlineCode",{parentName:"p"},"Specification"),"), \u0442\u043e \u0434\u043b\u044f \u043d\u0435\u0433\u043e \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0430 ",Object(o.b)("em",{parentName:"p"},"\u0433\u0440\u0443\u043f\u043f\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u0415\u0441\u043b\u0438 \u0442\u044d\u0433 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",Object(o.b)("inlineCode",{parentName:"p"},'count = "2"'),"), \u0442\u043e \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043b\u0438\u0431\u043e ",Object(o.b)("em",{parentName:"p"},"\u0433\u0440\u0443\u043f\u043f\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432"),", \u043b\u0438\u0431\u043e ",Object(o.b)("em",{parentName:"p"},"\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c")," (\u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e \u043e\u0434\u0438\u043d \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u044d\u0442\u043e\u0442 \u0442\u044d\u0433).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u0415\u0441\u043b\u0438 \u0442\u044d\u0433 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0442\u043e \u043e\u043d \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043b\u0438\u0431\u043e ",Object(o.b)("em",{parentName:"p"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c")," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",Object(o.b)("inlineCode",{parentName:"p"},"nameBook")," \u0438\u043b\u0438 ",Object(o.b)("inlineCode",{parentName:"p"},"quantity"),') \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u043b\u0438\u0431\u043e \u0433\u0440\u0443\u043f\u043f\u043e\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 / \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0441 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c "\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c" \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c \u0441 ',Object(o.b)("inlineCode",{parentName:"p"},"EXTID 'value'"),")."))),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",Object(o.b)("a",{parentName:"p",href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1"},Object(o.b)("strong",{parentName:"a"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1")),"."),Object(o.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0437\u0430\u043a\u0430\u0437\u0430 \u0432 JSON-\u0444\u043e\u0440\u043c\u0430\u0442."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"exportToJSON '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 JSON' (Order o) {\n    EXPORT Order OBJECTS order = o JSON;\n    open(exportFile());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToJSON TOOLBAR\n;\n")),Object(o.b)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{  \n   "timeStamp":"13.11.18 15:11:45",\n   "Info":{  \n      "date":"13.11.18",\n      "number":"12",\n      "Customer":{  \n         "address":"\u0410\u0434\u0440\u0435\u0441 2",\n         "name":"\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 2"\n      }\n   },\n   "Specification":{  \n      "count":2,\n      "Detail":[  \n         {  \n            "quantity":1,\n            "price":3.99,\n            "nameBook":"\u041a\u043d\u0438\u0433\u0430 2"\n         },\n         {  \n            "quantity":2,\n            "price":4.99,\n            "nameBook":"\u041a\u043d\u0438\u0433\u0430 1"\n         }\n      ]\n   }\n}\n')),Object(o.b)("p",null,"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 JSON \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f ",Object(o.b)("inlineCode",{parentName:"p"},"ATTR")," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3"},"\u041f\u0440\u0438\u043c\u0435\u0440 3"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",Object(o.b)("a",{parentName:"p",href:"#%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80-1"},Object(o.b)("strong",{parentName:"a"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1")),"."),Object(o.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442 \u0432\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u044b \u0437\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u0432 CSV \u0444\u043e\u0440\u043c\u0430\u0442."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"exportToCSV (DATE date) {\n    LOCAL file = FILE();\n    EXPORT CSV HEADER FROM number = number(order(OrderDetail d)),\n                    customer = nameCustomer(order(d)),\n                    book = nameBook(d),\n                    quantity(d),\n                    price(d)\n           WHERE date(order(d)) = date TO file;\n    WRITE CLIENT DIALOG file() TO 'orders';\n}\n\nFORM exportParameters '\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b'\n    OBJECTS d = DATE PANEL\n    PROPERTIES(d) '\u0414\u0430\u0442\u0430' = VALUE\n;\nexportToCSV '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 CSV' () {\n    DIALOG exportParameters OBJECTS d INPUT DO\n        exportToCSV(d);\n}\n\nEXTEND FORM orders\n    PROPERTIES() exportToCSV DRAW o TOOLBAR\n;\n")),Object(o.b)("p",null,"\u041f\u0435\u0440\u0432\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0430 \u0432\u0445\u043e\u0434 \u0434\u0430\u0442\u0443 \u0438, \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",Object(o.b)("inlineCode",{parentName:"p"},"EXPORT"),", \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u043f\u043b\u043e\u0441\u043a\u0438\u0439 \u0444\u0430\u0439\u043b CSV \u0441 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u043c \u0442\u043e\u0447\u043a\u0430 \u0441 \u0437\u0430\u043f\u044f\u0442\u043e\u0439. \u0424\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csv"},"number;customer;book;quantity;price\n14;\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 1;\u041a\u043d\u0438\u0433\u0430 1;2;8.99\n12;\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 2;\u041a\u043d\u0438\u0433\u0430 2;1;3.99\n12;\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c 2;\u041a\u043d\u0438\u0433\u0430 1;2;4.99\n")),Object(o.b)("p",null,"\u0414\u043b\u044f \u043f\u0435\u0440\u0432\u044b\u0445 \u0442\u0440\u0435\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e \u0438\u043c\u044f \u043a\u043e\u043b\u043e\u043d\u043a\u0438, \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0432\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0438\u043c\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(o.b)("inlineCode",{parentName:"p"},"file"),", \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u0442\u0435\u043c, \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",Object(o.b)("a",{parentName:"p",href:"/platform/ru/WRITE_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",Object(o.b)("inlineCode",{parentName:"a"},"WRITE")),", \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 \u0440\u0430\u0431\u043e\u0447\u0438\u0439 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440."),Object(o.b)("p",null,"\u0412\u0442\u043e\u0440\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0444\u043e\u0440\u043c\u0443, \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u0430\u0442\u0443 \u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0443 \u0434\u0430\u043d\u043d\u044b\u0445."))}l.isMDXComponent=!0},747:function(e,n,t){"use strict";t.d(n,"a",(function(){return O})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},O=function(e){var n=l(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),O=l(t),d=r,u=O["".concat(i,".").concat(d)]||O[d]||m[d]||o;return t?a.a.createElement(u,c(c({ref:n},b),{},{components:t})):a.a.createElement(u,c({ref:n},b))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=t[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);