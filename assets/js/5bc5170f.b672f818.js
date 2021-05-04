(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[21242],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29624:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return i},default:function(){return p}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),s={title:"How-to: Namespaces"},l={unversionedId:"How-to_Namespaces",id:"version-v4/How-to_Namespaces",isDocsHomePage:!1,title:"How-to: Namespaces",description:"Occasionally, you will find yourself in situations where you will need to use the same name for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the NAMESPACE instruction. By default, the namespace matches the name of the module.",source:"@site/versioned_docs/version-v4/How-to_Namespaces.md",sourceDirName:".",slug:"/How-to_Namespaces",permalink:"/platform/How-to_Namespaces",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Namespaces.md",version:"v4",lastUpdatedAt:1620140923,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"How-to: Namespaces"},sidebar:"version-v4/learn",previous:{title:"How-to: Searching for elements",permalink:"/platform/How-to_Searching_for_elements"},next:{title:"How-to: Explicit typing",permalink:"/platform/How-to_Explicit_typing"}},i=[],c={toc:i};function p(e){var n=e.components,s=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Occasionally, you will find yourself in situations where you will need to use the same ",(0,o.kt)("a",{parentName:"p",href:"/platform/Naming"},"name")," for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the ",(0,o.kt)("a",{parentName:"p",href:"/platform/Module_header"},(0,o.kt)("inlineCode",{parentName:"a"},"NAMESPACE")," instruction"),". By default, the namespace matches the name of the module."),(0,o.kt)("p",null,"Let's create two modules, ",(0,o.kt)("inlineCode",{parentName:"p"},"UseCaseNamePurchase")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UseCaseNameSale"),", that declare the logic of purchase and sell orders:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNamePurchase;\n\nNAMESPACE Purchase;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Purchase orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNameSale;\n\nNAMESPACE Sale;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Sales orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),(0,o.kt)("p",null,"Both of them have the ",(0,o.kt)("inlineCode",{parentName:"p"},"Order")," class declared in them, but since the modules have different namespaces, the first one's will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Purchase"),", the second one's will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Sale"),"."),(0,o.kt)("p",null,"Let's declare a test module with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," namespace that will simultaneously depend on both modules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE UseCaseNamePurchase, UseCaseNameSale;\n\nNAMESPACE Test;\n\nmessagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Purchase.Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),(0,o.kt)("p",null,"If you try to refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Order")," class without explicitly specifying the namespace, you will see an error message:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(29054).Z})),(0,o.kt)("p",null,"All such references require an explicit specification of the namespace."),(0,o.kt)("p",null,"In case the namespace of a module matches the space of the required system element (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Purchase"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"NAMESPACE Purchase;\n")),(0,o.kt)("p",null,"or the namespace priority has not been specified using the ",(0,o.kt)("a",{parentName:"p",href:"/platform/Module_header"},(0,o.kt)("inlineCode",{parentName:"a"},"PRIORITY")," instruction"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"PRIORITY Purchase;\n")),(0,o.kt)("p",null,"you can skip the specification of the namespace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"messagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),(0,o.kt)("p",null,"If you don't specify the namespace, the class from ",(0,o.kt)("inlineCode",{parentName:"p"},"Purchase")," will be used. You still can explicitly specify the namespace (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Sale"),")."))}p.isMDXComponent=!0},29054:function(e,n,t){"use strict";n.Z=t.p+"assets/images/How-to_Namespaces-d3869b9262099eff7d50035cbade492e.png"}}]);