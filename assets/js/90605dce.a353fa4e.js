(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{461:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(746)),c={title:"TRY operator"},i={unversionedId:"TRY_operator",id:"TRY_operator",isDocsHomePage:!1,title:"TRY operator",description:"The TRY operator creates an action that executes another action with exception handling.",source:"@site/docs/TRY_operator.md",slug:"/TRY_operator",permalink:"/platform/next/TRY_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/TRY_operator.md",version:"current",sidebar:"learn",previous:{title:"SHOW operator",permalink:"/platform/next/SHOW_operator"},next:{title:"WHILE operator",permalink:"/platform/next/WHILE_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"TRY")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that executes another action with ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Exception_handling_TRY_"},"exception handling"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"TRY action [CATCH catchAction] [FINALLY finallyAction]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"TRY")," operator creates an action that executes another action and handles exceptions within it.\xa0"),Object(o.b)("p",null,"An operator form without the\xa0",Object(o.b)("strong",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action and intercepts errors that are thrown in it. In this case, the error is not passed anywhere."),Object(o.b)("p",null,"An operator form with the ",Object(o.b)("strong",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action, intercepts errors that occur, then, regardless of whether an error was thrown or not, executes the action specified in the ",Object(o.b)("strong",{parentName:"p"},"FINALLY")," block, and then, if an error was thrown, passes this error to the top action in the stack."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent operator")," that describes an action to be executed with exception handling."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"catchAction")),Object(o.b)("p",null,"A context-dependent operator that describes an action to be executed if an error is thrown while executing the action. Here the error message will be written to the property ",Object(o.b)("strong",{parentName:"p"},"System.messageCaughtException ","[","]"),", the java error stack will be written to\xa0",Object(o.b)("strong",{parentName:"p"},"System.javaStackTraceCaughtException ","[","]"),", and the LSF stack will be written to\xa0*",Object(o.b)("strong",{parentName:"p"},"*System.lsfStackTraceCaughtException ","[","]",".**")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"finallyAction")),Object(o.b)("p",null,"A context-dependent operator that describes an action to be executed after the action being executed, regardless of whether or not an error has been thrown."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"tryToImport(FILE f)  {\n    TRY {\n        LOCAL a = BPSTRING[10] (INTEGER);\n\n        IMPORT XLS FROM f TO a = A;\n    }\n}\n\nCLASS MyLock {\n    lock 'Blocking'\n}\n\nsingleDo ()  {\n    NEWSESSION {\n        lock(MyLock.lock);\n        IF lockResult() THEN\n        TRY {\n            MESSAGE 'Lock Obtained';\n        } CATCH {\n            MESSAGE messageCaughtException();\n        } FINALLY unlock(MyLock.lock);\n    }\n}\n")))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),h=r,d=b["".concat(c,".").concat(h)]||b[h]||u[h]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);