(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(747)),i={title:"AFTER instruction"},o={unversionedId:"AFTER_instruction",id:"AFTER_instruction",isDocsHomePage:!1,title:"AFTER instruction",description:"The\xa0AFTER\xa0instruction\xa0 calls an\xa0action\xa0after calling another action.",source:"@site/docs/AFTER_instruction.md",slug:"/AFTER_instruction",permalink:"/platform/next/AFTER_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/AFTER_instruction.md",version:"current",sidebar:"learn",previous:{title:"BEFORE instruction",permalink:"/platform/next/BEFORE_instruction"},next:{title:"Empty instruction",permalink:"/platform/next/Empty_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"AFTER"),"\xa0instruction\xa0 calls an\xa0",Object(c.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action"),"\xa0after calling another action.\xa0"),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"AFTER action(param1, ..., paramN) DO aspectAction;\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"AFTER"),"\xa0instruction defines an action (let's call it an\xa0",Object(c.b)("em",{parentName:"p"},"aspect"),") that will be called after the specified action."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"action")),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID")," of the action after which the aspect will be called."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(c.b)("p",null,"List of action parameter names. Each name is defined\xa0",Object(c.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"by a simple ID"),". These parameters can be accessed when defining an aspect."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"aspectAction")),Object(c.b)("p",null,"A ",Object(c.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent action operator")," describing the aspect."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"changePrice(Sku s, DATE d, NUMERIC[10,2] price)  { price(s, d) <- price; }\nAFTER changePrice(Sku s, DATE d, NUMERIC[10,2] price) DO MESSAGE 'Price was changed'; // A message will be shown after each call to changePrice\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||c;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);