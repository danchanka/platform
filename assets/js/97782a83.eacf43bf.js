(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{483:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(747)),i={title:"In an interactive view (SHOW, DIALOG)"},s={unversionedId:"In_an_interactive_view_SHOW_DIALOG_",id:"version-v4/In_an_interactive_view_SHOW_DIALOG_",isDocsHomePage:!1,title:"In an interactive view (SHOW, DIALOG)",description:"This operator creates an action that\xa0opens a form\xa0in the interactive\xa0view.",source:"@site/versioned_docs/version-v4/In_an_interactive_view_SHOW_DIALOG_.md",slug:"/In_an_interactive_view_SHOW_DIALOG_",permalink:"/platform/In_an_interactive_view_SHOW_DIALOG_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/In_an_interactive_view_SHOW_DIALOG_.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Open form",permalink:"/platform/Open_form"},next:{title:"In a print view (PRINT)",permalink:"/platform/In_a_print_view_PRINT_"}},l=[{value:"Flow management",id:"flow",children:[]},{value:"Form location",id:"location",children:[]},{value:"System action management",id:"system-action-management",children:[]},{value:"Dialog form",id:"dialog",children:[]},{value:"Extra features",id:"extra",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This operator creates an action that\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Open_form"},"opens a form"),"\xa0in the ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view"},"interactive"),"\xa0view."),Object(o.b)("h3",{id:"flow"},"Flow management"),Object(o.b)("p",null,"The operator works in two modes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Synchronous"),"\xa0(",Object(o.b)("strong",{parentName:"li"},"WAIT"),") -\xa0waits for the user to\xa0",Object(o.b)("strong",{parentName:"li"},"close\xa0"),"the form, then saves the execution results and passes\xa0control to the next action."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Asynchronous"),"\xa0(",Object(o.b)("strong",{parentName:"li"},"NOWAIT"),") - passes control to the next action right after\xa0",Object(o.b)("strong",{parentName:"li"},"opening\xa0"),"a form on the client end.")),Object(o.b)("p",null,"By default, the operator works in the synchronous mode."),Object(o.b)("h3",{id:"location"},"Form location"),Object(o.b)("p",null,"A form being opened can be shown in two ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As a\xa0",Object(o.b)("em",{parentName:"li"},"window"),"\xa0(",Object(o.b)("strong",{parentName:"li"},"FLOAT"),")-\xa0the form is shown as a floating window."),Object(o.b)("li",{parentName:"ul"},"As a\xa0",Object(o.b)("em",{parentName:"li"},"tab"),"\xa0(",Object(o.b)("strong",{parentName:"li"},"DOCKED"),") -\xa0the form is opened as a tab in the system\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Navigator_design"},"window"),"\xa0",Object(o.b)("strong",{parentName:"li"},"System.forms"),".")),Object(o.b)("p",null,"By default, forms in the synchronous mode are shown as windows, in the asynchronous mode \u2013 as tabs."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},'In the current implementation of the platform, a form shown as a window is always modal, which means that the "asynchronous window" mode is not supported.'))),Object(o.b)("h3",{id:"system-action-management"},"System action management"),Object(o.b)("p",null,"By default, when the interactive view is enabled, the platform\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#sysactions"},"automatically determines")," which system actions of the form/session lifecycle management should be shown and which not. But since these conditions are somewhat heuristic, the developer can use a corresponding set\xa0of options to specify the actions that need to be shown when the form is opened. Similarly, the corresponding option can be used to specify whether the form is the ",Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#anchor-broken"},"owner of the session")," in which it is opened or not."),Object(o.b)("h3",{id:"dialog"},"Dialog form"),Object(o.b)("p",null,"This operator also allows to return the latest ",Object(o.b)("a",{parentName:"p",href:"/platform/Form_structure#currentObject-broken"},"current value")," of a specified object (or, if necessary, of several objects), thus, essentially, performing\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Value_input"},"value input"),". In this case, ",Object(o.b)("a",{parentName:"p",href:"/platform/Value_input#result"},"input is considered to be canceled")," if the user closes the form using\xa0",Object(o.b)("strong",{parentName:"p"},"System.formClose ("),"not\xa0",Object(o.b)("strong",{parentName:"p"},"System.formOk"),")."),Object(o.b)("p",null,"While inputting a value, it is sometimes necessary to not just choose one from a list, but also allow the user to return a ",Object(o.b)("strong",{parentName:"p"},"NULL")," value. For this purpose, the dialog form has a special option that, if enabled, shows the drop action (",Object(o.b)("strong",{parentName:"p"},"System.formDrop"),") on the form. Calling this action closes the form and returns a ",Object(o.b)("strong",{parentName:"p"},"NULL")," value as a result."),Object(o.b)("p",null,"Similar to the other value input operators, the dialog form of this\xa0operator allows to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"specify\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Value_input#initial"},"initial object\xa0values")," (through the\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Open_form"},"passing objects"),"\xa0mechanism)."),Object(o.b)("li",{parentName:"ul"},"specify\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/Value_input#result"},"main\xa0and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/platform/Value_input#initial"},"change"),"\xa0a specified property.")),Object(o.b)("p",null,"In addition, if a value is entered to input to change the specified property, it is often necessary (at the value selection stage) to show the user not all object collections, but only those ones, whose selection (and subsequent change with these objects) will not violate\xa0existing\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Constraints"},"constraints"),". Accordingly, so that the developer does not have to copy the form and manually add the necessary filter, the platform automatically generates and adds corresponding filters to the form (this behavior, however, can be disabled using a corresponding option)."),Object(o.b)("p",null,"The operator dialog form is available in the synchronous mode only."),Object(o.b)("h3",{id:"extra"},"Extra features"),Object(o.b)("p",null,'When opening a form, you can specify that all of its properties should be available in the "read-only"mode. In this case, the behavior will be identical to the behavior when during form creation, the "read-only" mode is specified for each\xa0',Object(o.b)("a",{parentName:"p",href:"/platform/Interactive_view#property"},"property view"),"."),Object(o.b)("p",null,"Also, when calling the form, you can specify that it will be opened in a ",Object(o.b)("a",{parentName:"p",href:"/platform/New_session_NEWSESSION_NESTEDSESSION_"},"new")," (nested) session. In this case, ",Object(o.b)("a",{parentName:"p",href:"/platform/Open_form#params"},"passing objects")," and value input will be performed in the current session (so it makes sense to use this option only if you need to pass objects and/or input a value; otherwise, it makes more sense to use a ",Object(o.b)("a",{parentName:"p",href:"/platform/New_session_NEWSESSION_NESTEDSESSION_"},"new session")," operator)."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To open a form in the interactive view, use the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/SHOW_operator"},Object(o.b)("strong",{parentName:"a"},"SHOW"),"\xa0operator"),". To show the form in the dialog mode, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/DIALOG_operator"},Object(o.b)("strong",{parentName:"a"},"DIALOG")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"date = DATA DATE (Order);\nFORM showForm\n    OBJECTS dateFrom = DATE, dateTo = DATE PANEL\n    PROPERTIES VALUE(dateFrom), VALUE(dateTo)\n\n    OBJECTS o = Order\n    FILTERS date(o) >= dateFrom, date(o) <= dateTo\n;\n\ntestShow ()  {\n    SHOW showForm OBJECTS dateFrom = 2010_01_01, dateTo = 2010_12_31;\n\n    NEWSESSION {\n        NEW s = Sku {\n            SHOW sku OBJECTS s = s FLOAT;\n        }\n    }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM selectSku\n    OBJECTS s = Sku\n    PROPERTIES(s) id\n;\n\ntestDialog  {\n    DIALOG selectSku OBJECTS s INPUT DO {\n        MESSAGE 'Selected sku : ' + id(s);\n    }\n}\n\nsku = DATA Sku (OrderDetail);\nidSku (OrderDetail d) = id(sku(d));\n\nchangeSku (OrderDetail d)  {\n    DIALOG selectSku OBJECTS s = sku(d) CHANGE;\n\n    //equivalent to the first option\n    DIALOG selectSku OBJECTS s = sku(d) INPUT NULL CONSTRAINTFILTER DO {\n        sku(d) <- s;\n    }\n}\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(i,".").concat(u)]||m[u]||b[u]||o;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);