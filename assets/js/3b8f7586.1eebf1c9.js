(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(747)),l={title:"How-to: NEWSESSION"},s={unversionedId:"How-to_NEWSESSION",id:"version-v4/How-to_NEWSESSION",isDocsHomePage:!1,title:"How-to: NEWSESSION",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_NEWSESSION.md",slug:"/How-to_NEWSESSION",permalink:"/platform/How-to_NEWSESSION",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_NEWSESSION.md",version:"v4",lastUpdatedAt:1619622551,formattedLastUpdatedAt:"4/28/2021",sidebar:"version-v4/learn",previous:{title:"How-to: WHILE",permalink:"/platform/How-to_WHILE"},next:{title:"How-to: SEEK",permalink:"/platform/How-to_SEEK"}},i=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Task",id:"task-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Task",id:"task-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]}],c={toc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("h3",{id:"task"},"Task"),Object(o.b)("p",null,"We have an order with a number and a posted/not posted flag."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nisPosted 'Completed' = DATA BOOLEAN (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY isPosted, number\n;\n")),Object(o.b)("p",null,"We need to create an action that will post this order in a separate change session and then will add it to the form containing the list of orders."),Object(o.b)("h3",{id:"solution"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"post 'Complete' (Order o)  {\n    NEWSESSION {\n        isPosted(o) <- TRUE;\n        APPLY;\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) post TOOLBAR\n;\n")),Object(o.b)("p",null,'If you do not "wrap" the action that sets the ',Object(o.b)("strong",{parentName:"p"},"isPosted")," property in the ",Object(o.b)("a",{parentName:"p",href:"/platform/NEWSESSION_operator"},"NEWSESSION")," operator, then the ",Object(o.b)("a",{parentName:"p",href:"/platform/APPLY_operator"},"APPLY")," operator will also write other changes (including those made on the ",Object(o.b)("strong",{parentName:"p"},"orders")," form) to the database."),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("h3",{id:"task-1"},"Task"),Object(o.b)("p",null,"Similar to ",Object(o.b)("a",{parentName:"p",href:"#example-1"},Object(o.b)("strong",{parentName:"a"},"Example 1")),", except that the dedicated edit form is available for the order."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) isPosted, number\n\n    EDIT Order OBJECT o\n;\n")),Object(o.b)("p",null,"We need to create an action that creates a new order and open the edit form for it. This action must be added to the form containing the list of orders."),Object(o.b)("h3",{id:"solution-1"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"newOrder ()  {\n    NEWSESSION {\n        NEW o = Order {\n            number(o) <- (GROUP MAX number(Order oo)) (+) 1;\n            SHOW order OBJECTS o = o;\n        }\n    }\n}\n\nEXTEND FORM orders\n    // Option 1\n    PROPERTIES() newOrder DRAW o TOOLBAR\n\n    // Option 2\n    PROPERTIES(o) NEWSESSION NEW\n;\n")),Object(o.b)("p",null,"If you do not use the ",Object(o.b)("strong",{parentName:"p"},"NEWSESSION")," operator, then the object for the new order will be created in the ",Object(o.b)("a",{parentName:"p",href:"/platform/Change_sessions"},"change session")," of the ",Object(o.b)("strong",{parentName:"p"},"orders"),' form. And if the user closes the form without saving, then all the changes "will remain" in the change session for the form, and the created order will be displayed in the form containing the list of orders.'),Object(o.b)("h2",{id:"example-3"},"Example 3"),Object(o.b)("h3",{id:"task-2"},"Task"),Object(o.b)("p",null,"Similar to ",Object(o.b)("a",{parentName:"p",href:"#example-2"},Object(o.b)("strong",{parentName:"a"},"Example 2")),", except that the order can be marked."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"selected 'Mark' = DATA LOCAL BOOLEAN (Order);\nEXTEND FORM orders\n    PROPERTIES(o) selected\n;\n")),Object(o.b)("p",null,'We need to create an action that will delete the marked orders and immediately save the changes to the database (so that the user does not need to click "Save").'),Object(o.b)("h3",{id:"solution-2"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"deleteSelectedOrders 'Delete marked orders' ()  {\n    NEWSESSION NESTED(selected) {\n        DELETE Order o WHERE selected(o);\n        ASK 'You are about to delete ' + (GROUP SUM 1 IF DROPPED (Order o)) + ' orders. Continue?' DO {\n            APPLY;\n        }\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES() deleteSelectedOrders DRAW o TOOLBAR\n;\n")),Object(o.b)("p",null,'By default, a new session ignores changes made in the "upper" session. To make the selected property available in the new session, use the ',Object(o.b)("strong",{parentName:"p"},"NESTED")," block of operators. Otherwise, the ",Object(o.b)("strong",{parentName:"p"},"selected")," property will always be NULL. Alternatively, you can use the ",Object(o.b)("strong",{parentName:"p"},"NESTED LOCAL")," block instead of specifying particular properties. In this case, changes made to all local properties in the upper session will be visible."),Object(o.b)("h2",{id:"example-4"},"Example 4"),Object(o.b)("h3",{id:"task-3"},"Task"),Object(o.b)("p",null,"Similar to ",Object(o.b)("a",{parentName:"p",href:"#example-2"},Object(o.b)("strong",{parentName:"a"},"Example 2")),", except that the payment logic for the order has been added."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Payment 'Payment';\n\ndate 'Date' = DATA DATE (Payment);\nsum 'Amount' = DATA NUMERIC[14,2] (Payment);\n\norder 'Order' = DATA Order (Payment);\n")),Object(o.b)("p",null,"We need to create a button on the form for opening a separate edit form for payments in this order."),Object(o.b)("h3",{id:"solution-3"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM orderPayments 'Order payments'\n    OBJECTS o = Order PANEL // Not adding properties so that this object is not visible on the form at all\n\n    OBJECTS p = Payment\n    PROPERTIES(p) date, sum, NEW, DELETE\n    FILTERS order(p) == o\n;\n\neditPayments 'Edit payments' (Order o)  {\n    NESTEDSESSION {\n        SHOW orderPayments OBJECTS o = o;\n    }\n}\n\nEXTEND FORM order\n    PROPERTIES(o) editPayments\n;\n")),Object(o.b)("p",null,"If you use the ",Object(o.b)("a",{parentName:"p",href:"/platform/NESTEDSESSION_operator"},"NESTEDSESSION"),' operator, then all the changes made in the "upper" change session will be available in the nested session. If the user closes the form without clicking OK, then all changes made directly in the form will be lost. If the user clicks OK, then the changes will be written to the "upper" change session rather than to the database. They will be written to the database along with the changes made in the main ',Object(o.b)("strong",{parentName:"p"},"orders")," form."),Object(o.b)("p",null,"It is not allowed to use ",Object(o.b)("strong",{parentName:"p"},"NEWSESSION")," here simply because the ",Object(o.b)("strong",{parentName:"p"},"orderPayments"),' form will not be able to see the newly created order which has not yet been added to the database (since changes made in the "upper" session are not visible in the nested one), and thus the behavior will be unpredictable.'),Object(o.b)("p",null,"If we do not use any session management operator at all, then if the user make any changes in the ",Object(o.b)("strong",{parentName:"p"},"orderPayments"),' form and clicks the Close button, the changes will still be "saved", though the user might not expect that.'))}d.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),O=r,m=p["".concat(l,".").concat(O)]||p[O]||b[O]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=O;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);