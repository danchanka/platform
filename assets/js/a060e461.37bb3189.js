(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{505:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(746)),o={title:"INDEX instruction"},p={unversionedId:"INDEX_instruction",id:"INDEX_instruction",isDocsHomePage:!1,title:"INDEX instruction",description:"The INDEX instruction creates a new index.",source:"@site/docs/INDEX_instruction.md",slug:"/INDEX_instruction",permalink:"/platform/next/INDEX_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/INDEX_instruction.md",version:"current",sidebar:"learn",previous:{title:"TABLE instruction",permalink:"/platform/next/TABLE_instruction"},next:{title:"BEFORE instruction",permalink:"/platform/next/BEFORE_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"INDEX")," instruction creates a new ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Indexes"},"index"),"."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"INDEX field1, ..., fieldN;\n")),Object(i.b)("p",null,"Each field of the ",Object(i.b)("em",{parentName:"p"},"fieldi")," ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Tables"},"table")," that the system should use to build an index can be described either by specifying a ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property")," stored in this table:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"propertyId(param1, ..., paramN)\n")),Object(i.b)("p",null,"or by specifying a typed parameter referring to the corresponding key field:\xa0"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"param\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The \xa0",Object(i.b)("strong",{parentName:"p"},"INDEX")," instruction adds a new index by an ordered list of fields of a certain table. The list must contain at least one property. The table that the index should be built for is determined by the first property in the list. Also, the parameters passed to this property are used to determine the correspondence of the parameters to the key fields of the table. Accordingly, all other properties in the list should have the same number of parameters and be stored in the same table as the first property. The parameters specified in the list will correspond to the key fields of the table."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"propertyId")),Object(i.b)("p",null,"The ID of the ",Object(i.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"property")," that should be stored in the table for which the index is being created."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(i.b)("p",null,"A list of property parameters. Each element of the list is a ",Object(i.b)("a",{parentName:"p",href:"/platform/next/IDs#paramid-broken"},"typed parameter"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"param")),Object(i.b)("p",null,"A typed parameter that determines the key field of the table.*  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"})),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"INDEX customer(Order o);\n\ndate = DATA DATE (Order);\nINDEX date(Order o), o;\n\nINDEX name(Sku s), price(s, DATE d), d;\n")))}s.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return r?a.a.createElement(m,p(p({ref:t},l),{},{components:r})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);