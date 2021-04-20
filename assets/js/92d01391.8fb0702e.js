(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{464:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),i=n(7),r=(n(0),n(747)),a={title:"How-to: GROUP MAX/MIN/AGGR"},l={unversionedId:"How-to_GROUP_MAX_MIN_AGGR",id:"version-v4/How-to_GROUP_MAX_MIN_AGGR",isDocsHomePage:!1,title:"How-to: GROUP MAX/MIN/AGGR",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_GROUP_MAX_MIN_AGGR.md",slug:"/How-to_GROUP_MAX_MIN_AGGR",permalink:"/platform/How-to_GROUP_MAX_MIN_AGGR",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_GROUP_MAX_MIN_AGGR.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"How-to: GROUP SUM",permalink:"/platform/How-to_GROUP_SUM"},next:{title:"How-to: CASE/IF/OVERRIDE",permalink:"/platform/How-to_CASE_IF_OVERRIDE"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]}],p={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("h3",{id:"condition"},"Condition"),Object(r.b)("p",null,"We have a set of books, where each book has a unique ID."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\n\nid 'Number' = DATA INTEGER (Book);\n")),Object(r.b)("p",null,"We need to find the maximum book ID."),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"maxId 'Maximum number' () = GROUP MAX id(Book b);\n")),Object(r.b)("h2",{id:"example-2"},"Example 2"),Object(r.b)("h3",{id:"condition-1"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 1"),"."),Object(r.b)("p",null,"We need to find a ",Object(r.b)("em",{parentName:"p"},"Book")," object by book ID."),Object(r.b)("h3",{id:"solution-1"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"// Option 1\nbook1 'Book' (INTEGER i) = GROUP MAX Book b BY id(b);\n\n// Option 2\nbook2 'Book' (INTEGER i) = GROUP AGGR Book b BY id(b);\n")),Object(r.b)("p",null,"The difference between Option 2 and Option 1 is that declaration of this property puts a ",Object(r.b)("a",{parentName:"p",href:"/platform/Constraints"},"constraint")," on the uniqueness of book IDs. Any attempt to add two or more books with the same ID will result in the error message."),Object(r.b)("h2",{id:"example-3"},"Example 3"),Object(r.b)("h3",{id:"condition-2"},"Condition"),Object(r.b)("p",null,"We have a set of books, where each book is associated with a category and price."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category 'Category';\n\ncategory 'Category' = DATA Category (Book);\nprice 'Price' = DATA NUMERIC[10,2] (Book);\n")),Object(r.b)("p",null,"We need to calculate the minimum price per category."),Object(r.b)("h3",{id:"solution-2"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"minPrice 'Maximum number' (Category c) = GROUP MIN price(Book b) BY category(b);\n")),Object(r.b)("h2",{id:"example-4"},"Example 4"),Object(r.b)("h3",{id:"condition-3"},"Condition"),Object(r.b)("p",null,"We have a book shipment document."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shipment 'Shipment';\nCLASS ShipmentDetail 'Shipment line';\nshipment 'Shipment' = DATA Shipment (ShipmentDetail) NONULL DELETE;\n\nbook 'Book' = DATA Book (ShipmentDetail);\n")),Object(r.b)("p",null,"We need to find a line with a given shipment by shipment document and book."),Object(r.b)("h3",{id:"solution-3"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"shipmentDetail 'Shipment line' (Shipment s, Book b) = GROUP MAX ShipmentDetail d BY shipment(d), book(d);\n")),Object(r.b)("p",null,"You can use this property to implement the Search functionality when inputting a shipment document."))}b.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=o,s=u["".concat(a,".").concat(m)]||u[m]||d[m]||r;return n?i.a.createElement(s,l(l({ref:t},p),{},{components:n})):i.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);