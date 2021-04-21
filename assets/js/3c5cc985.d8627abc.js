(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(747)),o={title:"WHEN instruction"},c={unversionedId:"WHEN_instruction",id:"version-v4/WHEN_instruction",isDocsHomePage:!1,title:"WHEN instruction",description:"The WHEN instruction adds a simple event handler.",source:"@site/versioned_docs/version-v4/WHEN_instruction.md",slug:"/WHEN_instruction",permalink:"/platform/WHEN_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/WHEN_instruction.md",version:"v4",lastUpdatedAt:1619001833,formattedLastUpdatedAt:"4/21/2021",sidebar:"version-v4/learn",previous:{title:"Event description block",permalink:"/platform/Event_description_block"},next:{title:"Instruction <- WHEN",permalink:"/platform/Instruction_-_WHEN"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"WHEN")," instruction adds a ",Object(i.b)("a",{parentName:"p",href:"/platform/Simple_event"},"simple event")," handler."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"WHEN eventClause eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"WHEN")," instruction adds a simple event handler. In a condition expression you can implicitly declare local parameters that can then be used in the event handler."),Object(i.b)("p",null,"Also, the ",Object(i.b)("inlineCode",{parentName:"p"},"ORDER")," block can be used to define the order in which the handler will be called for an object collection for which the condition on the simple event has been met. "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"WHEN")," instruction is much like the following instruction:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre"},"ON eventClause FOR eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),Object(i.b)("p",{parentName:"div"},"but it also has ",Object(i.b)("a",{parentName:"p",href:"/platform/Simple_event"},"a number of advantages"),"."))),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventClause")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",{parentName:"p",href:"/platform/Event_description_block"},"Event description block"),". Describes the ",Object(i.b)("a",{parentName:"p",href:"/platform/Events"},"base event")," for the created handler.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventExpr")),Object(i.b)("p",{parentName:"li"},"  An ",Object(i.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," whose value is used as a condition for the created simple event. If the obtained property does not contain the ",Object(i.b)("a",{parentName:"p",href:"/platform/Previous_value_PREV_"},Object(i.b)("inlineCode",{parentName:"a"},"PREV"))," operator, the platform automatically wraps it into the ",Object(i.b)("a",{parentName:"p",href:"/platform/Property_change_CHANGE_"},Object(i.b)("inlineCode",{parentName:"a"},"CHANGE"))," operator.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"eventAction")),Object(i.b)("p",{parentName:"li"},"  A ",Object(i.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent operator")," that describes an action to be added as an event handler.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"DESC")),Object(i.b)("p",{parentName:"li"},"  Keyword. Specifies a reverse iteration order for object collections. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"orderExpr1, ..., orderExprM")),Object(i.b)("p",{parentName:"li"},"  A list of expressions that defines the order in which handlers will be called for object collections for which an event condition has been met. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. "))),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Stock;\nname = DATA STRING[50] (Stock);\n\nbalance = DATA INTEGER (Sku, Stock);\n\n// send an email when the balance is less than 0 as a result of applying session changes\nWHEN balance(Sku s, Stock st) < 0 DO\n      EMAIL SUBJECT 'The balance has become negative for the item ' + name(s) + ' in the warehouse ' + name(st);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\ndiscount = DATA NUMERIC[6,2] (OrderDetail);\n\nWHEN LOCAL CHANGED(customer(Order o)) AND name(customer(o)) == 'Best customer' DO\n    discount(OrderDetail d) <- 50 WHERE order(d) == o;\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);