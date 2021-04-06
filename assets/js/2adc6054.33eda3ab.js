(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(750)),i={title:"How-to: Table status"},l={unversionedId:"How-to_Table_status",id:"How-to_Table_status",isDocsHomePage:!1,title:"How-to: Table status",description:"Example 1",source:"@site/docs/How-to_Table_status.md",slug:"/How-to_Table_status",permalink:"/platform/docs/next/How-to_Table_status",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Table_status.md",version:"current",sidebar:"docs",previous:{title:"How-to: Matrix",permalink:"/platform/docs/next/How-to_Matrix"},next:{title:"How-to: Reports",permalink:"/platform/docs/next/How-to_Reports"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],s={toc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have the concept of books, for which title, genre and price are defined."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\ngenre 'Genre' = DATA ISTRING[30] (Book) IN id;\n\nprice 'Price' = DATA NUMERIC[12,2] (Book) IN id;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name, genre, price\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(a.b)("p",null,"We need to display the number of books on the form, taking into account filters made by the user."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"filtered 'Book filtered' (Book b) = FILTER books.b;\nfilteredCount 'Number of books' = GROUP SUM 1 IF filtered(Book b);\n\nEXTEND FORM books\n    PROPERTIES() READONLY filteredCount DRAW b TOOLBAR\n;\n")),Object(a.b)("p",null,"The solution uses the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Filter_FILTER_"},"FILTER")," operator, which returns\xa0",Object(a.b)("strong",{parentName:"p"},"TRUE")," if the object is included in the current filter on the form."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to display the serial number of the book in the table with books taking into account the current filter and order made by the user."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"index 'Order' (Book b) = PARTITION SUM 1 IF filtered(b) ORDER [ ORDER books.b](b);\n\nEXTEND FORM books\n    PROPERTIES(b) index\n;\n")),Object(a.b)("p",null,"The property with the current order, defined using the\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Order_ORDER_"},"ORDER")," operator, is not declared as a separate named property but is used directly in the expression."),Object(a.b)("p",null,"The form obtained in both examples, with user-defined filter and order, will look like this:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(814).default})))}u.isMDXComponent=!0},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?r.a.createElement(f,l(l({ref:t},s),{},{components:n})):r.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},814:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367772-20ca778d576353ee95d7171002b5fda7.png"}}]);