(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{721:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(746)),c={title:"Sequence ({...})"},u={unversionedId:"Sequence_..._",id:"Sequence_..._",isDocsHomePage:!1,title:"Sequence ({...})",description:"To create an action that performs a sequence of other actions, the {...} operator is used -\xa0a block enclosed by curly brackets. The body of this block must contain a sequence of action operators\xa0and local property declarations.",source:"@site/docs/Sequence_..._.md",slug:"/Sequence_..._",permalink:"/platform/next/Sequence_..._",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Sequence_..._.md",version:"current",sidebar:"learn",previous:{title:"Execution order: Overview",permalink:"/platform/next/Execution_order"},next:{title:"Call (EXEC)",permalink:"/platform/next/Call_EXEC_"}},i=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To create an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that performs a sequence of other actions, the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Operator_..._"},Object(o.b)("strong",{parentName:"a"},"{...}")," operator")," is used -\xa0a block enclosed by curly brackets. The body of this block must contain a sequence of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/%D0%9Eperators"},"action operators"),"\xa0and local property declarations."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that executes a sequence of other actions, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Operator_..._"},Object(o.b)("strong",{parentName:"a"},"{...}")," operator"),".\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Currency;\nname = DATA STRING[30] (Currency);\ncode = DATA INTEGER (Currency);\n\nCLASS Order;\ncurrency = DATA Currency (Order);\ncustomer = DATA STRING[100] (Order);\ncopy 'Copy' (Order old)  {\n    NEW new = Order {                                   // an action is created that consists of the sequential execution of two actions\n        currency(new) <- currency(old);                 // a semicolon is put after each statement\n        customer(new) <- customer(old);\n    }                                                   // there is no semicolon in this line, because the operator ends in }\n}\n\nloadDefaultCurrency(ISTRING[30] name, INTEGER code)  {\n    NEW c = Currency {\n        name(c) <- name;\n        code(c) <- code;\n    }\n}\nrun ()  {\n    loadDefaultCurrency('USD', 866);\n    loadDefaultCurrency('EUR', 1251);\n}\n")))}p.isMDXComponent=!0},746:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||o;return t?a.a.createElement(m,u(u({ref:n},l),{},{components:t})):a.a.createElement(m,u({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);