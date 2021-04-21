(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{713:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(747)),i={title:"CONSTRAINT instruction"},c={unversionedId:"CONSTRAINT_instruction",id:"version-v4/CONSTRAINT_instruction",isDocsHomePage:!1,title:"CONSTRAINT instruction",description:"The CONSTRAINT instruction creates a constraint.",source:"@site/versioned_docs/version-v4/CONSTRAINT_instruction.md",slug:"/CONSTRAINT_instruction",permalink:"/platform/CONSTRAINT_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/CONSTRAINT_instruction.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Instruction <- WHEN",permalink:"/platform/Instruction_-_WHEN"},next:{title:"Instruction=>",permalink:"/platform/Instruction=_"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CONSTRAINT")," instruction creates a ",Object(o.b)("a",{parentName:"p",href:"/platform/Constraints"},"constraint"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"CONSTRAINT eventClause constraintExpr [CHECKED [BY propertyId1, ..., propertyIdN]] MESSAGE messageExpr;\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CONSTRAINT")," instruction creates a constraint. If the constraint is violated, the user will be shown the message defined in the instruction."),Object(o.b)("p",null,"Also, by using the ",Object(o.b)("strong",{parentName:"p"},"CHECKED")," option you can use the constraint when showing dialogs for changing properties whose values may violate the constraint if changed. In this instance an additional filter will be set in the dialog so that, when the property value changes, the constraint is not violated. If it is necessary to limit the set of properties for which the above filtering will be performed, the list of properties can be specified after the keyword ",Object(o.b)("strong",{parentName:"p"},"BY")," ."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Creating a constraint is pretty similar to the following instruction:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},"constraintProperty = constraintExpr;\nWHEN eventClause [=GROUP MAX constraintProperty()]() DO {\n    PRINT outConstraintPropertyForm MESSAGE NOWAIT;\n    CANCEL;\n}\n")),Object(o.b)("p",{parentName:"div"},"but it also has ",Object(o.b)("a",{parentName:"p",href:"/platform/Constraints"},"a number of advantages"),"."))),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/Event_description_block"},"Event description block"),". Describes ",Object(o.b)("a",{parentName:"p",href:"/platform/Events"},"the event")," upon occurrence of which the created constraint will be checked."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"constraintExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," whose value is a condition for the constraint being created. If the obtained property does not contain the ",Object(o.b)("strong",{parentName:"p"},"PREV")," operator, the platform automatically wraps it into the ",Object(o.b)("strong",{parentName:"p"},"SET"),"operator."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(o.b)("p",null,"List of ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"property IDs"),". When showing change dialog for each property in that list, options that violate the created constraint will be filtered."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"messageExpr")),Object(o.b)("p",null,"An expression whose value is shown as a message to the user when the set constraint is violated. It may be either a ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#strliteral-broken"},"string literal")," or a property without parameters."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// balance not less than 0\nCONSTRAINT balance(Sku s, Stock st) < 0\n    MESSAGE 'The balance cannot be negative for ' + (GROUP CONCAT 'Product: ' + name(Sku ss) + ' Warehouse: ' + name(Stock sst), '\\n' IF SET(balance(ss, sst) < 0));\n\nbarcode = DATA STRING[15] (Sku);\n// \"emulation\" security policy\nCONSTRAINT DROPCHANGED(barcode(Sku s)) AND name(currentUser()) != 'admin' MESSAGE 'Only the administrator is allowed to change the barcode for an already created product';\n\nsku = DATA Sku (OrderDetail);\nin = DATA BOOLEAN (Sku, Customer);\n\nCONSTRAINT sku(OrderDetail d) AND NOT in(sku(d), customer(order(d)))\n    CHECKED BY sku[OrderDetail] // a filter by available sku when selecting an item for an order line will be applied\n    MESSAGE 'In the order, a product unavailable to the user is selected for the selected customer';\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);