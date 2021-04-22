(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(747)),o={title:"TABLE instruction"},c={unversionedId:"TABLE_instruction",id:"version-v4/TABLE_instruction",isDocsHomePage:!1,title:"TABLE instruction",description:"The TABLE instruction creates an new table.",source:"@site/versioned_docs/version-v4/TABLE_instruction.md",slug:"/TABLE_instruction",permalink:"/platform/TABLE_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/TABLE_instruction.md",version:"v4",lastUpdatedAt:1619102841,formattedLastUpdatedAt:"4/22/2021",sidebar:"version-v4/learn",previous:{title:"Instruction @",permalink:"/platform/Instruction_"},next:{title:"INDEX instruction",permalink:"/platform/INDEX_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"TABLE")," instruction creates an new ",Object(i.b)("a",{parentName:"p",href:"/platform/Tables"},"table"),"."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"TABLE name(className1, ..., classNameN) [FULL | NODEFAULT];\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"TABLE")," instruction declares a new table and adds it to the current ",Object(i.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),". "),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"name")),Object(i.b)("p",{parentName:"li"},"  Table name. ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),". The name must be unique within the current ",Object(i.b)("a",{parentName:"p",href:"/platform/Naming#namespace"},"namespace"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"className1, ..., classNameN")),Object(i.b)("p",{parentName:"li"},"  List of class names. Each name is a ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#classname-broken"},"class ID"),". Specifies classes for the key fields of the table being created. Cannot be empty,")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"FULL")),Object(i.b)("p",{parentName:"li"},"  The keyword that, when specified, marks the table as ",Object(i.b)("a",{parentName:"p",href:"/platform/Tables#full"},"full")," (that is, containing all objects belonging to the classes of the table's key fields).  ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"NODEFAULT")),Object(i.b)("p",{parentName:"li"},"  The keyword that, when specified, excludes the table from the process of automatic ",Object(i.b)("a",{parentName:"p",href:"/platform/Tables#property"},"property table determining"),"."))),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"TABLE book (Book);\n\nin = DATA BOOLEAN (Sku, Stock);\nTABLE skuStock (Sku, Stock); // it will store the in property\n\nprice = DATA NUMERIC[10,2] (Sku, DATE);\nTABLE skuDate (Sku, DATE); // it will store the Sku property\n\nTABLE sku (Sku) FULL;\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);