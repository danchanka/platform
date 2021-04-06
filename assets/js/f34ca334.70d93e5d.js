(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{711:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(746)),i={title:"How-to: CRUD"},l={unversionedId:"How-to_CRUD",id:"How-to_CRUD",isDocsHomePage:!1,title:"How-to: CRUD",description:"Example 1",source:"@site/docs/How-to_CRUD.md",slug:"/How-to_CRUD",permalink:"/platform/next/How-to_CRUD",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_CRUD.md",version:"current",sidebar:"learn",previous:{title:"How-to: Interactive forms: Overview",permalink:"/platform/next/How-to_Interactive_forms"},next:{title:"How-to: Documents with lines",permalink:"/platform/next/How-to_Documents_with_lines"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have a set of predefined book types."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Type 'Type' {\n    novel 'Novel',\n    thriller 'Thriller',\n    fiction 'Fiction'\n}\nname 'Name' (Type g) = staticCaption(g) IF g IS Type;\n")),Object(a.b)("p",null,"We need to create a form to select a type from the list."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM types 'List of types'\n    OBJECTS g = Type\n    PROPERTIES(g) READONLY name\n\n    LIST Type OBJECT g\n;\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"DIALOG")," indicates that this form will be used for selecting a type from the list (e. g. when the user wants to change the book type)."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"We have a set of books with given titles."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[30] (Book) IN id;\n")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"It is recommended that you add all the ",Object(a.b)("strong",{parentName:"p"},"name")," properties to the ",Object(a.b)("strong",{parentName:"p"},"id")," group. Values of this property will help identify the object in case of the constraint violations. It will also be added to automatic forms when no edit (EDIT) or list (LIST) forms are defined for the class."))),Object(a.b)("p",null,"We need to create a form with a list of books where the user can add, edit or delete them."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM book 'Book' // form for displaying \"card' // form for displaying the book card\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Book OBJECT b\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"task-2"},"Task"),Object(a.b)("p",null,"We have a set of book genres with given titles."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Genre 'Genre';\nname 'Name' = DATA ISTRING[30] (Genre);\n")),Object(a.b)("p",null,"We need to create a form with a list of genres where the user can add, edit or delete them, and one more form with a list of genres but without these options."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM genre 'Genre'\n    OBJECTS g = Genre PANEL\n    PROPERTIES(g) name\n\n    EDIT Genre OBJECT g\n;\n\nFORM genres 'Genres'\n    OBJECTS g = Genre\n    PROPERTIES(g) READONLY name\n    PROPERTIES(g) NEWSESSION NEW, EDIT, DELETE\n;\n\nFORM dialogGenre 'Genres'\n    OBJECTS g = Genre\n    PROPERTIES(g) READONLY name\n\n    LIST Genre OBJECT g\n;\n\nNAVIGATOR {\n    NEW genres;\n}\n")),Object(a.b)("p",null,"Use this scheme (with three forms instead of two) when you want to allow users to select genres and prevent any accidental changes to the genre information. In this case, the user will be able to edit genres only on a dedicated form."))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||a;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);