(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{276:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return i}));var r=t(3),a=t(7),o=(t(0),t(749)),c={title:"How-to: WHILE"},l={unversionedId:"How-to_WHILE",id:"How-to_WHILE",isDocsHomePage:!1,title:"How-to: WHILE",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_WHILE.md",slug:"/How-to_WHILE",permalink:"/platform/ru/next/How-to_WHILE",editUrl:"https://github.com/danchanka/platform/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/How-to_WHILE.md",version:"current",sidebar:"learn",previous:{title:"How-to: IF/CASE",permalink:"/platform/ru/next/How-to_IF_CASE"},next:{title:"How-to: NEWSESSION",permalink:"/platform/ru/next/How-to_NEWSESSION"}},d=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:[]}]}],u={toc:d};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0430 \u0434\u0430\u0442\u0430."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order '\u0417\u0430\u043a\u0430\u0437';\n\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\n")),Object(o.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0434\u0430\u0442\u044b \u0438\u0437 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0432\u044b\u0434\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0437\u0430 \u044d\u0442\u0443 \u0434\u0430\u0442\u0443."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"countOrders (DATE date) = GROUP SUM 1 BY date(Order o);\n\nmessageCountOrders '\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432' (DATE dFrom, DATE dTo)  {\n    // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1\n    LOCAL date = DATE ();\n    date() <- dFrom;\n\n    WHILE date() <= dTo DO {\n        MESSAGE '\u041a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0437\u0430 ' + date() + ' : ' + OVERRIDE countOrders(date()), 0.0;\n        date() <- sum(date(), 1);\n    }\n\n    // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2\n    FOR iterate(DATE date, dFrom, dTo) DO\n        MESSAGE '\u041a\u043e\u043b-\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0437\u0430 ' + date + ' : ' + OVERRIDE countOrders(date()), 0.0;\n}\n")),Object(o.b)("p",null,"\u041e\u0431\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u044b \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."),Object(o.b)("p",null,"\u0414\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a \u0434\u0430\u0442\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0434\u043d\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(o.b)("strong",{parentName:"p"},"sum"),", \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u043c\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/ru/next/Modules"},"\u043c\u043e\u0434\u0443\u043b\u0435"),"\xa0",Object(o.b)("strong",{parentName:"p"},"Time"),"."),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\xa0",Object(o.b)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"),". \u0422\u0430\u043a\u0436\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u0441\u0443\u043c\u043c\u0430 (\u043f\u043e\u043b\u043d\u0430\u044f) \u0438 \u0441\u0443\u043c\u043c\u0430 \u0441\u043a\u0438\u0434\u043a\u0438."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n\nsum '\u0421\u0443\u043c\u043c\u0430' = DATA NUMERIC[14,2] (OrderDetail);\ndiscountSum '\u0421\u0443\u043c\u043c\u0430 \u0441\u043a\u0438\u0434\u043a\u0438' = DATA NUMERIC[14,2] (OrderDetail);\n")),Object(o.b)("p",null,'\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 "\u0440\u0430\u0441\u043f\u0438\u0448\u0435\u0442" \u0437\u0430\u0434\u0430\u043d\u043d\u0443\u044e \u0441\u0443\u043c\u043c\u0443 \u0441\u043a\u0438\u0434\u043a\u0438 \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0439 \u0441\u0443\u043c\u043c\u043e\u0439.'),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"distributeDiscount '\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443' (Order o, NUMERIC[14,2] discount)  {\n    LOCAL discount = NUMERIC[14,2] ();\n    discount() <- discount;\n\n    LOCAL leftSum = NUMERIC[14,2] (OrderDetail);\n    leftSum(OrderDetail d) <- sum(d) WHERE order(d) == o;\n\n    WHILE discount() > 0 DO {\n        FOR OrderDetail d == [ GROUP LAST OrderDetail od ORDER leftSum(od), od BY order(od)](o) DO { // \u043d\u0430\u0445\u043e\u0434\u0438\u043c \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0439 \"\u043e\u0441\u0442\u0430\u0432\u0448\u0435\u0439\u0441\u044f\" \u0441\u0443\u043c\u043c\u043e\u0439\n            discountSum(d) <- MIN leftSum(d), discount();\n            discount() <- discount() (-) discountSum(d);\n        }\n        IF (GROUP SUM 1 IF leftSum(OrderDetail d) > 0) THEN\n            BREAK; // \u043d\u0435 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u0433\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\n    }\n}\n")),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3"},"\u041f\u0440\u0438\u043c\u0435\u0440 3"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0417\u0430\u0434\u0430\u043d\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\n\nCLASS Ledger '\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u0442\u043a\u0430';\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Ledger);\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (Ledger);\nquantity '\u041a\u043e\u043b-\u0432\u043e' = DATA NUMERIC[14,2] (Ledger);\n")),Object(o.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a (\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b) \u0437\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432\u0440\u0435\u043c\u0435\u043d\u0438."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"calculateIntegral (DATE dFrom, DATE dTo)  {\n    LOCAL date = DATE();\n    date() <- dFrom;\n\n    LOCAL balance = NUMERIC[14,2] (Book);\n    balance(Book b) <- [ GROUP SUM quantity(Ledger l) IF date(l) < dFrom BY book(l)](b);\n\n    LOCAL cumBalance = NUMERIC[14,2] (Book);\n\n    WHILE date() <= dTo DO {\n        cumBalance(Book b) <- cumBalance(b) (+) balance(b); //\n        balance(Book b) <- balance(b) (+) [ GROUP SUM quantity(Ledger l) BY book(l), date(l)](b, date());\n        date() <- sum(date(), 1);\n    }\n\n    FOR cumBalance(Book b) DO {\n        MESSAGE '\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0439 \u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u043a\u043d\u0438\u0433\u0435 ' + b + ' : ' + cumBalance(b);\n    }\n}\n")))}i.isMDXComponent=!0},749:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),i=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=i(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),b=i(t),p=r,s=b["".concat(c,".").concat(p)]||b[p]||O[p]||o;return t?a.a.createElement(s,l(l({ref:n},u),{},{components:t})):a.a.createElement(s,l({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);