(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{640:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(747)),i={title:"How-to: PARTITION"},l={unversionedId:"How-to_PARTITION",id:"How-to_PARTITION",isDocsHomePage:!1,title:"How-to: PARTITION",description:"Example 1",source:"@site/docs/How-to_PARTITION.md",slug:"/How-to_PARTITION",permalink:"/platform/next/How-to_PARTITION",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_PARTITION.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: GROUP CONCAT",permalink:"/platform/next/How-to_GROUP_CONCAT"},next:{title:"How-to: GUI",permalink:"/platform/next/How-to_GUI"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have an order with the lines."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\nCLASS OrderDetail 'Order line';\n\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\n")),Object(a.b)("p",null,"We need to number the lines starting from 1 as they are added to the order."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"index 'Line number' (OrderDetail d) = PARTITION SUM 1 ORDER d BY order(d) CHARWIDTH 4;\n")),Object(a.b)("p",null,"In this case, we sort by internal ID of lines in the order, since we know for sure that this ID increases when the new lines are created."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"We have a list of customer orders with specified dates."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"date 'Date' = DATA DATE (Order);\n\nCLASS Customer 'Customer';\ncustomer 'Customer' = DATA Customer (Order);\n")),Object(a.b)("p",null,"For each order we need to find the date of the previous order placed by the same customer."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"prevOrderDate 'Previous order' (Order o) = PARTITION PREV date(o) ORDER date(o), o BY customer(o);\n")),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/platform/next/How-to_GROUP_CONCAT"},"How-to: GROUP CONCAT")),", the order should be uniquely determined. Therefore, we add the order itself (i. e. its internal ID) as the last argument for ",Object(a.b)("strong",{parentName:"p"},"ORDER"),"."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"We have the current balance for books by batches."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\n\nCLASS Batch 'Batch';\nbook 'Book' = DATA Book (Batch);\ndate 'Arrival date' = DATA DATE (Batch);\n\nCLASS Stock 'Warehouse';\ncurrentBalance 'Balance' = DATA INTEGER (Batch, Stock); // The balance is made data for the example. This is usually a calculated property.\n")),Object(a.b)("p",null,"We need to distribute the specified quantity for a specified book by batches according to the FIFO principle."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA LOCAL INTEGER (Book);\n\nquantityFIFO 'Quantity by FIFO batch' (Batch b, Stock s) = PARTITION UNGROUP quantity\n                                                                    LIMIT STRICT currentBalance(b, s)\n                                                                    ORDER date(b), b\n                                                                    BY book(b);\n")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"STRICT")," parameter means that if the quantity is greater than the total balance for all batches, then the remaining difference will be added to the last batch.  "))}u.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,O=p["".concat(i,".").concat(b)]||p[b]||s[b]||a;return n?o.a.createElement(O,l(l({ref:t},d),{},{components:n})):o.a.createElement(O,l({ref:t},d))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);