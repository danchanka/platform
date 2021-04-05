(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(751)),s={title:"MESSAGE operator"},i={unversionedId:"MESSAGE_operator",id:"MESSAGE_operator",isDocsHomePage:!1,title:"MESSAGE operator",description:"The MESSAGE operator creates an action that shows the user a message.*\xa0*",source:"@site/docs/MESSAGE_operator.md",slug:"/MESSAGE_operator",permalink:"/platform/docs/next/MESSAGE_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/MESSAGE_operator.md",version:"current",sidebar:"docs",previous:{title:"INPUT operator",permalink:"/platform/docs/next/INPUT_operator"},next:{title:"MULTI operator (action)",permalink:"/platform/docs/next/MULTI_operator_action_"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"MESSAGE")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that shows the user a ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Show_message_MESSAGE_ASK_"},"message"),".**\xa0**"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"MESSAGE expression [syncType]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"MESSAGE")," operator creates an action which shows a window with a text message to the user. The text message can be a string constant or a more complex ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression")," which value is or can be converted to a string."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,"An expression which value is the message text."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"syncType")),Object(o.b)("p",null,"Specifies when the created action should be completed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"WAIT"),"\xa0- after the client completes the action (closes the message). This value is used by default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0-\xa0right after the information is ready for sending to the client (the message text is read). If several\xa0",Object(o.b)("strong",{parentName:"li"},"MESSAGE"),"\xa0",Object(o.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0actions are called during the execution of some continuous action, they do not create separate messages but are concatenated with the previous messages of the same type. A single concatenated message will be shown to the user at the end of the continuous action as a result.")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"message  { MESSAGE 'Hello World!'; }                                // plain text message\n\nisGood = DATA BOOLEAN (Item);\nstringData(Item i)   {\n    MESSAGE IF isGood(i) THEN 'Good' ELSE 'Bad';   // depending on which item will be passed to the action, a window will be shown either with the text 'Good' or with the text 'Bad'\n}\n\ntestMessage()  {                    // In this case, five text messages will be shown to the user\n    LOCAL i = INTEGER();\n    i() <- 0;\n    WHILE i() < 5 DO {\n        i() <- i() + 1;\n        MESSAGE i();\n    }\n}\n\ntestMessageNowait()  {              // In the case of NOWAIT, one text message combining messages from five MESSAGE calls will be shown to the user\n    LOCAL i = INTEGER();\n    i() <- 0;\n    WHILE i() < 5 DO {\n        i() <- i() + 1;\n        MESSAGE i() NOWAIT;\n    }\n}\n")))}l.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);