(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{248:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(747)),c={title:"How-to: IF/CASE"},i={unversionedId:"How-to_IF_CASE",id:"version-v4/How-to_IF_CASE",isDocsHomePage:!1,title:"How-to: IF/CASE",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_IF_CASE.md",slug:"/How-to_IF_CASE",permalink:"/platform/How-to_IF_CASE",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_IF_CASE.md",version:"v4",lastUpdatedAt:1619622551,formattedLastUpdatedAt:"4/28/2021",sidebar:"version-v4/learn",previous:{title:"How-to: FOR",permalink:"/platform/How-to_FOR"},next:{title:"How-to: WHILE",permalink:"/platform/How-to_WHILE"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],p={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have a list of books associated with certain categories. Each book is assigned a price."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nCLASS Category 'Category' {\n    novel 'Novel',\n    thriller 'Thriller',\n    fiction 'Fiction'\n}\n\ncategory 'Category' = DATA Category (Book);\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n")),Object(a.b)("p",null,"We need to create an action that sets a given price for books associated with the specific category and a fixed price for all other books. When no category is selected, the error message must appear."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setPriceIf 'Set price' (Book b)  {\n    IF NOT category(b) THEN\n        MESSAGE 'No category selected for the book';\n    ELSE\n        IF category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        ELSE\n            price(b) <- 100.0;\n}\n")),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("a",{parentName:"p",href:"#example-1"},Object(a.b)("strong",{parentName:"a"},"Example 1")),"."),Object(a.b)("p",null,"We need to create an action that sets pre-defined prices for books associated with any of the three categories and sets zero price for all other books."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setPriceCase 'Set price' (Book b)  {\n    CASE\n        WHEN category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        WHEN category(b) == Category.thriller THEN\n            price(b) <- 100.0;\n        WHEN category(b) == Category.fiction THEN\n            price(b) <- 150.0;\n    ELSE\n        price(b) <- 0.0;\n}\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);