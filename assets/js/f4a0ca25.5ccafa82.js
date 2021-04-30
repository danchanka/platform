(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{707:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(745)),c={title:"Order (ORDER)"},i={unversionedId:"Order_ORDER_",id:"version-v4/Order_ORDER_",isDocsHomePage:!1,title:"Order (ORDER)",description:"The order operator creates a property that returns the sequence number of an object collection in the specified group of objects, in accordance with the current order of this group.",source:"@site/versioned_docs/version-v4/Order_ORDER_.md",slug:"/Order_ORDER_",permalink:"/platform/Order_ORDER_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Order_ORDER_.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Filter (FILTER)",permalink:"/platform/Filter_FILTER_"},next:{title:"View (VIEW)",permalink:"/platform/View_VIEW_"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"order")," operator creates a ",Object(a.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," that returns the sequence number of an object collection in the specified group of objects, in accordance with the current ",Object(a.b)("a",{parentName:"p",href:"/platform/Form_structure#sort"},"order")," of this group."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To declare a property that determines the order in a group of objects, use the ",Object(a.b)("a",{parentName:"p",href:"/platform/Object_group_operator"},Object(a.b)("strong",{parentName:"a"},"ORDER")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Store;\nname = DATA STRING[100] (Store);\n\nFORM stores\n    OBJECTS s = Store\n;\ncountF 'Number of filtered warehouses' = GROUP SUM 1 IF [ VIEW stores.s](Store s);\norderF 'Order in an object group' (Store s) = PARTITION SUM 1 IF [ FILTER stores.s](s) ORDER [ ORDER stores.s](s), s;\nsetNameX 'Add X to name'()  {\n    LOCAL k = INTEGER ();\n    k() <- 0;\n    FOR [ FILTER stores.s](Store s) ORDER [ ORDER stores.s](s) DO {\n        k() <- k() + 1;\n        name(s) <- 'X' + k() + name(s);\n    }\n}\n")))}u.isMDXComponent=!0},745:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return O}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),f=n,O=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return t?o.a.createElement(O,i(i({ref:r},s),{},{components:t})):o.a.createElement(O,i({ref:r},s))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);