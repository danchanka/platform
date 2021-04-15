(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(747)),i={title:"New threads (NEWTHREAD, NEWEXECUTOR)"},c={unversionedId:"New_threads_NEWTHREAD_NEWEXECUTOR_",id:"version-v4/New_threads_NEWTHREAD_NEWEXECUTOR_",isDocsHomePage:!1,title:"New threads (NEWTHREAD, NEWEXECUTOR)",description:"The new thread operator allows you to execute an action in a thread other than the current one.",source:"@site/versioned_docs/version-v4/New_threads_NEWTHREAD_NEWEXECUTOR_.md",slug:"/New_threads_NEWTHREAD_NEWEXECUTOR_",permalink:"/platform/New_threads_NEWTHREAD_NEWEXECUTOR_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/New_threads_NEWTHREAD_NEWEXECUTOR_.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Exit (RETURN)",permalink:"/platform/Exit_RETURN_"},next:{title:"Exception handling (TRY)",permalink:"/platform/Exception_handling_TRY_"}},l=[{value:"New thread pool",id:"new-thread-pool",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"new thread")," operator allows you to execute an action in a thread other than the current one.\xa0"),Object(o.b)("p",null,"By default, an action is executed once in a new thread, immediately after the creation of this thread. However, if necessary, the action can be executed with a defined delay and/or performed continuously at a specified time interval.\xa0"),Object(o.b)("p",null,"The action can also be executed in a new thread on behalf of a specified connection (for example, some user). In this case, ",Object(o.b)("a",{parentName:"p",href:"/platform/User_IS_interaction"},"user interaction")," operators may be used inside the action, including ",Object(o.b)("a",{parentName:"p",href:"/platform/Open_form"},"form opening")," in ",Object(o.b)("a",{parentName:"p",href:"/platform/In_an_interactive_view_SHOW_DIALOG_"},"interactive")," view (by default, when you use these operators, the platform will throw an error)."),Object(o.b)("p",null,"The delay, interval and connection in this statement are defined as certain\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"properties"),"."),Object(o.b)("h3",{id:"new-thread-pool"},"New thread pool"),Object(o.b)("p",null,"Sometimes the number of simultaneously running threads\xa0must be limited to a certain value (as a rule, this is done if the executed actions are not critical and the moment in time when they are completed is not so important). To implement this functionality, the platform has an operator for creating a ",Object(o.b)("em",{parentName:"p"},"new thread pool"),". This allows the operator to perform an action in such a way that all new threads generated inside this action come into this thread pool, which at the same time can include no more than a specified number of threads."),Object(o.b)("p",null,"The number of threads is defined as a property."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that executes another action in a new thread, use the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/NEWTHREAD_operator"},Object(o.b)("strong",{parentName:"a"},"NEWTHREAD")," operator"),". To perform an action in a new thread pool, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/NEWEXECUTOR_operator"},Object(o.b)("strong",{parentName:"a"},"NEWEXECUTOR")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"testNewThread ()  {\n    //Showing messages 'Message' to all\n    FOR user(Connection conn) AND connectionStatus(conn) == ConnectionStatus.connectedConnection AND conn != currentConnection() DO {\n        NEWTHREAD MESSAGE 'Message'; CONNECTION conn;\n    }\n\n    //Execution of the 'action' action with a frequency of 10 seconds and a delay of 5 seconds\n    NEWTHREAD MESSAGE 'Hello World'; SCHEDULE PERIOD 10000 DELAY 5000;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"testExecutor  {\n    NEWEXECUTOR {\n        FOR id(Sku s) DO {\n            NEWTHREAD {\n                NEWSESSION {\n                    name(s) <- STRING[20](id(s)); // writing the code into the name in 10 threads\n                    APPLY;\n                }\n            }\n        }\n    } THREADS 10;\n}\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);