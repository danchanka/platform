(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{333:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return g}));var n=r(3),a=r(7),o=(r(0),r(746)),i={title:"Aggregations"},c={unversionedId:"Aggregations",id:"version-v4/Aggregations",isDocsHomePage:!1,title:"Aggregations",description:"Aggregation is the creation of a unique (aggregate) of the object corresponding to each non-NULL value of some aggregated property. Each such object is assumed to have properties that map this object to each aggregated property parameter, and, conversely, a property that maps the aggregated property parameters to this object.",source:"@site/versioned_docs/version-v4/Aggregations.md",slug:"/Aggregations",permalink:"/platform/Aggregations",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Aggregations.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"User classes",permalink:"/platform/User_classes"},next:{title:"View logic: Overview",permalink:"/platform/View_logic"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function g(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Aggregation is the creation of a unique (",Object(o.b)("em",{parentName:"p"},"aggregate"),") of the object corresponding to each non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value of some ",Object(o.b)("em",{parentName:"p"},"aggregated")," property. Each such object is assumed to have properties that map this object to each aggregated property parameter, and, conversely, a property that maps the aggregated property parameters to this object.\xa0"),Object(o.b)("p",null,"The aggregated object and each aggregated property parameter must belong to a specified\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Classes"},"class"),"."),Object(o.b)("p",null,"The aggregation mechanism is implemented using\xa0two ",Object(o.b)("a",{parentName:"p",href:"/platform/Simple_constraints"},"consequences")," with automatic resolution and an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Grouping_GROUP_"},"aggregation")," operator. With the help of the aggregation operator, the first consequence\xa0creates an object when the aggregated property becomes non-",Object(o.b)("strong",{parentName:"p"},"NULL"),", and writes the necessary values to all its properties. The second consequence deletes the object when the aggregated property becomes ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To create aggregations, use the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/AGGR_operator"},"operator",Object(o.b)("strong",{parentName:"a"},"AGGR")),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS A; CLASS B; CLASS C;\nf = DATA INTEGER (A, B);\nc = AGGR C WHERE f(A a, B b) MATERIALIZED INDEXED;\n\nCLASS AB;\nab = AGGR AB WHERE A a IS A AND B b IS B; // for each A B pair creates an object AB\n\nCLASS Shipment 'Delivery';\ndate = ABSTRACT DATE (Shipment);\nCLASS Invoice 'Invoice';\ncreateShipment 'Create delivery' = DATA BOOLEAN (Invoice);\ndate 'Shipment date' = DATA DATE (Invoice);\nCLASS ShipmentInvoice 'Delivery by invoice' : Shipment;\nshipment(Invoice invoice) = AGGR ShipmentInvoice WHERE createShipment(invoice); // creating a delivery by invoice, if the option for delivery creation is defined for the invoice\ndate(ShipmentInvoice si) += sum(date(invoice(si)),1); // delivery date = invoice date + 1\n")))}g.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),g=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=g(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=g(r),m=n,b=l["".concat(i,".").concat(m)]||l[m]||u[m]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);