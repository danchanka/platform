(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{464:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(747)),p={title:"EXCLUSIVE operator"},i={unversionedId:"EXCLUSIVE_operator",id:"version-v4/EXCLUSIVE_operator",isDocsHomePage:!1,title:"EXCLUSIVE operator",description:"The EXCLUSIVE operator creates a property that implements a selection of one of the values (polymorphic form).",source:"@site/versioned_docs/version-v4/EXCLUSIVE_operator.md",slug:"/EXCLUSIVE_operator",permalink:"/platform/EXCLUSIVE_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/EXCLUSIVE_operator.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"DATA operator",permalink:"/platform/DATA_operator"},next:{title:"FORMULA operator",permalink:"/platform/FORMULA_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE "),"operator creates a ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," that implements a ",Object(a.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"selection")," of one of the values (polymorphic form)."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"EXCLUSIVE expr1, ..., exprN\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE")," operator creates a property whose value will be the value of one of the properties specified in the operator. It is assumed that for any set of parameters, at most one of the properties will be non-",Object(a.b)("strong",{parentName:"p"},"NULL"),". The value of the property will be the value of this single non-",Object(a.b)("strong",{parentName:"p"},"NULL")," property, or ",Object(a.b)("strong",{parentName:"p"},"NULL")," if there are no such properties."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(a.b)("p",null,"List of ",Object(a.b)("a",{parentName:"p",href:"/platform/Expression"},"expressions")," whose values will determine the value of the property."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"background 'Color' (INTEGER i) = EXCLUSIVE RGB(255,238,165) IF i <= 5,\n                                                   RGB(255,160,160) IF i > 5;\n\nCLASS Human;\n\nCLASS Male : Human;\nCLASS Female : Human;\n\nname(Human h) = EXCLUSIVE 'Male' IF h IS Male, 'Female' IF h IS Female;\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);