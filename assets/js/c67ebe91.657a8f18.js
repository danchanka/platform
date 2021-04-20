(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{594:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(747)),c={title:"Instruction=>"},i={unversionedId:"Instruction=_",id:"Instruction=_",isDocsHomePage:!1,title:"Instruction=>",description:"The => instruction\xa0creates a\xa0consequence.",source:"@site/docs/Instruction=_.md",slug:"/Instruction=_",permalink:"/platform/next/Instruction=_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Instruction=_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"CONSTRAINT instruction",permalink:"/platform/next/CONSTRAINT_instruction"},next:{title:"CLASS instruction",permalink:"/platform/next/CLASS_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"=>")," instruction\xa0creates a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Simple_constraints"},"consequence"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"=>\xa0")," instruction creates a consequence.\xa0This operator **\xa0** can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."),Object(o.b)("p",null,"When creating a consequence a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Constraints"},"constraint")," will be created, which is pretty similar to the following instruction"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n")),Object(o.b)("p",null,"but it allows you to automatically resolve situations where this constraint is violated. So using type\xa0",Object(o.b)("strong",{parentName:"p"},"RESOLVE LEFT"),"\xa0is similar to creating ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Simple_event"},"a simple event"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO\xa0\n    SETACTION(rightExpr);\n")),Object(o.b)("p",null,"\xa0",Object(o.b)("strong",{parentName:"p"},"RESOLVE RIGHT"),", similarly:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\n    DROPACTION(rightExpr);\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"leftPropertyId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID of the property")," specifying the consequence premise."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#paramid-broken"},"parameters")," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"rightExpr")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression")," whose value determines the consequence."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"resolveType")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Simple_event"},"Auto resolution")," type in case of violation of the consequence. Specified by one of the following options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LEFT"),": if the premise (the left part of the instruction) is changed to non-",Object(o.b)("strong",{parentName:"li"},"NULL"),", then the consequence changes to non",Object(o.b)("strong",{parentName:"li"},"NULL"),".**\xa0**"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RIGHT"),":\xa0if the consequence (the right part of the instruction) changes to ",Object(o.b)("strong",{parentName:"li"},"NULL"),", then the premise changes to ",Object(o.b)("strong",{parentName:"li"},"NULL"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LEFT RIGHT"),": similar to ",Object(o.b)("strong",{parentName:"li"},"LEFT")," and ",Object(o.b)("strong",{parentName:"li"},"RIGHT")," together.\xa0")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Event_description_block"},"Event description block"),". Describes an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Events"},"event")," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"is(Sku s) = s IS Sku;\n// the product must have a barcode and name specified\nis(Sku s) => barcode(s);\nis(Sku s) => name(s);\n\n\nCLASS Invoice;\nCLASS InvoiceLine;\ninvoice = DATA Invoice (InvoiceLine);\nis(InvoiceLine l) = l IS InvoiceLine;\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\n\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\nCLASS A;\nCLASS B;\nf = DATA BOOLEAN (A, B);\n\nCLASS X;\na = DATA A(X);\nb = DATA B(X);\nis (X x) = x IS X;\n\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,f=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);