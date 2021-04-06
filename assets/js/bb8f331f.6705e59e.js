(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{572:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(746)),i={title:"Call (EXEC)"},c={unversionedId:"Call_EXEC_",id:"version-v4/Call_EXEC_",isDocsHomePage:!1,title:"Call (EXEC)",description:"The EXEC operator creates an action that executes another action, passing it specified properties (arguments).",source:"@site/versioned_docs/version-v4/Call_EXEC_.md",slug:"/Call_EXEC_",permalink:"/platform/Call_EXEC_",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Call_EXEC_.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Sequence ({...})",permalink:"/platform/Sequence_..._"},next:{title:"Loop (FOR)",permalink:"/platform/Loop_FOR_"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXEC")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that executes another action, passing it specified properties (",Object(o.b)("em",{parentName:"p"},"arguments"),")."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/EXEC_operator"},"Syntax of the ",Object(o.b)("strong",{parentName:"a"},"EXEC")," operator"),Object(o.b)("strong",{parentName:"p"},".")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"importData(Sku sku, Order order)  {\n    MESSAGE 'Run import for ' + id(sku) + ' ' + customer(order);\n}                                    // declared above action importData with two parameters\n\norder = DATA Order (OrderDetail) NONULL DELETE;\nrunImport(OrderDetail d)  { importData(sku(d), order(d)); } // declaration of the action runImport that will call importData\n")))}u.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);