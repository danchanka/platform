(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{751:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.a.createElement(h,s(s({ref:n},p),{},{components:t})):r.a.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),o=(t(0),t(751)),c={title:"Apply changes (APPLY)"},s={unversionedId:"Apply_changes_APPLY_",id:"Apply_changes_APPLY_",isDocsHomePage:!1,title:"Apply changes (APPLY)",description:"The apply changes operator saves all changes made to the database, and also triggers the handling of all synchronous global\xa0events.",source:"@site/docs/Apply_changes_APPLY_.md",slug:"/Apply_changes_APPLY_",permalink:"/platform/docs/next/Apply_changes_APPLY_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Apply_changes_APPLY_.md",version:"current",sidebar:"docs",previous:{title:"Session management: Overview",permalink:"/platform/docs/next/Session_management"},next:{title:"Cancel changes (CANCEL)",permalink:"/platform/docs/next/Cancel_changes_CANCEL_"}},i=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"apply changes")," operator saves all changes made to the database, and also triggers the handling of all synchronous global\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Events"},"events"),"."),Object(o.b)("p",null,"For this operator you can also define an ",Object(o.b)("em",{parentName:"p"},"applied")," action to be executed before events handling is triggered, but it will be done in the same transaction. Execution within a single transaction increases its performance and integrity. It should be kept in mind, however, that when canceling changes, for example, all changes made in this applied action will also be canceled. During event handling the apply operation may be canceled if the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Cancel_changes_CANCEL_"},"cancel changes")," operator is executed. If this occurs, in the\xa0",Object(o.b)("strong",{parentName:"p"},"System.canceled"),"\xa0property a value of\xa0",Object(o.b)("strong",{parentName:"p"},"TRUE"),"\xa0is written (if not, then ",Object(o.b)("strong",{parentName:"p"},"NULL"),")."),Object(o.b)("p",null,"After completion of operation (whether successful or unsuccessful), all messages shown to the user during event handling are written to the special property ",Object(o.b)("strong",{parentName:"p"},"System.applyMessage"),"."),Object(o.b)("p",null,"As with other session management operators, you can explicitly specify ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Session_management#nested"},"nested local properties")," for the apply changes operator, which will preserve their\xa0changes after the operator is executed."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This operator works differently if executed inside a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/New_session_NEWSESSION_NESTEDSESSION_#nested"},"nested session"),": here all changes are copied back to the session in which this session is nested (and changes are not saved to the database)"))),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that applies changes, use the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/APPLY_operator"},Object(o.b)("strong",{parentName:"a"},"APPLY")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Sku;\nid = DATA INTEGER (Sku);\n\nin = DATA LOCAL BOOLEAN (Sku);\napplyIn()  {\n    in(Sku s) <- TRUE WHERE id(s) == 123;\n    APPLY NESTED (in[Sku]) {};\n    IF canceled() THEN\n        MESSAGE applyMessage();\n    FOR in(Sku s) DO\n        MESSAGE id(s); // shows '123'\n}\n\ncalculateInTransaction()  {\n    APPLY {\n        id(Sku s) <- (GROUP MAX id(Sku ss)) (+) 1; // putting down a new code inside the transaction\n    }\n}\n")))}l.isMDXComponent=!0}}]);