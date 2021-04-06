(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(747)),i={title:"How-to: NEWSESSION"},l={unversionedId:"How-to_NEWSESSION",id:"How-to_NEWSESSION",isDocsHomePage:!1,title:"How-to: NEWSESSION",description:"Example 1",source:"@site/docs/How-to_NEWSESSION.md",slug:"/How-to_NEWSESSION",permalink:"/platform/next/How-to_NEWSESSION",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_NEWSESSION.md",version:"current",sidebar:"learn",previous:{title:"How-to: WHILE",permalink:"/platform/next/How-to_WHILE"},next:{title:"How-to: SEEK",permalink:"/platform/next/How-to_SEEK"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have an order with a number and a posted/not posted flag."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order 'Order';\n\nisPosted 'Completed' = DATA BOOLEAN (Order);\nnumber 'Number' = DATA INTEGER (Order);\n\nFORM orders\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY isPosted, number\n;\n")),Object(a.b)("p",null,"We need to create an action that will post this order in a separate change session and then will add it to the form containing the list of orders."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"post 'Complete' (Order o)  {\n    NEWSESSION {\n        isPosted(o) <- TRUE;\n        APPLY;\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES(o) post TOOLBAR\n;\n")),Object(a.b)("p",null,'If you do not "wrap" the action that sets the ',Object(a.b)("strong",{parentName:"p"},"isPosted")," property in the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/NEWSESSION_operator"},"NEWSESSION")," operator, then the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/APPLY_operator"},"APPLY")," operator will also write other changes (including those made on the ",Object(a.b)("strong",{parentName:"p"},"orders")," form) to the database."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),", except that the dedicated edit form is available for the order."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM order\n    OBJECTS o = Order PANEL\n    PROPERTIES(o) isPosted, number\n\n    EDIT Order OBJECT o\n;\n")),Object(a.b)("p",null,"We need to create an action that creates a new order and open the edit form for it. This action must be added to the form containing the list of orders."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"newOrder ()  {\n    NEWSESSION {\n        NEW o = Order {\n            number(o) <- (GROUP MAX number(Order oo)) (+) 1;\n            SHOW order OBJECTS o = o;\n        }\n    }\n}\n\nEXTEND FORM orders\n    // Option 1\n    PROPERTIES() newOrder DRAW o TOOLBAR\n\n    // Option 2\n    PROPERTIES(o) NEWSESSION NEW\n;\n")),Object(a.b)("p",null,"If you do not use the ",Object(a.b)("strong",{parentName:"p"},"NEWSESSION")," operator, then the object for the new order will be created in the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Change_sessions"},"change session")," of the ",Object(a.b)("strong",{parentName:"p"},"orders"),' form. And if the user closes the form without saving, then all the changes "will remain" in the change session for the form, and the created order will be displayed in the form containing the list of orders.'),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 2"),", except that the order can be marked."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"selected 'Mark' = DATA LOCAL BOOLEAN (Order);\nEXTEND FORM orders\n    PROPERTIES(o) selected\n;\n")),Object(a.b)("p",null,'We need to create an action that will delete the marked orders and immediately save the changes to the database (so that the user does not need to click "Save").'),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"deleteSelectedOrders 'Delete marked orders' ()  {\n    NEWSESSION NESTED(selected) {\n        DELETE Order o WHERE selected(o);\n        ASK 'You are about to delete ' + (GROUP SUM 1 IF DROPPED (Order o)) + ' orders. Continue?' DO {\n            APPLY;\n        }\n    }\n}\n\nEXTEND FORM orders\n    PROPERTIES() deleteSelectedOrders DRAW o TOOLBAR\n;\n")),Object(a.b)("p",null,'By default, a new session ignores changes made in the "upper" session. To make the selected property available in the new session, use the ',Object(a.b)("strong",{parentName:"p"},"NESTED")," block of operators. Otherwise, the ",Object(a.b)("strong",{parentName:"p"},"selected")," property will always be NULL. Alternatively, you can use the ",Object(a.b)("strong",{parentName:"p"},"NESTED LOCAL")," block instead of specifying particular properties. In this case, changes made to all local properties in the upper session will be visible."),Object(a.b)("h2",{id:"example-4"},"Example 4"),Object(a.b)("h3",{id:"condition-3"},"Condition"),Object(a.b)("p",null,"Similar to \xa0",Object(a.b)("strong",{parentName:"p"},"Example 2"),", except that the payment logic for the order has been added."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Payment 'Payment';\n\ndate 'Date' = DATA DATE (Payment);\nsum 'Amount' = DATA NUMERIC[14,2] (Payment);\n\norder 'Order' = DATA Order (Payment);\n")),Object(a.b)("p",null,"We need to create a button on the form for opening a separate edit form for payments in this order."),Object(a.b)("h3",{id:"solution-3"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM orderPayments 'Order payments'\n    OBJECTS o = Order PANEL // Not adding properties so that this object is not visible on the form at all\n\n    OBJECTS p = Payment\n    PROPERTIES(p) date, sum, NEW, DELETE\n    FILTERS order(p) == o\n;\n\neditPayments 'Edit payments' (Order o)  {\n    NESTEDSESSION {\n        SHOW orderPayments OBJECTS o = o;\n    }\n}\n\nEXTEND FORM order\n    PROPERTIES(o) editPayments\n;\n")),Object(a.b)("p",null,"If you use the ",Object(a.b)("a",{parentName:"p",href:"/platform/next/NESTEDSESSION_operator"},"NESTEDSESSION"),' operator, then all the changes made in the "upper" change session will be available in the nested session. If the user closes the form without clicking OK, then all changes made directly in the form will be lost. If the user clicks OK, then the changes will be written to the "upper" change session rather than to the database. They will be written to the database along with the changes made in the main ',Object(a.b)("strong",{parentName:"p"},"orders")," form."),Object(a.b)("p",null,"It is not allowed to use ",Object(a.b)("strong",{parentName:"p"},"NEWSESSION"),"\xa0here simply because the ",Object(a.b)("strong",{parentName:"p"},"orderPayments"),' form will not be able to see the newly created order which has not yet been added to the database (since changes made in the "upper" session are not visible in the nested one), and thus the behavior will be unpredictable.'),Object(a.b)("p",null,"If we do not use any session management operator at all, then if the user make any changes in the ",Object(a.b)("strong",{parentName:"p"},"orderPayments"),' form and clicks the Close button, the changes will still be "saved", though the user might not expect that.'))}d.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),O=r,u=p["".concat(i,".").concat(O)]||p[O]||b[O]||a;return n?o.a.createElement(u,l(l({ref:t},c),{},{components:n})):o.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=O;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);