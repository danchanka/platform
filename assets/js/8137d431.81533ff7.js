(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{420:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(746)),i={title:"How-to: Data export"},p={unversionedId:"How-to_Data_export",id:"version-v4/How-to_Data_export",isDocsHomePage:!1,title:"How-to: Data export",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Data_export.md",slug:"/How-to_Data_export",permalink:"/platform/How-to_Data_export",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Data_export.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Working with external formats",permalink:"/platform/How-to_Working_with_external_formats"},next:{title:"How-to: Data import",permalink:"/platform/How-to_Data_import"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],l={toc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have sales orders for several books."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Time;\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nCLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[50] (Customer) IN id;\naddress 'Address' = DATA ISTRING[50] (Customer) IN base;\n\nCLASS Currency 'Currency';\nname 'Name' = DATA ISTRING[50] (Currency) IN id;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\ncurrency 'Currency' = DATA Currency (OrderDetail);\nnameCurrency 'Currency' (OrderDetail d) = name(currency(d));\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number, nameCustomer\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, nameCurrency, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number, nameCustomer\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(a.b)("p",null,"We need to create a button that exports the contents of the order in the XML format."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"GROUP Info;\nGROUP Customer : Info;\n\nGROUP Specification;\n\nGROUP price;\n\nFORM Order\n    PROPERTIES timeStamp = currentDateTime() ATTR\n\n    OBJECTS order = Order\n    PROPERTIES(order) IN Info date, number\n    PROPERTIES IN Customer nameCustomer(order) EXTID 'name', =address(customer(order)) EXTID 'address'\n\n    PROPERTIES IN Specification count = [GROUP SUM 1 BY order(OrderDetail d)](order) ATTR\n\n    OBJECTS Detail = OrderDetail IN Specification\n    PROPERTIES(Detail) nameBook, quantity,\n                       nameCurrency IN price EXTID 'currency' ATTR, price IN price EXTID 'value'\n    FILTERS order(Detail) = order\n;\n\nexportToXML 'Export to XML' (Order o) {\n    EXPORT Order OBJECTS order = o XML;\n    open(exportFile());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToXML TOOLBAR\n;\n")),Object(a.b)("p",null,"To upload the data in the XML format, we need to create a form ",Object(a.b)("a",{parentName:"p",href:"/platform/Structured_view"},"with the corresponding structure")," and then call the ",Object(a.b)("a",{parentName:"p",href:"/platform/EXPORT_operator"},"EXPORT operator"),". This operator will generate a file based on the form and then write the file to the ",Object(a.b)("strong",{parentName:"p"},"exportFile")," property, which is then opened on the client side using the ",Object(a.b)("strong",{parentName:"p"},"open"),' action. The file will be opened in the software associated with its extension (i. e. ".json").'),Object(a.b)("p",null,"The resulting XML will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'<Order timeStamp="13.11.18 12:28:58">\n   <Info>\n      <date>13.11.18</date>\n      <number>12</number>\n      <Customer>\n         <name>Customer2</name>\n         <address>Address2</address>\n      </Customer>\n   </Info>\n   <Specification count="2">\n      <Detail>\n         <nameBook>Book2</nameBook>\n         <quantity>1</quantity>\n         <price currency="USD">3.99</price>\n      </Detail>\n      <Detail>\n         <nameBook>Book1</nameBook>\n         <quantity>2</quantity>\n         <price currency="EUR">4.99</price>\n      </Detail>\n   </Specification>\n</Order>\n')),Object(a.b)("p",null,"The parent tag ",Object(a.b)("strong",{parentName:"p"},"Order")," matches the name of the form. Names of all other tags are defined either by a property name on the form (e. g. ",Object(a.b)("strong",{parentName:"p"},"date"),", ",Object(a.b)("strong",{parentName:"p"},"number"),"\xa0or ",Object(a.b)("strong",{parentName:"p"},"count"),") or by the special parameter\xa0",Object(a.b)("strong",{parentName:"p"},"EXTID")," (e. g. ",Object(a.b)("strong",{parentName:"p"},"name")," and ",Object(a.b)("strong",{parentName:"p"},"address"),"). Use of EXTID is preferable when the form contains several properties with the same name, but for different objects."),Object(a.b)("p",null,'To create "intermediate" tags (e. g. ',Object(a.b)("strong",{parentName:"p"},"Info"),", ",Object(a.b)("strong",{parentName:"p"},"Customer")," or ",Object(a.b)("strong",{parentName:"p"},"Specification"),"), the correspondingly nested groups are created to which the necessary properties are then exported."),Object(a.b)("p",null,"Use of the ",Object(a.b)("strong",{parentName:"p"},"ATTR"),"\xa0attribute allows you to put the value not in a separate tag, but in the attribute of a parent tag (e. g. ",Object(a.b)("strong",{parentName:"p"},"timeStamp")," or ",Object(a.b)("strong",{parentName:"p"},"count"),")."),Object(a.b)("p",null,"To put the currency attribute into the ",Object(a.b)("strong",{parentName:"p"},"price")," tag, a group with the corresponding name is created, into which the ",Object(a.b)("strong",{parentName:"p"},"nameCurrency")," and ",Object(a.b)("strong",{parentName:"p"},"price")," properties are then added. Since the ",Object(a.b)("strong",{parentName:"p"},"ATTR")," attribute is specified for currency, the currency is added to the ",Object(a.b)("strong",{parentName:"p"},"price")," tag as attribute. And for the price, the predefined ",Object(a.b)("strong",{parentName:"p"},"EXTID"),"\xa0",Object(a.b)("strong",{parentName:"p"},"value")," is set and therefore the value is written directly to the ",Object(a.b)("strong",{parentName:"p"},"price")," tag. Without all these parameters, the result would be as follows:"),Object(a.b)("p",null,"<price",">","<currency",">","USD</currency",">","<price",">","4.99</price",">","</price",">","."),Object(a.b)("p",null,"If you have a target XML template into which you need to export data, then use the following rules."),Object(a.b)("p",null,"Any tag in the resulting file is generated by one of four elements:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Property")," (to be declared using ",Object(a.b)("strong",{parentName:"li"},"PROPERTIES"),")."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Object")," (to be declared using ",Object(a.b)("strong",{parentName:"li"},"OBJECTS"),")."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Property group")," (to be declared using ",Object(a.b)("strong",{parentName:"li"},"GROUP")," outside the form)."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Form")," (the upper tag)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If the tag repeats several times in a row (e. g. ",Object(a.b)("strong",{parentName:"p"},"Detail"),"), declare an ",Object(a.b)("em",{parentName:"p"},"object")," with the matching name.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If a tag contains nested tags, but is used only once (e. g. ",Object(a.b)("strong",{parentName:"p"},"Specification"),"), then declare a ",Object(a.b)("em",{parentName:"p"},"property group"),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'If the tag contains attributes (e. g. count = "2"), then it must be generated either by a ',Object(a.b)("em",{parentName:"p"},"property group")," or by an ",Object(a.b)("em",{parentName:"p"},"object")," (depending on whether this tag is used once or more).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If the tag contains a value, then such tag must be generated either by a ",Object(a.b)("em",{parentName:"p"},"property"),"\xa0(e. g. ",Object(a.b)("strong",{parentName:"p"},"nameBook")," or ",Object(a.b)("strong",{parentName:"p"},"quantity"),') with the corresponding name or by an object/property group with the only "nested" property having ',Object(a.b)("strong",{parentName:"p"},"EXTID")," 'value')."))),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create a button that exports the contents of the order in the JSON format."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"exportToJSON 'Export to JSON' (Order o) {\n    EXPORT Order OBJECTS order = o JSON;\n    open(exportFile());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToJSON TOOLBAR\n;\n")),Object(a.b)("p",null,"The resulting file will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{  \n   "timeStamp":"13.11.18 15:11:45",\n   "Info":{  \n      "date":"13.11.18",\n      "number":"12",\n      "Customer":{  \n         "address":"Address 2",\n         "name":"Customer 2"\n      }\n   },\n   "Specification":{  \n      "count":2,\n      "Detail":[  \n         {  \n            "quantity":1,\n            "price":3.99,\n            "nameBook":"Book 2"\n         },\n         {  \n            "quantity":2,\n            "price":4.99,\n            "nameBook":"Book 1"\n         }\n      ]\n   }\n}\n')),Object(a.b)("p",null,"Note that the ",Object(a.b)("strong",{parentName:"p"},"ATTR")," instruction is ignored when you export data in the JSON format."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create a button that exports all the orders for a certain date in the CSV format."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"exportToCSV (DATE date) {\n    LOCAL file = FILE();\n    EXPORT CSV HEADER FROM number = number(order(OrderDetail d)),\n                    customer = nameCustomer(order(d)),\n                    book = nameBook(d),\n                    quantity(d),\n                    price(d)\n           WHERE date(order(d)) = date TO file;\n    WRITE CLIENT DIALOG file() TO 'orders';\n}\n\nFORM exportParameters 'Parameters'\n    OBJECTS d = DATE PANEL\n    PROPERTIES(d) 'Date' = VALUE\n;\nexportToCSV 'Export to CSV' () {\n    DIALOG exportParameters OBJECTS d INPUT DO\n        exportToCSV(d);\n}\n\nEXTEND FORM orders\n    PROPERTIES() exportToCSV DRAW o TOOLBAR\n;\n")),Object(a.b)("p",null,"The first action gets a date as input and then generates a flat CSV file with a semicolon delimiter using the ",Object(a.b)("strong",{parentName:"p"},"EXPORT")," operator. The file will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"number;customer;book;quantity;price\n14;Customer 1;Book 1;2;8.99\n12;Customer 2;Book 2;1;3.99\n12;Customer 2;Book 1;2;4.99\n")),Object(a.b)("p",null,"The column name is overridden for the first three parameters, while the other two use the names of the corresponding properties. The result is first written to the local property ",Object(a.b)("strong",{parentName:"p"},"file"),". Then the user is prompted to save the file from that property to his workstation. This is done using",Object(a.b)("a",{parentName:"p",href:"/platform/WRITE_operator"},"WRITE operator"),"."),Object(a.b)("p",null,"The second action opens the form, asks the user to enter a date and then calls the first data export action."))}b.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return r?o.a.createElement(u,p(p({ref:t},l),{},{components:r})):o.a.createElement(u,p({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);