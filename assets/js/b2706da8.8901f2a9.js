(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{545:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(747)),i={title:"Recursive loop (WHILE)"},c={unversionedId:"Recursive_loop_WHILE_",id:"Recursive_loop_WHILE_",isDocsHomePage:!1,title:"Recursive loop (WHILE)",description:"The recursive loop operator\xa0is similar to a regular loop operator, with the only difference being that iteration is performed recursively until at a certain point the set of objects collections satisfying the condition becomes empty. As a result, there is no sense in defining alternative actions with this operator.",source:"@site/docs/Recursive_loop_WHILE_.md",slug:"/Recursive_loop_WHILE_",permalink:"/platform/next/Recursive_loop_WHILE_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Recursive_loop_WHILE_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Branching (CASE, IF, MULTI)",permalink:"/platform/next/Branching_CASE_IF_MULTI_"},next:{title:"Interruption (BREAK)",permalink:"/platform/next/Interruption_BREAK_"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"recursive loop operator"),"\xa0is similar to a regular ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Loop_FOR_"},"loop")," operator, with the only difference being that iteration is performed recursively until at a certain point the set of objects collections satisfying the condition becomes empty. As a result, there is no sense in defining ",Object(a.b)("em",{parentName:"p"},"alternative")," actions with this operator."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"The syntax of the recursive loop operator is described by the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/WHILE_operator"},Object(a.b)("strong",{parentName:"a"},"WHILE")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"iterateDates (DATE dateFrom, DATE dateTo)  {\n    LOCAL dateCur = DATE();\n\n    dateCur() <- dateFrom;\n    WHILE dateCur() <= dateTo DO {\n        MESSAGE 'I have a date ' + dateCur();\n        dateCur() <- sum(dateCur(), 1);\n    }\n}\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);