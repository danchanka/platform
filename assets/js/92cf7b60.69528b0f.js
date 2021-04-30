(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{461:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(745)),p={title:"APPLY operator"},i={unversionedId:"APPLY_operator",id:"version-v4/APPLY_operator",isDocsHomePage:!1,title:"APPLY operator",description:"The APPLY operator creates an action that applies changes to the database.",source:"@site/versioned_docs/version-v4/APPLY_operator.md",slug:"/APPLY_operator",permalink:"/platform/APPLY_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/APPLY_operator.md",version:"v4",lastUpdatedAt:1619530455,formattedLastUpdatedAt:"4/27/2021",sidebar:"version-v4/learn",previous:{title:"ACTIVE FORM operator",permalink:"/platform/ACTIVE_FORM_operator"},next:{title:"ASK operator",permalink:"/platform/ASK_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"APPLY")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/Apply_changes_APPLY_"},"applies changes")," to the database."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"APPLY [nestedBlock] [SERIALIZABLE] [action]\n")),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"nestedBlock")," has one of two possible syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"APPLY")," operator creates an action that applies changes to the database. By specifying the keyword ",Object(o.b)("inlineCode",{parentName:"p"},"NESTED")," you can specify ",Object(o.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_#local"},"local properties")," whose changes are not dropped when applying the changes. This operator also includes an action to be executed before applying the changes to the database."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"LOCAL")),Object(o.b)("p",{parentName:"li"},"  Keyword. If specified, all local properties preserve their changes after the ",Object(o.b)("inlineCode",{parentName:"p"},"APPLY")," operator is executed. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(o.b)("p",{parentName:"li"},"  List of local properties. Each list element is a ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"property ID"),". The local properties specified in the list will preserve their changes after the operator is executed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"SERIALIZABLE")),Object(o.b)("p",{parentName:"li"},'  A keyword that sets the transaction isolation level to "Serializable".')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"action")),Object(o.b)("p",{parentName:"li"},"  A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent operator")," that describes an action to be executed before applying changes. It is executed in the same transaction as the application of changes."))),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nid = DATA INTEGER (Sku);\n\nin = DATA LOCAL BOOLEAN (Sku);\napplyIn()  {\n    in(Sku s) <- TRUE WHERE id(s) == 123;\n    APPLY NESTED (in[Sku]) {};\n    IF canceled() THEN\n        MESSAGE applyMessage();\n    FOR in(Sku s) DO\n        MESSAGE id(s); // shows '123'\n}\n\ncalculateInTransaction()  {\n    APPLY {\n        id(Sku s) <- (GROUP MAX id(Sku ss)) (+) 1; // putting down a new code inside the transaction\n    }\n}\n")))}s.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,m=b["".concat(p,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);