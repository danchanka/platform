(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{291:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(747)),i={title:"How-to: IF/CASE"},c={unversionedId:"How-to_IF_CASE",id:"How-to_IF_CASE",isDocsHomePage:!1,title:"How-to: IF/CASE",description:"Example 1",source:"@site/docs/How-to_IF_CASE.md",slug:"/How-to_IF_CASE",permalink:"/platform/next/How-to_IF_CASE",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_IF_CASE.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: FOR",permalink:"/platform/next/How-to_FOR"},next:{title:"How-to: WHILE",permalink:"/platform/next/How-to_WHILE"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a list of books associated with certain categories. Each book is assigned a price."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nCLASS Category 'Category' {\n    novel 'Novel',\n    thriller 'Thriller',\n    fiction 'Fiction'\n}\n\ncategory 'Category' = DATA Category (Book);\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n")),Object(a.b)("p",null,"We need to create an action that sets a given price for books associated with the specific category and a fixed price for all other books. When no category is selected, the error message must appear."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setPriceIf 'Set price' (Book b)  {\n    IF NOT category(b) THEN\n        MESSAGE 'No category selected for the book';\n    ELSE\n        IF category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        ELSE\n            price(b) <- 100.0;\n}\n")),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create an action that sets pre-defined prices for books associated with any of the three categories and sets zero price for all other books."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setPriceCase 'Set price' (Book b)  {\n    CASE\n        WHEN category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        WHEN category(b) == Category.thriller THEN\n            price(b) <- 100.0;\n        WHEN category(b) == Category.fiction THEN\n            price(b) <- 150.0;\n    ELSE\n        price(b) <- 0.0;\n}\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(f,c(c({ref:t},p),{},{components:n})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);