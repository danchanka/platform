(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{604:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(747)),a={title:"Event description block"},c={unversionedId:"Event_description_block",id:"Event_description_block",isDocsHomePage:!1,title:"Event description block",description:"Event description block describes an event in different instructions.",source:"@site/docs/Event_description_block.md",slug:"/Event_description_block",permalink:"/platform/next/Event_description_block",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Event_description_block.md",version:"current",sidebar:"learn",previous:{title:"ON instruction: Overview",permalink:"/platform/next/ON_instruction"},next:{title:"WHEN instruction",permalink:"/platform/next/WHEN_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Event description block")," describes an ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Events"},"event")," in different instructions."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[GLOBAL | LOCAL] [FORMS formName1, ..., formNameN] [GOAFTER propertyId1, ..., propertyIdM]\n")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"GLOBAL\xa0")),Object(i.b)("p",null,"The keyword specifying that the described event will be global. This is the default behavior."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"LOCAL")),Object(i.b)("p",null,"The keyword specifying that the described event\xa0will be local."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"formName1, ..., formNameN")),Object(i.b)("p",null,"A list of names of the \xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/Forms"},"forms")," in which the event will occur. Each element of the list is a \xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"composite ID"),". If the list is not defined, the event will occur in all forms."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdM")),Object(i.b)("p",null,"List of ",Object(i.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"property IDs"),". This list means that all event handlers that change one of the specified properties must be ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Events#order-broken"},"executed earlier")," than the handlers that will be defined in the instruction for which this event description block is being defined."))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),f=r,d=b["".concat(a,".").concat(f)]||b[f]||u[f]||i;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);