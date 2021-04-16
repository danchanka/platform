(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{616:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(747)),c={title:"ON instruction",sidebar_label:"Overview"},i={unversionedId:"ON_instruction",id:"version-v4/ON_instruction",isDocsHomePage:!1,title:"ON instruction",description:"The ON instruction adds an event handler.",source:"@site/versioned_docs/version-v4/ON_instruction.md",slug:"/ON_instruction",permalink:"/platform/ON_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ON_instruction.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"GROUP instruction",permalink:"/platform/GROUP_instruction"},next:{title:"Event description block",permalink:"/platform/Event_description_block"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ON")," instruction adds an ",Object(o.b)("a",{parentName:"p",href:"/platform/Events"},"event")," handler."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ON eventClause eventAction;\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ON")," instruction adds an event handler for the specified event. "),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,"This ",Object(o.b)("a",{parentName:"p",href:"/platform/Event_description_block"},"event description block")," describes an event for which a handler needs to be added."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventAction")),Object(o.b)("p",null,"This ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," describes the event handler."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nname = DATA STRING[100] (Sku);\n\nON {\n    LOCAL changedName = BOOLEAN (Sku);\n    changedName(Sku s) <- CHANGED(name(s));\n    IF (GROUP SUM 1 IF changedName(Sku s)) THEN {\n        MESSAGE 'Changed ' + (GROUP SUM 1 IF changedName(Sku s)) + ' skus!!!';\n    }\n}\n\nCLASS Order;\n\nCLASS Customer;\nname = DATA STRING[50] (Customer);\n\ncustomer = DATA Customer (Order);\ndiscount = DATA NUMERIC[6,2] (Order);\n\nON LOCAL {\n    FOR CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n        discount(o) <- 50;\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"}),Object(o.b)("li",{parentName:"ul"})))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);