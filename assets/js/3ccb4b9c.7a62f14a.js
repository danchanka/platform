(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(746)),c={title:"How-to: SEEK"},i={unversionedId:"How-to_SEEK",id:"How-to_SEEK",isDocsHomePage:!1,title:"How-to: SEEK",description:"Example 1",source:"@site/docs/How-to_SEEK.md",slug:"/How-to_SEEK",permalink:"/platform/next/How-to_SEEK",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_SEEK.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: NEWSESSION",permalink:"/platform/next/How-to_NEWSESSION"},next:{title:"How-to: Events",permalink:"/platform/next/How-to_Events"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 2",id:"example-2-1",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a defined logic for books and categories. A form has been created with a list of books categorized."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Time;\n\nCLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category) IN id;\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n\ncategory 'Category' = DATA Category (Book) NONULL;\nnameCategory 'Category' (Book b) = name(category(b));\n\nFORM book 'Book'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name, nameCategory\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS c = Category\n    PROPERTIES(c) READONLY name\n    PROPERTIES(c) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    FILTERS category(b) == c\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(a.b)("p",null,"We need to create an action that creates a new book, automatically assigns it to the current category and then makes this book active once the user saves and closes the form."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"createBook 'Create book' (Category c)  {\n    NEWSESSION {\n        NEW newBook = Book {\n            category(newBook) <- c;\n            DIALOG book OBJECTS b = newBook INPUT DO {\n                SEEK books.b = newBook;\n            }\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES(c) createBook DRAW b TOOLBAR\n;\n")),Object(a.b)("p",null,"After closing the form, we need to call the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/SEEK_operator"},"SEEK")," operator which will make the added object active."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),". We have also added the customer logic. The user can set a price for each customer and book in the dedicated form."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[50] (Customer) IN id;\n\nprice 'Price' = DATA NUMERIC[14,2] (Customer, Book);\n\nFORM prices 'Prices'\n    OBJECTS c = Customer PANEL\n    PROPERTIES(c) name SELECTOR\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, price(c, b)\n;\n\nNAVIGATOR {\n    NEW prices;\n}\n")),Object(a.b)("p",null,"We need to add a default customer whose data will be populated when the user opens the form."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"defaultCustomer 'Default customer' = DATA Customer ();\nnameDefaultCustomer 'Default customer' () = name(defaultCustomer());\n\nEXTEND FORM options PROPERTIES() nameDefaultCustomer;\nDESIGN options { commons { MOVE PROPERTY(nameDefaultCustomer()); } }\n\nEXTEND FORM prices\n    EVENTS ON INIT { SEEK prices.c = defaultCustomer(); }\n;\n")),Object(a.b)("p",null,"The property with the default customer is added to the Settings form on the General tab. The current object will change once the user opens the form, since the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Event_block"},"ON INIT")," event will be triggered."),Object(a.b)("h2",{id:"example-2-1"},"Example 2"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Let's assume that we have a report form for which a date range is specified."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM report 'Report'\n    OBJECTS dFrom = DATE PANEL, dTo = DATE PANEL\n    PROPERTIES VALUE(dFrom), VALUE(dTo)\n;\n\nNAVIGATOR {\n    NEW report;\n}\n")),Object(a.b)("p",null,"We need to create buttons that will modify the interval to the last week, current month or last month."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setReportLastWeek 'Last week' ()  {\n    SEEK report.dFrom = subtract(currentDate(), 7);\n    SEEK report.dTo = subtract(currentDate(), 1);\n}\nsetReportCurrentMonth 'Current month' ()  {\n    SEEK report.dFrom = firstDayOfMonth(currentDate());\n    SEEK report.dTo = lastDayOfMonth(currentDate());\n}\nsetReportLastMonth 'Last month' ()  {\n    SEEK report.dFrom = firstDayOfMonth(subtract(firstDayOfMonth(currentDate()), 1));\n    SEEK report.dTo = subtract(firstDayOfMonth(currentDate()), 1);\n}\n\nEXTEND FORM report\n    PROPERTIES() setReportLastWeek, setReportCurrentMonth, setReportLastMonth\n;\n")),Object(a.b)("p",null,"Date properties can be found in the ",Object(a.b)("strong",{parentName:"p"},"Time")," ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Modules"},"system module")," which is loaded at the very beginning using the ",Object(a.b)("strong",{parentName:"p"},"REQUIRE")," instruction."))}u.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);