(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{537:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(749)),i={title:"WHEN instruction"},c={unversionedId:"WHEN_instruction",id:"WHEN_instruction",isDocsHomePage:!1,title:"WHEN instruction",description:"The\xa0WHEN\xa0instruction adds a\xa0simple event handler.",source:"@site/docs/WHEN_instruction.md",slug:"/WHEN_instruction",permalink:"/platform/next/WHEN_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/WHEN_instruction.md",version:"current",sidebar:"learn",previous:{title:"Event description block",permalink:"/platform/next/Event_description_block"},next:{title:"Instruction<- WHEN",permalink:"/platform/next/Instruction_-_WHEN"}},p=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"WHEN"),"\xa0instruction adds a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Simple_event"},"simple event")," handler."),Object(o.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"WHEN eventClause eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"WHEN")," instruction adds a simple event handler. In a condition expression you can implicitly declare local parameters that can then be used in the event handler."),Object(o.b)("p",null,"Also, the\xa0",Object(o.b)("strong",{parentName:"p"},"ORDER")," block can be\xa0used to define the order in which the handler will be called for an object collection for which the condition on the simple event has been met.\xa0"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Using the\xa0",Object(o.b)("strong",{parentName:"p"},"WHEN"),"\xa0instruction is much like the following instruction:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},"ON eventClause FOR eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),Object(o.b)("p",{parentName:"div"},"but it also has ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Simple_event"},"a number of advantages"),"."))),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Event_description_block"},"Event description block"),". Describes the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Events"},"base event"),"\xa0for the created handler."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expression")," whose value is used as a condition for the created simple event. If the obtained property does not contain the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Previous_value_PREV_"},Object(o.b)("strong",{parentName:"a"},"PREV"))," operator, the platform automatically wraps it into the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Property_change_CHANGE_"},Object(o.b)("strong",{parentName:"a"},"CHANGE"))," ",Object(o.b)("strong",{parentName:"p"},"operator"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventAction")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent operator")," that describes an action to be added as an event handler."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprM")),Object(o.b)("p",null,"A list of expressions that defines the order in which handlers will be called for object collections for which an event condition has been met. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc.\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock;\nname = DATA STRING[50] (Stock);\n\nbalance = DATA INTEGER (Sku, Stock);\n\n// send an email when the balance is less than 0 as a result of applying session changes\nWHEN balance(Sku s, Stock st) < 0 DO\n      EMAIL SUBJECT 'The balance has become negative for the item ' + name(s) + ' in the warehouse ' + name(st);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndiscount = DATA NUMERIC[6,2] (OrderDetail);\n\nWHEN LOCAL CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n    discount(OrderDetail d) <- 50 WHERE order(d) == o;\n")))}s.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);