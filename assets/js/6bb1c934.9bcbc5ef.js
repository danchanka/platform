(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{363:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(747)),c={title:"NEWTHREAD operator"},i={unversionedId:"NEWTHREAD_operator",id:"NEWTHREAD_operator",isDocsHomePage:!1,title:"NEWTHREAD operator",description:"The\xa0NEWTHREAD\xa0operator creates an action that executes another action in a new thread.",source:"@site/docs/NEWTHREAD_operator.md",slug:"/NEWTHREAD_operator",permalink:"/platform/next/NEWTHREAD_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/NEWTHREAD_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"NEWSESSION operator",permalink:"/platform/next/NEWSESSION_operator"},next:{title:"PRINT operator",permalink:"/platform/next/PRINT_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"NEWTHREAD"),"\xa0operator creates an ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that executes another action in a ",Object(a.b)("a",{parentName:"p",href:"/platform/next/New_threads_NEWTHREAD_NEWEXECUTOR_"},"new thread"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"NEWTHREAD action [CONNECTION connectionExpr]\nNEWTHREAD action SCHEDULE [PERIOD periodExpr] [DELAY delayExpr]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"NEWTHREAD"),"\xa0operator creates an action that executes another action in a new thread. When the ",Object(a.b)("strong",{parentName:"p"},"CONNECTION")," keyword is used, you can specify the connection which will be used during the action execution. There is also a second form of the ",Object(a.b)("strong",{parentName:"p"},"NEWTHREAD")," operator for triggering an action using the scheduler. This form usage is determined by the presence of the ",Object(a.b)("strong",{parentName:"p"},"SCHEDULE")," keyword. \xa0"),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action\xa0")),Object(a.b)("p",null,"A ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context dependent operator")," that defines an action to be executed in the new thread."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"connectionExpr")),Object(a.b)("p",null,"An ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expression")," which value is a ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Properties"},"property")," that returns an object of the ",Object(a.b)("strong",{parentName:"p"},"SystemEvents.Connection")," class. Defines the connection for which this action will be performed.\xa0\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"periodExpr")),Object(a.b)("p",null,"An expression which value is a property that returns the length of the action repetition period in milliseconds. If not specified, the action will be executed once."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"delayExpr")),Object(a.b)("p",null,"An expression which value is a property that returns the delay before the first execution of the action in milliseconds. If not specified, the action will be executed without delay."),Object(a.b)("p",null,"\xa0",Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"testNewThread ()  {\n    //Showing messages 'Message' to all\n    FOR user(Connection conn) AND connectionStatus(conn) == ConnectionStatus.connectedConnection AND conn != currentConnection() DO {\n        NEWTHREAD MESSAGE 'Message'; CONNECTION conn;\n    }\n\n    //Execution of the 'action' action with a frequency of 10 seconds and a delay of 5 seconds\n    NEWTHREAD MESSAGE 'Hello World'; SCHEDULE PERIOD 10000 DELAY 5000;\n}\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);