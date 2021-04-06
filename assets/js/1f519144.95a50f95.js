(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(750)),c={title:"TABLE instruction"},i={unversionedId:"TABLE_instruction",id:"version-v4/TABLE_instruction",isDocsHomePage:!1,title:"TABLE instruction",description:"The TABLE instruction creates an new table.",source:"@site/versioned_docs/version-v4/TABLE_instruction.md",slug:"/TABLE_instruction",permalink:"/platform/docs/TABLE_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/TABLE_instruction.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"Instruction@",permalink:"/platform/docs/Instruction_"},next:{title:"INDEX instruction",permalink:"/platform/docs/INDEX_instruction"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"TABLE")," instruction creates an new ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Tables"},"table"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"TABLE name(className1, ..., classNameN) [FULL | NODEFAULT];\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"TABLE\xa0")," instruction declares a new table and adds it to the current ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Modules"},"module"),".\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Table name. ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#id-broken"},"Simple ID"),".\xa0The name must be unique within the current ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Naming#namespace"},"namespace"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className1, ..., classNameN")),Object(o.b)("p",null,"List of class names. Each name is a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#classname-broken"},"class ID"),". Specifies classes for the key fields of the table being created. Cannot be empty,"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"FULL")),Object(o.b)("p",null,"The keyword that, when specified, marks the table as ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Tables#full"},"full")," (that is, containing all objects belonging to the classes of the table's key fields). \xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NODEFAULT")),Object(o.b)("p",null,"The keyword that, when specified, excludes the table from the process of automatic ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Tables#property"},"property table determining"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"TABLE book (Book);\n\nin = DATA BOOLEAN (Sku, Stock);\nTABLE skuStock (Sku, Stock); // it will store the in property\n\nprice = DATA NUMERIC[10,2] (Sku, DATE);\nTABLE skuDate (Sku, DATE); // it will store the Sku property\n\nTABLE sku (Sku) FULL;\n")))}p.isMDXComponent=!0},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);