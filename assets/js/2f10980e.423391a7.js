(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(747)),i={title:"How-to: Trees"},c={unversionedId:"How-to_Trees",id:"version-v4/How-to_Trees",isDocsHomePage:!1,title:"How-to: Trees",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Trees.md",slug:"/How-to_Trees",permalink:"/platform/How-to_Trees",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Trees.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Design",permalink:"/platform/How-to_Design"},next:{title:"How-to: Data entry",permalink:"/platform/How-to_Data_entry"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a set of books associated with certain categories."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category);\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\ncategory 'Category' = DATA Category (Book);\n")),Object(a.b)("p",null,"We need to build a form with a tree, where the category is shown above and the product is shown below."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM books 'Books'\n    TREE cb c = Category, b = Book\n    PROPERTIES name(c), name(b)\n    FILTERS category(b) == c\n;\n")),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),", except that each category has a parent in the hierarchy."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"parent 'Parent' = DATA Category (Category);\n")),Object(a.b)("p",null,"We need to build a form with a tree, where the categories will be displayed as hierarchy."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM categories 'Categories'\n    TREE categories c = Category PARENT parent(c)\n    PROPERTIES(c) name\n;\n")),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 2"),"."),Object(a.b)("p",null,"We need to create a form with a category tree, so that the books that belong to the current category and all its subcategories are shown to the right."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"level 'Level' (Category child, Category parent) = RECURSION 1l IF child IS Category AND parent == child\n                                                                 STEP 2l IF parent == parent($parent) MATERIALIZED;\n\nFORM categoryBooks 'Books by category'\n    TREE categories c = Category PARENT parent(c)\n    PROPERTIES(c) name\n\n    OBJECTS b = Book\n    PROPERTIES(b) name\n    FILTERS level(category(b), c)\n;\n\nDESIGN categoryBooks {\n    NEW pane FIRST {\n        fill = 1;\n        type = SPLITH;\n        MOVE BOX(TREE categories);\n        MOVE BOX(b);\n    }\n}\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);