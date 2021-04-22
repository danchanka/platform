(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{626:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(747)),i={title:"Actions",sidebar_label:"Overview"},c={unversionedId:"Actions",id:"Actions",isDocsHomePage:!1,title:"Actions",description:"An action\xa0is an element of the system that takes a set of objects (parameters) and uses them in one way or another to change the system state (that of the system in which the action is executed, as well as the state of any other external system).",source:"@site/docs/Actions.md",slug:"/Actions",permalink:"/platform/next/Actions",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Actions.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"learn",previous:{title:"Distribution (UNGROUP)",permalink:"/platform/next/Distribution_UNGROUP_"},next:{title:"Change sessions",permalink:"/platform/next/Change_sessions"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"action"),"\xa0is an element of the system that takes a set of objects (",Object(o.b)("em",{parentName:"p"},"parameters"),") and uses them in one way or another to change the system state (that of the system in which the action is executed, as well as the state of any other external system)."),Object(o.b)("p",null,"The type and behavior of each action is determined by the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/%D0%9Eperators"},"operator")," that creates the action."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To add a new action to the system, use\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/ACTION_instruction"},"the ",Object(o.b)("strong",{parentName:"a"},"ACTION")," instruction"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"showMessage  { MESSAGE 'Hello World!'; }                                // action declaration\nloadImage 'Upload image'  ABSTRACT ( Item);\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);