(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{710:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),a=(n(0),n(746)),c={title:"How-to: NEW"},i={unversionedId:"How-to_NEW",id:"version-v4/How-to_NEW",isDocsHomePage:!1,title:"How-to: NEW",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_NEW.md",slug:"/How-to_NEW",permalink:"/platform/ru/How-to_NEW",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/ru/How-to_NEW.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"06.04.2021",sidebar:"version-v4/learn",previous:{title:"How-to: EXEC",permalink:"/platform/ru/How-to_EXEC"},next:{title:"How-to: DELETE",permalink:"/platform/ru/How-to_DELETE"}},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]}],u={toc:l};function d(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437, \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0434\u0430\u0442\u043e\u0439 \u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u043c."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order '\u0417\u0430\u043a\u0430\u0437';\n\nCLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\nname = DATA ISTRING[50] (Customer);\n\ndate '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\n\ncustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = DATA Customer (Order);\nnameCustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' (Order o) = name(customer(o));\n")),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"copyOrder '\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c' (Order o)  {\n    NEW n = Order {\n        date(n) <- date(o);\n        customer(n) <- customer(o);\n    }\n}\n")),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\xa0",Object(a.b)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"),", \u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u0430 \u0437\u0430\u0434\u0430\u043d\u044b \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Book);\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail);\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[14,2] (OrderDetail);\n")),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e, \u0441 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"copyDetail (Order o)  {\n    NEW n = Order {\n        date(n) <- date(o);\n        customer(n) <- customer(o);\n        FOR order(OrderDetail od) == o NEW nd = OrderDetail DO {\n            order(nd) <- n;\n            book(nd) <- book(od);\n            price(nd) <- price(od);\n        }\n    }\n}\n")))}d.isMDXComponent=!0},746:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=d(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=t,m=p["".concat(c,".").concat(b)]||p[b]||s[b]||a;return n?o.a.createElement(m,i(i({ref:r},u),{},{components:n})):o.a.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);