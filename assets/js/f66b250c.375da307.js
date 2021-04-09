(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{721:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(746)),c={title:"Sequence ({...})"},u={unversionedId:"Sequence_..._",id:"Sequence_..._",isDocsHomePage:!1,title:"Sequence ({...})",description:"To create an action that performs a sequence of other actions, the {...} operator is used -\xa0a block enclosed by curly brackets. The body of this block must contain a sequence of action operators\xa0and local property declarations.",source:"@site/docs/Sequence_..._.md",slug:"/Sequence_..._",permalink:"/platform/next/Sequence_..._",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Sequence_..._.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Execution order",permalink:"/platform/next/Execution_order"},next:{title:"Call (EXEC)",permalink:"/platform/next/Call_EXEC_"}},i=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To create an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that performs a sequence of other actions, the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Operator_..._"},Object(o.b)("strong",{parentName:"a"},"{...}")," operator")," is used -\xa0a block enclosed by curly brackets. The body of this block must contain a sequence of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/%D0%9Eperators"},"action operators"),"\xa0and local property declarations."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that executes a sequence of other actions, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Operator_..._"},Object(o.b)("strong",{parentName:"a"},"{...}")," operator"),".\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Currency;\nname = DATA STRING[30] (Currency);\ncode = DATA INTEGER (Currency);\n\nCLASS Order;\ncurrency = DATA Currency (Order);\ncustomer = DATA STRING[100] (Order);\ncopy 'Copy' (Order old)  {\n    NEW new = Order {                                   // an action is created that consists of the sequential execution of two actions\n        currency(new) <- currency(old);                 // a semicolon is put after each statement\n        customer(new) <- customer(old);\n    }                                                   // there is no semicolon in this line, because the operator ends in }\n}\n\nloadDefaultCurrency(ISTRING[30] name, INTEGER code)  {\n    NEW c = Currency {\n        name(c) <- name;\n        code(c) <- code;\n    }\n}\nrun ()  {\n    loadDefaultCurrency('USD', 866);\n    loadDefaultCurrency('EUR', 1251);\n}\n")))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?a.a.createElement(m,u(u({ref:t},l),{},{components:n})):a.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);