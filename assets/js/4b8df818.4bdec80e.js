(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(746)),i={title:"Integration",sidebar_label:"Overview"},s={unversionedId:"Integration",id:"Integration",isDocsHomePage:!1,title:"Integration",description:"Integration includes everything related to interaction of the lsFusion system with other systems. In terms of the direction of this interaction, integration can be divided into:",source:"@site/docs/Integration.md",slug:"/Integration",permalink:"/platform/next/Integration",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Integration.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"learn",previous:{title:"Metaprogramming",permalink:"/platform/next/Metaprogramming"},next:{title:"Access from an external system",permalink:"/platform/next/Access_from_an_external_system"}},c=[],l={toc:c};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Integration includes everything related to interaction of the lsFusion system with other systems. In terms of the direction of this interaction, integration can be divided into:\xa0"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Access to the lsFusion system from another system."),Object(o.b)("li",{parentName:"ol"},"Access from the lsFusion system to another system.")),Object(o.b)("p",null,"In terms of the physical model, integration can be divided into:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Interaction with systems running in "the same environment" as the lsFusion system (that is, in the\xa0Java virtual machine ',"[","JVM","]"," of the lsFusion server and/or using the same SQL server as the lsFusion system)."),Object(o.b)("li",{parentName:"ol"},"Interaction with\xa0remote systems via network protocols.")),Object(o.b)("p",null,"Accordingly, we will call the first systems ",Object(o.b)("em",{parentName:"p"},"internal"),", and the second ",Object(o.b)("em",{parentName:"p"},"external"),". In turn, interaction with internal systems using Java tools we will call ",Object(o.b)("em",{parentName:"p"},"Java interaction"),", and using SQL tools \u2013 ",Object(o.b)("em",{parentName:"p"},"SQL interaction"),"."),Object(o.b)("p",null,"Thus, the platform has four different types of integration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/next/Access_from_an_external_system"},"Access from an external system")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/next/Access_from_an_internal_system"},"Access from an internal system")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/next/Access_to_an_external_system_EXTERNAL_"},"Access to an external system (EXTERNAL)"),"\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/next/Access_to_an_internal_system_INTERNAL_FORMULA_"},"Access to an internal system (INTERNAL, FORMULA)"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Additionally, it is worth noting that the ability to interact with internal systems can be used not only for purposes of integration but also for purposes of extensibility when platform capabilities are insufficient for some reason."))))}m.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,f=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);