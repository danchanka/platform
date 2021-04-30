(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{462:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(745)),c={title:"How-to: GROUP CONCAT"},i={unversionedId:"How-to_GROUP_CONCAT",id:"version-v4/How-to_GROUP_CONCAT",isDocsHomePage:!1,title:"How-to: GROUP CONCAT",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/How-to_GROUP_CONCAT.md",slug:"/How-to_GROUP_CONCAT",permalink:"/platform/ru/How-to_GROUP_CONCAT",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/ru/How-to_GROUP_CONCAT.md",version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"29.04.2021",sidebar:"version-v4/learn",previous:{title:"How-to: GROUP LAST",permalink:"/platform/ru/How-to_GROUP_LAST"},next:{title:"How-to: PARTITION",permalink:"/platform/ru/How-to_PARTITION"}},l=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0435\u0433\u0430\u043c \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430\u043c\u0438."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nCLASS Tag '\u0422\u044d\u0433';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[10] (Tag);\n\nin '\u0412\u043a\u043b' = DATA BOOLEAN (Tag, Book);\n")),Object(a.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u044d\u0433\u043e\u0432 \u043a\u043d\u0438\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u0432 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"tags '\u0422\u044d\u0433\u0438' (Book b) = GROUP CONCAT name(Tag t) IF in(t, b), ',' ORDER name(t), t CHARWIDTH 10;\n")),Object(a.b)("p",null,"\u0416\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0442\u0440\u043e\u044f\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",Object(a.b)("inlineCode",{parentName:"p"},"GROUP CONCAT"),', \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430 \u0438\u0445 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e "\u043f\u0435\u0441\u0441\u0438\u043c\u0438\u0441\u0442\u0438\u0447\u043d\u043e\u043c\u0443" \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044e \u0438 \u0432\u044b\u0434\u0430\u0435\u0442 \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u0442\u0430\u043a\u0438\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c.'),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c \u0438 \u0430\u0432\u0442\u043e\u0440\u0430\u043c."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\n\nCLASS Author '\u0410\u0432\u0442\u043e\u0440';\nname '\u0410\u0432\u0442\u043e\u0440' = DATA ISTRING[20] (Author);\n\ncategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' = DATA Category (Book);\nauthor '\u0410\u0432\u0442\u043e\u0440' = DATA Author (Book);\n")),Object(a.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u0430\u0432\u0442\u043e\u0440\u043e\u0432 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043a\u043d\u0438\u0433."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"countBooks '\u041a\u043e\u043b-\u0432\u043e \u043a\u043d\u0438\u0433' (Author a, Category c) = GROUP SUM 1 BY author(Book b), category(b);\n\nauthors '\u0410\u0432\u0442\u043e\u0440\u044b' (Category c) = GROUP CONCAT name(Author a) IF countBooks(a, c) ORDER DESC countBooks(a, c), a;\n")))}p.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},O=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),O=p(n),s=r,d=O["".concat(c,".").concat(s)]||O[s]||b[s]||a;return n?o.a.createElement(d,i(i({ref:t},u),{},{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);