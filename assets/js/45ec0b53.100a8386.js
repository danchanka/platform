(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{261:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(747)),i={title:"IF ... THEN operator"},p={unversionedId:"IF_..._THEN_operator",id:"IF_..._THEN_operator",isDocsHomePage:!1,title:"IF ... THEN operator",description:"The IF ... THEN operator creates a property that implements selection\xa0with one condition (single form).",source:"@site/docs/IF_..._THEN_operator.md",slug:"/IF_..._THEN_operator",permalink:"/platform/next/IF_..._THEN_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/IF_..._THEN_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"IF operator",permalink:"/platform/next/IF_operator"},next:{title:"JOIN operator",permalink:"/platform/next/JOIN_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"IF ... THEN")," operator creates a ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property")," that implements ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection"),"\xa0with one condition (single form)."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"IF condition \n    THEN value\n    [ELSE alternativeValue]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"IF ... THEN")," operator creates an action that implements conditional selection. The condition is defined using a property. If this condition is met, that is, the value of the property does not equal\xa0",Object(a.b)("strong",{parentName:"p"},"NULL"),", then the value of the created property will be the value of the property specified in the ",Object(a.b)("strong",{parentName:"p"},"THEN")," block; otherwise, the value will be the value of the property in the ",Object(a.b)("strong",{parentName:"p"},"ELSE")," block, or ",Object(a.b)("strong",{parentName:"p"},"NULL")," if no ",Object(a.b)("strong",{parentName:"p"},"ELSE")," block was specified.**\xa0**"),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"condition")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression")," defining a condition.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"value")),Object(a.b)("p",null,"An expression whose value will be the value of the created property if the condition is met."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"alternativeValue")),Object(a.b)("p",null,"An expression whose value will be the value of the created property if the condition is not met."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"price1 = DATA NUMERIC[10,2] (Book);\nprice2 = DATA NUMERIC[10,2] (Book);\nmaxPrice (Book b) = IF price1(b) > price2(b) THEN price1(b) ELSE price2(b);\n\nsex (Human h) = IF h IS Male THEN 'Male' ELSE ('Female' IF h IS Female); // if h is of another class, it will be NULL\n\nisDifferent(a, b) = IF a != b THEN TRUE;\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,f=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return r?o.a.createElement(f,p(p({ref:t},l),{},{components:r})):o.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);