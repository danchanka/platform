(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(747)),c={title:"How-to: \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446"},l={unversionedId:"How-to_Table_status",id:"version-v4/How-to_Table_status",isDocsHomePage:!1,title:"How-to: \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_Table_status.md",slug:"/How-to_Table_status",permalink:"/platform/ru/How-to_Table_status",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/ru/How-to_Table_status.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"16.04.2021",sidebar:"version-v4/learn",previous:{title:"How-to: \u041c\u0430\u0442\u0440\u0438\u0446\u0430",permalink:"/platform/ru/How-to_Matrix"},next:{title:"How-to: \u041e\u0442\u0447\u0435\u0442\u044b",permalink:"/platform/ru/How-to_Reports"}},i=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]}],u={toc:i};function b(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0417\u0430\u0434\u0430\u043d\u044b \u043f\u043e\u043d\u044f\u0442\u0438\u044f \u043a\u043d\u0438\u0433, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435, \u0436\u0430\u043d\u0440 \u0438 \u0446\u0435\u043d\u0430."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Book) IN id;\ngenre '\u0416\u0430\u043d\u0440' = DATA ISTRING[30] (Book) IN id;\n\nprice '\u0426\u0435\u043d\u0430' = DATA NUMERIC[12,2] (Book) IN id;\n\nFORM books '\u041a\u043d\u0438\u0433\u0438'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name, genre, price\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043d\u0438\u0433 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u043e\u0442\u0431\u043e\u0440\u043e\u0432, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"filtered '\u041a\u043d\u0438\u0433\u0430 \u043e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u043d\u0430' (Book b) = FILTER books.b;\nfilteredCount '\u041a\u043e\u043b-\u0432\u043e \u043a\u043d\u0438\u0433' = GROUP SUM 1 IF filtered(Book b);\n\nEXTEND FORM books\n    PROPERTIES() READONLY filteredCount DRAW b TOOLBAR\n;\n")),Object(a.b)("p",null,"\u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",Object(a.b)("a",{parentName:"p",href:"/platform/ru/Filter_FILTER_"},"FILTER"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",Object(a.b)("strong",{parentName:"p"},"TRUE"),", \u0435\u0441\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043e\u0442\u0431\u043e\u0440\u0435 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435."),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",Object(a.b)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"),"."),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u043a\u043d\u0438\u0433\u0430\u043c\u0438 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043a\u043d\u0438\u0433\u0438 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043e\u0442\u0431\u043e\u0440\u0435 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0435, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"index '\u041f\u043e\u0440\u044f\u0434\u043e\u043a' (Book b) = PARTITION SUM 1 IF filtered(b) ORDER [ ORDER books.b](b);\n\nEXTEND FORM books\n    PROPERTIES(b) index\n;\n")),Object(a.b)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u043e\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",Object(a.b)("a",{parentName:"p",href:"/platform/ru/Order_ORDER_"},"ORDER"),", \u043d\u0435 \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0438."),Object(a.b)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0430\u044f \u0432 \u043e\u0431\u043e\u0438\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u0445 \u0444\u043e\u0440\u043c\u0430 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u043e\u0442\u0431\u043e\u0440\u043e\u043c \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c :"),Object(a.b)("p",null,Object(a.b)("img",{src:n(843).default})))}b.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,O=p["".concat(c,".").concat(d)]||p[d]||s[d]||a;return n?o.a.createElement(O,l(l({ref:t},u),{},{components:n})):o.a.createElement(O,l({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},843:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367772-20ca778d576353ee95d7171002b5fda7.png"}}]);