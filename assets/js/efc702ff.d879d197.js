(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{698:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(746)),p={title:"Type conversion operator"},i={unversionedId:"Type_conversion_operator",id:"version-v4/Type_conversion_operator",isDocsHomePage:!1,title:"Type conversion operator",description:"The type conversion operator creates a property that performs type conversion.",source:"@site/versioned_docs/version-v4/Type_conversion_operator.md",slug:"/Type_conversion_operator",permalink:"/platform/Type_conversion_operator",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Type_conversion_operator.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Object group operator",permalink:"/platform/Object_group_operator"},next:{title:"AND, OR, NOT, XOR operators",permalink:"/platform/AND_OR_NOT_XOR_operators"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The type conversion operator creates a ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," that performs ",Object(a.b)("a",{parentName:"p",href:"/platform/Type_conversion"},"type conversion"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"typeName(expression) \n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The operator\xa0creates a property that converts the value of a certain expression into a value of a specified ",Object(a.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"built-in class"),".\xa0If conversion is impossible, the value of the property will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"typeName")),Object(a.b)("p",null,"The name of the *\xa0*",Object(a.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"built-in class")," that the values will be converted into."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression")),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," whose value will be converted into the value of the specified built-in class."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"itemCount = DATA INTEGER (Store);\nitemCountToString(s) = BPSTRING[10](itemCount(s));\n\nbarcode = DATA STRING[15] (Item);\nlongBarcode(Item i) = LONG(barcode(i));\n")))}l.isMDXComponent=!0},746:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,f=u["".concat(p,".").concat(m)]||u[m]||b[m]||a;return t?o.a.createElement(f,i(i({ref:r},s),{},{components:t})):o.a.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);