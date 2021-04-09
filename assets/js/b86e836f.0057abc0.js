(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{564:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(746)),i={title:"How-to: Matrix"},c={unversionedId:"How-to_Matrix",id:"How-to_Matrix",isDocsHomePage:!1,title:"How-to: Matrix",description:"Example 1",source:"@site/docs/How-to_Matrix.md",slug:"/How-to_Matrix",permalink:"/platform/next/How-to_Matrix",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_Matrix.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: Navigator",permalink:"/platform/next/How-to_Navigator"},next:{title:"How-to: Table status",permalink:"/platform/next/How-to_Table_status"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],s={toc:l};function d(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have the concepts of books and buyers defined. A price is defined for each book and buyer."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book) IN id;\n\nCLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[50] (Customer) IN id;\n\nprice 'Price' = DATA NUMERIC[14,2] (Book, Customer);\n")),Object(a.b)("p",null,"We need to create a form with a single table where rows will contain books and columns will contain buyers. Each cell should have a price for its book and buyer."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM prices 'Prices'\n    OBJECTS c = Customer\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY, price(b, c) COLUMNS (c) HEADER name(c)\n;\n")),Object(a.b)("p",null,"Object ",Object(a.b)("strong",{parentName:"p"},"c")," will not be displayed on the form, since no properties have been added for it."),Object(a.b)("p",null,"The form will look like this:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(896).default})),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),", only there is a deferred payment period for each book and buyer."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"gracePeriod 'Delay, days' = DATA INTEGER (Book, Customer);\n")),Object(a.b)("p",null,"We need to create a form with a single table where rows will contain books and columns will contain buyers. For each buyer, there will be two columns next to them: price and deferred payment period. We need to highlight columns with deferred payment information in yellow. It should be possible to choose which buyers to display in the columns."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"selected 'Mark' = DATA BOOLEAN (Customer);\n\nheaderName 'Price header' (Customer c) = name(c) + ': Price';\nheaderGrace 'Dealy header' (Customer c) = name(c) + ': Delay, days';\n\nFORM pricesAndGracePeriods 'Prices and delays'\n    OBJECTS s = Customer\n    PROPERTIES selected(s), name(s) READONLY\n\n    OBJECTS c = Customer\n    FILTERS selected(c)\n\n    OBJECTS b = Book\n    PROPERTIES name(b) READONLY,\n               price(b, c) COLUMNS 'priceAndGrace' (c) HEADER headerName(c),\n               gracePeriod(b, c) COLUMNS 'priceAndGrace' (c) HEADER headerGrace(c)\n;\n\nDESIGN pricesAndGracePeriods {\n    BOX(b) {\n        fill = 3;\n        PROPERTY(gracePeriod(b, c)) {\n            background = #FFFFAA;\n        }\n    }\n}\n")),Object(a.b)("p",null,"Only objects that meet the filter condition for object ",Object(a.b)("strong",{parentName:"p"},"c")," will be shown in the columns. Besides, the columns will be shown in the same order as the objects."),Object(a.b)("p",null,"All properties with the same ID after the word ",Object(a.b)("strong",{parentName:"p"},"COLUMNS"),"\xa0will go side by side for the same objects. In this case, the price and the deferred payment period for the first buyer, then the price and deferral for the second one, and so forth. If IDs were different or unspecified, prices for all buyers would have been shown first followed by deferred payment values."),Object(a.b)("p",null,"The form will look like this:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(897).default})),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"We need to create a form containing a matrix with a specified number of rows and columns. The user should be able to check each cell."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"in 'On' = DATA BOOLEAN (INTEGER, INTEGER);\n\nrow 'Row header' (INTEGER r) = 'Row ' + (r AS INTEGER);\ncolumn 'Column header' (INTEGER c) = 'Column ' + (c AS INTEGER);\n\nFORM matrix 'Matrix'\n    OBJECTS m = (rows = INTEGER, columns = INTEGER) PANEL\n    PROPERTIES rs = VALUE(rows), cs = VALUE(columns)\n\n    OBJECTS c = INTEGER\n    FILTERS iterate(c, 1, columns)\n\n    OBJECTS r = INTEGER\n    PROPERTIES(r) row\n    PROPERTIES in(r, c) COLUMNS (c) HEADER column(c)\n    FILTERS iterate(r, 1, rows)\n;\n\nDESIGN matrix {\n    PROPERTY(rs) { caption = 'Number of rows'; }\n    PROPERTY(cs) { caption = 'Number of columns'; }\n}\n")),Object(a.b)("p",null,"In real projects, we recommend limiting the number of rows and columns during data entry or filtering. Otherwise, if the user enters too many rows or columns, the system will generate a CTE query for the ",Object(a.b)("strong",{parentName:"p"},"iterate")," property which, in turn, will produce a table containing entered (very big) number of records and that may cause the server database to crash."),Object(a.b)("p",null,"Result:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(898).default})))}d.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},896:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367547-20c502c1ad11f02d404b6f5b3e68ea18.png"},897:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367551-9c8cdab1b451fede5fa58606076f3f52.png"},898:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367557-4911fa19524c50949a0c169601f27c71.png"}}]);