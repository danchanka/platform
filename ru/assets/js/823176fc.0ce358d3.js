(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{412:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),a=(t(0),t(746)),c={title:"How-to: \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438"},i={unversionedId:"How-to_Documents_with_lines",id:"How-to_Documents_with_lines",isDocsHomePage:!1,title:"How-to: \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_Documents_with_lines.md",slug:"/How-to_Documents_with_lines",permalink:"/platform/ru/next/How-to_Documents_with_lines",editUrl:"https://github.com/danchanka/platform/edit/master/docs/ru/How-to_Documents_with_lines.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"05.04.2021",sidebar:"learn",previous:{title:"How-to: CRUD",permalink:"/platform/ru/next/How-to_CRUD"},next:{title:"How-to: \u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",permalink:"/platform/ru/next/How-to_Filtering_and_ordering"}},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]}],u={toc:l};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u044b \u0438 \u0438\u0445 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[100] (Book) IN id;\n\nCLASS Order '\u0417\u0430\u043a\u0430\u0437';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\nnumber '\u041d\u043e\u043c\u0435\u0440' = DATA STRING[10] (Order);\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail) NONULL;\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n\nquantity '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e' = DATA INTEGER (OrderDetail);\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n")),Object(a.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0445 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM order '\u0417\u0430\u043a\u0430\u0437'\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) date, number\n\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) nameBook, quantity, price, NEW, DELETE\n    FILTERS order(d) == o\n\n    EDIT Order OBJECT o\n;\n\n\nFORM orders '\u0417\u0430\u043a\u0430\u0437\u044b'\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    PROPERTIES(o) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(a.b)("p",null,"\u041d\u0430 \u0444\u043e\u0440\u043c\u0435 ",Object(a.b)("em",{parentName:"p"},"order")," \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 ",Object(a.b)("em",{parentName:"p"},"NEW"),", \u0441\u0441\u044b\u043b\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 ",Object(a.b)("em",{parentName:"p"},"FILTERS"),"."),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u041f\u0440\u0438\u043c\u0435\u0440\u0443 1."),Object(a.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0444\u043e\u0440\u043c\u0443 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0438\u0445 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"EXTEND FORM orders\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) READONLY nameBook, quantity, price\n    FILTERS order(d) == o\n;\n")),Object(a.b)("p",null,"\u042d\u0442\u043e \u0431\u044b\u0432\u0430\u0435\u0442 \u0443\u0434\u043e\u0431\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0433 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430, \u043d\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u044f \u0435\u0433\u043e."))}d.isMDXComponent=!0},746:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=r,s=p["".concat(c,".").concat(b)]||p[b]||O[b]||a;return t?o.a.createElement(s,i(i({ref:n},u),{},{components:t})):o.a.createElement(s,i({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);