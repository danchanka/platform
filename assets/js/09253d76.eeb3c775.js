(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{745:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||a;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(745)),i={title:"How-to: Filtering and ordering"},l={unversionedId:"How-to_Filtering_and_ordering",id:"version-v4/How-to_Filtering_and_ordering",isDocsHomePage:!1,title:"How-to: Filtering and ordering",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Filtering_and_ordering.md",slug:"/How-to_Filtering_and_ordering",permalink:"/platform/How-to_Filtering_and_ordering",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Filtering_and_ordering.md",version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"4/29/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Documents with lines",permalink:"/platform/How-to_Documents_with_lines"},next:{title:"How-to: Design",permalink:"/platform/How-to_Design"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],s={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"task"},"Task"),Object(a.b)("p",null,"There are remaining books in stock."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nCLASS Stock 'Warehouse';\nname 'Name' = DATA ISTRING[100] (Stock);\n\nbalance 'Balance' = DATA INTEGER (Book, Stock); // for example it is made a data property, although usually it is calculated\n")),Object(a.b)("p",null,"We need to create a form to display the balances of books in a given stock in alphabetical order."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM onStockObject 'Balances'\n    OBJECTS s = Stock PANEL\n    PROPERTIES(s) name SELECTOR\n\n    OBJECTS b = Book\n    PROPERTIES READONLY name(b), balance(b, s)\n    ORDERS name(b)\n\n    // Option 1\n    FILTERS balance(b, s)\n\n    // Option 2\n    FILTERGROUP bal\n        FILTER 'With positive balance' balance(b, s) > 0 'F10'\n        FILTER 'With negative balance' balance(b, s) < 0 'F9'\n        FILTER 'With balance' balance(b, s) 'F8' DEFAULT\n        FILTER 'No remainder' NOT balance (b, s) 'F7'\n;\n")),Object(a.b)("p",null,"Option 1 sets up a fixed filter that the user cannot remove. Option 2 allows the user to choose between predefined criteria (by default the one for which the ",Object(a.b)("inlineCode",{parentName:"p"},"DEFAULT")," option is set)."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"task-1"},"Task"),Object(a.b)("p",null,"Similar to ",Object(a.b)("a",{parentName:"p",href:"#example-1"},Object(a.b)("strong",{parentName:"a"},"Example 1")),"."),Object(a.b)("p",null,"We need to create a form to display remaining books in several warehouses, with the possibility of filtering by a specific warehouse. Ordering should be first by warehouse, and within that by book title."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"filterStock = DATA LOCAL Stock ();\nnameFilterStock 'Warehouse' = name(filterStock());\n\nFORM onStockLocal 'Balances'\n    PROPERTIES() nameFilterStock\n\n    OBJECTS sb = (s = Stock, b = Book)\n    PROPERTIES READONLY name(s), name(b), balance(b, s)\n    ORDERS name(s), name(b)\n\n    FILTERS s == filterStock() OR NOT filterStock()\n;\n")),Object(a.b)("p",null,"In this case a warehouse cannot be declared via the ",Object(a.b)("inlineCode",{parentName:"p"},"OBJECTS")," block, because then not specifying a warehouse for filtering will not be an option."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"task-2"},"Task"),Object(a.b)("p",null,"There is a list of orders for certain customers"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[100] (Customer);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n")),Object(a.b)("p",null,"We need to create a form to display the list of orders allowing to filter by date and/or customer. By default, orders should be in descending date order."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"filterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer 'Customer' = name(filterCustomer());\n\nFORM orders 'Orders'\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY do = date, nameCustomer\n    ORDERS do DESC\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n")),Object(a.b)("p",null,"It should be noted that the dates in this case should always be selected (by default, the current date will be set when the form is opened). But it is possible not to select a customer."),Object(a.b)("p",null,"Also, note that what is set in ",Object(a.b)("inlineCode",{parentName:"p"},"ORDER BY")," is not an expression but a specific property added to the form. Thus, we cannot order by a property that has not been added to the form."))}d.isMDXComponent=!0}}]);