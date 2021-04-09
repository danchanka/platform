(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(746)),i={title:"How-to: FORMULA"},l={unversionedId:"How-to_FORMULA",id:"version-v4/How-to_FORMULA",isDocsHomePage:!1,title:"How-to: FORMULA",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_FORMULA.md",slug:"/How-to_FORMULA",permalink:"/platform/How-to_FORMULA",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_FORMULA.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Access to internal systems",permalink:"/platform/How-to_Access_to_internal_systems"},next:{title:"How-to: INTERNAL",permalink:"/platform/How-to_INTERNAL"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a list of orders."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[30] (Order);\n\nFORM orders 'Purchase orders'\n    OBJECTS o = Order\n    PROPERTIES(o) date, number, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(a.b)("p",null,"We need to export this list to CSV and keep the date in the ISO format (YYYY-MM-DD)."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"toISO = FORMULA STRING[10] 'to_char($1,\\'YYYY-MM-DD\\')';\n\nexportToCSV 'Export to CSV' () {\n    LOCAL file = FILE ();\n    EXPORT CSV FROM toISO(date(Order o)), number(o) TO file;\n    open(file());\n}\n\nEXTEND FORM orders\n    PROPERTIES() exportToCSV\n;\n")),Object(a.b)("p",null,"To solve this task we use the ",Object(a.b)("a",{parentName:"p",href:"/platform/FORMULA_operator"},"FORMULA")," operator to create a new property that takes a date and returns its value as a string in the YYYY-MM-DD format. The expression contains ",Object(a.b)("a",{parentName:"p",href:"https://www.postgresql.org/docs/11/functions-formatting.html"},"to","_","char")," which is a standard PostgreSQL function."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),". New lines containing quantity and amount have been added to the orders."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\n\nquantity 'Qty' = DATA NUMERIC[14,3] (OrderDetail);\nsum 'Amount' = DATA NUMERIC[14,2] (OrderDetail);\n\nEXTEND FORM orders\n    OBJECTS d = OrderDetail\n    PROPERTIES(d) quantity, sum, NEW, DELETE\n    FILTERS order(d) = o\n;\n")),Object(a.b)("p",null,"We need to export all the lines from a given order as CSV file in which quantities and amounts are shortened to 3 and 2 characters respectively. In addition, the numbers must be split into triads."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"toString = FORMULA TEXT 'to_char($1,$2)';\n\nexportToCSV 'Export to CSV' (Order o) {\n    LOCAL file = FILE ();\n    EXPORT CSV FROM toISO(date(o)), number(o), toString(quantity(OrderDetail d), '999 999.999'), toString(sum(d), '999 999.99') WHERE order(d) = o TO file;\n    open(file());\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) exportToCSV\n;\n")),Object(a.b)("p",null,"We create the toString property that takes two parameters (numeric value and format) and returns a value of the ",Object(a.b)("strong",{parentName:"p"},"TEXT")," type. When exporting, we pass the required format as the second parameter."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 2"),"."),Object(a.b)("p",null,"We need to add a column that will be marked when the given order number contains only digits."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"onlyDigits = FORMULA NULL BOOLEAN 'CASE WHEN trim($1) ~ \\'^[0-9]*$\\' THEN 1 ELSE NULL END';\n\nEXTEND FORM orders\n    PROPERTIES 'Only numbers' = onlyDigits(number(o))\n;\n")),Object(a.b)("p",null,"Since single quotes are used in the formula, make sure to ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Escape_character"},"escape")," them with a backslash ",Object(a.b)("strong",{parentName:"p"},"\\","\\"),"."),Object(a.b)("p",null,"Note that the native ",Object(a.b)("strong",{parentName:"p"},"BOOLEAN")," type allows only 2 values: ",Object(a.b)("strong",{parentName:"p"},"TRUE")," and ",Object(a.b)("strong",{parentName:"p"},"NULL"),". Therefore, when composing a logical expression, make sure to convert its negative value to ",Object(a.b)("strong",{parentName:"p"},"NULL"),". In addition, the platform must explicitly know whether the expression can return an undefined value. This is why the keyword ",Object(a.b)("strong",{parentName:"p"},"FORMULA")," must be followed by the corresponding marker."),Object(a.b)("p",null,"At the database level, the ",Object(a.b)("strong",{parentName:"p"},"BOOLEAN")," type is stored as numeric value (1 or null), and therefore the properties of this type must also return a numeric value. The developer must check that the return type of the expression matches the specified type. Otherwise, the behavior will be unpredictable (but in most cases a request will simply return an error)."),Object(a.b)("p",null,"Keep in mind that if any property composed by the ",Object(a.b)("strong",{parentName:"p"},"FORMULA")," operator receives ",Object(a.b)("strong",{parentName:"p"},"NULL")," as argument, then the overall result will always be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,O=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(O,l(l({ref:t},c),{},{components:n})):o.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);