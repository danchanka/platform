(window.webpackJsonp=window.webpackJsonp||[]).push([[542],{616:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(751)),s={title:"Session management: Overview",sidebar_label:"Overview"},i={unversionedId:"Session_management",id:"version-1.0.0/Session_management",isDocsHomePage:!1,title:"Session management: Overview",description:"The system has the following operators for working with sessions:",source:"@site/versioned_docs/version-1.0.0/Session_management.md",slug:"/Session_management",permalink:"/platform/docs/Session_management",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Session_management.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"Class change (CHANGECLASS, DELETE)",permalink:"/platform/docs/Class_change_CHANGECLASS_DELETE_"},next:{title:"Apply changes (APPLY)",permalink:"/platform/docs/Apply_changes_APPLY_"}},c=[{value:"Nested local properties",id:"nested",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The system has the following operators for working with sessions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/docs/Apply_changes_APPLY_"},"Apply changes (APPLY)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/docs/Cancel_changes_CANCEL_"},"Cancel changes (CANCEL)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/docs/New_session_NEWSESSION_NESTEDSESSION_"},"New session (NEWSESSION, NESTEDSESSION)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/docs/Previous_value_PREV_"},"Previous value (PREV)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/docs/Change_operators_SET_CHANGED_..._"},"Change operators (SET, CHANGED, ...)"))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Note that the latter two operators create properties, not actions."))),Object(o.b)("h3",{id:"nested"},"Nested local properties"),Object(o.b)("p",null,"When the first three session management operators are executed, all local properties are reset to ",Object(o.b)("strong",{parentName:"p"},"NULL"),' . This is not always convenient. Besides, you may often need to pass data between different sessions or "life cycles" of the same session. To do that, you can mark specific local properties as ',Object(o.b)("em",{parentName:"p"},"nested"),". In this case:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"When a new session is created, all values of the local property are copied to it and are copied back when it closes."),Object(o.b)("li",{parentName:"ol"},"When changes are applied, all values of the local property are preserved after the transaction is completed (by default, after applying changes the session is cleared along with the values of all local properties)."),Object(o.b)("li",{parentName:"ol"},"When changes are canceled, all values of the local property will remain the same as they were before the cancellation.")),Object(o.b)("p",null,"The nesting mark can be added both globally for a local property (and, accordingly, for all of its uses), and separately for each session control operation. For every session management operation, you can also specify that all local properties should be nested."))}p.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(s,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);