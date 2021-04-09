(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{433:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(746)),o={title:"Form views",sidebar_label:"Overview"},c={unversionedId:"Form_views",id:"Form_views",isDocsHomePage:!1,title:"Form views",description:"A form view can be classified as follows:",source:"@site/docs/Form_views.md",slug:"/Form_views",permalink:"/platform/next/Form_views",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Form_views.md",version:"current",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"learn",previous:{title:"Groups of properties and actions",permalink:"/platform/next/Groups_of_properties_and_actions"},next:{title:"Interactive view",permalink:"/platform/next/Interactive_view"}},s=[{value:"Graphic view",id:"graphic",children:[]},{value:"Stack",id:"stack",children:[]}],l={toc:s};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Forms"},"form")," view can be classified as follows:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/platform/next/Interactive_view"},"Interactive")),Object(i.b)("p",null,"A view in which the user can interact with an open form: select current objects, call ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Actions"},"actions"),", change ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Data_properties_DATA_"},"data properties"),", and so on. Data is usually read as needed depending on user actions. It is this view (along with the ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Integration"},"programming interface"),") that is responsible for data input into the system."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/platform/next/Static_view"},"Static")),Object(i.b)("p",null,"In this view, when the ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Open_form"},"form opens"),"\xa0all its\xa0data is read at once, after which this data is converted/sent to the client. This is a one-way view type."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"By default, depending on the implementation specifics, conversion can take place either\xa0on the server (before sending to the client) or directly on the client itself."))),Object(i.b)("p",null,"From a data flow standpoint, the interactive view is internal, meaning that the data remains inside the server/native client, while the static view is external, with the data converted and sent to the reporting subsystem, or to the operating system in the form of files in various formats.\xa0"),Object(i.b)("h3",{id:"graphic"},"Graphic view"),Object(i.b)("p",null,"Some views are ",Object(i.b)("em",{parentName:"p"},"graphic"),", meaning that to display them the data read must be placed in two-dimensional space: on paper or the screen of the device. Accordingly, for these views a design may/must be defined:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/platform/next/Form_design"},"Form design")," - for ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Interactive_view"},"interactive")," view."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/platform/next/Report_design"},"Report design")," - for ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Print_view"},"print")," view.")),Object(i.b)("h3",{id:"stack"},"Stack"),Object(i.b)("p",null,Object(i.b)("img",{src:r(882).default})))}p.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,f=m["".concat(o,".").concat(u)]||m[u]||b[u]||i;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},882:function(e,t,r){"use strict";r.r(t),t.default="data:image/png;base64,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"}}]);