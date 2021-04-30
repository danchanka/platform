(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{625:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(745)),i={title:"Materializations"},p={unversionedId:"Materializations",id:"Materializations",isDocsHomePage:!1,title:"Materializations",description:"Almost any aggregated\xa0property\xa0in the platform can be materialized. In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was data (and not calculated every time). Accordingly, all data properties are materialized by definition.",source:"@site/docs/Materializations.md",slug:"/Materializations",permalink:"/platform/next/Materializations",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Materializations.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Execution",permalink:"/platform/next/Execution"},next:{title:"Indexes",permalink:"/platform/next/Indexes"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Almost any aggregated\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property"),"\xa0in the platform can be ",Object(o.b)("em",{parentName:"p"},"materialized"),". In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Data_properties_DATA_"},"data")," (and not calculated every time). Accordingly, all data properties are materialized by definition."),Object(o.b)("p",null,"A property can be materialized if and only if for it there is a finite number of object collections for which the value of this property is not ",Object(o.b)("strong",{parentName:"p"},"NULL")," (that is, the iteration operation for all of its non-",Object(o.b)("strong",{parentName:"p"},"NULL")," values is\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Set_operations#correct"},"correct"),")"),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To materialize a property, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Property_options#persistent-broken"},Object(o.b)("strong",{parentName:"a"},"MATERIALIZED")," option"),"\xa0in the property options."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"sum = GROUP SUM sum(OrderDetail od) BY order(od) MATERIALIZED;\ndate(OrderDetail od) = date(order(od)) MATERIALIZED;\n\n // such a property cannot be materialized, since it is not NULL for an infinite number of dates\nlastDate(Customer customer, DATE date) = GROUP LAST date(Order order) IF customer(order) = customer AND date(order) < date;\n")))}s.isMDXComponent=!0},745:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.a.createElement(f,p(p({ref:t},c),{},{components:r})):n.a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);