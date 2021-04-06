(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(750)),i={title:"Type conversion"},c={unversionedId:"Type_conversion",id:"Type_conversion",isDocsHomePage:!1,title:"Type conversion",description:"The type conversion operator creates a property that converts an object of one\xa0built-in class\xa0to an object of another built-in class. If type conversion is not possible, the property value will be NULL.",source:"@site/docs/Type_conversion.md",slug:"/Type_conversion",permalink:"/platform/docs/next/Type_conversion",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Type_conversion.md",version:"current",sidebar:"docs",previous:{title:"Structure operations (STRUCT, \\[\\])",permalink:"/platform/docs/next/Structure_operations_STRUCT_"},next:{title:"Class operations: Overview",permalink:"/platform/docs/next/Class_operations"}},p=[{value:"String and file types",id:"string-and-file-types",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"type conversion")," operator creates a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"property")," that converts an object of one\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Built-in_classes"},"built-in class"),"\xa0to an object of another built-in class. If type conversion is not possible, the property value will be ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("h3",{id:"string-and-file-types"},"String and file types"),Object(o.b)("p",null,"String types can be converted to human-readable file types (",Object(o.b)("strong",{parentName:"p"},"CSVFILE"),", ",Object(o.b)("strong",{parentName:"p"},"XMLFILE"),", ",Object(o.b)("strong",{parentName:"p"},"JSONFILE"),", ",Object(o.b)("strong",{parentName:"p"},"HTMLFILE"),", etc.), and vice versa - human-readable file types can be converted to string types."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Converting dynamic-type files (",Object(o.b)("strong",{parentName:"p"},"FILE"),") to strings and vice versa is prohibited in the current implementation, but if necessary this can be done via an intermediate human-readable type - for example, by first converting to ",Object(o.b)("strong",{parentName:"p"},"CSVFILE"),", and only then to ",Object(o.b)("strong",{parentName:"p"},"FILE")," (the resulting file ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Built-in_classes#csv-broken"},"will have the extension")," CSV)"))),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To implement conversion, the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Type_conversion_operator"},"type conversion operator")," is used."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"itemCount = DATA INTEGER (Store);\nitemCountToString(s) = BPSTRING[10](itemCount(s));\n\nbarcode = DATA STRING[15] (Item);\nlongBarcode(Item i) = LONG(barcode(i));\n")))}l.isMDXComponent=!0},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);