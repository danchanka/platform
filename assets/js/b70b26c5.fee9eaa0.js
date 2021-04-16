(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{560:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(747)),p={title:"Data properties (DATA)"},i={unversionedId:"Data_properties_DATA_",id:"version-v4/Data_properties_DATA_",isDocsHomePage:!1,title:"Data properties (DATA)",description:"Data property is a property which value is stored in the database and may change through the execution of the corresponding action. Each parameter and the value of a data property must belong to a certain specified class. If a parameter does not belong to the specified class or is NULL, then the property value will return NULL.",source:"@site/versioned_docs/version-v4/Data_properties_DATA_.md",slug:"/Data_properties_DATA_",permalink:"/platform/Data_properties_DATA_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Data_properties_DATA_.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Operators",permalink:"/platform/Operators"},next:{title:"Composition (JOIN)",permalink:"/platform/Composition_JOIN_"}},c=[{value:"Local data properties",id:"local",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Data property")," is a ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," which value is stored in the database and may change through the execution of the ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_change_CHANGE_"},"corresponding")," action. Each parameter and the value of a data property must belong to a certain specified ",Object(o.b)("a",{parentName:"p",href:"/platform/Classes"},"class"),". If a parameter does not belong to the specified class or is ",Object(o.b)("strong",{parentName:"p"},"NULL"),", then the property value will return ",Object(o.b)("strong",{parentName:"p"},"NULL"),". "),Object(o.b)("h3",{id:"local"},"Local data properties"),Object(o.b)("p",null,"Data properties can be ",Object(o.b)("em",{parentName:"p"},"local.")," Such properties retain their values only within the ",Object(o.b)("a",{parentName:"p",href:"/platform/Change_sessions"},"session"),", i.e. they are not saved to the database, which means when applying changes these values are reset to ",Object(o.b)("strong",{parentName:"p"},"NULL")," by default."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare a primary property, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/DATA_operator"},Object(o.b)("strong",{parentName:"a"},"DATA")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Item;\nquantity = DATA LOCAL INTEGER (Item);\n\nCLASS Country;\nisDayOff = DATA BOOLEAN (Country, DATE);\n")))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,f=u["".concat(p,".").concat(b)]||u[b]||m[b]||o;return r?n.a.createElement(f,i(i({ref:t},s),{},{components:r})):n.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);