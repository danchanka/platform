(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{344:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),r=(o(0),o(751)),l={title:"How-to: GROUP SUM"},c={unversionedId:"How-to_GROUP_SUM",id:"How-to_GROUP_SUM",isDocsHomePage:!1,title:"How-to: GROUP SUM",description:"Example 1",source:"@site/docs/How-to_GROUP_SUM.md",slug:"/How-to_GROUP_SUM",permalink:"/platform/docs/next/How-to_GROUP_SUM",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_GROUP_SUM.md",version:"current",sidebar:"docs",previous:{title:"How-to: Computations: Overview",permalink:"/platform/docs/next/How-to_Computations"},next:{title:"How-to: GROUP MAX/MIN/AGGR",permalink:"/platform/docs/next/How-to_GROUP_MAX_MIN_AGGR"}},i=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Condition",id:"condition-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]}],s={toc:i};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("h3",{id:"condition"},"Condition"),Object(r.b)("p",null,"We have a set of books associated with certain category."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nCLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\n")),Object(r.b)("p",null,"We need to calculate the number of books in the category."),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Category c) = GROUP SUM 1 BY category(Book book);\n")),Object(r.b)("h2",{id:"example-2"},"Example 2"),Object(r.b)("h3",{id:"condition-1"},"Condition"),Object(r.b)("p",null,"We have a set of books associated with certain tags. Each book can be associated with several tags at the same time."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Tag 'Tag';\n\nin 'On' = DATA BOOLEAN (Tag, Book);\n")),Object(r.b)("p",null,"We need to calculate the number of books in the tag."),Object(r.b)("h3",{id:"solution-1"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"countBooks 'Number of books' (Tag t) = GROUP SUM 1 IF in(t, Book b);\n")),Object(r.b)("h2",{id:"example-3"},"Example 3"),Object(r.b)("h3",{id:"condition-2"},"Condition"),Object(r.b)("p",null,"We have the information about the movement of books: each record is linked to the book itself and the warehouse where the movement occured, and also contains quantity and types of operations (receipt/shipment)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock 'Warehouse';\n\n\nCLASS Ledger 'Movement';\nbook 'Book' = DATA Book (Ledger);\nstock 'Warehouse' = DATA Stock (Ledger);\n\nquantity 'Qty' = DATA INTEGER (Ledger);\nout 'Expenses' = DATA BOOLEAN (Ledger);\n")),Object(r.b)("p",null,"We need to calculate the current balance for a book at the warehouse."),Object(r.b)("h3",{id:"solution-2"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"TABLE bookStock (Book, Stock);\ncurrentBalance 'Current balance' (Book b, Stock s) = GROUP SUM IF out(Ledger l) THEN -quantity(l) ELSE quantity(l) BY book(l), stock(l) MATERIALIZED;\n")),Object(r.b)("p",null,"It is recommended to mark the ",Object(r.b)("strong",{parentName:"p"},"currentBalance")," property as ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"/platform/docs/next/Materializations"},"MATERIALIZED")),", so that when reading the current balances, the system could take the calculated value from the ",Object(r.b)("strong",{parentName:"p"},"bookStock")," table instead of recalculating this value based on all movements. Though this will slow down the writing process (since writing each movement will require updating the current balance), the reading process will become much faster."),Object(r.b)("p",null,"Note that you do not need to define explicitly in which table to keep the ",Object(r.b)("strong",{parentName:"p"},"currentBalance")," property, since the system will use the signature to find out the most suitable table for it (in this case, this will be ",Object(r.b)("strong",{parentName:"p"},"bookStock"),")."),Object(r.b)("h2",{id:"example-4"},"Example 4"),Object(r.b)("h3",{id:"condition-3"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 3"),", except that each movement is associated with the date of movement."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"date 'Date' = DATA DATE (Ledger) INDEXED; // it is better to add an index to filter by date quickly\n")),Object(r.b)("p",null,"We need to calculate the current balance for a given book at the warehouse for the specific date (as of the morning, without the movements occured on that day)."),Object(r.b)("h3",{id:"solution-3"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nbalance1 'Balance as of date' (Book b, Stock s, DATE d) = GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) < d BY book(l), stock(l);\n\n// Option 2\nbalance2 'Balance as of date' (Book b, Stock s, DATE d) = currentBalance(b, s) (-) [ GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) >= d BY book(l), stock(l)](b, s);\n")),Object(r.b)("p",null,'The second option is preferable. Since requests usually refer to recent dates, the server will be calculating the result "retrospectively" from the current balance, thereby analyzing fewer records.'),Object(r.b)("h2",{id:"example-5"},"Example 5"),Object(r.b)("h3",{id:"condition-4"},"Condition"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 3"),", except that we need to calculate the current balance for a given book across all the warehouses."),Object(r.b)("h3",{id:"solution-4"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"currentBalance 'Current balance' (Book b) = GROUP SUM currentBalance(b, Stock s);\n")),Object(r.b)("p",null,"Unlike the current balance for all the warehouses, it is not reasonable to mark this property as MATERIALIZED if you have only few warehouses \u2014 otherwise, UPDATE CONFLICT may occur when several users try to write the movement of the same book at different warehouses simultaneously."))}u.isMDXComponent=!0},751:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(o),p=n,m=b["".concat(l,".").concat(p)]||b[p]||d[p]||r;return o?a.a.createElement(m,c(c({ref:t},s),{},{components:o})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=o[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);