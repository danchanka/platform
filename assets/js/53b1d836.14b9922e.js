(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{308:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(751)),i={title:"Interruption (BREAK)"},c={unversionedId:"Interruption_BREAK_",id:"Interruption_BREAK_",isDocsHomePage:!1,title:"Interruption (BREAK)",description:"The interrupt operator creates an action that exits the most nested loop (normal\xa0or recursive) within which this action is located. Control is transferred to the first action following the loop. If the created action is not inside a loop, its behavior becomes similar to the action created by the exit operator.",source:"@site/docs/Interruption_BREAK_.md",slug:"/Interruption_BREAK_",permalink:"/platform/docs/next/Interruption_BREAK_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Interruption_BREAK_.md",version:"current",sidebar:"docs",previous:{title:"Recursive loop (WHILE)",permalink:"/platform/docs/next/Recursive_loop_WHILE_"},next:{title:"Exit (RETURN)",permalink:"/platform/docs/next/Exit_RETURN_"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"interrupt operator")," creates an ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that exits the most nested loop (",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Loop_FOR_"},"normal"),"\xa0or ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Recursive_loop_WHILE_"},"recursive"),") within which this action is located. Control is transferred to the first action following the loop. If the created action is not inside a loop, its behavior becomes similar to the action created by the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Exit_RETURN_"},"exit operator"),".\xa0"),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"The interrupt operator syntax is described by the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/BREAK_operator"},Object(a.b)("strong",{parentName:"a"},"BREAK")," operator"),".\xa0"),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"testBreak ()  {\n    FOR iterate(INTEGER i, 1, 100) DO {\n        IF i == 50 THEN BREAK; // will only come up to 50\n    }\n}\n")))}s.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);