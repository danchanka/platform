(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{681:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(750)),i={title:"EMAIL operator"},p={unversionedId:"EMAIL_operator",id:"EMAIL_operator",isDocsHomePage:!1,title:"EMAIL operator",description:"The EMAIL operator creates an action that sends email.",source:"@site/docs/EMAIL_operator.md",slug:"/EMAIL_operator",permalink:"/platform/docs/next/EMAIL_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/EMAIL_operator.md",version:"current",sidebar:"docs",previous:{title:"DIALOG operator",permalink:"/platform/docs/next/DIALOG_operator"},next:{title:"EVAL operator",permalink:"/platform/docs/next/EVAL_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EMAIL")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Send_mail_EMAIL_"},"sends email"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"EMAIL [FROM fromExpr]\xa0\n[SUBJECT subjExpr]\nrecipientType1 recipientExpr1\n...\nrecipientTypeN recipientExprN\n[BODY bodyExpr]\nATTACH attachFileExpr1 [NAME attachNameExpr1]\n...\nATTACH attachFileExprM [NAME attachNameExprM]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EMAIL")," operator creates an action that sends emails.\xa0"),Object(o.b)("p",null,"It is assumed that the file extension\xa0is not specified in the attachment name, i.e. period (.) is also considered part of the file name. This extension is automatically determined\xa0similar to the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/WRITE_operator#extension-broken"},Object(o.b)("strong",{parentName:"a"},"WRITE"),"\xa0operator"),"."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"fromExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression")," which value determines the sender address.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"subjExpr")),Object(o.b)("p",null,"An expression which value determines the email subject."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"recipientType1 ... recipientTypeN")),Object(o.b)("p",null,"Recipient types. N>=1. Each of them is specified by one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TO")," - message recipient"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u0421\u0421")," - secondary message recipient to whom a copy is sent"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"BCC")," - message recipient whose address is not shown to other recipients")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"recipientExpr1 ... recipientExprN")),Object(o.b)("p",null,"Expressions which values determine the addresses of the message recipients."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"bodyExpr")),Object(o.b)("p",null,"An expression which value is the mail body. Can be either a string or file type."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"attachFileExpr1 ....\xa0"),"attachFileExprM**"),Object(o.b)("p",null,"Expressions which values are files attached to the message."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"attachNameExpr1 ...\xa0"),"attachNameExprM**"),Object(o.b)("p",null,"An expression which values determine the names of the attachments."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM remindUserPass\n    OBJECTS u=CustomUser PANEL\n    PROPERTIES(u) READONLY login, name[Contact]\n;\n\nemailUserPassUser 'Login reminder' (CustomUser user)  {\n    LOCAL bodyFile = FILE ();\n    PRINT remindUserPass OBJECTS u = user HTML TO bodyFile;\n    EMAIL\n    SUBJECT 'Login reminder'\n    TO email(user)\n    BODY bodyFile();\n}\n\njustSendEmail 'Send letter' ()  {\n    stringToFile('<font color=#FF0000 size=+3>big red text</font>');\n    EMAIL\n    FROM 'luxsoft@adsl.by'\n    SUBJECT 'Letter subject'\n    TO 'xxx@tut.by'\n    BODY resultFile();\n}\n")))}l.isMDXComponent=!0},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);