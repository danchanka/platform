(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{596:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(747)),i={title:"Loop (FOR)"},c={unversionedId:"Loop_FOR_",id:"version-v4/Loop_FOR_",isDocsHomePage:!1,title:"Loop (FOR)",description:"The loop operator creates an action that iterates all object collections for which the defined condition is met, and executes a defined action for each such object collection (let's call it the main one). You can also define an alternative action that will be executed only if no object collections have been found that meet the condition. The condition itself is defined as a certain property. Let's say that the condition is satisfied if the value of this property is not NULL.",source:"@site/versioned_docs/version-v4/Loop_FOR_.md",slug:"/Loop_FOR_",permalink:"/platform/Loop_FOR_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Loop_FOR_.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Call (EXEC)",permalink:"/platform/Call_EXEC_"},next:{title:"Branching (CASE, IF, MULTI)",permalink:"/platform/Branching_CASE_IF_MULTI_"}},l=[{value:"Adding an object",id:"addobject",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"loop")," operator creates an ",Object(a.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that iterates all object collections for which the defined ",Object(a.b)("em",{parentName:"p"},"condition")," is met, and executes a defined action for each such object collection (let's call it the ",Object(a.b)("em",{parentName:"p"},"main one).")," You can also define an ",Object(a.b)("em",{parentName:"p"},"alternative action")," that will be executed only if no object collections have been found that meet the condition",Object(a.b)("em",{parentName:"p"},".")," The condition itself is defined as a certain ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"property"),". Let's say that the condition is ",Object(a.b)("em",{parentName:"p"},"satisfied")," if the value of this property is not ",Object(a.b)("strong",{parentName:"p"},"NULL"),". "),Object(a.b)("p",null,"By default, object collections are iterated in arbitrary order. However, the developer can explicitly define this order, if necessary. To do this, you need to specify a list of properties with values in an ascending or descending order that will define the order of object iteration."),Object(a.b)("p",null,"As for other ",Object(a.b)("a",{parentName:"p",href:"/platform/Set_operations"},"set operations"),", the condition must be such that the operation is ",Object(a.b)("a",{parentName:"p",href:"/platform/Set_operations#correct"},"correct"),"."),Object(a.b)("h3",{id:"addobject"},"Adding an object"),Object(a.b)("p",null,"This operator also allows you to create an object of a specified concrete ",Object(a.b)("a",{parentName:"p",href:"/platform/User_classes"},"custom class")," for each iterated object collection. This object can then be used in the main action as a parameter."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"The syntax of the loop operator is described by ",Object(a.b)("a",{parentName:"p",href:"/platform/FOR_operator"},"the",Object(a.b)("strong",{parentName:"a"},"FOR")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"name = DATA STRING[100] (Store);\n\ntestFor  {\n    LOCAL sum = INTEGER ();\n    FOR iterate(i, 1, 100) DO {\n        sum() <- sum() (+) i;\n    }\n\n    FOR in(Sku s) DO {\n        MESSAGE 'Sku ' + id(s) + ' was selected';\n    }\n\n    FOR Store st IS Store DO { // iterating over all objects of the Store class\n        FOR in(st, Sku s) DO { // iterating over all Sku for which in is set\n            MESSAGE 'There is Sku ' + id(s) + ' in store ' + name(st);\n        }\n\n    }\n}\n\nnewSku ()  {\n    NEW s = Sku {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n\ncopy (Sku old)  {\n    NEW new = Sku {\n        id(new) <- id(old);\n        name(new) <- name(old);\n    }\n}\n\ncreateDetails (Order o)  {\n    FOR in(Sku s) NEW d = OrderDetail DO {\n        order(d) <- o;\n        sku(d) <- s;\n    }\n}\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);