(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{676:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(751)),i={title:"Extremum (MAX, MIN)"},p={unversionedId:"Extremum_MAX_MIN_",id:"Extremum_MAX_MIN_",isDocsHomePage:!1,title:"Extremum (MAX, MIN)",description:"The extremum operator creates a property which calculates the maximum or minimum between several specified properties. If the value of any of these properties is\xa0NULL, this property is ignored. If the values of all properties are NULL, the result value is also NULL.",source:"@site/docs/Extremum_MAX_MIN_.md",slug:"/Extremum_MAX_MIN_",permalink:"/platform/docs/next/Extremum_MAX_MIN_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Extremum_MAX_MIN_.md",version:"current",sidebar:"docs",previous:{title:"Comparison operators (=, \\>, <, ...)",permalink:"/platform/docs/next/Comparison_operators_=_..._"},next:{title:"String operators (+, CONCAT, SUBSTRING)",permalink:"/platform/docs/next/String_operators_+_CONCAT_SUBSTRING_"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"extremum operator")," creates a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"property")," which calculates the maximum or minimum between several specified properties. If the value of any of these properties is\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),", this property is ignored. If the values of all properties are ",Object(o.b)("strong",{parentName:"p"},"NULL"),", the result value is also ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"The maximum property is created using the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/MAX_operator"},Object(o.b)("strong",{parentName:"a"},"MAX")," operator"),", the\xa0minimum - using the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/MIN_operator"},Object(o.b)("strong",{parentName:"a"},"MIN")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"date1 = DATA DATE(INTEGER);\ndate2 = DATA DATE(INTEGER);\nmaxDate (INTEGER i) = MAX date1(i), date2(i);\n\nbalance = DATA INTEGER (Item);\noutcome 'Balance (non-negative)' (Item i) = MAX balance(i), 0;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"minPrice(Book b) = MIN price1(b), price2(b);\n\ndate (INTEGER i) = DATA DATE (INTEGER);\nminDate (INTEGER i) = MIN date(i), 2001_01_01;\n")))}m.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=m(r),b=n,f=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return r?a.a.createElement(f,p(p({ref:t},l),{},{components:r})):a.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);