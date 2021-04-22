(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{326:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(747)),i={title:"How-to: FOR"},l={unversionedId:"How-to_FOR",id:"version-v4/How-to_FOR",isDocsHomePage:!1,title:"How-to: FOR",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_FOR.md",slug:"/How-to_FOR",permalink:"/platform/How-to_FOR",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_FOR.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"How-to: DELETE",permalink:"/platform/How-to_DELETE"},next:{title:"How-to: IF/CASE",permalink:"/platform/How-to_IF_CASE"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Task",id:"task-1",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-4",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],d={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"We have a list of books with titles."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) name, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(a.b)("p",null,"We need to find all the books containing a given line and display a message with their names and internal codes."),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"findNemo 'Find book' ()  {\n    FOR isSubstring(name(Book b), 'Nemo') DO {\n        MESSAGE 'Found book ' + name (b) + ' with internal code ' + b;\n    }\n}\nEXTEND FORM books\n    PROPERTIES() findNemo\n;\n")),Object(a.b)("p",null,"Use the isSubstring property (defined in the ",Object(a.b)("strong",{parentName:"p"},"Utils")," system ",Object(a.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),") to identify whether a given line contains another line."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-2"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create an action that creates 100 new books with certain titles."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"add100Books 'Add 100 books' ()  {\n    // Option 1\n    FOR iterate(INTEGER i, 1, 100) NEW b = Book DO {\n        name(b) <- 'Book ' + i;\n    }\n\n    // Option 2\n    FOR iterate(INTEGER i, 1, 100) DO {\n        NEW b = Book {\n            name(b) <- 'Book ' + i;\n        }\n    }\n}\n\nEXTEND FORM books\n    PROPERTIES() add100Books\n;\n")),Object(a.b)("p",null,"Both these implementations will provide the same result."),Object(a.b)("p",null,"To solve this task, use the ",Object(a.b)("strong",{parentName:"p"},"iterate")," property (defined in the ",Object(a.b)("strong",{parentName:"p"},"Utils")," system module) which returns ",Object(a.b)("strong",{parentName:"p"},"TRUE")," for all integers in the range."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"task-3"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),", but with the order logic. Each order contains lines where books and discount prices are specified."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n\ndiscount 'Discount, %' = DATA NUMERIC[8,2] (OrderDetail);\ndiscountPrice 'Discount price' = DATA NUMERIC[14,2] (OrderDetail);\n")),Object(a.b)("p",null,"We need to create an action that applies a discount to all the lines with prices above 100."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"makeDiscount 'Make discount' (Order o)  {\n    // Option 1\n    FOR order(OrderDetail d) == o AND price(d) > 100 DO {\n        discount(d) <- 10;\n        discountPrice(d) <- price(d) * (100.0 - discount(d)) / 100.0;\n    }\n\n    // Option 2\n    discount(OrderDetail d) <- 10 WHERE order(d) == o AND price(d) > 100;\n    discountPrice(OrderDetail d) <- price(d) * (100.0 - discount(d)) / 100.0 WHERE order(d) == o AND price(d) > 100;\n}\n")),Object(a.b)("p",null,"Both these implementations will provide the same result."),Object(a.b)("h2",{id:"example-4"},"Example 4"),Object(a.b)("h3",{id:"task-4"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 3"),", but a default price was added for each book."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"price 'Price' = DATA NUMERIC[14,2] (Book);\n")),Object(a.b)("p",null,"We need to create an action that adds all the books with prices above 100 to the order."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"addSelectedBooks 'Add marked books' (Order o)  {\n    // Option 1\n    FOR price(Book b) > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- price(b);\n    }\n\n    // Option 2\n    FOR price(Book b) == NUMERIC[14,2] p AND p > 100 NEW d = OrderDetail DO {\n        order(d) <- o;\n        book(d) <- b;\n        price(d) <- p;\n    }\n}\n")),Object(a.b)("p",null,"Both these implementations will provide the same result."))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,O=p["".concat(i,".").concat(u)]||p[u]||b[u]||a;return n?r.a.createElement(O,l(l({ref:t},d),{},{components:n})):r.a.createElement(O,l({ref:t},d))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);