(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{669:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(747)),i={title:"How-to: Table status"},l={unversionedId:"How-to_Table_status",id:"version-v4/How-to_Table_status",isDocsHomePage:!1,title:"How-to: Table status",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Table_status.md",slug:"/How-to_Table_status",permalink:"/platform/How-to_Table_status",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Table_status.md",version:"v4",lastUpdatedAt:1619618764,formattedLastUpdatedAt:"4/28/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Matrix",permalink:"/platform/How-to_Matrix"},next:{title:"How-to: Reports",permalink:"/platform/How-to_Reports"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],s={toc:c};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have the concept of books, for which title, genre and price are defined."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\ngenre 'Genre' = DATA ISTRING[30] (Book) IN id;\n\nprice 'Price' = DATA NUMERIC[12,2] (Book) IN id;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name, genre, price\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(a.b)("p",null,"We need to display the number of books on the form, taking into account filters made by the user."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"filtered 'Book filtered' (Book b) = FILTER books.b;\nfilteredCount 'Number of books' = GROUP SUM 1 IF filtered(Book b);\n\nEXTEND FORM books\n    PROPERTIES() READONLY filteredCount DRAW b TOOLBAR\n;\n")),Object(a.b)("p",null,"The solution uses the ",Object(a.b)("a",{parentName:"p",href:"/platform/Filter_FILTER_"},"FILTER")," operator, which returns ",Object(a.b)("strong",{parentName:"p"},"TRUE")," if the object is included in the current filter on the form."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to display the serial number of the book in the table with books taking into account the current filter and order made by the user."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"index 'Order' (Book b) = PARTITION SUM 1 IF filtered(b) ORDER [ ORDER books.b](b);\n\nEXTEND FORM books\n    PROPERTIES(b) index\n;\n")),Object(a.b)("p",null,"The property with the current order, defined using the ",Object(a.b)("a",{parentName:"p",href:"/platform/Order_ORDER_"},"ORDER")," operator, is not declared as a separate named property but is used directly in the expression."),Object(a.b)("p",null,"The form obtained in both examples, with user-defined filter and order, will look like this:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(938).default})))}u.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(f,l(l({ref:t},s),{},{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},938:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367772-20ca778d576353ee95d7171002b5fda7.png"}}]);