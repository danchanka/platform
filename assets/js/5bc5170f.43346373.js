(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),s=(n(0),n(747)),o={title:"How-to: Namespaces"},c={unversionedId:"How-to_Namespaces",id:"version-v4/How-to_Namespaces",isDocsHomePage:!1,title:"How-to: Namespaces",description:"Occasionally, you will find yourself in situations where you will need to use the same name for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the NAMESPACE instruction. By default, the namespace matches the name of the module.",source:"@site/versioned_docs/version-v4/How-to_Namespaces.md",slug:"/How-to_Namespaces",permalink:"/platform/How-to_Namespaces",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Namespaces.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Searching for elements",permalink:"/platform/How-to_Searching_for_elements"},next:{title:"How-to: Explicit typing",permalink:"/platform/How-to_Explicit_typing"}},l=[],p={toc:l};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Occasionally, you will find yourself in situations where you will need to use the same ",Object(s.b)("a",{parentName:"p",href:"/platform/Naming"},"name")," for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the ",Object(s.b)("a",{parentName:"p",href:"/platform/Module_header"},"NAMESPACE")," instruction. By default, the namespace matches the name of the module."),Object(s.b)("p",null,"Let's create two modules, ",Object(s.b)("strong",{parentName:"p"},"UseCaseNamePurchase")," and ",Object(s.b)("strong",{parentName:"p"},"UseCaseNameSale"),", that declare the logic of purchase and sell orders :"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNamePurchase;\n\nNAMESPACE Purchase;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Purchase orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNameSale;\n\nNAMESPACE Sale;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Sales orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(s.b)("p",null,"Both of them have the ",Object(s.b)("strong",{parentName:"p"},"Order")," class declared in them, but since the modules have different namespaces, the first one's will be ",Object(s.b)("strong",{parentName:"p"},"Purchase"),", the second one's will be ",Object(s.b)("strong",{parentName:"p"},"Sale"),"."),Object(s.b)("p",null,"Let's declare a test module with a ",Object(s.b)("strong",{parentName:"p"},"Test")," namespace that will simultaneously depend on both modules:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE UseCaseNamePurchase, UseCaseNameSale;\n\nNAMESPACE Test;\n\nmessagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Purchase.Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),Object(s.b)("p",null,"If you try to refer to the ",Object(s.b)("strong",{parentName:"p"},"Order")," class without explicitly specifying the namespace, you will see an error message:"),Object(s.b)("p",null,Object(s.b)("img",{src:n(867).default})),Object(s.b)("p",null,"All such references require an explicit specification of the namespace."),Object(s.b)("p",null,"In case the namespace of a module matches the space of the required system element (for example, ",Object(s.b)("strong",{parentName:"p"},"Purchase"),")"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lsf"},"NAMESPACE Purchase;\n")),Object(s.b)("p",null,"or the namespace priority has not been specified using the ",Object(s.b)("a",{parentName:"p",href:"/platform/Module_header"},"PRIORITY")," instruction,"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lsf"},"PRIORITY Purchase;\n")),Object(s.b)("p",null,"you can skip the specification of the namespace"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lsf"},"messagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),Object(s.b)("p",null,"If you don't specify the namespace, the class from ",Object(s.b)("strong",{parentName:"p"},"Purchase")," will be used. You still can explicitly specify the namespace (for example, ",Object(s.b)("strong",{parentName:"p"},"Sale"),")."))}u.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=u(n),d=r,b=i["".concat(o,".").concat(d)]||i[d]||m[d]||s;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<s;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},867:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/60555398-d3869b9262099eff7d50035cbade492e.png"}}]);