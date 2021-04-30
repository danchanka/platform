(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(745)),o={title:"Value input",sidebar_label:"Overview"},p={unversionedId:"Value_input",id:"Value_input",isDocsHomePage:!1,title:"Value input",description:"This category includes operators responsible for inputting a value:",source:"@site/docs/Value_input.md",slug:"/Value_input",permalink:"/platform/next/Value_input",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Value_input.md",version:"current",lastUpdatedAt:1617721389,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Overview",sidebar:"learn",previous:{title:"Form operators",permalink:"/platform/next/Form_operators"},next:{title:"Primitive input (INPUT)",permalink:"/platform/next/Primitive_input_INPUT_"}},l=[{value:"Cancellation and input result",id:"result",children:[]},{value:"Initial values and automatic change",id:"initial",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This category includes operators responsible for inputting a value:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/platform/next/Primitive_input_INPUT_"},"Value input (INPUT)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/platform/next/Value_request_REQUEST_"},"Value request (REQUEST)"))),Object(i.b)("p",null,"In addition to the above operators, data input is also performed via the ",Object(i.b)("em",{parentName:"p"},"dialog forms")," of message display\xa0 ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Show_message_MESSAGE_ASK_#dialog"},"(ASK)")," \xa0and ",Object(i.b)("a",{parentName:"p",href:"/platform/next/In_an_interactive_view_SHOW_DIALOG_#dialog"},"form opening (DIALOG)"),"\xa0operators in an interactive view."),Object(i.b)("h3",{id:"result"},"Cancellation and input result"),Object(i.b)("p",null,"In value input operators, an input operation can be \xa0",Object(i.b)("em",{parentName:"p"},"canceled")," (for each operator, this situation is determined in its own way)",Object(i.b)("em",{parentName:"p"},"."),"If it happens, a\xa0",Object(i.b)("strong",{parentName:"p"},"TRUE"),"\xa0value\xa0 is written to the\xa0",Object(i.b)("strong",{parentName:"p"},"System.requestCanceled"),"\xa0property (otherwise it will be\xa0",Object(i.b)("strong",{parentName:"p"},"NULL"),")."),Object(i.b)("p",null,"For all value input operators, the platform allows to specify an action (let's call it \xa0",Object(i.b)("em",{parentName:"p"},"main action"),") that will be executed only if the input operation is successful (i.e. not canceled). The input result (if any) is passed to this action as a parameter. You can specify an ",Object(i.b)("em",{parentName:"p"},"alternative")," action for all value input operators that will be executed if an operation is canceled."),Object(i.b)("h3",{id:"initial"},"Initial values and automatic change"),Object(i.b)("p",null,"Value input often assumes the presence of a certain ",Object(i.b)("em",{parentName:"p"},"initial")," (previous) value that the input starts from (that is, the initial value is assigned to the current one) and that the user can subsequently change. Like most other values, the initial value is defined as a property."),Object(i.b)("p",null,"Also, in many cases (especially in property ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Form_events#property-broken"},"change event")," handlers), it is sometimes necessary to not just input value, but also to ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Property_change_CHANGE_"},"write")," this value to a certain property (as a rule, the one for which the change event handler is invoked. This is necessary to ensure WYSYWIG). In most cases, the changed property equals the initial value property. To make the implementation of such a scenario more convenient, you can specify a special option (",Object(i.b)("strong",{parentName:"p"},"CHANGE"),") in value input operators. This option will automatically add property change to the end of the main action. The changed property, in this case, will be the initial value property, and changed value \u2014 the input result (however, if necessary, the developer can specify changed property explicitly). It is worth noting that the described feature is nothing more than syntactic sugar, however, it allows to make the code a lot more concise and readable."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In the current platform implementation, initial values and automatic change s are supported only for primitive input operators (",Object(i.b)("strong",{parentName:"p"},"INPUT"),") and dialog form opening ( ",Object(i.b)("strong",{parentName:"p"},"DIALOG")," )."))))}s.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?r.a.createElement(d,p(p({ref:t},c),{},{components:n})):r.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);