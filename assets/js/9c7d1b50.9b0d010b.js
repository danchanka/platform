(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{493:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(747)),i={title:"How-to: Form extension"},c={unversionedId:"How-to_Form_extension",id:"How-to_Form_extension",isDocsHomePage:!1,title:"How-to: Form extension",description:"Let's assume there is a module that describes the\xa0Sku form that is used to edit SKU values:",source:"@site/docs/How-to_Form_extension.md",slug:"/How-to_Form_extension",permalink:"/platform/next/How-to_Form_extension",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Form_extension.md",version:"current",sidebar:"learn",previous:{title:"How-to: Action extension",permalink:"/platform/next/How-to_Action_extension"},next:{title:"How-to: Integration: Overview",permalink:"/platform/next/How-to_Integration"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Let's assume there is a module that describes the\xa0",Object(a.b)("strong",{parentName:"p"},"Sku")," form that is used to edit SKU values:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Sku;\n\nCLASS Sku; // declaring class Sku\n\nname 'Name' = DATA BPSTRING[100] (Sku); // creating a name property for it\n\nFORM sku 'Sku' // creating the Item form\n    OBJECTS s = Sku PANEL // adding a product object and making it display exactly one copy\n    PROPERTIES(s) name // adding the product name property to the form\n\n    EDIT Sku OBJECT s;\n;\n\nDESIGN sku {\n    NEW skuDetails AFTER BOX(s) { // creating a new container in a standard container right after i.box\n                                  // this container will be the tab panel, where tabs with product properties can be added\n        type = TABBED;\n        fill = 1; // let it expand to the whole form\n    }\n}\n")),Object(a.b)("p",null,"We need to implement additional functionality for adding multiple barcodes to an SKU. This can be done by creating a new module that will introduce a new\xa0",Object(a.b)("strong",{parentName:"p"},"Barcode"),"\xa0class and extend the functionality of the Sku edit form by adding the possibility to enter barcodes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE Barcode;\n\nREQUIRE Sku;\n\nCLASS Barcode; // declaring a barcode class\n\nid = DATA BPSTRING[13] (Barcode); // creating a property with a barcode number\nsku = DATA Sku (Barcode); // creating a barcode link to sku\n\nEXTEND FORM sku // creating the Item form\n    OBJECTS b = Barcode // adding the barcode object\n    PROPERTIES(b) id // adding the barcode number to the barcode table\n    PROPERTIES(b) NEW, DELETE // adding actions to create and delete barcodes\n    FILTERS sku(b) == s // making that only barcodes of this sku are displayed\n;\n\nDESIGN sku { // expanding the design of the Item form\n    skuDetails {\n        MOVE BOX(b); // making a container, which contains everything related to barcodes, by a tab in the previously created tab panel\n    }\n}\n")),Object(a.b)("p",null,"Note that the\xa0",Object(a.b)("strong",{parentName:"p"},"Barcode"),"\xa0module assumes that there is a\xa0",Object(a.b)("strong",{parentName:"p"},"Sku")," form with an\xa0",Object(a.b)("strong",{parentName:"p"},"s"),"\xa0 object and a container called\xa0",Object(a.b)("strong",{parentName:"p"},"skuDetails"),". If the form changes for some reason, the \xa0",Object(a.b)("strong",{parentName:"p"},"Barcode"),"\xa0module will become inoperable."))}u.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);