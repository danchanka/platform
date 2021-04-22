(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{253:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(747)),o={title:"Execution",sidebar_label:"Overview"},s={unversionedId:"Execution",id:"version-v4/Execution",isDocsHomePage:!1,title:"Execution",description:"If the system is small and there is not much data in it, it usually works quite efficiently without any additional optimizations. But if the logic becomes more complex, and the amount of data increases significantly, it often makes sense to tell the platform how best to store and process all this data.",source:"@site/versioned_docs/version-v4/Execution.md",slug:"/Execution",permalink:"/platform/Execution",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Execution.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Internationalization",permalink:"/platform/Internationalization"},next:{title:"Materializations",permalink:"/platform/Materializations"}},c=[{value:"Materializations",id:"materializations",children:[]},{value:"Indexes",id:"indexes",children:[]},{value:"Tables",id:"tables",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If the system is small and there is not much data in it, it usually works quite efficiently without any additional optimizations. But if the logic becomes more complex, and the amount of data increases significantly, it often makes sense to tell the platform how best to store and process all this data."),Object(i.b)("p",null,"The platform provides two main mechanisms for working with data: ",Object(i.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," and ",Object(i.b)("a",{parentName:"p",href:"/platform/Actions"},"actions"),". The first is responsible for storing and calculating data, and the second for changing the system state from one to another. Actions can be optimized to quite a limited extent (among other things, because of aftereffects), but for properties, there is a whole set of features that allows to reduce the response time of specific operations and increase overall system performance:"),Object(i.b)("h3",{id:"materializations"},"Materializations"),Object(i.b)("p",null,"If a property is read a large number of times (significantly more often than it is changed), the performance of operations using this property can be significantly improved by ",Object(i.b)("a",{parentName:"p",href:"/platform/Materializations"},"materializing")," it."),Object(i.b)("h3",{id:"indexes"},"Indexes"),Object(i.b)("p",null,"If a property is often involved in the calculation of other properties, it can make sense to build an ",Object(i.b)("a",{parentName:"p",href:"/platform/Indexes"},"index")," with that property."),Object(i.b)("h3",{id:"tables"},"Tables"),Object(i.b)("p",null,'If the same properties are often read/changed for the same object collection at the same time, storing each such property separately can be quite inefficient. So the platform allows to "group" properties into so called ',Object(i.b)("a",{parentName:"p",href:"/platform/Tables"},"tables"),"."))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(o,".").concat(m)]||f[m]||u[m]||i;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);