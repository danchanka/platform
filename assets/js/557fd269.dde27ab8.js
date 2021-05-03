(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[60966],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3381:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Value input",sidebar_label:"Overview"},l={unversionedId:"Value_input",id:"version-v4/Value_input",isDocsHomePage:!1,title:"Value input",description:"This category includes operators responsible for inputting a value:",source:"@site/versioned_docs/version-v4/Value_input.md",sourceDirName:".",slug:"/Value_input",permalink:"/platform/Value_input",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Value_input.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar_label:"Overview",frontMatter:{title:"Value input",sidebar_label:"Overview"},sidebar:"version-v4/learn",previous:{title:"Form operators",permalink:"/platform/Form_operators"},next:{title:"Primitive input (INPUT)",permalink:"/platform/Primitive_input_INPUT_"}},p=[{value:"Cancellation and input result",id:"result",children:[]},{value:"Initial values and automatic change",id:"initial",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This category includes operators responsible for inputting a value:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/platform/Primitive_input_INPUT_"},"Value input (INPUT)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/platform/Value_request_REQUEST_"},"Value request (REQUEST)"))),(0,i.kt)("p",null,"In addition to the above operators, data input is also performed via the ",(0,i.kt)("em",{parentName:"p"},"dialog forms")," of message display  ",(0,i.kt)("a",{parentName:"p",href:"/platform/Show_message_MESSAGE_ASK_#dialog"},"(ASK)"),"  and ",(0,i.kt)("a",{parentName:"p",href:"/platform/In_an_interactive_view_SHOW_DIALOG_#dialog"},"form opening (DIALOG)")," operators in an interactive view."),(0,i.kt)("h3",{id:"result"},"Cancellation and input result"),(0,i.kt)("p",null,"In value input operators, an input operation can be  ",(0,i.kt)("em",{parentName:"p"},"canceled")," (for each operator, this situation is determined in its own way)",(0,i.kt)("em",{parentName:"p"},"."),"If it happens, a ",(0,i.kt)("strong",{parentName:"p"},"TRUE")," value  is written to the ",(0,i.kt)("strong",{parentName:"p"},"System.requestCanceled")," property (otherwise it will be ",(0,i.kt)("strong",{parentName:"p"},"NULL"),")."),(0,i.kt)("p",null,"For all value input operators, the platform allows to specify an action (let's call it  ",(0,i.kt)("em",{parentName:"p"},"main action"),") that will be executed only if the input operation is successful (i.e. not canceled). The input result (if any) is passed to this action as a parameter. You can specify an ",(0,i.kt)("em",{parentName:"p"},"alternative")," action for all value input operators that will be executed if an operation is canceled."),(0,i.kt)("h3",{id:"initial"},"Initial values and automatic change"),(0,i.kt)("p",null,"Value input often assumes the presence of a certain ",(0,i.kt)("em",{parentName:"p"},"initial")," (previous) value that the input starts from (that is, the initial value is assigned to the current one) and that the user can subsequently change. Like most other values, the initial value is defined as a property."),(0,i.kt)("p",null,"Also, in many cases (especially in property ",(0,i.kt)("a",{parentName:"p",href:"/platform/Form_events#property-broken"},"change event")," handlers), it is sometimes necessary to not just input value, but also to ",(0,i.kt)("a",{parentName:"p",href:"/platform/Property_change_CHANGE_"},"write")," this value to a certain property (as a rule, the one for which the change event handler is invoked. This is necessary to ensure WYSYWIG). In most cases, the changed property equals the initial value property. To make the implementation of such a scenario more convenient, you can specify a special option (",(0,i.kt)("strong",{parentName:"p"},"CHANGE"),") in value input operators. This option will automatically add property change to the end of the main action. The changed property, in this case, will be the initial value property, and changed value \u2014 the input result (however, if necessary, the developer can specify changed property explicitly). It is worth noting that the described feature is nothing more than syntactic sugar, however, it allows to make the code a lot more concise and readable."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In the current platform implementation, initial values and automatic change s are supported only for primitive input operators (",(0,i.kt)("strong",{parentName:"p"},"INPUT"),") and dialog form opening ( ",(0,i.kt)("strong",{parentName:"p"},"DIALOG")," )."))))}u.isMDXComponent=!0}}]);