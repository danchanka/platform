(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{554:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(749)),p={title:"AND, OR, NOT, XOR operators"},s={unversionedId:"AND_OR_NOT_XOR_operators",id:"AND_OR_NOT_XOR_operators",isDocsHomePage:!1,title:"AND, OR, NOT, XOR operators",description:"AND, OR, NOT, XOR operators that create properties that implement logical operations.",source:"@site/docs/AND_OR_NOT_XOR_operators.md",slug:"/AND_OR_NOT_XOR_operators",permalink:"/platform/next/AND_OR_NOT_XOR_operators",editUrl:"https://github.com/danchanka/platform/edit/master/docs/AND_OR_NOT_XOR_operators.md",version:"current",sidebar:"learn",previous:{title:"Type conversion operator",permalink:"/platform/next/Type_conversion_operator"},next:{title:"IS, AS operators",permalink:"/platform/next/IS_AS_operators"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:i};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"AND"),", ",Object(o.b)("strong",{parentName:"p"},"OR"),", ",Object(o.b)("strong",{parentName:"p"},"NOT"),", ",Object(o.b)("strong",{parentName:"p"},"XOR")," operators that create ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"properties")," that implement ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Logical_operators_AND_OR_NOT_XOR_"},"logical operations"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"expression1 AND expression2\nexpression1 OR expression2\nexpression1 XOR expression2\nNOT expression1\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression1, expression2\xa0")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expressions")," whose values will be the operator arguments. Expression values are considered to be BOOLEAN class values depending on whether they are ",Object(o.b)("strong",{parentName:"p"},"NULL")," or not."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"likes = DATA BOOLEAN (Person, Person);\nlikes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);\noutOfInterval1(value, left, right) = value < left OR value > right;\noutOfInterval2(value, left, right) = NOT (value >= left AND value <= right);\n")))}l.isMDXComponent=!0},749:function(e,r,t){"use strict";t.d(r,"a",(function(){return O})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},O=function(e){var r=l(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),O=l(t),b=n,m=O["".concat(p,".").concat(b)]||O[b]||u[b]||o;return t?a.a.createElement(m,s(s({ref:r},c),{},{components:t})):a.a.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=b;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var c=2;c<o;c++)p[c]=t[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);