(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{589:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),c=(r(0),r(746)),a={title:"Search (SEEK)"},i={unversionedId:"Search_SEEK_",id:"version-v4/Search_SEEK_",isDocsHomePage:!1,title:"Search (SEEK)",description:"Search operator tries to make the specified object collection current for the specified form object group. The objects from the specified object collection shall be called seek objects.",source:"@site/versioned_docs/version-v4/Search_SEEK_.md",slug:"/Search_SEEK_",permalink:"/platform/Search_SEEK_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Search_SEEK_.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Object group operations",permalink:"/platform/Object_group_operations"},next:{title:"Filter (FILTER)",permalink:"/platform/Filter_FILTER_"}},l=[{value:"Seek direction",id:"direction",children:[]},{value:"Setting NULL Values",id:"setting-null-values",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Search")," operator tries to make the specified object collection ",Object(c.b)("a",{parentName:"p",href:"/platform/Form_structure#currentObject-broken"},"current")," for the specified form object group. The objects from the specified object collection shall be called ",Object(c.b)("em",{parentName:"p"},"seek objects"),"."),Object(c.b)("h3",{id:"direction"},"Seek direction"),Object(c.b)("p",null,"If the object group for which the search is performed contains objects other than search objects, for these objects (which we will call\xa0",Object(c.b)("em",{parentName:"p"},"additional"),") the collection of objects that will be selected as current is determined by special options:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"FIRST")," - the\xa0",Object(c.b)("u",null,"first"),"\xa0matching collection according to the specified order will be selected.\xa0"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"LAST"),"\xa0- the\xa0",Object(c.b)("u",null,"last"),"\xa0matching collection according to the specified order will be selected.\xa0")),Object(c.b)("p",null,"If the required object collection is not found for the seek objects, the current object collection will be the closest to the desired one. The direction in which this closest object collection will be selected is also determined by the above options:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"FIRST")," -\xa0the\xa0",Object(c.b)("u",null,"next"),"\xa0closest collection according to the specified order will be selected.\xa0"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"LAST")," -\xa0the\xa0",Object(c.b)("u",null,"previous"),"\xa0closest collection according to the specified order will be selected.\xa0")),Object(c.b)("h3",{id:"setting-null-values"},"Setting NULL Values"),Object(c.b)("p",null,"Also, this operator allows resetting all objects of the specified group to ",Object(c.b)("strong",{parentName:"p"},"NULL"),". In this case, the seek direction is not applicable/not specified."),Object(c.b)("h3",{id:"language"},"Language"),Object(c.b)("p",null,"To declare an action that implements an object change, use the\xa0",Object(c.b)("a",{parentName:"p",href:"/platform/SEEK_operator"},Object(c.b)("strong",{parentName:"a"},"SEEK")," operator"),"."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"number = DATA INTEGER (Order);\nFORM orders\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY number, currency, customer\n;\nnewOrder  {\n    NEW new = Order {\n        number(new) <- (GROUP MAX number(Order o)) (+) 1;\n        SEEK orders.o = new;\n    }\n}\nseekFirst  { SEEK FIRST orders.o; }\nseekLast  { SEEK LAST orders.o; }\n\nEXTEND FORM orders\n    PROPERTIES(o) newOrder, seekFirst, seekLast\n;\n")))}b.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||u[d]||c;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);