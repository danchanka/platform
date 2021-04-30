(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{326:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(745)),s={title:"How-to: Namespaces"},c={unversionedId:"How-to_Namespaces",id:"version-v4/How-to_Namespaces",isDocsHomePage:!1,title:"How-to: Namespaces",description:"Occasionally, you will find yourself in situations where you will need to use the same name for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the NAMESPACE instruction. By default, the namespace matches the name of the module.",source:"@site/versioned_docs/version-v4/How-to_Namespaces.md",slug:"/How-to_Namespaces",permalink:"/platform/How-to_Namespaces",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Namespaces.md",version:"v4",lastUpdatedAt:1619768637,formattedLastUpdatedAt:"4/30/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Searching for elements",permalink:"/platform/How-to_Searching_for_elements"},next:{title:"How-to: Explicit typing",permalink:"/platform/How-to_Explicit_typing"}},l=[],i={toc:l};function p(e){var n=e.components,s=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,s,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Occasionally, you will find yourself in situations where you will need to use the same ",Object(o.b)("a",{parentName:"p",href:"/platform/Naming"},"name")," for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the ",Object(o.b)("a",{parentName:"p",href:"/platform/Module_header"},Object(o.b)("inlineCode",{parentName:"a"},"NAMESPACE")," instruction"),". By default, the namespace matches the name of the module."),Object(o.b)("p",null,"Let's create two modules, ",Object(o.b)("inlineCode",{parentName:"p"},"UseCaseNamePurchase")," and ",Object(o.b)("inlineCode",{parentName:"p"},"UseCaseNameSale"),", that declare the logic of purchase and sell orders:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNamePurchase;\n\nNAMESPACE Purchase;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Purchase orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE UseCaseNameSale;\n\nNAMESPACE Sale;\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders 'Sales orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(o.b)("p",null,"Both of them have the ",Object(o.b)("inlineCode",{parentName:"p"},"Order")," class declared in them, but since the modules have different namespaces, the first one's will be ",Object(o.b)("inlineCode",{parentName:"p"},"Purchase"),", the second one's will be ",Object(o.b)("inlineCode",{parentName:"p"},"Sale"),"."),Object(o.b)("p",null,"Let's declare a test module with a ",Object(o.b)("inlineCode",{parentName:"p"},"Test")," namespace that will simultaneously depend on both modules:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"REQUIRE UseCaseNamePurchase, UseCaseNameSale;\n\nNAMESPACE Test;\n\nmessagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Purchase.Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),Object(o.b)("p",null,"If you try to refer to the ",Object(o.b)("inlineCode",{parentName:"p"},"Order")," class without explicitly specifying the namespace, you will see an error message:"),Object(o.b)("p",null,Object(o.b)("img",{src:t(865).default})),Object(o.b)("p",null,"All such references require an explicit specification of the namespace."),Object(o.b)("p",null,"In case the namespace of a module matches the space of the required system element (for example, ",Object(o.b)("inlineCode",{parentName:"p"},"Purchase"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"NAMESPACE Purchase;\n")),Object(o.b)("p",null,"or the namespace priority has not been specified using the ",Object(o.b)("a",{parentName:"p",href:"/platform/Module_header"},Object(o.b)("inlineCode",{parentName:"a"},"PRIORITY")," instruction"),","),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"PRIORITY Purchase;\n")),Object(o.b)("p",null,"you can skip the specification of the namespace"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"messagePurchaseCount 'Display the number of purchase orders' {\n    MESSAGE GROUP SUM 1 IF o IS Order;\n}\nmessageSaleCount 'Display the number of sales orders' {\n    MESSAGE GROUP SUM 1 IF o IS Sale.Order;\n}\n\nNAVIGATOR {\n    NEW ACTION messagePurchaseCount;\n    NEW ACTION messageSaleCount;\n}\n")),Object(o.b)("p",null,"If you don't specify the namespace, the class from ",Object(o.b)("inlineCode",{parentName:"p"},"Purchase")," will be used. You still can explicitly specify the namespace (for example, ",Object(o.b)("inlineCode",{parentName:"p"},"Sale"),")."))}p.isMDXComponent=!0},745:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.a.createElement(b,c(c({ref:n},i),{},{components:t})):r.a.createElement(b,c({ref:n},i))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},865:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/60555398-d3869b9262099eff7d50035cbade492e.png"}}]);