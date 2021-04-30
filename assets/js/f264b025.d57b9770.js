(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{701:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(745)),i={title:"NEWTHREAD operator"},c={unversionedId:"NEWTHREAD_operator",id:"version-v4/NEWTHREAD_operator",isDocsHomePage:!1,title:"NEWTHREAD operator",description:"The NEWTHREAD operator creates an action that executes another action in a new thread.",source:"@site/versioned_docs/version-v4/NEWTHREAD_operator.md",slug:"/NEWTHREAD_operator",permalink:"/platform/NEWTHREAD_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/NEWTHREAD_operator.md",version:"v4",lastUpdatedAt:1619608937,formattedLastUpdatedAt:"4/28/2021",sidebar:"version-v4/learn",previous:{title:"NEWSESSION operator",permalink:"/platform/NEWSESSION_operator"},next:{title:"PRINT operator",permalink:"/platform/PRINT_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"NEWTHREAD")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that executes another action in a ",Object(o.b)("a",{parentName:"p",href:"/platform/New_threads_NEWTHREAD_NEWEXECUTOR_"},"new thread"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NEWTHREAD action [CONNECTION connectionExpr]\nNEWTHREAD action SCHEDULE [PERIOD periodExpr] [DELAY delayExpr]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"NEWTHREAD")," operator creates an action that executes another action in a new thread. When the ",Object(o.b)("inlineCode",{parentName:"p"},"CONNECTION")," keyword is used, you can specify the connection which will be used during the action execution. There is also a second form of the ",Object(o.b)("inlineCode",{parentName:"p"},"NEWTHREAD")," operator for triggering an action using the scheduler. This form usage is determined by the presence of the ",Object(o.b)("inlineCode",{parentName:"p"},"SCHEDULE")," keyword.  "),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"action")),Object(o.b)("p",{parentName:"li"},"  A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context dependent operator")," that defines an action to be executed in the new thread.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"connectionExpr")),Object(o.b)("p",{parentName:"li"},"  An ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," which value is a ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"property")," that returns an object of the ",Object(o.b)("inlineCode",{parentName:"p"},"SystemEvents.Connection")," class. Defines the connection for which this action will be performed.  ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"periodExpr")),Object(o.b)("p",{parentName:"li"},"  An expression which value is a property that returns the length of the action repetition period in milliseconds. If not specified, the action will be executed once.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"delayExpr")),Object(o.b)("p",{parentName:"li"},"  An expression which value is a property that returns the delay before the first execution of the action in milliseconds. If not specified, the action will be executed without delay."))),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"testNewThread ()  {\n    //Showing messages 'Message' to all\n    FOR user(Connection conn) AND connectionStatus(conn) == ConnectionStatus.connectedConnection AND conn != currentConnection() DO {\n        NEWTHREAD MESSAGE 'Message'; CONNECTION conn;\n    }\n\n    //Execution of the 'action' action with a frequency of 10 seconds and a delay of 5 seconds\n    NEWTHREAD MESSAGE 'Hello World'; SCHEDULE PERIOD 10000 DELAY 5000;\n}\n")))}s.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);