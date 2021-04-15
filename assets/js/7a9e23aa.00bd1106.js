(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{400:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(747)),i={title:"ABSTRACT operator"},l={unversionedId:"ABSTRACT_operator",id:"version-v4/ABSTRACT_operator",isDocsHomePage:!1,title:"ABSTRACT operator",description:"The ABSTRACT\xa0operator\xa0creates an abstract\xa0property.",source:"@site/versioned_docs/version-v4/ABSTRACT_operator.md",slug:"/ABSTRACT_operator",permalink:"/platform/ABSTRACT_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ABSTRACT_operator.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Operator []",permalink:"/platform/Operator_"},next:{title:"ACTIVE TAB operator",permalink:"/platform/ACTIVE_TAB_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator\xa0creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_extension"},"abstract\xa0property"),".\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ABSTRACT [type [exclusionType]] [CHECKED] returnClassName(argClassName1, ..., argClassNameN)\n")),Object(o.b)("p",null,"Where ",Object(o.b)("em",{parentName:"p"},"exclusionType"),"\xa0is of two types:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"EXCLUSIVE\nOVERRIDE [FIRST | LAST]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator creates an abstract property, the implementations of which can be defined later (for example, in other\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Modules"},"modules")," dependent on the module containing the\xa0",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0property). Implementations are added to the property using the ",Object(o.b)("a",{parentName:"p",href:"/platform/Instruction_+="},"instruction + ="),". When calculating an abstract property, its ",Object(o.b)("em",{parentName:"p"},"matching")," implementation is selected and calculated. The selection of the matching implementation depends on the ",Object(o.b)("em",{parentName:"p"},"selection conditions")," that are defined when adding implementations, and on the ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT")," operator type."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CASE")," -\xa0a general case.**\xa0",Object(o.b)("strong",{parentName:"li"},"The selection condition will be explicitly specified in the implementation using\xa0the ["),"WHEN**\xa0block](/platform/Instruction_+=)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MULTI"),"\xa0\u2013 a ",Object(o.b)("a",{parentName:"li",href:"/platform/Property_extension#poly"},"polymorphic form"),". The selection condition is that the parameters match the implementation ",Object(o.b)("a",{parentName:"li",href:"/platform/CLASS_operator"},"signature"),". This type is the default type and need not to be explicitly specified."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"VALUE")," - a polymorphic form",Object(o.b)("strong",{parentName:"li"},".\xa0"),"The selection condition will be definiteness (a none-",Object(o.b)("strong",{parentName:"li"},"NULL")," value) of the implementation value (essentially, the implementation itself).**\xa0**")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_extension#exclusive"},"type of mutual exclusion")," of an operator determines whether several conditions for the implementation of an abstract property can simultaneously be met with a certain set of parameters. The\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that implementation conditions cannot be met simultaneously. The ",Object(o.b)("strong",{parentName:"p"},"OVERRIDE")," type allows several simultaneously met conditions. In this case, the implementation to be selected is determined by the keywords ",Object(o.b)("strong",{parentName:"p"},"FIRST")," and ",Object(o.b)("strong",{parentName:"p"},"LAST"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT")," operator cannot be used inside ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expressions"),"."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"type")),Object(o.b)("p",null,"Type of abstract*\xa0*property. It is specified by one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CASE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MULTI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"VALUE",Object(o.b)("br",{parentName:"strong"})))),Object(o.b)("p",null,"The default value is\xa0",Object(o.b)("strong",{parentName:"p"},"MULTI"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"exclusionType")),Object(o.b)("p",null,"Type of mutual exclusion. One of these keywords:\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0or\xa0",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a ",Object(o.b)("strong",{parentName:"p"},"MULTI")," abstract property the default type of mutual exclusion is ",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),", and in all other cases the default mutual exclusion type is ",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FIRST")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LAST"))),Object(o.b)("p",null,"Keywords. Determine which of the matching implementations will be selected. When the word\xa0",Object(o.b)("strong",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list, so that the last added implementation will be selected. When the word\xa0",Object(o.b)("strong",{parentName:"p"},"LAST")," is specified, implementations will be added to the end of the implementations list, so that the implementation added first will be selected.\xa0If not specified, the default is\xa0",Object(o.b)("strong",{parentName:"p"},"FIRST"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"FULL")),Object(o.b)("p",null,"Keyword. If specified, the platform will automatically check\xa0that at least one implementation is specified for all child objects of the argument classes (or exactly one if the conditions are mutually exclusive)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"returnClassName")),Object(o.b)("p",null,"Class of the return value of the property. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#classid-broken"},"Class ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"argClassName1, ..., argClassNameN")),Object(o.b)("p",null,"List of class names of property arguments. Each name is defined by a class ID."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Invoice;\nCLASS InvoiceDetail;\nCLASS Range;\n\nrateChargeExchange(invoice) = ABSTRACT NUMERIC[14,6] (Invoice);             // In this case, ABSTRACT MULTI EXCLUSIVE is created\nbackgroundSku 'Color' (d) = ABSTRACT CASE FULL COLOR (InvoiceDetail); // In this case, ABSTRACT CASE OVERRIDE LAST is created, and if there are\n                                                                            // several suitable implementations, the first of them will be calculated\noverVAT = ABSTRACT VALUE OVERRIDE FIRST Range (InvoiceDetail);          // The last matching implementation will be calculated here\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);