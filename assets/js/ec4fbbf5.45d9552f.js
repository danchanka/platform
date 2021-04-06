(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{691:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(746)),i={title:"Property extension"},s={unversionedId:"Property_extension",id:"version-v4/Property_extension",isDocsHomePage:!1,title:"Property extension",description:'The properties extension technique allows the developer to declare an abstract action in one module\xa0and define its implementation in other modules. This technique is essentially a "postponed definition" of a selection operator, where the operator\u2019s title is defined when the property is declared, and as new functionality (of classes\xa0or static objects) is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created.',source:"@site/versioned_docs/version-v4/Property_extension.md",slug:"/Property_extension",permalink:"/platform/Property_extension",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Property_extension.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Class extension",permalink:"/platform/Class_extension"},next:{title:"Action extension",permalink:"/platform/Action_extension"}},l=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Language",id:"language",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," ",Object(o.b)("a",{parentName:"p",href:"/platform/Extensions"},"extension")," technique allows the developer to declare an ",Object(o.b)("em",{parentName:"p"},"abstract action")," in one ",Object(o.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),'\xa0and define its implementation in other modules. This technique is essentially a "postponed definition" of a ',Object(o.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection operator"),", where the operator\u2019s title is defined when the property is declared, and as new functionality (of ",Object(o.b)("a",{parentName:"p",href:"/platform/Classes"},"classes"),"\xa0or ",Object(o.b)("a",{parentName:"p",href:"/platform/Static_objects"},"static objects"),") is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created."),Object(o.b)("p",null,"For abstract properties, the expected classes of parameters must be specified. Then the platform will automatically check that the implementations added match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions\xa0are ",Object(o.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"mutually exclusive"),")."),Object(o.b)("p",null,"Extension of properties allows you to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Implement the concept of property polymorphism by analogy with certain object-oriented programming languages."),Object(o.b)("li",{parentName:"ul"},'Remove dependency between modules by adding specific "entry points" to change the way properties are calculated.')),Object(o.b)("h3",{id:"poly"},"Polymorphic form"),Object(o.b)("p",null,"Just as ",Object(o.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#poly"},"for a selection operator"),", for an abstract property there is a ",Object(o.b)("em",{parentName:"p"},"polymorphic form")," where the selection condition and the result corresponding to it are set by a single property. Accordingly, as in a selection operator,\xa0either belonging to the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Property_signature_CLASS_"},"signature\xa0"),"of this property or the property itself can be a condition."),Object(o.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(o.b)("p",null,"As\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"for a selection operator"),", you can specify that all conditions of an abstract property must be\xa0",Object(o.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(o.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially given a polymorphic form of the abstract property)."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"The key instructions that implement the extension procedure are the ",Object(o.b)("a",{parentName:"p",href:"/platform/ABSTRACT_operator"},Object(o.b)("strong",{parentName:"a"},"ABSTRACT")," operator"),",for declaring an abstract action, and the ",Object(o.b)("a",{parentName:"p",href:"/platform/Instruction_+="},Object(o.b)("strong",{parentName:"a"},"+=")," instruction"),", for defining its implementation."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Invoice;\nCLASS InvoiceDetail;\nCLASS Range;\n\nrateChargeExchange(invoice) = ABSTRACT NUMERIC[14,6] (Invoice);             // In this case, ABSTRACT MULTI EXCLUSIVE is created\nbackgroundSku 'Color' (d) = ABSTRACT CASE FULL COLOR (InvoiceDetail); // In this case, ABSTRACT CASE OVERRIDE LAST is created, and if there are\n                                                                            // several suitable implementations, the first of them will be calculated\noverVAT = ABSTRACT VALUE OVERRIDE FIRST Range (InvoiceDetail);          // The last matching implementation will be calculated here\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT AClass;\nCLASS BClass : AClass;\nCLASS CClass : AClass;\nCLASS DClass : AClass;\n\nname(AClass a) = ABSTRACT BPSTRING[50] (AClass);\ninnerName(BClass b) = DATA BPSTRING[50] (BClass);\ninnerName(CClass c) = DATA BPSTRING[50] (CClass);\ninnerName(DClass d) = DATA BPSTRING[50] (DClass);\n\nname(BClass b) = 'B' + innerName(b);\nname(CClass c) = 'C' + innerName(c);\n\nname[AClass](BClass b) += name(b);\nname(CClass c) += name(c); // Here name[AClass] will be found on the left, because the search goes only among abstract properties, and on the right name[CClass] will be found\nname(DClass d) += 'DClass' + innerName(d) IF d IS DClass;\n")))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);