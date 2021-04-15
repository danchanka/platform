(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{729:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(747)),c={title:"Property change (CHANGE)"},i={unversionedId:"Property_change_CHANGE_",id:"version-v4/Property_change_CHANGE_",isDocsHomePage:!1,title:"Property change (CHANGE)",description:"The property change operator allows you to change the values of one property (write) to the value of another property (read) for all object collections for which the value of a third property (condition) is not NULL. The condition can be omitted (in which case it is considered to be equal to TRUE).",source:"@site/versioned_docs/version-v4/Property_change_CHANGE_.md",slug:"/Property_change_CHANGE_",permalink:"/platform/Property_change_CHANGE_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Property_change_CHANGE_.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"State change",permalink:"/platform/State_change"},next:{title:"New object (NEW)",permalink:"/platform/New_object_NEW_"}},p=[{value:"Changeable properties",id:"changeable",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"property change")," operator allows you to change the values of one property (",Object(a.b)("em",{parentName:"p"},"write"),") to the value of another property (",Object(a.b)("em",{parentName:"p"},"read"),") for all object collections for which the value of a third property (",Object(a.b)("em",{parentName:"p"},"condition"),") is not ",Object(a.b)("strong",{parentName:"p"},"NULL"),". The condition can be omitted (in which case it is considered to be equal to ",Object(a.b)("strong",{parentName:"p"},"TRUE"),")."),Object(a.b)("h3",{id:"changeable"},"Changeable properties"),Object(a.b)("p",null,"In general, the property to be written should be ",Object(a.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_"},"data"),", but the platform also allows writing to properties created using the ",Object(a.b)("a",{parentName:"p",href:"/platform/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection")," operator. In this case, the platform determines the condition that is met in this selection operator for the created property; the property corresponding to that condition is written to. Accordingly, all properties that can be written to we'll call ",Object(a.b)("em",{parentName:"p"},"mutable"),"."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"In addition to the above, mutable properties are also properties created using the ",Object(a.b)("a",{parentName:"p",href:"/platform/Extremum_MAX_MIN_"},"extremum operator"),"\xa0and\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/Logical_operators_AND_OR_NOT_XOR_"},"logical operators")," (which are basically varieties of the selection operator)"))),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To declare an action that implements property change, use the ",Object(a.b)("a",{parentName:"p",href:"/platform/CHANGE_operator"},Object(a.b)("strong",{parentName:"a"},"CHANGE")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"// set a 15 percent discount for all customers who have an order amount over 100\nCLASS Customer;\ndiscount = DATA NUMERIC[5,2] (Customer);\ntotalOrders = DATA NUMERIC[14,2] (Customer);\nsetDiscount  {\n    discount(Customer c) <- 15 WHERE totalOrders(c) > 100;\n}\n\ndiscount = DATA NUMERIC[5,2] (Customer, Item);\nin = DATA BOOLEAN (Item);\n// change the discount for selected products for a customer\nsetDiscount (Customer c)  {\n    discount(c, Item i) <- 15 WHERE in(i);\n}\n\n// copy property g to property f\nf = DATA INTEGER (INTEGER);\ng = DATA INTEGER (INTEGER);\ncopyFG  {\n    f(a) <- g(a);\n}\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),b=n,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);