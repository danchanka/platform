(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{349:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(746)),i={title:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f (JOIN)"},c={unversionedId:"Composition_JOIN_",id:"version-v4/Composition_JOIN_",isDocsHomePage:!1,title:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f (JOIN)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0434\u043d\u043e\u0433\u043e (\u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e)\xa0\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-v4/Composition_JOIN_.md",slug:"/Composition_JOIN_",permalink:"/platform/ru/Composition_JOIN_",editUrl:"https://github.com/danchanka/platform/edit/master/i18n/ru/docusaurus-plugin-content-docs/version-v4/Composition_JOIN_.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (DATA)",permalink:"/platform/ru/Data_properties_DATA_"},next:{title:"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430",permalink:"/platform/ru/Constant"}},u=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],p={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 ",Object(o.b)("em",{parentName:"p"},"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432")," \u043e\u0434\u043d\u043e\u0433\u043e (",Object(o.b)("em",{parentName:"p"},"\u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e"),")\xa0\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432."),Object(o.b)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),Object(o.b)("p",null,"\u0414\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",Object(o.b)("a",{parentName:"p",href:"/platform/ru/JOIN_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",Object(o.b)("strong",{parentName:"a"},"JOIN")),"."),Object(o.b)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"f = DATA INTEGER (INTEGER, INTEGER, INTEGER);\ng = DATA INTEGER (INTEGER, INTEGER);\nh = DATA INTEGER (INTEGER, INTEGER);\nc(a, b) = f(g(a, b), h(b, 3), a);\n\ncount = DATA BPSTRING[255] (INTEGER);\nname = DATA BPSTRING[255] (INTEGER);\nformatted(INTEGER a, INTEGER b) = [FORMULA BPSTRING[255] ' CAST($1 AS TEXT) || \\' / \\' || CAST($2 AS TEXT)'](count(a), name(b));\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Triangle;\ncathetus1 = DATA DOUBLE(Triangle);\ncathetus2 = DATA DOUBLE(Triangle);\n\nhypotenuseSq(triangle) = cathetus1(triangle)*cathetus1(triangle) + cathetus2(triangle)*cathetus2(triangle);\n\nhypotenuseSq2(triangle) = [ x*x + y*y](cathetus1(triangle), cathetus2(triangle)); // \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438\n")))}l.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,f=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);