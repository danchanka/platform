(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{571:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(747)),c={title:"How-to: PARTITION"},l={unversionedId:"How-to_PARTITION",id:"How-to_PARTITION",isDocsHomePage:!1,title:"How-to: PARTITION",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_PARTITION.md",slug:"/How-to_PARTITION",permalink:"/platform/ru/next/How-to_PARTITION",editUrl:"https://github.com/danchanka/platform/edit/master/docs/ru/How-to_PARTITION.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"05.04.2021",sidebar:"learn",previous:{title:"How-to: GROUP CONCAT",permalink:"/platform/ru/next/How-to_GROUP_CONCAT"},next:{title:"How-to: GUI",permalink:"/platform/ru/next/How-to_GUI"}},u=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 3",id:"\u043f\u0440\u0438\u043c\u0435\u0440-3",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2",children:[]}]}],i={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order '\u0417\u0430\u043a\u0430\u0437';\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\n\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\n")),Object(o.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u043d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043e\u0442 1 \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u0435 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438\u0445 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"index '\u041d\u043e\u043c\u0435\u0440 \u0441\u0442\u0440\u043e\u043a\u0438' (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n")),Object(o.b)("p",null,"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u043f\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u043c\u0443 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443 \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043e\u043d \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u0441\u0442\u0440\u043e\u043a."),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0415\u0441\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0434\u0430\u0442\u043e\u0439."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"date '\u0414\u0430\u0442\u0430' = DATA DATE (Order);\n\nCLASS Customer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c';\ncustomer '\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c' = DATA Customer (Order);\n")),Object(o.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u0430 \u043d\u0430\u0439\u0442\u0438 \u0434\u0430\u0442\u0443 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430 \u044d\u0442\u043e\u0433\u043e \u0436\u0435 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"prevOrderDate '\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0437\u0430\u043a\u0430\u0437' (Order o) = PARTITION PREV date(o) ORDER date(o), o BY customer(o);\n")),Object(o.b)("p",null,"\u041a\u0430\u043a \u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/platform/ru/next/How-to_GROUP_CONCAT"},"How-to: GROUP CONCAT")),", \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 ",Object(o.b)("strong",{parentName:"p"},"ORDER")," \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0430\u043c \u0437\u0430\u043a\u0430\u0437 (\u0434\u0435-\u0444\u0430\u043a\u0442\u043e, \u0435\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440)."),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-3"},"\u041f\u0440\u0438\u043c\u0435\u0440 3"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0415\u0441\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u043a\u043d\u0438\u0433 \u043f\u043e \u043f\u0430\u0440\u0442\u0438\u044f\u043c \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\n\nCLASS Batch '\u041f\u0430\u0440\u0442\u0438\u044f';\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (Batch);\ndate '\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0430' = DATA DATE (Batch);\n\nCLASS Stock '\u0421\u043a\u043b\u0430\u0434';\ncurrentBalance '\u041e\u0441\u0442\u0430\u0442\u043e\u043a' = DATA INTEGER (Batch, Stock); // \u041e\u0441\u0442\u0430\u0442\u043e\u043a \u0441\u0434\u0435\u043b\u0430\u043d \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430. \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u043c\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e.\n")),Object(o.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043e\u0434\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0438 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u0442\u044c \u044d\u0442\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e \u043f\u0430\u0440\u0442\u0438\u044f\u043c \u043f\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0443 FIFO."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-2"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA LOCAL INTEGER (Book);\n\nquantityFIFO '\u041a\u043e\u043b-\u0432\u043e \u043f\u043e \u043f\u0430\u0440\u0442\u0438\u0438 FIFO' (Batch b, Stock s) = PARTITION UNGROUP quantity\n                                                                    LIMIT STRICT currentBalance(b, s)\n                                                                    ORDER date(b), b\n                                                                    BY book(b);\n")),Object(o.b)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",Object(o.b)("strong",{parentName:"p"},"STRICT")," \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0443\u0434\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u043f\u043e \u0432\u0441\u0435\u043c \u043f\u0430\u0440\u0442\u0438\u044f\u043c, \u0442\u043e \u0432\u0441\u044f \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043f\u0430\u0440\u0442\u0438\u0438.  "))}b.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,s=p["".concat(c,".").concat(d)]||p[d]||O[d]||o;return r?a.a.createElement(s,l(l({ref:t},i),{},{components:r})):a.a.createElement(s,l({ref:t},i))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);