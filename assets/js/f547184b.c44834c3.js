(window.webpackJsonp=window.webpackJsonp||[]).push([[658],{728:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return b}));var n=o(3),a=o(7),r=(o(0),o(751)),i={title:"How-to: GROUP LAST"},c={unversionedId:"How-to_GROUP_LAST",id:"How-to_GROUP_LAST",isDocsHomePage:!1,title:"How-to: GROUP LAST",description:"Example 1",source:"@site/docs/How-to_GROUP_LAST.md",slug:"/How-to_GROUP_LAST",permalink:"/platform/docs/next/How-to_GROUP_LAST",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_GROUP_LAST.md",version:"current",sidebar:"docs",previous:{title:"How-to: CASE/IF/OVERRIDE",permalink:"/platform/docs/next/How-to_CASE_IF_OVERRIDE"},next:{title:"How-to: GROUP CONCAT",permalink:"/platform/docs/next/How-to_GROUP_CONCAT"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2\xa0",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Condition",id:"condition-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]}],d={toc:l};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("h3",{id:"condition"},"Condition"),Object(r.b)("p",null,"We have a set of books associated with a certain category, and the dates of their receipt."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nCLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\ndate 'Arrival date' = DATA DATE (Book);\n")),Object(r.b)("p",null,"We need to find the latest received book in the selected category."),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"book 'Last book' (Category c) = GROUP LAST Book b ORDER date(b), b BY category(b);\n")),Object(r.b)("p",null,"It is important to remember that order in the \xa0",Object(r.b)("strong",{parentName:"p"},"ORDER*\xa0*")," clause should be uniquely determined. To do this, the book (specifically, its internal ID) should be used as the second parameter since several books may have the same date of receipt."),Object(r.b)("h2",{id:"example-2"},"Example 2\xa0"),Object(r.b)("h3",{id:"condition-1"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 1"),", but the author and genre list are specified for each book."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Author 'Author';\nCLASS Genre 'Genre';\n\nauthor 'Author' = DATA Author (Book);\ngenre 'Genre' = DATA Genre (Book);\nin 'On' = DATA BOOLEAN (Book, Genre);\n")),Object(r.b)("p",null,"We need to find the most popular category by author and genre."),Object(r.b)("h3",{id:"solution-1"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Category c, Author a, Genre g) = GROUP SUM 1 IF in(Book b, g) BY category(b), author(b);\n\ncategory (Author a, Genre g) = GROUP LAST Category c ORDER countBooks(c, a, g), c WHERE countBooks(c, a, g);\n")),Object(r.b)("h2",{id:"example-3"},"Example 3"),Object(r.b)("h3",{id:"condition-2"},"Condition"),Object(r.b)("p",null,"We have a certain set of books and the information about price changes per book and warehouse. Each object of the ",Object(r.b)("strong",{parentName:"p"},"Ledger")," class reflects a single change in price since a specific date."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock 'Warehouse';\n\nCLASS Ledger 'Price change';\ndate = DATA DATE (Ledger);\nstock = DATA Stock (Ledger);\nbook = DATA Book (Ledger);\n\nprice = DATA NUMERIC[10,2] (Ledger);\n")),Object(r.b)("p",null,"We need to identify the current price for a given book at the warehouse."),Object(r.b)("h3",{id:"solution-2"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"currentPrice (Book b, Stock s) = GROUP LAST price(Ledger l) ORDER date(l), l BY book(l), stock(l);//#solution3\n")),Object(r.b)("h2",{id:"example-4"},"Example 4"),Object(r.b)("h3",{id:"condition-3"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 3"),"."),Object(r.b)("p",null,"We need to find the price valid for a specific date for a book at the warehouse."),Object(r.b)("h3",{id:"solution-3"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"price (Book b, Stock s, DATE d) = GROUP LAST price(Ledger l) ORDER date(l), l WHERE date(l) <= d BY book(l), stock(l);\n")),Object(r.b)("h2",{id:"example-5"},"Example 5"),Object(r.b)("h3",{id:"condition-4"},"Condition"),Object(r.b)("p",null,"Similar to Example 4, except that a change in price has an expiration date. If this date is not specified, then the price is not limited in time."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"dateTo 'Valid until (inclusive)' = DATA DATE (Ledger);\n")),Object(r.b)("h3",{id:"solution-4"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"currentPriceDate (Book b, Stock s) = GROUP LAST price(Ledger l) ORDER date(l), l WHERE NOT dateTo(l) < currentDate() BY book(l), stock(l);\npriceDate(Book b, Stock s, DATE d) = GROUP LAST price(Ledger l) ORDER date(l), l WHERE date(l) <= d AND NOT dateTo(l) < d BY book(l), stock(l);\n")),Object(r.b)("p",null,"Note that the expression ",Object(r.b)("em",{parentName:"p"},"NOT dateTo(l) < date")," does not always mean the same as ",Object(r.b)("em",{parentName:"p"},"dateTo(l) ",">","= date"),". The difference occurs when the value ",Object(r.b)("em",{parentName:"p"},"dateTo(l)")," equals ",Object(r.b)("em",{parentName:"p"},"NULL"),". In the first case, ",Object(r.b)("em",{parentName:"p"},"dateTo(l) < date")," equals ",Object(r.b)("em",{parentName:"p"},"NULL"),"(i. e. FALSE), while ",Object(r.b)("em",{parentName:"p"},"NOT NULL")," equals TRUE. In the second case, the expression obviously equals ",Object(r.b)("em",{parentName:"p"},"NULL")," (i. e. FALSE)."))}b.isMDXComponent=!0},751:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=a.a.createContext({}),b=function(e){var t=a.a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=b(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=b(o),s=n,m=p["".concat(i,".").concat(s)]||p[s]||u[s]||r;return o?a.a.createElement(m,c(c({ref:t},d),{},{components:o})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<r;d++)i[d]=o[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}s.displayName="MDXCreateElement"}}]);