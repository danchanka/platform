(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{712:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(747)),o={title:"Instruction =>"},c={unversionedId:"Instruction=_",id:"version-v4/Instruction=_",isDocsHomePage:!1,title:"Instruction =>",description:"The => instruction creates a consequence.",source:"@site/versioned_docs/version-v4/Instruction=_.md",slug:"/Instruction=_",permalink:"/platform/Instruction=_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Instruction=_.md",version:"v4",lastUpdatedAt:1619092847,formattedLastUpdatedAt:"4/22/2021",sidebar:"version-v4/learn",previous:{title:"CONSTRAINT instruction",permalink:"/platform/CONSTRAINT_instruction"},next:{title:"CLASS instruction",permalink:"/platform/CLASS_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"=>")," instruction creates a ",Object(i.b)("a",{parentName:"p",href:"/platform/Simple_constraints"},"consequence"),"."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"=>")," instruction creates a consequence. This operator can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."),Object(i.b)("p",null,"When creating a consequence a ",Object(i.b)("a",{parentName:"p",href:"/platform/Constraints"},"constraint")," will be created, which is pretty similar to the following instruction"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n")),Object(i.b)("p",null,"but it allows you to automatically resolve situations where this constraint is violated. So using type ",Object(i.b)("inlineCode",{parentName:"p"},"RESOLVE LEFT")," is similar to creating ",Object(i.b)("a",{parentName:"p",href:"/platform/Simple_event"},"a simple event"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO \n    SETACTION(rightExpr);\n")),Object(i.b)("p",null," ",Object(i.b)("inlineCode",{parentName:"p"},"RESOLVE RIGHT"),", similarly:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\n    DROPACTION(rightExpr);\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"leftPropertyId")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"ID of the property")," specifying the consequence premise.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"param1, ..., paramN")),Object(i.b)("p",{parentName:"li"},"  List of ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#paramid-broken"},"parameters")," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"rightExpr")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression")," whose value determines the consequence.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"resolveType")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Simple_event"},"Auto resolution")," type in case of violation of the consequence. Specified by one of the following options:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LEFT"),": if the premise (the left part of the instruction) is changed to non-",Object(i.b)("inlineCode",{parentName:"li"},"NULL"),", then the consequence changes to non",Object(i.b)("inlineCode",{parentName:"li"},"NULL"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RIGHT"),": if the consequence (the right part of the instruction) changes to ",Object(i.b)("inlineCode",{parentName:"li"},"NULL"),", then the premise changes to ",Object(i.b)("inlineCode",{parentName:"li"},"NULL"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"LEFT RIGHT"),": similar to ",Object(i.b)("inlineCode",{parentName:"li"},"LEFT")," and ",Object(i.b)("inlineCode",{parentName:"li"},"RIGHT")," together. "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventClause")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Event_description_block"},"Event description block"),". Describes an ",Object(i.b)("a",{parentName:"p",href:"/platform/Events"},"event")," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."))),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"is(Sku s) = s IS Sku;\n// the product must have a barcode and name specified\nis(Sku s) => barcode(s);\nis(Sku s) => name(s);\n\n\nCLASS Invoice;\nCLASS InvoiceLine;\ninvoice = DATA Invoice (InvoiceLine);\nis(InvoiceLine l) = l IS InvoiceLine;\n// for a document line, a document must be specified, and when deleting a document, the lines of this document should be deleted\nis(InvoiceLine l) => invoice(l) RESOLVE RIGHT;\n// is equivalent to declaring document = DATA Invoice (InvoiceLine) NONULL DELETE;\n\n// aggregation for f(a, b) create an object of class x, whose property a(x) equals a, and property b(x) equals b\nCLASS A;\nCLASS B;\nf = DATA BOOLEAN (A, B);\n\nCLASS X;\na = DATA A(X);\nb = DATA B(X);\nis (X x) = x IS X;\n\nf(a,b) => [ GROUP AGGR X x WHERE x IS X BY a(x), b(x)](a,b) RESOLVE LEFT;\nis(X x) => f(a(x), b(x)) RESOLVE RIGHT;\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);