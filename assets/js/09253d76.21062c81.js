(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{750:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||a;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(750)),i={title:"How-to: Filtering and ordering"},l={unversionedId:"How-to_Filtering_and_ordering",id:"version-v4/How-to_Filtering_and_ordering",isDocsHomePage:!1,title:"How-to: Filtering and ordering",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Filtering_and_ordering.md",slug:"/How-to_Filtering_and_ordering",permalink:"/platform/docs/How-to_Filtering_and_ordering",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/How-to_Filtering_and_ordering.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"How-to: Documents with lines",permalink:"/platform/docs/How-to_Documents_with_lines"},next:{title:"How-to: Design",permalink:"/platform/docs/How-to_Design"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],s={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"There are remaining books in stock."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nCLASS Stock 'Warehouse';\nname 'Name' = DATA ISTRING[100] (Stock);\n\nbalance 'Balance' = DATA INTEGER (Book, Stock); // for example it is made a data property, although usually it is calculated\n")),Object(a.b)("p",null,"We need to create a form to display the balances of books in a given stock in alphabetical order."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM onStockObject 'Balances'\n    OBJECTS s = Stock PANEL\n    PROPERTIES(s) name SELECTOR\n\n    OBJECTS b = Book\n    PROPERTIES READONLY name(b), balance(b, s)\n    ORDERS name(b)\n\n    // Option 1\n    FILTERS balance(b, s)\n\n    // Option 2\n    FILTERGROUP bal\n        FILTER 'With positive balance' balance(b, s) > 0 'F10'\n        FILTER 'With negative balance' balance(b, s) < 0 'F9'\n        FILTER 'With balance' balance(b, s) 'F8' DEFAULT\n        FILTER 'No remainder' NOT balance (b, s) 'F7'\n;\n")),Object(a.b)("p",null,"Option 1 sets up a fixed filter that the user cannot remove. Option 2 allows the user to choose between predefined criteria (by default the one for which the ",Object(a.b)("em",{parentName:"p"},"DEFAULT")," option is set)."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create a form to display remaining books in several warehouses, with the possibility of filtering by a specific warehouse. Ordering should be first by warehouse, and within that by book title."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"filterStock = DATA LOCAL Stock ();\nnameFilterStock 'Warehouse' = name(filterStock());\n\nFORM onStockLocal 'Balances'\n    PROPERTIES() nameFilterStock\n\n    OBJECTS sb = (s = Stock, b = Book)\n    PROPERTIES READONLY name(s), name(b), balance(b, s)\n    ORDERS name(s), name(b)\n\n    FILTERS s == filterStock() OR NOT filterStock()\n;\n")),Object(a.b)("p",null,"In this case a warehouse cannot be declared via the ",Object(a.b)("em",{parentName:"p"},"OBJECTS")," block, because then not specifying a warehouse for filtering will not be an option."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"There is a list of orders for certain customers"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Customer 'Customer';\nname 'Name' = DATA ISTRING[100] (Customer);\n\nCLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n")),Object(a.b)("p",null,"We need to create a form to display the list of orders allowing to filter by date and/or customer. By default, orders should be in descending date order."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"filterCustomer = DATA LOCAL Customer ();\nnameFilterCustomer 'Customer' = name(filterCustomer());\n\nFORM orders 'Orders'\n    PROPERTIES() nameFilterCustomer\n\n    OBJECTS dates = (dateFrom = DATE, dateTo = DATE) PANEL\n    PROPERTIES df = VALUE(dateFrom), dt = VALUE(dateTo)\n\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY do = date, nameCustomer\n    ORDERS do DESC\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo,\n            customer(o) == filterCustomer() OR NOT filterCustomer()\n;\n")),Object(a.b)("p",null,"It should be noted that the dates in this case should always be selected (by default, the current date will be set when the form is opened). But it is possible not to select a customer."),Object(a.b)("p",null,"Also, note that what is set in ",Object(a.b)("em",{parentName:"p"},"ORDER BY")," is not an expression but a specific property added to the form. Thus, we cannot order by a property that has not been added to the form."))}d.isMDXComponent=!0}}]);