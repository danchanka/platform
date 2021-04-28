(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{657:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var r=o(3),n=o(7),a=(o(0),o(747)),c={title:"How-to: GROUP CONCAT"},i={unversionedId:"How-to_GROUP_CONCAT",id:"version-v4/How-to_GROUP_CONCAT",isDocsHomePage:!1,title:"How-to: GROUP CONCAT",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_GROUP_CONCAT.md",slug:"/How-to_GROUP_CONCAT",permalink:"/platform/How-to_GROUP_CONCAT",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_GROUP_CONCAT.md",version:"v4",lastUpdatedAt:1619618764,formattedLastUpdatedAt:"4/28/2021",sidebar:"version-v4/learn",previous:{title:"How-to: GROUP LAST",permalink:"/platform/How-to_GROUP_LAST"},next:{title:"How-to: PARTITION",permalink:"/platform/How-to_PARTITION"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],s={toc:l};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have a set of books associated with certain priority tags."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nCLASS Tag 'Tag';\nname 'Name' = DATA ISTRING[10] (Tag);\n\nin 'On' = DATA BOOLEAN (Tag, Book);\n")),Object(a.b)("p",null,"We need to retrieve a list of book tags separated by commas in alphabetical order."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"tags 'Tags' (Book b) = GROUP CONCAT name(Tag t) IF in(t, b), ',' ORDER name(t), t CHARWIDTH 10;\n")),Object(a.b)("p",null,"It is recommended that you specify the sizes of all the properties created using ",Object(a.b)("strong",{parentName:"p"},"GROUP CONCAT"),' that will be visible on a form. By default, the system implements the "pessimistic" scenario and reserves a lot of space for such properties.'),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"We have a set of books associated with certain categories and authors."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\n\nCLASS Author 'Author';\nname 'Author' = DATA ISTRING[20] (Author);\n\ncategory 'Category' = DATA Category (Book);\nauthor 'Author' = DATA Author (Book);\n")),Object(a.b)("p",null,"We need to retrieve a list of all authors by category separated by commas in descending order of the number of books."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Author a, Category c) = GROUP SUM 1 BY author(Book b), category(b);\n\nauthors 'Authors' (Category c) = GROUP CONCAT name(Author a) IF countBooks(a, c) ORDER DESC countBooks(a, c), a;\n")))}u.isMDXComponent=!0},747:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return O}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(o),d=r,O=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return o?n.a.createElement(O,i(i({ref:t},s),{},{components:o})):n.a.createElement(O,i({ref:t},s))}));function O(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=o[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);