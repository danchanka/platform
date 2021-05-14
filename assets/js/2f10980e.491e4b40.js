(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[47176],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99618:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"How-to: Trees"},i={unversionedId:"How-to_Trees",id:"version-v4/How-to_Trees",isDocsHomePage:!1,title:"How-to: Trees",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Trees.md",sourceDirName:".",slug:"/How-to_Trees",permalink:"/How-to_Trees",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Trees.md",version:"v4",lastUpdatedAt:1619622551,formattedLastUpdatedAt:"4/28/2021",frontMatter:{title:"How-to: Trees"},sidebar:"version-v4/learn",previous:{title:"How-to: Design",permalink:"/How-to_Design"},next:{title:"How-to: Data entry",permalink:"/How-to_Data_entry"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1"},"Example 1"),(0,o.kt)("h3",{id:"task"},"Task"),(0,o.kt)("p",null,"We have a set of books associated with certain categories."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\nname 'Name' = DATA ISTRING[50] (Category);\n\nCLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\ncategory 'Category' = DATA Category (Book);\n")),(0,o.kt)("p",null,"We need to build a form with a tree, where the category is shown above and the product is shown below."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM books 'Books'\n    TREE cb c = Category, b = Book\n    PROPERTIES name(c), name(b)\n    FILTERS category(b) == c\n;\n")),(0,o.kt)("h2",{id:"example-2"},"Example 2"),(0,o.kt)("h3",{id:"task-1"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-1"},(0,o.kt)("strong",{parentName:"a"},"Example 1")),", except that each category has a parent in the hierarchy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"parent 'Parent' = DATA Category (Category);\n")),(0,o.kt)("p",null,"We need to build a form with a tree, where the categories will be displayed as hierarchy."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"FORM categories 'Categories'\n    TREE categories c = Category PARENT parent(c)\n    PROPERTIES(c) name\n;\n")),(0,o.kt)("h2",{id:"example-3"},"Example 3"),(0,o.kt)("h3",{id:"task-2"},"Task"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("a",{parentName:"p",href:"#example-2"},(0,o.kt)("strong",{parentName:"a"},"Example 2")),"."),(0,o.kt)("p",null,"We need to create a form with a category tree, so that the books that belong to the current category and all its subcategories are shown to the right."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"level 'Level' (Category child, Category parent) = RECURSION 1l IF child IS Category AND parent == child\n                                                                 STEP 2l IF parent == parent($parent) MATERIALIZED;\n\nFORM categoryBooks 'Books by category'\n    TREE categories c = Category PARENT parent(c)\n    PROPERTIES(c) name\n\n    OBJECTS b = Book\n    PROPERTIES(b) name\n    FILTERS level(category(b), c)\n;\n\nDESIGN categoryBooks {\n    NEW pane FIRST {\n        fill = 1;\n        type = SPLITH;\n        MOVE BOX(TREE categories);\n        MOVE BOX(b);\n    }\n}\n")))}p.isMDXComponent=!0}}]);