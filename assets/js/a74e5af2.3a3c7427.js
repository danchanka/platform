(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[53609],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(f,p(p({ref:t},m),{},{components:a})):n.createElement(f,p({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},45223:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),p={title:"ABSTRACT operator"},i={unversionedId:"ABSTRACT_operator",id:"ABSTRACT_operator",isDocsHomePage:!1,title:"ABSTRACT operator",description:"The ABSTRACT operator creates an abstract property.",source:"@site/docs/ABSTRACT_operator.md",sourceDirName:".",slug:"/ABSTRACT_operator",permalink:"/platform/next/ABSTRACT_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/ABSTRACT_operator.md",version:"current",lastUpdatedAt:1618486385,formattedLastUpdatedAt:"4/15/2021",frontMatter:{title:"ABSTRACT operator"},sidebar:"learn",previous:{title:"Operator []",permalink:"/platform/next/Operator_"},next:{title:"ACTIVE TAB operator",permalink:"/platform/next/ACTIVE_TAB_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"ABSTRACT")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Property_extension"},"abstract property"),". "),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ABSTRACT [type [exclusionType]] [CHECKED] returnClassName(argClassName1, ..., argClassNameN)\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("em",{parentName:"p"},"exclusionType")," is of two types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EXCLUSIVE\nOVERRIDE [FIRST | LAST]\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"ABSTRACT")," operator creates an abstract property, the implementations of which can be defined later (for example, in other ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Modules"},"modules")," dependent on the module containing the ",(0,o.kt)("strong",{parentName:"p"},"ABSTRACT")," property). Implementations are added to the property using the ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Instruction_+="},"instruction +="),". When calculating an abstract property, its ",(0,o.kt)("em",{parentName:"p"},"matching")," implementation is selected and calculated. The selection of the matching implementation depends on the ",(0,o.kt)("em",{parentName:"p"},"selection conditions")," that are defined when adding implementations, and on the ",(0,o.kt)("strong",{parentName:"p"},"ABSTRACT")," operator type."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CASE")," - a general case. The selection condition will be explicitly specified in the implementation using the ",(0,o.kt)("a",{parentName:"li",href:"/platform/next/Instruction_+="},(0,o.kt)("strong",{parentName:"a"},"WHEN")," block"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MULTI")," \u2013 a ",(0,o.kt)("a",{parentName:"li",href:"/platform/next/Property_extension#poly"},"polymorphic form"),". The selection condition is that the parameters match the implementation ",(0,o.kt)("a",{parentName:"li",href:"/platform/next/CLASS_operator"},"signature"),". This type is the default type and need not to be explicitly specified."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"VALUE")," - a polymorphic form. The selection condition will be definiteness (a none-",(0,o.kt)("strong",{parentName:"li"},"NULL")," value) of the implementation value (essentially, the implementation itself).")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Property_extension#exclusive"},"type of mutual exclusion")," of an operator determines whether several conditions for the implementation of an abstract property can simultaneously be met with a certain set of parameters. The ",(0,o.kt)("strong",{parentName:"p"},"EXCLUSIVE")," type indicates that implementation conditions cannot be met simultaneously. The ",(0,o.kt)("strong",{parentName:"p"},"OVERRIDE")," type allows several simultaneously met conditions. In this case, the implementation to be selected is determined by the keywords ",(0,o.kt)("strong",{parentName:"p"},"FIRST")," and ",(0,o.kt)("strong",{parentName:"p"},"LAST"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"ABSTRACT")," operator cannot be used inside ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"expressions"),"."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"type")),(0,o.kt)("p",{parentName:"li"},"  Type of abstract property. It is specified by one of the keywords:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CASE"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"MULTI"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"VALUE")),(0,o.kt)("p",{parentName:"li"},"The default value is ",(0,o.kt)("strong",{parentName:"p"},"MULTI"),".")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"exclusionType")),(0,o.kt)("p",{parentName:"li"},"  Type of mutual exclusion. One of these keywords: ",(0,o.kt)("strong",{parentName:"p"},"EXCLUSIVE")," or ",(0,o.kt)("strong",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a ",(0,o.kt)("strong",{parentName:"p"},"MULTI")," abstract property the default type of mutual exclusion is ",(0,o.kt)("strong",{parentName:"p"},"EXCLUSIVE"),", and in all other cases the default mutual exclusion type is ",(0,o.kt)("strong",{parentName:"p"},"OVERRIDE"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"FIRST"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"LAST")),(0,o.kt)("p",{parentName:"li"},"Keywords. Determine which of the matching implementations will be selected. When the word ",(0,o.kt)("strong",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list, so that the last added implementation will be selected. When the word ",(0,o.kt)("strong",{parentName:"p"},"LAST")," is specified, implementations will be added to the end of the implementations list, so that the implementation added first will be selected. If not specified, the default is ",(0,o.kt)("strong",{parentName:"p"},"FIRST"),". ")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"FULL")),(0,o.kt)("p",{parentName:"li"},"  Keyword. If specified, the platform will automatically check that at least one implementation is specified for all child objects of the argument classes (or exactly one if the conditions are mutually exclusive).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"returnClassName")),(0,o.kt)("p",{parentName:"li"},"  Class of the return value of the property. ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#classid-broken"},"Class ID"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"argClassName1, ..., argClassNameN")),(0,o.kt)("p",{parentName:"li"},"  List of class names of property arguments. Each name is defined by a class ID."))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Invoice;\nCLASS InvoiceDetail;\nCLASS Range;\n\nrateChargeExchange(invoice) = ABSTRACT NUMERIC[14,6] (Invoice);             // In this case, ABSTRACT MULTI EXCLUSIVE is created\nbackgroundSku 'Color' (d) = ABSTRACT CASE FULL COLOR (InvoiceDetail); // In this case, ABSTRACT CASE OVERRIDE LAST is created, and if there are\n                                                                            // several suitable implementations, the first of them will be calculated\noverVAT = ABSTRACT VALUE OVERRIDE FIRST Range (InvoiceDetail);          // The last matching implementation will be calculated here\n")))}m.isMDXComponent=!0}}]);