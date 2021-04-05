(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{235:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(751)),c={title:"NEWEXECUTOR operator"},p={unversionedId:"NEWEXECUTOR_operator",id:"NEWEXECUTOR_operator",isDocsHomePage:!1,title:"NEWEXECUTOR operator",description:"The\xa0NEWEXECUTOR\xa0operator creates an action that enables executing other actions in a new thread pool.",source:"@site/docs/NEWEXECUTOR_operator.md",slug:"/NEWEXECUTOR_operator",permalink:"/platform/docs/next/NEWEXECUTOR_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/NEWEXECUTOR_operator.md",version:"current",sidebar:"docs",previous:{title:"NESTEDSESSION operator",permalink:"/platform/docs/next/NESTEDSESSION_operator"},next:{title:"NEWSESSION operator",permalink:"/platform/docs/next/NEWSESSION_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"NEWEXECUTOR"),"\xa0operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that enables executing other actions in a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/New_threads_NEWTHREAD_NEWEXECUTOR_"},"new thread pool"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NEWEXECUTOR action THREADS threadExpr\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NEWEXECUTOR"),"\xa0operator creates an action that creates a new thread pool and executes the defined action in such a way that any action created with the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/NEWTHREAD_operator"},Object(o.b)("strong",{parentName:"a"},"NEWTHREAD")," operator")," will be executed in one of the threads of the created pool.\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action\xa0")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Action_operator#contextdependent"},"context-dependent action operator")," that defines an action to be executed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"threadExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression")," which value determines the number of threads in the pool. Must return the value of the ",Object(o.b)("strong",{parentName:"p"},"INTEGER")," class.\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"testExecutor  {\n    NEWEXECUTOR {\n        FOR id(Sku s) DO {\n            NEWTHREAD {\n                NEWSESSION {\n                    name(s) <- STRING[20](id(s)); // writing the code into the name in 10 threads\n                    APPLY;\n                }\n            }\n        }\n    } THREADS 10;\n}\n")))}s.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return E}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,E=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(E,p(p({ref:t},l),{},{components:r})):a.a.createElement(E,p({ref:t},l))}));function E(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);