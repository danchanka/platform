(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{609:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(745)),o={title:"ON instruction",sidebar_label:"Overview"},c={unversionedId:"ON_instruction",id:"version-v4/ON_instruction",isDocsHomePage:!1,title:"ON instruction",description:"The ON instruction adds an event handler.",source:"@site/versioned_docs/version-v4/ON_instruction.md",slug:"/ON_instruction",permalink:"/platform/ON_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ON_instruction.md",version:"v4",lastUpdatedAt:1619530455,formattedLastUpdatedAt:"4/27/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"GROUP instruction",permalink:"/platform/GROUP_instruction"},next:{title:"Event description block",permalink:"/platform/Event_description_block"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," instruction adds an ",Object(i.b)("a",{parentName:"p",href:"/platform/Events"},"event")," handler."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"ON eventClause eventAction;\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," instruction adds an event handler for the specified event. "),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventClause")),Object(i.b)("p",{parentName:"li"},"  This ",Object(i.b)("a",{parentName:"p",href:"/platform/Event_description_block"},"event description block")," describes an event for which a handler needs to be added.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventAction")),Object(i.b)("p",{parentName:"li"},"  This ",Object(i.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," describes the event handler."))),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nname = DATA STRING[100] (Sku);\n\nON {\n    LOCAL changedName = BOOLEAN (Sku);\n    changedName(Sku s) <- CHANGED(name(s));\n    IF (GROUP SUM 1 IF changedName(Sku s)) THEN {\n        MESSAGE 'Changed ' + (GROUP SUM 1 IF changedName(Sku s)) + ' skus!!!';\n    }\n}\n\nCLASS Order;\n\nCLASS Customer;\nname = DATA STRING[50] (Customer);\n\ncustomer = DATA Customer (Order);\ndiscount = DATA NUMERIC[6,2] (Order);\n\nON LOCAL {\n    FOR CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n        discount(o) <- 50;\n}\n")))}l.isMDXComponent=!0},745:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);