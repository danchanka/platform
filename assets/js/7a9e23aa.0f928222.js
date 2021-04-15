(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{400:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(747)),o={title:"ABSTRACT operator"},l={unversionedId:"ABSTRACT_operator",id:"version-v4/ABSTRACT_operator",isDocsHomePage:!1,title:"ABSTRACT operator",description:"The ABSTRACT operator creates an abstract property.",source:"@site/versioned_docs/version-v4/ABSTRACT_operator.md",slug:"/ABSTRACT_operator",permalink:"/platform/ABSTRACT_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ABSTRACT_operator.md",version:"v4",lastUpdatedAt:1618494747,formattedLastUpdatedAt:"4/15/2021",sidebar:"version-v4/learn",previous:{title:"Operator []",permalink:"/platform/Operator_"},next:{title:"ACTIVE TAB operator",permalink:"/platform/ACTIVE_TAB_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ABSTRACT")," operator creates an ",Object(i.b)("a",{parentName:"p",href:"/platform/Property_extension"},"abstract property"),"."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"ABSTRACT [type [exclusionType]] [CHECKED] returnClassName(argClassName1, ..., argClassNameN)\n")),Object(i.b)("p",null,"Where ",Object(i.b)("inlineCode",{parentName:"p"},"exclusionType")," is of two types:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"EXCLUSIVE\nOVERRIDE [FIRST | LAST]\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ABSTRACT")," operator creates an abstract property, the implementations of which can be defined later (for example, in other ",Object(i.b)("a",{parentName:"p",href:"/platform/Modules"},"modules")," dependent on the module containing the ",Object(i.b)("inlineCode",{parentName:"p"},"ABSTRACT")," property). Implementations are added to the property using the ",Object(i.b)("a",{parentName:"p",href:"/platform/Instruction_+="},"instruction ",Object(i.b)("strong",{parentName:"a"},"+=")),". When calculating an abstract property, its ",Object(i.b)("em",{parentName:"p"},"matching")," implementation is selected and calculated. The selection of the matching implementation depends on the ",Object(i.b)("em",{parentName:"p"},"selection conditions")," that are defined when adding implementations, and on the ",Object(i.b)("inlineCode",{parentName:"p"},"ABSTRACT")," operator type."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CASE")," - a general case. The selection condition will be explicitly specified in the implementation using the ",Object(i.b)("a",{parentName:"li",href:"/platform/Instruction_+="},Object(i.b)("inlineCode",{parentName:"a"},"WHEN")," block"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MULTI")," \u2013 a ",Object(i.b)("a",{parentName:"li",href:"/platform/Property_extension#poly"},"polymorphic form"),". The selection condition is that the parameters match the implementation ",Object(i.b)("a",{parentName:"li",href:"/platform/CLASS_operator"},"signature"),". This type is the default type and need not to be explicitly specified."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"VALUE")," - a polymorphic form. The selection condition will be definiteness (a none-",Object(i.b)("inlineCode",{parentName:"li"},"NULL")," value) of the implementation value (essentially, the implementation itself).")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/platform/Property_extension#exclusive"},"type of mutual exclusion")," of an operator determines whether several conditions for the implementation of an abstract property can simultaneously be met with a certain set of parameters. The ",Object(i.b)("inlineCode",{parentName:"p"},"EXCLUSIVE")," type indicates that implementation conditions cannot be met simultaneously. The ",Object(i.b)("inlineCode",{parentName:"p"},"OVERRIDE")," type allows several simultaneously met conditions. In this case, the implementation to be selected is determined by the keywords ",Object(i.b)("inlineCode",{parentName:"p"},"FIRST")," and ",Object(i.b)("inlineCode",{parentName:"p"},"LAST"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ABSTRACT")," operator cannot be used inside ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"expressions"),"."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"type")),Object(i.b)("p",{parentName:"li"},"  Type of abstract property. It is specified by one of the keywords:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"CASE"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"MULTI"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"VALUE")),Object(i.b)("p",{parentName:"li"},"The default value is ",Object(i.b)("inlineCode",{parentName:"p"},"MULTI"),".")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"exclusionType")),Object(i.b)("p",{parentName:"li"},"  Type of mutual exclusion. One of these keywords: ",Object(i.b)("inlineCode",{parentName:"p"},"EXCLUSIVE")," or ",Object(i.b)("inlineCode",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a ",Object(i.b)("inlineCode",{parentName:"p"},"MULTI")," abstract property the default type of mutual exclusion is ",Object(i.b)("inlineCode",{parentName:"p"},"EXCLUSIVE"),", and in all other cases the default mutual exclusion type is ",Object(i.b)("inlineCode",{parentName:"p"},"OVERRIDE"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"FIRST"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"LAST")),Object(i.b)("p",{parentName:"li"},"Keywords. Determine which of the matching implementations will be selected. When the word ",Object(i.b)("inlineCode",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list, so that the last added implementation will be selected. When the word ",Object(i.b)("inlineCode",{parentName:"p"},"LAST")," is specified, implementations will be added to the end of the implementations list, so that the implementation added first will be selected. If not specified, the default is ",Object(i.b)("inlineCode",{parentName:"p"},"FIRST"),". ")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"FULL")))),Object(i.b)("p",null,"Keyword. If specified, the platform will automatically check that at least one implementation is specified for all child objects of the argument classes (or exactly one if the conditions are mutually exclusive)."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"returnClassName"))),Object(i.b)("p",null,"Class of the return value of the property. ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#classid-broken"},"Class ID"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"argClassName1, ..., argClassNameN"))),Object(i.b)("p",null,"List of class names of property arguments. Each name is defined by a class ID."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Invoice;\nCLASS InvoiceDetail;\nCLASS Range;\n\nrateChargeExchange(invoice) = ABSTRACT NUMERIC[14,6] (Invoice);             // In this case, ABSTRACT MULTI EXCLUSIVE is created\nbackgroundSku 'Color' (d) = ABSTRACT CASE FULL COLOR (InvoiceDetail); // In this case, ABSTRACT CASE OVERRIDE LAST is created, and if there are\n                                                                            // several suitable implementations, the first of them will be calculated\noverVAT = ABSTRACT VALUE OVERRIDE FIRST Range (InvoiceDetail);          // The last matching implementation will be calculated here\n")))}b.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,u=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);