(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{685:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(746)),c={title:"How-to: SEEK"},l={unversionedId:"How-to_SEEK",id:"How-to_SEEK",isDocsHomePage:!1,title:"How-to: SEEK",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_SEEK.md",slug:"/How-to_SEEK",permalink:"/platform/ru/next/How-to_SEEK",editUrl:"https://github.com/danchanka/platform/edit/master/docs/ru/How-to_SEEK.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"05.04.2021",sidebar:"learn",previous:{title:"How-to: NEWSESSION",permalink:"/platform/ru/next/How-to_NEWSESSION"},next:{title:"How-to: \u0421\u043e\u0431\u044b\u0442\u0438\u044f",permalink:"/platform/ru/next/How-to_Events"}},u=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:[]}]}],p={toc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u043a\u043d\u0438\u0433 \u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439. \u0421\u043e\u0437\u0434\u0430\u043d\u0430 \u0444\u043e\u0440\u043c\u0430 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u043a\u043d\u0438\u0433, \u0440\u0430\u0437\u0431\u0438\u0442\u044b\u0445 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE Time;\n\nCLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Category) IN id;\n\nCLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Book) IN id;\n\ncategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' = DATA Category (Book) NONULL;\nnameCategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' (Book b) = name(category(b));\n\nFORM book '\u041a\u043d\u0438\u0433\u0430'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name, nameCategory\n\n    EDIT Book OBJECT b\n;\n\nFORM books '\u041a\u043d\u0438\u0433\u0438'\n    OBJECTS c = Category\n    PROPERTIES(c) READONLY name\n    PROPERTIES(c) NEWSESSION NEW, EDIT, DELETE\n\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    FILTERS category(b) == c\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u0443\u044e \u043a\u043d\u0438\u0433\u0443, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0438 \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0435\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442 \u0438 \u0437\u0430\u043a\u0440\u043e\u0435\u0442 \u0444\u043e\u0440\u043c\u0443."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"createBook '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443' (Category c)  {\n    NEWSESSION {\n        NEW newBook = Book {\n            category(newBook) <- c;\n            DIALOG book OBJECTS b = newBook INPUT DO {\n                SEEK books.b = newBook;\n            }\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES(c) createBook DRAW b TOOLBAR\n;\n")),Object(a.b)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",Object(a.b)("a",{parentName:"p",href:"/platform/ru/next/SEEK_operator"},"SEEK"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u0435\u043b\u0430\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c."),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",Object(a.b)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"),". \u0422\u0430\u043a\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439. \u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f \u0438 \u043a\u043d\u0438\u0433\u0438 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0446\u0435\u043d\u0443 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Customer) IN id;\n\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (Customer, Book);\n\nFORM prices '\u0426\u0435\u043d\u044b'\n    OBJECTS c = Customer PANEL\n    PROPERTIES(c) name SELECTOR\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, price(c, b)\n;\n\nNAVIGATOR {\n    NEW prices;\n}\n")),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0444\u043e\u0440\u043c\u044b."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"defaultCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e' = DATA Customer ();\nnameDefaultCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e' () = name(defaultCustomer());\n\nEXTEND FORM options PROPERTIES() nameDefaultCustomer;\nDESIGN options { commons { MOVE PROPERTY(nameDefaultCustomer()); } }\n\nEXTEND FORM prices\n    EVENTS ON INIT { SEEK prices.c = defaultCustomer(); }\n;\n")),Object(a.b)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0444\u043e\u0440\u043c\u0443 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043e \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u041e\u0431\u0449\u0438\u0435. \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 ",Object(a.b)("a",{parentName:"p",href:"/platform/ru/next/Event_block"},"ON INIT"),"."),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0447\u0442\u043e \u0435\u0441\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043e\u0442\u0447\u0435\u0442\u043e\u0432, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0437\u0430\u0434\u0430\u043d \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0434\u0430\u0442."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM report '\u041e\u0442\u0447\u0435\u0442'\n    OBJECTS dFrom = DATE PANEL, dTo = DATE PANEL\n    PROPERTIES VALUE(dFrom), VALUE(dTo)\n;\n\nNAVIGATOR {\n    NEW report;\n}\n")),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e, \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043c\u0435\u0441\u044f\u0446."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setReportLastWeek '\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u043d\u0435\u0434\u0435\u043b\u044f' ()  {\n    SEEK report.dFrom = subtract(currentDate(), 7);\n    SEEK report.dTo = subtract(currentDate(), 1);\n}\nsetReportCurrentMonth '\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043c\u0435\u0441\u044f\u0446' ()  {\n    SEEK report.dFrom = firstDayOfMonth(currentDate());\n    SEEK report.dTo = lastDayOfMonth(currentDate());\n}\nsetReportLastMonth '\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043c\u0435\u0441\u044f\u0446' ()  {\n    SEEK report.dFrom = firstDayOfMonth(subtract(firstDayOfMonth(currentDate()), 1));\n    SEEK report.dTo = subtract(firstDayOfMonth(currentDate()), 1);\n}\n\nEXTEND FORM report\n    PROPERTIES() setReportLastWeek, setReportCurrentMonth, setReportLastMonth\n;\n")),Object(a.b)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0434\u0430\u0442\u0430\u043c\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 ",Object(a.b)("a",{parentName:"p",href:"/platform/ru/next/Modules"},"\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435")," ",Object(a.b)("strong",{parentName:"p"},"Time"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u0430\u043c\u043e\u043c \u043d\u0430\u0447\u0430\u043b\u0435 \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e ",Object(a.b)("strong",{parentName:"p"},"REQUIRE"),"."))}b.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},E={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),i=b(n),s=r,O=i["".concat(c,".").concat(s)]||i[s]||E[s]||a;return n?o.a.createElement(O,l(l({ref:t},p),{},{components:n})):o.a.createElement(O,l({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);