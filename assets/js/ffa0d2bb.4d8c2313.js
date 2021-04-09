(window.webpackJsonp=window.webpackJsonp||[]).push([[671],{740:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(746)),i={title:"How-to: NEW"},c={unversionedId:"How-to_NEW",id:"How-to_NEW",isDocsHomePage:!1,title:"How-to: NEW",description:"Example 1",source:"@site/docs/How-to_NEW.md",slug:"/How-to_NEW",permalink:"/platform/next/How-to_NEW",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_NEW.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: EXEC",permalink:"/platform/next/How-to_EXEC"},next:{title:"How-to: DELETE",permalink:"/platform/next/How-to_DELETE"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],d={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have an order with a given date and customer."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nCLASS Customer 'Customer';\nname = DATA ISTRING[50] (Customer);\n\ndate 'Date' = DATA DATE (Order);\n\ncustomer 'Customer' = DATA Customer (Order);\nnameCustomer 'Customer' (Order o) = name(customer(o));\n")),Object(a.b)("p",null,"We need to create an action that will create a new order based on the specified one."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"copyOrder 'Copy' (Order o)  {\n    NEW n = Order {\n        date(n) <- date(o);\n        customer(n) <- customer(o);\n    }\n}\n")),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),", except that the order contains lines with other orders."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nCLASS OrderDetail 'Order line';\norder 'Order' = DATA Order (OrderDetail) NONULL DELETE;\nbook 'Book' = DATA Book (OrderDetail);\nnameBook 'Book' (OrderDetail d) = name(book(d));\n\nprice 'Price' = DATA NUMERIC[14,2] (OrderDetail);\n")),Object(a.b)("p",null,"We need to create an action that will create a new order with identical lines based on the selected order."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"copyDetail (Order o)  {\n    NEW n = Order {\n        date(n) <- date(o);\n        customer(n) <- customer(o);\n        FOR order(OrderDetail od) == o NEW nd = OrderDetail DO {\n            order(nd) <- n;\n            book(nd) <- book(od);\n            price(nd) <- price(od);\n        }\n    }\n}\n")))}u.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||s[m]||a;return n?o.a.createElement(b,c(c({ref:t},d),{},{components:n})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);