(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{697:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(749)),s={title:"Change sessions"},c={unversionedId:"Change_sessions",id:"Change_sessions",isDocsHomePage:!1,title:"Change sessions",description:"Actions\xa0can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in change sessions.",source:"@site/docs/Change_sessions.md",slug:"/Change_sessions",permalink:"/platform/next/Change_sessions",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Change_sessions.md",version:"current",sidebar:"learn",previous:{title:"Actions: Overview",permalink:"/platform/next/Actions"},next:{title:"\u041eperators: Overview",permalink:"/platform/next/\u041eperators"}},i=[],p={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"Actions"),"\xa0can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in ",Object(o.b)("em",{parentName:"p"},"change sessions."),"\xa0"),Object(o.b)("p",null,"Changes in a session may be changes in ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Data_properties_DATA_"},"data")," properties, including local ones, as well as changes in ",Object(o.b)("a",{parentName:"p",href:"/platform/next/User_classes"},"classes")," of objects.\xa0The former are done by actions created using the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Property_change_CHANGE_"},"property change operator"),", the latter using the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/New_object_NEW_"},"add"),"/",Object(o.b)("a",{parentName:"p",href:"/platform/next/Class_change_CHANGECLASS_DELETE_"},"change"),"\xa0object class operators."),Object(o.b)("p",null,"Each time an action is executed, the ",Object(o.b)("em",{parentName:"p"},"current")," session is determined depending on the execution context. For example, if the action is called as the handler of some event on a form (the most common case), then the session of that form will be the current session for it. The current session may also change when the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/New_session_NEWSESSION_NESTEDSESSION_"},"new session")," operator is used, for example."),Object(o.b)("p",null,"If an action refers to some property during the execution, then its value is calculated taking into account the changes made in the current session of that action."),Object(o.b)("p",null,"Two basic operations are supported for a session -\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Apply_changes_APPLY_"},"application"),"\xa0and\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Cancel_changes_CANCEL_"},"cancellation")," ",Object(o.b)("em",{parentName:"p"},"-")," as well as a set of operators for\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Change_operators_SET_CHANGED_..._"},"working with changes"),"\xa0(including getting\xa0a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Previous_value_PREV_"},"previous value"),"\xa0in the session)."),Object(o.b)("p",null,'Note that change sessions are not thread safe, therefore when using operators that explicitly or implicitly perform actions in a new thread and do not block their execution flow, it is highly recommended not to access the current session after they are executed (such "multi-threaded" operators include the\xa0',Object(o.b)("a",{parentName:"p",href:"/platform/next/NEWTHREAD_operator"},"new thread"),"\xa0and ",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_#flow"},"asynchronous"),"\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_"},"form opening")," operators). In this case, it is recommended that you always create a new session."))}l.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,u=h["".concat(s,".").concat(m)]||h[m]||f[m]||o;return n?a.a.createElement(u,c(c({ref:t},p),{},{components:n})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);