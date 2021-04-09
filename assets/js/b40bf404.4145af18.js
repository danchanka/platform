(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{551:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(746)),p={title:"AND, OR, NOT, XOR operators"},s={unversionedId:"AND_OR_NOT_XOR_operators",id:"AND_OR_NOT_XOR_operators",isDocsHomePage:!1,title:"AND, OR, NOT, XOR operators",description:"AND, OR, NOT, XOR operators that create properties that implement logical operations.",source:"@site/docs/AND_OR_NOT_XOR_operators.md",slug:"/AND_OR_NOT_XOR_operators",permalink:"/platform/next/AND_OR_NOT_XOR_operators",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/AND_OR_NOT_XOR_operators.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Type conversion operator",permalink:"/platform/next/Type_conversion_operator"},next:{title:"IS, AS operators",permalink:"/platform/next/IS_AS_operators"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"AND"),", ",Object(o.b)("strong",{parentName:"p"},"OR"),", ",Object(o.b)("strong",{parentName:"p"},"NOT"),", ",Object(o.b)("strong",{parentName:"p"},"XOR")," operators that create ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"properties")," that implement ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Logical_operators_AND_OR_NOT_XOR_"},"logical operations"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"expression1 AND expression2\nexpression1 OR expression2\nexpression1 XOR expression2\nNOT expression1\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression1, expression2\xa0")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expressions")," whose values will be the operator arguments. Expression values are considered to be BOOLEAN class values depending on whether they are ",Object(o.b)("strong",{parentName:"p"},"NULL")," or not."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"likes = DATA BOOLEAN (Person, Person);\nlikes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);\noutOfInterval1(value, left, right) = value < left OR value > right;\noutOfInterval2(value, left, right) = NOT (value >= left AND value <= right);\n")))}l.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},O=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),O=l(r),b=n,m=O["".concat(p,".").concat(b)]||O[b]||u[b]||o;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);