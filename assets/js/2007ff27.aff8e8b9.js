(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{160:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(746)),p={title:"Comparison operators"},s={unversionedId:"Comparison_operators",id:"Comparison_operators",isDocsHomePage:!1,title:"Comparison operators",description:"==, =, !=, **, =**\xa0operators create properties that implement comparison operations.",source:"@site/docs/Comparison_operators.md",slug:"/Comparison_operators",permalink:"/platform/next/Comparison_operators",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Comparison_operators.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Change operators",permalink:"/platform/next/Change_operators"},next:{title:"Property options",permalink:"/platform/next/Property_options"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:i};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"==, ="),", ",Object(a.b)("strong",{parentName:"p"},"!="),", ",Object(a.b)("strong",{parentName:"p"},"<"),", ",Object(a.b)("strong",{parentName:"p"},">"),", ",Object(a.b)("strong",{parentName:"p"},"<="),", ",Object(a.b)("strong",{parentName:"p"},">","="),"\xa0operators create ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Properties"},"properties")," that implement ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Comparison_operators_=_..._"},"comparison operations"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"expression1 == expression2\nexpression1 = expression2\nexpression1 != expression2\nexpression1 < expression2\nexpression1 > expression2\nexpression1 <= expression2\nexpression1 >= expression2\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression1, expression2")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expressions")," which values are the arguments of a comparison operator."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"equalBarcodes = barcode(a) == barcode(b);\noutOfIntervalValue1(value, left, right) = value < left OR value > right;\noutOfIntervalValue2(value, left, right) = NOT (value >= left AND value <= right);\n")))}l.isMDXComponent=!0},746:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),l=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||a;return t?o.a.createElement(f,s(s({ref:r},c),{},{components:t})):o.a.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=b;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var c=2;c<a;c++)p[c]=t[c];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);