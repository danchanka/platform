(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(750)),c={title:"WHEN instruction"},i={unversionedId:"WHEN_instruction",id:"version-v4/WHEN_instruction",isDocsHomePage:!1,title:"WHEN instruction",description:"The\xa0WHEN\xa0instruction adds a\xa0simple event handler.",source:"@site/versioned_docs/version-v4/WHEN_instruction.md",slug:"/WHEN_instruction",permalink:"/platform/docs/WHEN_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/WHEN_instruction.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"Event description block",permalink:"/platform/docs/Event_description_block"},next:{title:"Instruction<- WHEN",permalink:"/platform/docs/Instruction_-_WHEN"}},s=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"WHEN"),"\xa0instruction adds a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Simple_event"},"simple event")," handler."),Object(o.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"WHEN eventClause eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"WHEN")," instruction adds a simple event handler. In a condition expression you can implicitly declare local parameters that can then be used in the event handler."),Object(o.b)("p",null,"Also, the\xa0",Object(o.b)("strong",{parentName:"p"},"ORDER")," block can be\xa0used to define the order in which the handler will be called for an object collection for which the condition on the simple event has been met.\xa0"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Using the\xa0",Object(o.b)("strong",{parentName:"p"},"WHEN"),"\xa0instruction is much like the following instruction:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},"ON eventClause FOR eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),Object(o.b)("p",{parentName:"div"},"but it also has ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Simple_event"},"a number of advantages"),"."))),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/Event_description_block"},"Event description block"),". Describes the ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Events"},"base event"),"\xa0for the created handler."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Expression"},"expression")," whose value is used as a condition for the created simple event. If the obtained property does not contain the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Previous_value_PREV_"},Object(o.b)("strong",{parentName:"a"},"PREV"))," operator, the platform automatically wraps it into the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Property_change_CHANGE_"},Object(o.b)("strong",{parentName:"a"},"CHANGE"))," ",Object(o.b)("strong",{parentName:"p"},"operator"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventAction")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Action_operator#contextdependent"},"context-dependent operator")," that describes an action to be added as an event handler."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprM")),Object(o.b)("p",null,"A list of expressions that defines the order in which handlers will be called for object collections for which an event condition has been met. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc.\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock;\nname = DATA STRING[50] (Stock);\n\nbalance = DATA INTEGER (Sku, Stock);\n\n// send an email when the balance is less than 0 as a result of applying session changes\nWHEN balance(Sku s, Stock st) < 0 DO\n      EMAIL SUBJECT 'The balance has become negative for the item ' + name(s) + ' in the warehouse ' + name(st);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndiscount = DATA NUMERIC[6,2] (OrderDetail);\n\nWHEN LOCAL CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n    discount(OrderDetail d) <- 50 WHERE order(d) == o;\n")))}l.isMDXComponent=!0},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,i(i({ref:t},p),{},{components:n})):a.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);