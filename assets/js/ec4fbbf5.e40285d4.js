(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[82209],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23685:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Property extension"},s={unversionedId:"Property_extension",id:"version-v4/Property_extension",isDocsHomePage:!1,title:"Property extension",description:'The properties extension technique allows the developer to declare an abstract action in one module and define its implementation in other modules. This technique is essentially a "postponed definition" of a selection operator, where the operator\u2019s title is defined when the property is declared, and as new functionality (of classes or static objects) is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created.',source:"@site/versioned_docs/version-v4/Property_extension.md",sourceDirName:".",slug:"/Property_extension",permalink:"/platform/Property_extension",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Property_extension.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",frontMatter:{title:"Property extension"},sidebar:"version-v4/learn",previous:{title:"Class extension",permalink:"/platform/Class_extension"},next:{title:"Action extension",permalink:"/platform/Action_extension"}},l=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Language",id:"language",children:[]},{value:"Example",id:"example",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/platform/Properties"},"properties")," ",(0,o.kt)("a",{parentName:"p",href:"/platform/Extensions"},"extension")," technique allows the developer to declare an ",(0,o.kt)("em",{parentName:"p"},"abstract action")," in one ",(0,o.kt)("a",{parentName:"p",href:"/platform/Modules"},"module"),' and define its implementation in other modules. This technique is essentially a "postponed definition" of a ',(0,o.kt)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection operator"),", where the operator\u2019s title is defined when the property is declared, and as new functionality (of ",(0,o.kt)("a",{parentName:"p",href:"/platform/Classes"},"classes")," or ",(0,o.kt)("a",{parentName:"p",href:"/platform/Static_objects"},"static objects"),") is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created."),(0,o.kt)("p",null,"For abstract properties, the expected classes of parameters must be specified. Then the platform will automatically check that the implementations added match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions are ",(0,o.kt)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"mutually exclusive"),")."),(0,o.kt)("p",null,"Extension of properties allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implement the concept of property polymorphism by analogy with certain object-oriented programming languages."),(0,o.kt)("li",{parentName:"ul"},'Remove dependency between modules by adding specific "entry points" to change the way properties are calculated.')),(0,o.kt)("h3",{id:"poly"},"Polymorphic form"),(0,o.kt)("p",null,"Just as ",(0,o.kt)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#poly"},"for a selection operator"),", for an abstract property there is a ",(0,o.kt)("em",{parentName:"p"},"polymorphic form")," where the selection condition and the result corresponding to it are set by a single property. Accordingly, as in a selection operator, either belonging to the ",(0,o.kt)("a",{parentName:"p",href:"/platform/Property_signature_CLASS_"},"signature "),"of this property or the property itself can be a condition."),(0,o.kt)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),(0,o.kt)("p",null,"As ",(0,o.kt)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"for a selection operator"),", you can specify that all conditions of an abstract property must be ",(0,o.kt)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),(0,o.kt)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially given a polymorphic form of the abstract property)."),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"The key instructions that implement the extension procedure are the ",(0,o.kt)("a",{parentName:"p",href:"/platform/ABSTRACT_operator"},(0,o.kt)("strong",{parentName:"a"},"ABSTRACT")," operator"),",for declaring an abstract action, and the ",(0,o.kt)("a",{parentName:"p",href:"/platform/Instruction_+="},(0,o.kt)("strong",{parentName:"a"},"+=")," instruction"),", for defining its implementation."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Invoice;\nCLASS InvoiceDetail;\nCLASS Range;\n\nrateChargeExchange(invoice) = ABSTRACT NUMERIC[14,6] (Invoice);             // In this case, ABSTRACT MULTI EXCLUSIVE is created\nbackgroundSku 'Color' (d) = ABSTRACT CASE FULL COLOR (InvoiceDetail); // In this case, ABSTRACT CASE OVERRIDE LAST is created, and if there are\n                                                                            // several suitable implementations, the first of them will be calculated\noverVAT = ABSTRACT VALUE OVERRIDE FIRST Range (InvoiceDetail);          // The last matching implementation will be calculated here\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT AClass;\nCLASS BClass : AClass;\nCLASS CClass : AClass;\nCLASS DClass : AClass;\n\nname(AClass a) = ABSTRACT BPSTRING[50] (AClass);\ninnerName(BClass b) = DATA BPSTRING[50] (BClass);\ninnerName(CClass c) = DATA BPSTRING[50] (CClass);\ninnerName(DClass d) = DATA BPSTRING[50] (DClass);\n\nname(BClass b) = 'B' + innerName(b);\nname(CClass c) = 'C' + innerName(c);\n\nname[AClass](BClass b) += name(b);\nname(CClass c) += name(c); // Here name[AClass] will be found on the left, because the search goes only among abstract properties, and on the right name[CClass] will be found\nname(DClass d) += 'DClass' + innerName(d) IF d IS DClass;\n")))}c.isMDXComponent=!0}}]);