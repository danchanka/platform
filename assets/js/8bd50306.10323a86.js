(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{442:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return s}));var n=o(3),r=o(7),a=(o(0),o(747)),i={title:"How-to: GROUP CONCAT"},c={unversionedId:"How-to_GROUP_CONCAT",id:"How-to_GROUP_CONCAT",isDocsHomePage:!1,title:"How-to: GROUP CONCAT",description:"Example 1",source:"@site/docs/How-to_GROUP_CONCAT.md",slug:"/How-to_GROUP_CONCAT",permalink:"/platform/next/How-to_GROUP_CONCAT",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_GROUP_CONCAT.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: GROUP LAST",permalink:"/platform/next/How-to_GROUP_LAST"},next:{title:"How-to: PARTITION",permalink:"/platform/next/How-to_PARTITION"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],u={toc:l};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a set of books associated with certain priority tags."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nCLASS Tag 'Tag';\nname 'Name' = DATA ISTRING[10] (Tag);\n\nin 'On' = DATA BOOLEAN (Tag, Book);\n")),Object(a.b)("p",null,"We need to retrieve a list of book tags separated by commas in alphabetical order."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"tags 'Tags' (Book b) = GROUP CONCAT name(Tag t) IF in(t, b), ',' ORDER name(t), t CHARWIDTH 10;\n")),Object(a.b)("p",null,"It is recommended that you specify the sizes of all the properties created using ",Object(a.b)("strong",{parentName:"p"},"GROUP CONCAT"),' that will be visible on a form. By default, the system implements the "pessimistic" scenario and reserves a lot of space for such properties.'),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"We have a set of books associated with certain categories and authors."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\n\nCLASS Author 'Author';\nname 'Author' = DATA ISTRING[20] (Author);\n\ncategory 'Category' = DATA Category (Book);\nauthor 'Author' = DATA Author (Book);\n")),Object(a.b)("p",null,"We need to retrieve a list of all authors by category separated by commas in descending order of the number of books."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Author a, Category c) = GROUP SUM 1 BY author(Book b), category(b);\n\nauthors 'Authors' (Category c) = GROUP CONCAT name(Author a) IF countBooks(a, c) ORDER DESC countBooks(a, c), a;\n")))}s.isMDXComponent=!0},747:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(o),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return o?r.a.createElement(m,c(c({ref:t},u),{},{components:o})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=o[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);