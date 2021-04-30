(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{391:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(745)),p={title:"Arithmetic operators"},i={unversionedId:"Arithmetic_operators",id:"Arithmetic_operators",isDocsHomePage:!1,title:"Arithmetic operators",description:"+, -, \\*, /, (+), (-) operators create properties responsible for arithmetic operations.",source:"@site/docs/Arithmetic_operators.md",slug:"/Arithmetic_operators",permalink:"/platform/next/Arithmetic_operators",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Arithmetic_operators.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Property operators",permalink:"/platform/next/Property_operators"},next:{title:"Operator []",permalink:"/platform/next/Operator_"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"+"),", ",Object(o.b)("strong",{parentName:"p"},"-"),", ",Object(o.b)("strong",{parentName:"p"},"*"),", ",Object(o.b)("strong",{parentName:"p"},"/"),", ",Object(o.b)("strong",{parentName:"p"},"(+)"),", ",Object(o.b)("strong",{parentName:"p"},"(-)")," operators create ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"properties")," responsible for ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Arithmetic_operators_+_-_..._"},"arithmetic operations"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"expression1 + expression2  \nexpression1 - expression2  \nexpression1 / expression2  \nexpression1 * expression2  \n-expression1\nexpression1 (+) expression2  \nexpression1 (-) expression2  \n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression1, expression2")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expressions"),"\xa0whose values will be arguments for arithmetic operators."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"sum(a, b) = a + b;\ntransform(a, b, c) = -a * (b (+) c);\n")))}l.isMDXComponent=!0},745:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=n,f=m["".concat(p,".").concat(u)]||m[u]||b[u]||o;return t?a.a.createElement(f,i(i({ref:r},c),{},{components:t})):a.a.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);