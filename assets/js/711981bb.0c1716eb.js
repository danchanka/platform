(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{381:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),l=(r(0),r(750)),o={title:"Comparison operators (=, >, <, ...)"},b={unversionedId:"Comparison_operators_=_..._",id:"Comparison_operators_=_..._",isDocsHomePage:!1,title:"Comparison operators (=, \\>, <, ...)",description:"Comparison operators create actions which return the result of the comparison operation. The values of the created properties belong to the built-in class\xa0BOOLEAN.",source:"@site/docs/Comparison_operators_=_..._.md",slug:"/Comparison_operators_=_..._",permalink:"/platform/docs/next/Comparison_operators_=_..._",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Comparison_operators_=_..._.md",version:"current",sidebar:"docs",previous:{title:"Logical operators (AND, OR, NOT, XOR)",permalink:"/platform/docs/next/Logical_operators_AND_OR_NOT_XOR_"},next:{title:"Extremum (MAX, MIN)",permalink:"/platform/docs/next/Extremum_MAX_MIN_"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Comparison operators")," create ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"actions")," which return the result of the comparison operation. The values of the created properties belong to the ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Built-in_classes"},"built-in class"),"\xa0",Object(l.b)("strong",{parentName:"p"},"BOOLEAN"),"."),Object(l.b)("p",null,"The platform currently supports the following comparison operators:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Operator",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Name",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Description",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Example",Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Result",Object(l.b)("br",null)),Object(l.b)("br",null))))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"= or =="),Object(l.b)("td",{parentName:"tr",align:null},"Equality"),Object(l.b)("td",{parentName:"tr",align:null},"Takes two operands and returns TRUE if the operands are equal"),Object(l.b)("td",{parentName:"tr",align:null},"5 = 5 or 5 == 5"),Object(l.b)("td",{parentName:"tr",align:null},"TRUE")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"!="),Object(l.b)("td",{parentName:"tr",align:null},"Inequality"),Object(l.b)("td",{parentName:"tr",align:null},"Accepts two operands and returns TRUE if the operands are not equal"),Object(l.b)("td",{parentName:"tr",align:null},"3 != 5"),Object(l.b)("td",{parentName:"tr",align:null},"TRUE")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},">",", <"),Object(l.b)("td",{parentName:"tr",align:null},"Strict comparison"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Accepts two operands\xa0and returns TRUE if the strict comparison condition is met")),Object(l.b)("td",{parentName:"tr",align:null},"3 ",">"," 5"),Object(l.b)("td",{parentName:"tr",align:null},"NULL")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},">","=, <="),Object(l.b)("td",{parentName:"tr",align:null},"Non-strict comparison"),Object(l.b)("td",{parentName:"tr",align:null},"Accepts two operands\xa0and returns TRUE if the non-strict comparison condition is met"),Object(l.b)("td",{parentName:"tr",align:null},"4 <= 5"),Object(l.b)("td",{parentName:"tr",align:null},"TRUE")))),Object(l.b)("p",null,"If one of the operands is ",Object(l.b)("strong",{parentName:"p"},"NULL"),", all operators will return ",Object(l.b)("strong",{parentName:"p"},"NULL")," as a result."),Object(l.b)("h3",{id:"language"},"Language"),Object(l.b)("p",null,"Description of ",Object(l.b)("a",{parentName:"p",href:"/platform/docs/next/Comparison_operators"},"comparison operators"),"."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"equalBarcodes = barcode(a) == barcode(b);\noutOfIntervalValue1(value, left, right) = value < left OR value > right;\noutOfIntervalValue2(value, left, right) = NOT (value >= left AND value <= right);\n")))}i.isMDXComponent=!0},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),O=n,m=u["".concat(o,".").concat(O)]||u[O]||s[O]||l;return r?a.a.createElement(m,b(b({ref:t},p),{},{components:r})):a.a.createElement(m,b({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var p=2;p<l;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);