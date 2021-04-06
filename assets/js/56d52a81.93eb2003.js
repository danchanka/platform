(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{312:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(746)),i={title:"Indexes"},p={unversionedId:"Indexes",id:"Indexes",isDocsHomePage:!1,title:"Indexes",description:"Building an index by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example,\xa0you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system.",source:"@site/docs/Indexes.md",slug:"/Indexes",permalink:"/platform/next/Indexes",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Indexes.md",version:"current",sidebar:"learn",previous:{title:"Materializations",permalink:"/platform/next/Materializations"},next:{title:"Tables",permalink:"/platform/next/Tables"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Building an ",Object(o.b)("em",{parentName:"p"},"index")," by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example,\xa0you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system."),Object(o.b)("p",null,"Only ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Materializations"},"materialized")," properties can be indexed."),Object(o.b)("p",null,"An index can also be built on several properties at once (this is effective if, for example, you need to filter by several properties simultaneously). In addition, property parameters can be included in a composite index of this kind. The built index will be named as following:\xa0",Object(o.b)("strong",{parentName:"p"},"<table ID",">","_","<property/parameter name 1",">","_","...","_","<property/parameter name N",">"),". If the specified properties are stored in different ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Tables"},"tables"),", then the corresponding error will be thrown when you try to build the index."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To create indexes, you must use the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/INDEX_instruction"},Object(o.b)("strong",{parentName:"a"},"INDEX")," instruction"),"\xa0or the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Property_options#indexed-broken"},Object(o.b)("strong",{parentName:"a"},"INDEXED")," option")," in property options."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"INDEX customer(Order o);\n\ndate = DATA DATE (Order);\nINDEX date(Order o), o;\n\nINDEX name(Sku s), price(s, DATE d), d;\n")))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(f,p(p({ref:t},c),{},{components:n})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);