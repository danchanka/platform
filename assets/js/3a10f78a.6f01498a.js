(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(747)),c={title:"IS, AS operators"},p={unversionedId:"IS_AS_operators",id:"IS_AS_operators",isDocsHomePage:!1,title:"IS, AS operators",description:"IS,\xa0AS operators create an action that implements classification.",source:"@site/docs/IS_AS_operators.md",slug:"/IS_AS_operators",permalink:"/platform/next/IS_AS_operators",editUrl:"https://github.com/danchanka/platform/edit/master/docs/IS_AS_operators.md",version:"current",sidebar:"learn",previous:{title:"AND, OR, NOT, XOR operators",permalink:"/platform/next/AND_OR_NOT_XOR_operators"},next:{title:"Change operators",permalink:"/platform/next/Change_operators"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples\xa0",id:"examples",children:[]}],i={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IS"),",\xa0",Object(o.b)("strong",{parentName:"p"},"AS")," operators create an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"action")," that implements ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Classification_IS_AS_"},"classification"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"expression IS className\nexpression AS className\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"IS")," operator creates an action which returns ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the value of the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expression")," belongs to the specified class."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"AS"),"\xa0operator creates a property which returns the\xa0expression value if this value\xa0belongs to the specified class."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,"An expression which value is checked for belonging to the class."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"Class name. ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#classid-broken"},"Class ID"),"."),Object(o.b)("h3",{id:"examples"},"Examples\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"asOrder(object) = object AS Order;\n\nperson = DATA Human (Order);\nisMale (Order o) = person(o) IS Male;\n")))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,f=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(f,p(p({ref:t},i),{},{components:r})):a.a.createElement(f,p({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);