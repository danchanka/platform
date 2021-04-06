(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(747)),s={title:"NESTEDSESSION operator"},i={unversionedId:"NESTEDSESSION_operator",id:"NESTEDSESSION_operator",isDocsHomePage:!1,title:"NESTEDSESSION operator",description:"The NESTEDSESSION\xa0operator creates an\xa0action that executes the other action in a nested session.",source:"@site/docs/NESTEDSESSION_operator.md",slug:"/NESTEDSESSION_operator",permalink:"/platform/next/NESTEDSESSION_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/NESTEDSESSION_operator.md",version:"current",sidebar:"learn",previous:{title:"NEW operator",permalink:"/platform/next/NEW_operator"},next:{title:"NEWEXECUTOR operator",permalink:"/platform/next/NEWEXECUTOR_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NESTEDSESSION"),"\xa0operator creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that executes the other action in a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/New_session_NEWSESSION_NESTEDSESSION_#nested"},"nested session"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NESTEDSESSION action \n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"NESTEDSESSION"),"\xa0operator creates an action which executes the other action in a nested session. With that, all changes that have already been made in the current session get into the created nested session. Also, all changes that are made in the nested session will get into the current session when ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Apply_changes_APPLY_"},"the changes are applied")," in the nested session."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action\xa0")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent action operator")," that defines an action to be executed in the nested session."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"testNestedSession ()  {\n    NESTEDSESSION {\n        name(Sku s) <- 'aaa';\n        APPLY; // in fact, the changes will not be applied to the database, but to the \"upper\" session\n    }\n\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns all rows\n    CANCEL;\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns NULL if there was no Sku named aaa in the database before\n\n}\n\nFORM sku\n    OBJECTS s = Sku PANEL\n    PROPERTIES(s) id, name\n;\nnewNestedSession()  {\n    NESTEDSESSION {\n        NEW s = Sku {\n            // shows the form, but any changes in it will not be applied to the database, but will be saved in the \"upper session\" session\n            SHOW sku OBJECTS s = s;\n        }\n    }\n}\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},S={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(s,".").concat(b)]||u[b]||S[b]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);