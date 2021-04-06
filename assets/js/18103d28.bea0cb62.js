(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(750)),i={title:"Property extension"},s={unversionedId:"Property_extension",id:"Property_extension",isDocsHomePage:!1,title:"Property extension",description:'The properties extension technique allows the developer to declare an abstract action in one module\xa0and define its implementation in other modules. This technique is essentially a "postponed definition" of a selection operator, where the operator\u2019s title is defined when the property is declared, and as new functionality (of classes\xa0or static objects) is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created.',source:"@site/docs/Property_extension.md",slug:"/Property_extension",permalink:"/platform/docs/next/Property_extension",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Property_extension.md",version:"current",sidebar:"docs",previous:{title:"Class extension",permalink:"/platform/docs/next/Class_extension"},next:{title:"Action extension",permalink:"/platform/docs/next/Action_extension"}},c=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Language",id:"language",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"properties")," ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Extensions"},"extension")," technique allows the developer to declare an ",Object(o.b)("em",{parentName:"p"},"abstract action")," in one ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Modules"},"module"),'\xa0and define its implementation in other modules. This technique is essentially a "postponed definition" of a ',Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection operator"),", where the operator\u2019s title is defined when the property is declared, and as new functionality (of ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Classes"},"classes"),"\xa0or ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Static_objects"},"static objects"),") is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created."),Object(o.b)("p",null,"For abstract properties, the expected classes of parameters must be specified. Then the platform will automatically check that the implementations added match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions\xa0are ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"mutually exclusive"),")."),Object(o.b)("p",null,"Extension of properties allows you to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Implement the concept of property polymorphism by analogy with certain object-oriented programming languages."),Object(o.b)("li",{parentName:"ul"},'Remove dependency between modules by adding specific "entry points" to change the way properties are calculated.')),Object(o.b)("h3",{id:"poly"},"Polymorphic form"),Object(o.b)("p",null,"Just as ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#poly"},"for a selection operator"),", for an abstract property there is a ",Object(o.b)("em",{parentName:"p"},"polymorphic form")," where the selection condition and the result corresponding to it are set by a single property. Accordingly, as in a selection operator,\xa0either belonging to the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Property_signature_CLASS_"},"signature\xa0"),"of this property or the property itself can be a condition."),Object(o.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(o.b)("p",null,"As\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"for a selection operator"),", you can specify that all conditions of an abstract property must be\xa0",Object(o.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(o.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially given a polymorphic form of the abstract property)."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"The key instructions that implement the extension procedure are the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/ABSTRACT_operator"},Object(o.b)("strong",{parentName:"a"},"ABSTRACT")," operator"),",for declaring an abstract action, and the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Instruction_+="},Object(o.b)("strong",{parentName:"a"},"+=")," instruction"),", for defining its implementation."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Invoice;\nCLASS InvoiceDetail;\nCLASS Range;\n\nrateChargeExchange(invoice) = ABSTRACT NUMERIC[14,6] (Invoice);             // In this case, ABSTRACT MULTI EXCLUSIVE is created\nbackgroundSku 'Color' (d) = ABSTRACT CASE FULL COLOR (InvoiceDetail); // In this case, ABSTRACT CASE OVERRIDE LAST is created, and if there are\n                                                                            // several suitable implementations, the first of them will be calculated\noverVAT = ABSTRACT VALUE OVERRIDE FIRST Range (InvoiceDetail);          // The last matching implementation will be calculated here\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT AClass;\nCLASS BClass : AClass;\nCLASS CClass : AClass;\nCLASS DClass : AClass;\n\nname(AClass a) = ABSTRACT BPSTRING[50] (AClass);\ninnerName(BClass b) = DATA BPSTRING[50] (BClass);\ninnerName(CClass c) = DATA BPSTRING[50] (CClass);\ninnerName(DClass d) = DATA BPSTRING[50] (DClass);\n\nname(BClass b) = 'B' + innerName(b);\nname(CClass c) = 'C' + innerName(c);\n\nname[AClass](BClass b) += name(b);\nname(CClass c) += name(c); // Here name[AClass] will be found on the left, because the search goes only among abstract properties, and on the right name[CClass] will be found\nname(DClass d) += 'DClass' + innerName(d) IF d IS DClass;\n")))}p.isMDXComponent=!0},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);