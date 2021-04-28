(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(747)),c={title:"How-to: Trees"},l={unversionedId:"How-to_Trees",id:"version-v4/How-to_Trees",isDocsHomePage:!1,title:"How-to: Trees",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Trees.md",slug:"/How-to_Trees",permalink:"/platform/How-to_Trees",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Trees.md",version:"v4",lastUpdatedAt:1619618764,formattedLastUpdatedAt:"4/28/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Design",permalink:"/platform/How-to_Design"},next:{title:"How-to: Data entry",permalink:"/platform/How-to_Data_entry"}},i=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],s={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("h3",{id:"task"},"Task"),Object(o.b)("p",null,"We have a set of books associated with certain categories."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category);\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\ncategory 'Category' = DATA Category (Book);\n")),Object(o.b)("p",null,"We need to build a form with a tree, where the category is shown above and the product is shown below."),Object(o.b)("h3",{id:"solution"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM books 'Books'\n    TREE cb c = Category, b = Book\n    PROPERTIES name(c), name(b)\n    FILTERS category(b) == c\n;\n")),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("h3",{id:"task-1"},"Task"),Object(o.b)("p",null,"Similar to ",Object(o.b)("strong",{parentName:"p"},"Example 1"),", except that each category has a parent in the hierarchy."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"parent 'Parent' = DATA Category (Category);\n")),Object(o.b)("p",null,"We need to build a form with a tree, where the categories will be displayed as hierarchy."),Object(o.b)("h3",{id:"solution-1"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM categories 'Categories'\n    TREE categories c = Category PARENT parent(c)\n    PROPERTIES(c) name\n;\n")),Object(o.b)("h2",{id:"example-3"},"Example 3"),Object(o.b)("h3",{id:"task-2"},"Task"),Object(o.b)("p",null,"Similar to ",Object(o.b)("strong",{parentName:"p"},"Example 2"),"."),Object(o.b)("p",null,"We need to create a form with a category tree, so that the books that belong to the current category and all its subcategories are shown to the right."),Object(o.b)("h3",{id:"solution-2"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"level 'Level' (Category child, Category parent) = RECURSION 1l IF child IS Category AND parent == child\n                                                                 STEP 2l IF parent == parent($parent) MATERIALIZED;\n\nFORM categoryBooks 'Books by category'\n    TREE categories c = Category PARENT parent(c)\n    PROPERTIES(c) name\n\n    OBJECTS b = Book\n    PROPERTIES(b) name\n    FILTERS level(category(b), c)\n;\n\nDESIGN categoryBooks {\n    NEW pane FIRST {\n        fill = 1;\n        type = SPLITH;\n        MOVE BOX(TREE categories);\n        MOVE BOX(b);\n    }\n}\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);