(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{751:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||a;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(751)),p={title:"OVERRIDE operator"},c={unversionedId:"OVERRIDE_operator",id:"OVERRIDE_operator",isDocsHomePage:!1,title:"OVERRIDE operator",description:"The OVERRIDE\xa0operator creates a\xa0property that implements\xa0the selection\xa0of one of the values\xa0(polymorphic form).",source:"@site/docs/OVERRIDE_operator.md",slug:"/OVERRIDE_operator",permalink:"/platform/docs/next/OVERRIDE_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/OVERRIDE_operator.md",version:"current",sidebar:"docs",previous:{title:"MULTI operator",permalink:"/platform/docs/next/MULTI_operator"},next:{title:"PARTITION operator",permalink:"/platform/docs/next/PARTITION_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0operator creates a\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"property")," that implements\xa0the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"selection"),"\xa0of one of the values\xa0(polymorphic form)."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"OVERRIDE expr1, ..., exprN\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0operator creates a property whose value will be the value of one of the properties specified in the operator. Selection is made among properties with a non-",Object(a.b)("strong",{parentName:"p"},"NULL")," value. If multiple properties are non-",Object(a.b)("strong",{parentName:"p"},"NULL"),", the value of the first of these properties is selected."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(a.b)("p",null,"List of ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expressions")," whose values will determine the value of the property."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Group;\nmarkup = DATA NUMERIC[8,2] (Group);\n\nmarkup = DATA NUMERIC[8,2] (Book);\ngroup = DATA Group (Book);\noverMarkup (Book b) = OVERRIDE markup(b), markup(group(b));\n\nnotNullDate (INTEGER i) = OVERRIDE date(i), 2010_01_01;\n")))}s.isMDXComponent=!0}}]);