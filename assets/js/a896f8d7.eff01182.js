(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{527:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(746)),p={title:"Properties",sidebar_label:"Overview"},i={unversionedId:"Properties",id:"version-v4/Properties",isDocsHomePage:!1,title:"Properties",description:"A property is an element of the system that takes a set of objects (parameters) and returns exactly one object (the return value).",source:"@site/versioned_docs/version-v4/Properties.md",slug:"/Properties",permalink:"/platform/Properties",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Properties.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Domain logic",permalink:"/platform/Domain_logic"},next:{title:"Operators",permalink:"/platform/Operators"}},c=[{value:"Type constraint",id:"type",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"property")," is an element of the system that takes a set of objects (",Object(o.b)("em",{parentName:"p"},"parameters"),") and returns exactly one object (the ",Object(o.b)("em",{parentName:"p"},"return value"),").\xa0"),Object(o.b)("p",null,"The type and the specifics of how to calculate each property are determined by the operator used to create the property."),Object(o.b)("h3",{id:"type"},"Type constraint"),Object(o.b)("p",null,"Due to implementation features, all non-",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0property values returned must be of the same type. That is, a property cannot return,\xa0for example,\xa0a string for one set of parameters and a number for another."),Object(o.b)("p",null,"The same constraint exists for each property parameter: a property cannot have a non-",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0value for an object collection in which, for example, the first parameter is a string, and at the same time have a non-",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0value for another object collection, in which the first parameter is an object."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To create properties, use ",Object(o.b)("a",{parentName:"p",href:"/platform/Instruction_="},"the ",Object(o.b)("strong",{parentName:"a"},"=")," instruction"),".\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"cost 'Cost' (i) = DATA NUMERIC[12,3] (Item);        // property defined by the context-independent DATA property operator\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;       // property defined by expression\ndiff = a - b;                                           // the caption of this property will be 'diff' and the parameters will be (a, b)\n\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; // property defined by DATA operator with additional property options\n")))}l.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);