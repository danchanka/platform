(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{395:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(746)),p={title:"Arithmetic operators"},i={unversionedId:"Arithmetic_operators",id:"Arithmetic_operators",isDocsHomePage:!1,title:"Arithmetic operators",description:"+, -, \\*, /, (+), (-) operators create properties responsible for arithmetic operations.",source:"@site/docs/Arithmetic_operators.md",slug:"/Arithmetic_operators",permalink:"/platform/next/Arithmetic_operators",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Arithmetic_operators.md",version:"current",sidebar:"learn",previous:{title:"Property operators: Overview",permalink:"/platform/next/Property_operators"},next:{title:"Operator \\[\\]",permalink:"/platform/next/Operator_"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"+"),", ",Object(a.b)("strong",{parentName:"p"},"-"),", ",Object(a.b)("strong",{parentName:"p"},"*"),", ",Object(a.b)("strong",{parentName:"p"},"/"),", ",Object(a.b)("strong",{parentName:"p"},"(+)"),", ",Object(a.b)("strong",{parentName:"p"},"(-)")," operators create ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Properties"},"properties")," responsible for ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Arithmetic_operators_+_-_..._"},"arithmetic operations"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"expression1 + expression2  \nexpression1 - expression2  \nexpression1 / expression2  \nexpression1 * expression2  \n-expression1\nexpression1 (+) expression2  \nexpression1 (-) expression2  \n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression1, expression2")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expressions"),"\xa0whose values will be arguments for arithmetic operators."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"sum(a, b) = a + b;\ntransform(a, b, c) = -a * (b (+) c);\n")))}l.isMDXComponent=!0},746:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=n,f=m["".concat(p,".").concat(u)]||m[u]||b[u]||a;return t?o.a.createElement(f,i(i({ref:r},c),{},{components:t})):o.a.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);