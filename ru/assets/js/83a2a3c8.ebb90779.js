(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{418:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(746)),c={title:"How-to: EXEC"},l={unversionedId:"How-to_EXEC",id:"How-to_EXEC",isDocsHomePage:!1,title:"How-to: EXEC",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_EXEC.md",slug:"/How-to_EXEC",permalink:"/platform/ru/next/How-to_EXEC",editUrl:"https://github.com/danchanka/platform/edit/master/docs/ru/How-to_EXEC.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"05.04.2021",sidebar:"learn",previous:{title:"How-to: CHANGE",permalink:"/platform/ru/next/How-to_CHANGE"},next:{title:"How-to: NEW",permalink:"/platform/ru/next/How-to_NEW"}},i=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]}],p={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0415\u0441\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043a\u043d\u0438\u0433, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u0434\u0430\u043d\u044b \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435, \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u043a\u043e\u0434 \u0438 \u0434\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0440\u043e\u0434\u0430\u0436."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\n\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Category);\nid '\u041a\u043e\u0434' = DATA INTEGER (Category);\nsaleDate '\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0440\u043e\u0434\u0430\u0436' = DATA DATE (Category);\n")),Object(o.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 3 \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"createCategory '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e' (ISTRING[50] name, INTEGER id, DATE saleDate)  {\n    NEW c = Category {\n        name(c) <- name;\n        id(c) <- id;\n        saleDate(c) <- saleDate;\n    }\n}\n\ncreate3Categories '\u0421\u043e\u0437\u0434\u0430\u0442\u044c 3 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438' ()  {\n    createCategory('\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 1', 1, 2010_02_14);\n    createCategory('\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2', 2, 2011_03_08);\n    createCategory('\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 3', 3, 2014_07_01);\n}\n")),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(o.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(o.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",Object(o.b)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"),', \u043d\u043e \u0443 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0437\u0430\u0434\u0430\u043d \u0435\u0435 "\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c".'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"parent '\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c' = DATA Category (Category); // \u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 NULL, \u0442\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043d\u0435\u0442\u0443\n")),Object(o.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0433\u043b\u0443\u0431\u0438\u043d\u0443 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u043d\u0438\u0445."),Object(o.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"depth = DATA INTEGER (Category);\nfillDepth (Category c, INTEGER depth)  {\n    FOR parent(Category i) == c DO {\n        depth(i) <- depth;\n        fillDepth(i, depth + 1);\n    }\n}\n\nrun()  {\n    fillDepth(NULL, 0);\n}\n")))}u.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,f=d["".concat(c,".").concat(s)]||d[s]||b[s]||o;return n?a.a.createElement(f,l(l({ref:t},p),{},{components:n})):a.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);