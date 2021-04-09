(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{621:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(746)),i={title:"How-to: Interaction via HTTP protocol"},l={unversionedId:"How-to_Interaction_via_HTTP_protocol",id:"version-v4/How-to_Interaction_via_HTTP_protocol",isDocsHomePage:!1,title:"How-to: Interaction via HTTP protocol",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Interaction_via_HTTP_protocol.md",slug:"/How-to_Interaction_via_HTTP_protocol",permalink:"/platform/How-to_Interaction_via_HTTP_protocol",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Interaction_via_HTTP_protocol.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Data import",permalink:"/platform/How-to_Data_import"},next:{title:"How-to: Frontend",permalink:"/platform/How-to_Frontend"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution-4",children:[]}]},{value:"Example 6",id:"example-6",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-5",children:[]}]},{value:"Example 7",id:"example-7",children:[{value:"Task",id:"task-4",children:[]},{value:"Solution",id:"solution-6",children:[]}]}],d={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have a certain set of cities associated with their countries."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Country 'Country';\nid 'Code' = DATA STRING[20] (Country) IN id;\nname 'Name' = DATA ISTRING[100] (Country) IN id;\n\ncountry (STRING[20] id) = GROUP AGGR Country c BY id(c);\n\nCLASS City 'City';\nname 'Name' = DATA ISTRING[100] (City) IN id;\n\ncountry 'Country' = DATA Country (City);\nnameCountry 'Country' (City c) = name(country(c));\n\nFORM cities 'Cities'\n    OBJECTS c = City\n    PROPERTIES(c) name, nameCountry, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW cities;\n}\n")),Object(a.b)("p",null,"We need to send an HTTP request for adding a city in the JSON format to a certain url."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"postCity 'Send' (City c)  {\n    EXPORT JSON FROM countryId = id(country(c)), name = name(c);\n\n    LOCAL result = FILE();\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.createCity' PARAMS exportFile() TO result;\n\n    LOCAL code = STRING[10]();\n    LOCAL message = STRING[100]();\n    IMPORT JSON FROM result() TO() code, message;\n    IF NOT code() == '0' THEN {\n        MESSAGE 'Error: ' + message();\n    }\n}\n\nEXTEND FORM cities\n    PROPERTIES(c) postCity\n;\n")),Object(a.b)("p",null,"The\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Data_export_EXPORT_"},"EXPORT"),"\xa0operator will create a JSON in the ",Object(a.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"FILE")," format and then will write it to the exportFile property. Here is an example of the generated file:\xa0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{"countryId":"123","name":"San Francisco"}\n')),Object(a.b)("p",null,"Then we call the ",Object(a.b)("a",{parentName:"p",href:"/platform/Access_to_an_external_system_EXTERNAL_"},"EXTERNAL")," operator, which sends a request to the specified url passing there the contents of the generated file as Body. In this case, since the property in the FROM block has the type JSON, ",Object(a.b)("em",{parentName:"p"},"application/json")," will be used as the content type. <namespace",">","<property name",">"," is encoded in the url. In this case, the namespace of the action being called (",Object(a.b)("strong",{parentName:"p"},"createCity"),") is ",Object(a.b)("strong",{parentName:"p"},"Location"),". All parameters are passed consequently with the ID\xa0",Object(a.b)("strong",{parentName:"p"},"p"),". \xa0The response from the server will be written to the ",Object(a.b)("strong",{parentName:"p"},"result")," property. Suppose that the response is received in the JSON format and has one of the following types:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{"code":"0","message":"OK"}\n\n{"code":"1","message":"Invalid country code"}\n')),Object(a.b)("p",null,"The response is handled by the ",Object(a.b)("a",{parentName:"p",href:"/platform/Data_import_IMPORT_"},"IMPORT")," operator which parses the corresponding parameters into the ",Object(a.b)("strong",{parentName:"p"},"code")," and ",Object(a.b)("strong",{parentName:"p"},"message")," properties respectively. If any error occurs, the user will see a corresponding error message."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),".\xa0"),Object(a.b)("p",null,"We need to handle the incoming HTTP request and create a new city in the database with the parameters provided in the request."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"createCity (FILE f)  {\n\n    LOCAL cy = STRING[20] ();\n    LOCAL ne = STRING[100] ();\n\n    IMPORT JSON FROM f AS FILE TO() cy = countryId, ne = name;\n\n    IF NOT country(cy()) THEN {\n        EXPORT JSON FROM code = '1', message = 'Invalid country code';\n        RETURN;\n    }\n\n    NEW c = City {\n        name(c) <- ne();\n        country(c) <- country(cy());\n\n        APPLY;\n    }\n\n    EXPORT JSON FROM code = '0', message = 'OK';\n}\n")),Object(a.b)("p",null,"Since the property is named ",Object(a.b)("strong",{parentName:"p"},"createCity")," and located in the ",Object(a.b)("a",{parentName:"p",href:"/platform/Modules"},"module")," with the namespace ",Object(a.b)("strong",{parentName:"p"},"Location"),", the url on which the request will be handled looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http://localhost:7651/exec?action=Location.createCity\n")),Object(a.b)("p",null,"Body of the HTTP request will be passed as a parameter of the type ",Object(a.b)("strong",{parentName:"p"},"FILE"),". The values read from the ",Object(a.b)("strong",{parentName:"p"},"countryId")," and ",Object(a.b)("strong",{parentName:"p"},"name")," parameters are written to the local properties ",Object(a.b)("strong",{parentName:"p"},"cy")," and ",Object(a.b)("strong",{parentName:"p"},"ne")," respectively."),Object(a.b)("p",null,"If there is no country with the corresponding code, then a JSON file is generated similar to that described in the previous example, and the ",Object(a.b)("a",{parentName:"p",href:"/platform/Exit_RETURN_"},"RETURN")," operator is called to abort execution. By default, the response message value is also stored in the ",Object(a.b)("strong",{parentName:"p"},"exportFile")," property."),Object(a.b)("p",null,'If all the actions are completed successfully, the corresponding "OK message" is generated in response.'),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"task-2"},"Task"),Object(a.b)("p",null,"We have the logic of book orders."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nid 'Code' = DATA STRING[10] (Book) IN id;\nname 'Name' = DATA ISTRING[100] (Book) IN id;\n\nbook (STRING[10] id) = GROUP AGGR Book b BY id(b);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[10] (Order);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (OrderDetail) NONULL;\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nquantity 'Quantity' = DATA INTEGER (OrderDetail);\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\nFORM order 'Order'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\nFORM orders 'Orders'\n    OBJECTS i = Order\n    PROPERTIES(i) READONLY date, number\n    PROPERTIES(i) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(a.b)("p",null,"We need to send an HTTP request for creating a new order in the JSON format to a certain url."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM exportOrder\n    OBJECTS order = Order PANEL\n    PROPERTIES dt = date(order), nm = number(order)\n\n    OBJECTS detail = OrderDetail\n    PROPERTIES id = id(book(detail)), qn = quantity(detail), pr = price(detail)\n    FILTERS order(detail) == order\n;\n\nexportOrder 'Send' (Order o)  {\n    EXPORT exportOrder OBJECTS order = o JSON;\n\n    LOCAL result = FILE();\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.importOrder' PARAMS exportFile() TO result;\n}\n\nEXTEND FORM orders\n    PROPERTIES(i) exportOrder;\n;\n")),Object(a.b)("p",null,"To create a JSON with nested tags, we need to create a form with the corresponding objects linked via the ",Object(a.b)("strong",{parentName:"p"},"FILTERS")," block of operators. Based on the dependencies between objects, the system will generate a JSON file with the corresponding structure. In the considering example, the output JSON structure will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n   "dt":"20.08.18",\n   "nm":"1",\n   "detail":[\n      {\n         "pr":5.99,\n         "id":"b1",\n         "qn":3\n      },\n      {\n         "pr":6.99,\n         "id":"b2",\n         "qn":2\n      }\n   ]\n}\n')),Object(a.b)("p",null,'We do not create a custom tag for "order", since the object value is passed as an argument to the ',Object(a.b)("strong",{parentName:"p"},"EXPORT")," operator.",Object(a.b)("br",{parentName:"p"}),"\n","In this example, the response to the HTTP request is ignored."),Object(a.b)("h2",{id:"example-4"},"Example 4"),Object(a.b)("h3",{id:"task-3"},"Task"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 3"),".\xa0"),Object(a.b)("p",null,"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."),Object(a.b)("h3",{id:"solution-3"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"date = DATA LOCAL DATE();\nnumber = DATA LOCAL STRING[10]();\n\nid = DATA LOCAL STRING[10] (INTEGER);\nquantity = DATA LOCAL INTEGER (INTEGER);\nprice = DATA LOCAL NUMERIC[14,2] (INTEGER);\nFORM importOrder\n    PROPERTIES dt = date(), nm = number()\n\n    OBJECTS detail = INTEGER\n    PROPERTIES id = id(detail), qn = quantity(detail), pr = price(detail)\n;\n\nimportOrder (FILE f)  {\n    IMPORT importOrder JSON FROM f;\n\n    NEW o = Order {\n        date(o) <- date();\n        number(o) <- number();\n        FOR id(INTEGER detail) DO NEW d = OrderDetail {\n            order(d) <- o;\n            book(d) <- book(id(detail));\n            quantity(d) <- quantity(detail);\n            price(d) <- price(detail);\n        }\n\n        APPLY;\n    }\n}\n")),Object(a.b)("p",null,"To import the corresponding file in the JSON format, we need to create a form of a similar structure, except that the INTEGER type will be used as object classes. During the import process, the tag values will be placed in the properties with the corresponding names. The ",Object(a.b)("strong",{parentName:"p"},"date")," and ",Object(a.b)("strong",{parentName:"p"},"number")," properties have no parameters, since their values in JSON are provided at the topmost level."),Object(a.b)("h2",{id:"example-5"},"Example 5"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 4"),".\xa0"),Object(a.b)("p",null,"We need to send an HTTP request to create an order in the JSON format to a certain url as in the previous example, except that everything must be wrapped in the ",Object(a.b)("strong",{parentName:"p"},"order")," tag."),Object(a.b)("h3",{id:"solution-4"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"GROUP order;\nFORM exportOrderNew\n    OBJECTS o = Order\n    PROPERTIES IN order dt = date(o), nm = number(o)\n\n    OBJECTS detail = OrderDetail IN order\n    PROPERTIES id = id(book(detail)), qn = quantity(detail), pr = price(detail)\n    FILTERS order(detail) == o\n;\n\nexportOrderNew 'Send (new)' (Order o)  {\n    EXPORT exportOrderNew OBJECTS o = o JSON;\n\n    LOCAL result = FILE();\n    EXTERNAL HTTP 'http://localhost:7651/exec?action=Location.importOrderNew' PARAMS exportFile() TO result;\n}\n\nEXTEND FORM orders\n    PROPERTIES(i) exportOrderNew;\n;\n")),Object(a.b)("p",null,"Unlike the previous example, here we create a property ",Object(a.b)("a",{parentName:"p",href:"/platform/Groups_of_properties_and_actions"},"group")," named ",Object(a.b)("strong",{parentName:"p"},"order")," using the ",Object(a.b)("a",{parentName:"p",href:"/platform/GROUP_operator"},"GROUP"),' operator. When declaring a form, we put all the properties of the purchase order as well as the "detail" object into this property group. The result JSON will look like this:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n   "order":{\n      "dt":"20.08.18",\n      "nm":"1",\n      "detail":[\n         {\n            "pr":5.99,\n            "id":"b1",\n            "qn":3\n         },\n         {\n            "pr":6.99,\n            "id":"b2",\n            "qn":2\n         }\n      ]\n   }\n}\n')),Object(a.b)("h2",{id:"example-6"},"Example 6"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 5"),".\xa0"),Object(a.b)("p",null,"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."),Object(a.b)("h3",{id:"solution-5"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM importOrderNew\n    PROPERTIES IN order dt = date(), nm = number()\n\n    OBJECTS detail = INTEGER IN order\n    PROPERTIES id = id(detail), qn = quantity(detail), pr = price(detail)\n;\n\nimportOrderNew (FILE f)  {\n    IMPORT importOrderNew JSON FROM f;\n\n    NEW o = Order {\n        date(o) <- date();\n        number(o) <- number();\n        FOR id(INTEGER detail) DO NEW d = OrderDetail {\n            order(d) <- o;\n            book(d) <- book(id(detail));\n            quantity(d) <- quantity(detail);\n            price(d) <- price(detail);\n        }\n\n        APPLY;\n    }\n}\n")),Object(a.b)("p",null,"Just as in the export process, we put all the properties and the ",Object(a.b)("strong",{parentName:"p"},"detail"),' object to the "order" group to correctly receive the new version of JSON.'),Object(a.b)("h2",{id:"example-7"},"Example 7"),Object(a.b)("h3",{id:"task-4"},"Task"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 3"),".\xa0"),Object(a.b)("p",null,"We need to return a list of order numbers for a given date using an HTTP GET request in which this date is provided."),Object(a.b)("h3",{id:"solution-6"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM exportOrders\n    OBJECTS date = DATE PANEL\n\n    OBJECTS order = Order\n    PROPERTIES nm = number(order)\n    FILTERS date(order) = date\n;\n\ngetOrdersByDate (DATE d) {\n    EXPORT exportOrders OBJECTS date = d JSON;\n}\n")),Object(a.b)("p",null,"The url to which the HTTP request should be sent will look like this: \xa0 http://localhost:7651/exec?action=Location.getOrdersByDate&p=12.11.2018\xa0."),Object(a.b)("p",null,"The response JSON will look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'{\n    "order": [\n        {\n            "nm": "42"\n        },\n        {\n            "nm": "65"\n        }\n    ]\n}\n')))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,u=s["".concat(i,".").concat(b)]||s[b]||O[b]||a;return n?o.a.createElement(u,l(l({ref:t},d),{},{components:n})):o.a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);