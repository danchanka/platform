(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{713:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(751)),o={title:"Value input: Overview",sidebar_label:"Overview"},c={unversionedId:"Value_input",id:"version-1.0.0/Value_input",isDocsHomePage:!1,title:"Value input: Overview",description:"This category includes operators responsible for inputting a value:",source:"@site/versioned_docs/version-1.0.0/Value_input.md",slug:"/Value_input",permalink:"/platform/docs/Value_input",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-1.0.0/Value_input.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"Form operators: Overview",permalink:"/platform/docs/Form_operators"},next:{title:"Primitive input (INPUT)",permalink:"/platform/docs/Primitive_input_INPUT_"}},p=[{value:"Cancellation and input result",id:"result",children:[]},{value:"Initial values and automatic change",id:"initial",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This category includes operators responsible for inputting a value:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/platform/docs/Primitive_input_INPUT_"},"Value input (INPUT)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/platform/docs/Value_request_REQUEST_"},"Value request (REQUEST)"))),Object(i.b)("p",null,"In addition to the above operators, data input is also performed via the ",Object(i.b)("em",{parentName:"p"},"dialog forms")," of message display\xa0 ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/Show_message_MESSAGE_ASK_#dialog"},"(ASK)")," \xa0and ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/In_an_interactive_view_SHOW_DIALOG_#dialog"},"form opening (DIALOG)"),"\xa0operators in an interactive view."),Object(i.b)("h3",{id:"result"},"Cancellation and input result"),Object(i.b)("p",null,"In value input operators, an input operation can be \xa0",Object(i.b)("em",{parentName:"p"},"canceled")," (for each operator, this situation is determined in its own way)",Object(i.b)("em",{parentName:"p"},"."),"If it happens, a\xa0",Object(i.b)("strong",{parentName:"p"},"TRUE"),"\xa0value\xa0 is written to the\xa0",Object(i.b)("strong",{parentName:"p"},"System.requestCanceled"),"\xa0property (otherwise it will be\xa0",Object(i.b)("strong",{parentName:"p"},"NULL"),")."),Object(i.b)("p",null,"For all value input operators, the platform allows to specify an action (let's call it \xa0",Object(i.b)("em",{parentName:"p"},"main action"),") that will be executed only if the input operation is successful (i.e. not canceled). The input result (if any) is passed to this action as a parameter. You can specify an ",Object(i.b)("em",{parentName:"p"},"alternative")," action for all value input operators that will be executed if an operation is canceled."),Object(i.b)("h3",{id:"initial"},"Initial values and automatic change"),Object(i.b)("p",null,"Value input often assumes the presence of a certain ",Object(i.b)("em",{parentName:"p"},"initial")," (previous) value that the input starts from (that is, the initial value is assigned to the current one) and that the user can subsequently change. Like most other values, the initial value is defined as a property."),Object(i.b)("p",null,"Also, in many cases (especially in property ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/Form_events#property-broken"},"change event")," handlers), it is sometimes necessary to not just input value, but also to ",Object(i.b)("a",{parentName:"p",href:"/platform/docs/Property_change_CHANGE_"},"write")," this value to a certain property (as a rule, the one for which the change event handler is invoked. This is necessary to ensure WYSYWIG). In most cases, the changed property equals the initial value property. To make the implementation of such a scenario more convenient, you can specify a special option (",Object(i.b)("strong",{parentName:"p"},"CHANGE"),") in value input operators. This option will automatically add property change to the end of the main action. The changed property, in this case, will be the initial value property, and changed value \u2014 the input result (however, if necessary, the developer can specify changed property explicitly). It is worth noting that the described feature is nothing more than syntactic sugar, however, it allows to make the code a lot more concise and readable."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In the current platform implementation, initial values and automatic change s are supported only for primitive input operators (",Object(i.b)("strong",{parentName:"p"},"INPUT"),") and dialog form opening ( ",Object(i.b)("strong",{parentName:"p"},"DIALOG")," )."))))}s.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);