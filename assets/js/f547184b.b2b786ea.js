(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{711:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(747)),i={title:"How-to: GROUP LAST"},c={unversionedId:"How-to_GROUP_LAST",id:"How-to_GROUP_LAST",isDocsHomePage:!1,title:"How-to: GROUP LAST",description:"Example 1",source:"@site/docs/How-to_GROUP_LAST.md",slug:"/How-to_GROUP_LAST",permalink:"/platform/next/How-to_GROUP_LAST",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_GROUP_LAST.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: CASE/IF/OVERRIDE",permalink:"/platform/next/How-to_CASE_IF_OVERRIDE"},next:{title:"How-to: GROUP CONCAT",permalink:"/platform/next/How-to_GROUP_CONCAT"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2\xa0",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Condition",id:"condition-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]}],d={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("h3",{id:"condition"},"Condition"),Object(r.b)("p",null,"We have a set of books associated with a certain category, and the dates of their receipt."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nCLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\ndate 'Arrival date' = DATA DATE (Book);\n")),Object(r.b)("p",null,"We need to find the latest received book in the selected category."),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"book 'Last book' (Category c) = GROUP LAST Book b ORDER date(b), b BY category(b);\n")),Object(r.b)("p",null,"It is important to remember that order in the \xa0",Object(r.b)("strong",{parentName:"p"},"ORDER*\xa0*")," clause should be uniquely determined. To do this, the book (specifically, its internal ID) should be used as the second parameter since several books may have the same date of receipt."),Object(r.b)("h2",{id:"example-2"},"Example 2\xa0"),Object(r.b)("h3",{id:"condition-1"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 1"),", but the author and genre list are specified for each book."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Author 'Author';\nCLASS Genre 'Genre';\n\nauthor 'Author' = DATA Author (Book);\ngenre 'Genre' = DATA Genre (Book);\nin 'On' = DATA BOOLEAN (Book, Genre);\n")),Object(r.b)("p",null,"We need to find the most popular category by author and genre."),Object(r.b)("h3",{id:"solution-1"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Category c, Author a, Genre g) = GROUP SUM 1 IF in(Book b, g) BY category(b), author(b);\n\ncategory (Author a, Genre g) = GROUP LAST Category c ORDER countBooks(c, a, g), c WHERE countBooks(c, a, g);\n")),Object(r.b)("h2",{id:"example-3"},"Example 3"),Object(r.b)("h3",{id:"condition-2"},"Condition"),Object(r.b)("p",null,"We have a certain set of books and the information about price changes per book and warehouse. Each object of the ",Object(r.b)("strong",{parentName:"p"},"Ledger")," class reflects a single change in price since a specific date."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock 'Warehouse';\n\nCLASS Ledger 'Price change';\ndate = DATA DATE (Ledger);\nstock = DATA Stock (Ledger);\nbook = DATA Book (Ledger);\n\nprice = DATA NUMERIC[10,2] (Ledger);\n")),Object(r.b)("p",null,"We need to identify the current price for a given book at the warehouse."),Object(r.b)("h3",{id:"solution-2"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"currentPrice (Book b, Stock s) = GROUP LAST price(Ledger l) ORDER date(l), l BY book(l), stock(l);//#solution3\n")),Object(r.b)("h2",{id:"example-4"},"Example 4"),Object(r.b)("h3",{id:"condition-3"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 3"),"."),Object(r.b)("p",null,"We need to find the price valid for a specific date for a book at the warehouse."),Object(r.b)("h3",{id:"solution-3"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"price (Book b, Stock s, DATE d) = GROUP LAST price(Ledger l) ORDER date(l), l WHERE date(l) <= d BY book(l), stock(l);\n")),Object(r.b)("h2",{id:"example-5"},"Example 5"),Object(r.b)("h3",{id:"condition-4"},"Condition"),Object(r.b)("p",null,"Similar to Example 4, except that a change in price has an expiration date. If this date is not specified, then the price is not limited in time."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"dateTo 'Valid until (inclusive)' = DATA DATE (Ledger);\n")),Object(r.b)("h3",{id:"solution-4"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"currentPriceDate (Book b, Stock s) = GROUP LAST price(Ledger l) ORDER date(l), l WHERE NOT dateTo(l) < currentDate() BY book(l), stock(l);\npriceDate(Book b, Stock s, DATE d) = GROUP LAST price(Ledger l) ORDER date(l), l WHERE date(l) <= d AND NOT dateTo(l) < d BY book(l), stock(l);\n")),Object(r.b)("p",null,"Note that the expression ",Object(r.b)("em",{parentName:"p"},"NOT dateTo(l) < date")," does not always mean the same as ",Object(r.b)("em",{parentName:"p"},"dateTo(l) ",">","= date"),". The difference occurs when the value ",Object(r.b)("em",{parentName:"p"},"dateTo(l)")," equals ",Object(r.b)("em",{parentName:"p"},"NULL"),". In the first case, ",Object(r.b)("em",{parentName:"p"},"dateTo(l) < date")," equals ",Object(r.b)("em",{parentName:"p"},"NULL"),"(i. e. FALSE), while ",Object(r.b)("em",{parentName:"p"},"NOT NULL")," equals TRUE. In the second case, the expression obviously equals ",Object(r.b)("em",{parentName:"p"},"NULL")," (i. e. FALSE)."))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=o,m=b["".concat(i,".").concat(s)]||b[s]||u[s]||r;return n?a.a.createElement(m,c(c({ref:t},d),{},{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<r;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);