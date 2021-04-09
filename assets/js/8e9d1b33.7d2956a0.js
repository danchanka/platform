(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{453:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(746)),l={title:"Events",sidebar_label:"Overview"},s={unversionedId:"Events",id:"Events",isDocsHomePage:!1,title:"Events",description:"Events are a mechanism that allows to execute certain\xa0actions\xa0at certain points in time (these\xa0actions\xa0shall be called event\xa0handlers).",source:"@site/docs/Events.md",slug:"/Events",permalink:"/platform/next/Events",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Events.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"learn",previous:{title:"Send mail (EMAIL)",permalink:"/platform/next/Send_mail_EMAIL_"},next:{title:"Simple event",permalink:"/platform/next/Simple_event"}},i=[{value:"Event types",id:"type",children:[]},{value:"Change operators&#39; event mode",id:"change",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Events")," are a mechanism that allows to execute certain\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"actions"),"\xa0at certain points in time (these\xa0actions\xa0shall be called event\xa0",Object(o.b)("em",{parentName:"p"},"handlers"),")."),Object(o.b)("h3",{id:"type"},"Event types"),Object(o.b)("p",null,"There are two types of events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Synchronous")," -\xa0occur immediately after a data change."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Asynchronous"),"\xa0- occur at arbitrary points in time as the server manages to complete execution of all defined handlers, and/or after a certain period of time.")),Object(o.b)("p",null,"In turn, from the perspective of the scope of changes, events can be divided into:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Local")," - occur locally for each change session."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Global"),"\xa0- occur globally for the entire database.")),Object(o.b)("p",null,"Thus, events can be synchronous local, synchronous global, asynchronous local, and asynchronous global. Note that by default global\xa0events are synchronous and local events are asynchronous (as the most commonly used combinations). Also, by default, all events are global."),Object(o.b)("p",null,"Advantages of synchronous events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If necessary, you can cancel the changes in the handler if, for example, these changes do not meet the necessary conditions."),Object(o.b)("li",{parentName:"ul"},"They guarantee greater integrity, since after the changes have been written the user is guaranteed to be working with the updated data.")),Object(o.b)("p",null,"Advantages of asynchronous events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'You can release the user immediately and perform the handling "in the background". This improves system ergonomics; however, it is possible only when updating the data is not critical for the user\'s further work (for global events, for example,\xa0within the next 5-10 minutes, until the server has time to complete the next handling cycle).'),Object(o.b)("li",{parentName:"ul"},"Handlings are grouped for a large number of changes, including those made by different users (in the case of global events), and, accordingly, are performed fewer times, thereby improving the overall system performance.")),Object(o.b)("p",null,"Advantages of local events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The user sees the results of event handling immediately, not only after he has saved to the common database.")),Object(o.b)("p",null,"Advantages of global events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"They provide better performance and integrity, due both to the fact that the handling is performed only after the changes are saved to the common database (that is, significantly less often), and to the use of the numerous DBMS capabilities for working with transactions.")),Object(o.b)("p",null,"The platform also allows\xa0to additionally specify that the event will occur only if the change session belongs to one of the given forms. If this is not done, then it must be kept in mind that most of the described events occur\xa0very often, so their handling should not have side effects (for example, showing messages) if there are no changes in the session. Ideally, events should be\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Simple_event"},"simple")," and should generally be used only to optimize the performance of really complex cases."),Object(o.b)("h3",{id:"change"},"Change operators' event mode"),Object(o.b)("p",null,"When handling events, you can use a special mode of the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Previous_value_PREV_"},"previous value"),"\xa0operator (it shall be called ",Object(o.b)("em",{parentName:"p"},"event")," mode). In this mode, the previous value operator will return the property's values not at the beginning of the session, but at the time of the previous occurrence of this event (or rather, the end of its handling). A similar mode is supported for all ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Change_operators_SET_CHANGED_..._"},"change")," operators."),Object(o.b)("p",null,"Event mode is also supported for the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Cancel_changes_CANCEL_"},"cancel changes")," operator.\xa0In this case, when changes are canceled inside the global event handler, the session is not cleared, but ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Apply_changes_APPLY_"},"applying changes")," which led to the execution of this handler is canceled.\xa0The global event must be synchronous, otherwise the platform will throw an error."),Object(o.b)("p",null,"By default, the following modes are used in event handling:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"for the previous value operator: standard mode (value at the beginning of the session)"),Object(o.b)("li",{parentName:"ul"},"for change operators - event (value at the time the previous event occurred).\xa0"),Object(o.b)("li",{parentName:"ul"},"for the cancel changes operator - event mode (canceling the application, not clearing the session).")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For change operators and the previous value operator, when executing global synchronous event handlers, these modes (standard and event) coincide"))),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To create actions that handle events, use the ON instruction."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nname = DATA STRING[100] (Sku);\n\nON {\n    LOCAL changedName = BOOLEAN (Sku);\n    changedName(Sku s) <- CHANGED(name(s));\n    IF (GROUP SUM 1 IF changedName(Sku s)) THEN {\n        MESSAGE 'Changed ' + (GROUP SUM 1 IF changedName(Sku s)) + ' skus!!!';\n    }\n}\n\nCLASS Order;\n\nCLASS Customer;\nname = DATA STRING[50] (Customer);\n\ncustomer = DATA Customer (Order);\ndiscount = DATA NUMERIC[6,2] (Order);\n\nON LOCAL {\n    FOR CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n        discount(o) <- 50;\n}\n")))}u.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(l,".").concat(b)]||p[b]||h[b]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);