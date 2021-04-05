(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{436:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(751)),i={title:"How-to: Data import"},l={unversionedId:"How-to_Data_import",id:"How-to_Data_import",isDocsHomePage:!1,title:"How-to: Data import",description:"Example 1",source:"@site/docs/How-to_Data_import.md",slug:"/How-to_Data_import",permalink:"/platform/docs/next/How-to_Data_import",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Data_import.md",version:"current",sidebar:"docs",previous:{title:"How-to: Data export",permalink:"/platform/docs/next/How-to_Data_export"},next:{title:"How-to: Interaction via HTTP protocol",permalink:"/platform/docs/next/How-to_Interaction_via_HTTP_protocol"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]}]}],s={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have the books for which names and prices are defined. The order logic is also defined."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Utils;\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nid 'Code' = DATA STRING[20] (Book) IN id;\nbook 'Book' (STRING[20] id) = GROUP AGGR Book b BY id(b);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(a.b)("p",null,"We need to create a button that loads the contents of the order from the Excel file selected by the user on their computer."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"importXlsx 'Import from XLS' (Order o)  {\n    INPUT f = EXCELFILE DO {\n\n        LOCAL bookId = STRING[20] (INTEGER);\n        LOCAL quantity = INTEGER (INTEGER);\n        LOCAL price = NUMERIC[14,2] (INTEGER);\n\n        IMPORT XLS FROM f TO bookId = A, quantity = B, price = C;\n\n        FOR imported(INTEGER i) NEW d = OrderDetail DO {\n            order(d) <- o;\n\n            book(d) <- book(bookId(i));\n            quantity(d) <- quantity(i);\n            price(d) <- price(i);\n        }\n    }\n}\n\nEXTEND FORM order\n    PROPERTIES(o) importXlsx\n;\n")),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/INPUT_operator"},"INPUT")," operator which requests a file will display a dialog where the user will be able to choose an .xls or .xlsx file. Once the file is selected successfully, the system will call the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," specified after ",Object(a.b)("strong",{parentName:"p"},"DO"),"."),Object(a.b)("p",null,"It is assumed that a file consists of three columns. The first one (A) contains book codes, the second one (B) contains quantities, and the third one (C) contains prices.\xa0"),Object(a.b)("p",null,"The \xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/IMPORT_operator"},"IMPORT"),"\xa0operator reads the selected file\xa0and then writes its contents to local properties which take only one argument \u2014 line number. The numbering starts from 0.\xa0The\xa0",Object(a.b)("strong",{parentName:"p"},"imported"),"\xa0property will be set to\xa0",Object(a.b)("strong",{parentName:"p"},"TRUE")," if the file contains a line with the corresponding number.\xa0Then, a corresponding line is created in the order for each of these lines."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),". In addition, we have specified a directory to which an external system puts orders. For each order, a separate CSV file is generated for storing the order date and number (in the denormalized form) along with the book code, quantity, and price."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"serverDirectory 'Directory on the server from which orders should be imported' = DATA STRING[100] ();\n\nEXTEND FORM orders PROPERTIES() serverDirectory;\n")),Object(a.b)("p",null,"We need to implement an action that will import orders from this folder into the system."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"importOrders 'Import orders from directory' ()  {\n\n    listFiles('file://' + serverDirectory());\n\n    FOR ISTRING[255] f = fileName(INTEGER j) AND NOT fileIsDirectory(j) DO NEWSESSION {\n\n        LOCAL file = FILE ();\n        READ 'file://' + serverDirectory() + '/' + f TO file;\n\n        LOCAL date = DATE (INTEGER);\n        LOCAL number = STRING[10] (INTEGER);\n\n        LOCAL bookId = STRING[20] (INTEGER);\n        LOCAL quantity = INTEGER (INTEGER);\n        LOCAL price = NUMERIC[14,2] (INTEGER);\n\n        IMPORT CSV '|' NOHEADER CHARSET 'CP1251' FROM file() TO date, number, bookId, quantity, price;\n\n        NEW o = Order {\n            date(o) <- date(0);\n            number(o) <- number(0);\n\n            FOR imported(INTEGER i) NEW d = OrderDetail DO {\n                order(d) <- o;\n\n                book(d) <- book(bookId(i));\n                quantity(d) <- quantity(i);\n                price(d) <- price(i);\n            }\n        }\n\n        APPLY;\n        move('file://' + serverDirectory() + '/' + f, 'file://' + serverDirectory() + '/' + (IF canceled() THEN 'error/' ELSE 'success/') + f);\n    }\n}\n\nEXTEND FORM orders PROPERTIES() importOrders;\n")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"listFiles")," action is declared in the ",Object(a.b)("strong",{parentName:"p"},"Utils")," system ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Modules"},"module"),". The action scans the folder specified in the argument and reads all the files from it and writes their contents to the ",Object(a.b)("strong",{parentName:"p"},"fileName")," and ",Object(a.b)("strong",{parentName:"p"},"fileIsDirectory")," properties."),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/READ_operator"},"READ")," operator reads the specified file and writes its contents to a local property of the ",Object(a.b)("strong",{parentName:"p"},"FILE")," type which is then processed by the ",Object(a.b)("strong",{parentName:"p"},"IMPORT")," operator. Its arguments specify that the file format is CSV without a title in the first line, with a vertical bar as separator, and with the CP1251 encoding."),Object(a.b)("p",null,"It is assumed that dates and numbers in each line will have the same values. This is why their values are read from the first line with number 0."),Object(a.b)("p",null,"Each file is processed in a separate new ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Change_sessions"},"change session"),"\xa0and then is saved using the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/APPLY_operator"},"APPLY")," operator. This operator writes ",Object(a.b)("strong",{parentName:"p"},"TRUE"),"\xa0to the ",Object(a.b)("strong",{parentName:"p"},"canceled")," property when a certain ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Constraints"},"constraint")," has been violated. Then, the ",Object(a.b)("strong",{parentName:"p"},"MOVE"),"\xa0statement of the ",Object(a.b)("strong",{parentName:"p"},"READ"),' operator moves the file either to "success" folder or "error" folder. This allows us to call the action again without processing the same orders several times.'),Object(a.b)("p",null,"Since the result action has no arguments, we can add it to the scheduler for automatic launch at certain intervals."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"An external database stores a book directory with their codes and names."),Object(a.b)("p",null,"We need to create an action that will synchronize the book directory with this external database."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"importBooks 'Import books' ()  {\n    LOCAL file = FILE ();\n    READ 'jdbc:sqlserver://localhost;databaseName=books;User=import;Password=password@SELECT id, name FROM books' TO file;\n\n    LOCAL id = STRING[20] (INTEGER);\n    LOCAL name = ISTRING[100] (INTEGER);\n    IMPORT TABLE FROM file() TO id, name;\n\n    //creating new books\n    FOR id(INTEGER i) AND NOT book(id(i)) NEW b = Book DO {\n        id(b) <- id(i);\n    }\n\n    // changing values\n    FOR id(Book b) == id(INTEGER i) DO {\n        name(b) <- name(i);\n    }\n\n    // deleting books\n    DELETE Book b WHERE b IS Book AND NOT [ GROUP SUM 1 BY id(INTEGER i)](id(b));\n}\n")),Object(a.b)("p",null,"Synchronization consists of the three main actions. First, we create books whose codes can be found in the external database, but not in our database. Then, we update the values for all books that can be found in our database. And finally, books that cannot be found in the external database are removed from our database."),Object(a.b)("p",null,"This guarantees that when the action is started, the book directory will be absolutely identical to that in the external system. This scheme is useful when some master data is maintained in another system. The result action can be added to the scheduler and triggered at certain relatively small time intervals, thereby ensuring near real-time updates for the directory."),Object(a.b)("h2",{id:"example-4"},"Example 4"),Object(a.b)("h3",{id:"condition-3"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"For each order line, we have added the decoding of this line by color and size."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetailInfo 'Order line (transcript)';\n\ndetail = DATA OrderDetail (OrderDetailInfo) NONULL DELETE;\nsize = DATA STRING[100] (OrderDetailInfo);\ncolor = DATA STRING[100] (OrderDetailInfo);\nquantity = DATA INTEGER (OrderDetailInfo);\n\nEXTEND FORM order\n    OBJECTS i = OrderDetailInfo\n    PROPERTIES(i) size, color, quantity, NEW, DELETE\n    FILTERS detail(i) = d\n;\n")),Object(a.b)("p",null,"We need to implement the import of orders from the JSON file of the specified structure. A JSON file may look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n   "version":"v1",\n   "order":[\n      {\n         "date":"03.01.2018",\n         "number":"430",\n         "detail":[\n            {\n               "item":{\n                  "id":"132",\n                  "info":[\n                     {\n                        "size":"40",\n                        "color":"black",\n                        "quantity":2\n                     },\n                     {\n                        "size":"41",\n                        "color":"white",\n                        "quantity":3\n                     }\n                  ]\n               },\n               "price":1.99\n            },\n            {\n               "item":{\n                  "id":"136",\n                  "info":[\n                     {\n                        "size":"39",\n                        "color":"white",\n                        "quantity":4\n                     },\n                     {\n                        "size":"43",\n                        "color":"red",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":2.99\n            }\n         ]\n      },\n      {\n         "date":"04.01.2018",\n         "number":"435",\n         "detail":[\n            {\n               "item":{\n                  "id":"122",\n                  "info":[\n                     {\n                        "size":"L",\n                        "color":"black",\n                        "quantity":1\n                     },\n                     {\n                        "size":"XL",\n                        "color":"white",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":11.99\n            },\n            {\n               "item":{\n                  "id":"126",\n                  "info":[\n                     {\n                        "size":"S",\n                        "color":"white",\n                        "quantity":1\n                     },\n                     {\n                        "size":"M",\n                        "color":"red",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":12.99\n            }\n         ]\n      },\n   ]\n}\n')),Object(a.b)("p",null,"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"version = DATA LOCAL STRING[100]();\n\nGROUP item;\nidItem = DATA LOCAL STRING[100] (OrderDetail);\n\nFORM importOrder\n    PROPERTIES() version\n\n    OBJECTS order = Order\n    PROPERTIES(order) date, number\n\n    OBJECTS detail = OrderDetail\n    PROPERTIES(detail) IN item idItem EXTID 'id'\n    PROPERTIES(detail) price\n    FILTERS order(detail) = order\n\n    OBJECTS detailInfo = OrderDetailInfo IN item EXTID 'info'\n    PROPERTIES(detailInfo) size, color, quantity\n    FILTERS detail(detailInfo) = detail\n;\n\nimportOrderFromJSON 'Import from JSON' () {\n    INPUT f = FILE DO {\n        IMPORT importOrder JSON FROM f;\n        book(OrderDetail d) <- book(idItem(d)) WHERE idItem(d);\n        APPLY;\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES() importOrderFromJSON DRAW o TOOLBAR\n;\n")),Object(a.b)("p",null,"To implement the import process, we need to declare the form of the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Structured_view"},"structure")," matching the structure of the JSON file."),Object(a.b)("p",null,"We declare the ",Object(a.b)("strong",{parentName:"p"},"version")," tag at the upmost level without inputs and then add it to the form."),Object(a.b)("p",null,"Since the ",Object(a.b)("strong",{parentName:"p"},"order")," tag is an array, we declare an object with the same name on the form. The platform will create a new object for each array element in the JSON. The ",Object(a.b)("strong",{parentName:"p"},"date")," and ",Object(a.b)("strong",{parentName:"p"},"number"),"\xa0properties for the order will be automatically imported from the corresponding tags in the JSON."),Object(a.b)("p",null,"Similarly, for the ",Object(a.b)("strong",{parentName:"p"},"detail")," tag, we create an object with the same name and then link this object to the ",Object(a.b)("strong",{parentName:"p"},"order")," object using ",Object(a.b)("strong",{parentName:"p"},"FILTERS"),". During the import process, the system will fill the link in the order line based on this filter and the nesting of tags."),Object(a.b)("p",null,"To import values from tags nested in the ",Object(a.b)("strong",{parentName:"p"},"item")," tag, we create a new\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Groups_of_properties_and_actions"},"group")," called ",Object(a.b)("strong",{parentName:"p"},"item")," and then place the properties and objects into it. In particular, the local property ",Object(a.b)("strong",{parentName:"p"},"idItem")," is created and then added to the form in this group. Since the property name does not match the tag name, we specify the corresponding name for the property on the form using the ",Object(a.b)("strong",{parentName:"p"},"EXTID")," keyword."))}d.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,O=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(O,l(l({ref:t},s),{},{components:n})):o.a.createElement(O,l({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);