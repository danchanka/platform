(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{470:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(749)),c={title:"MULTI operator (action)"},i={unversionedId:"MULTI_operator_action_",id:"MULTI_operator_action_",isDocsHomePage:!1,title:"MULTI operator (action)",description:"The\xa0MULTI\xa0operator creates an action\xa0that implements\xa0branching\xa0(polymorphic form).",source:"@site/docs/MULTI_operator_action_.md",slug:"/MULTI_operator_action_",permalink:"/platform/next/MULTI_operator_action_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/MULTI_operator_action_.md",version:"current",sidebar:"learn",previous:{title:"MESSAGE operator",permalink:"/platform/next/MESSAGE_operator"},next:{title:"NEW operator",permalink:"/platform/next/NEW_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action"),"\xa0that implements\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Branching_CASE_IF_MULTI_#poly"},"branching"),"\xa0(polymorphic form)."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\xa0MULTI [exclusionType] action1, ..., actionN \n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met.\xa0The property selection condition is\xa0that the parameters\xa0match this action\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/CLASS_operator"},"signature"),".\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"exclusionType")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Branching_CASE_IF_MULTI_#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions for the action selection can be met simultaneously with a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that the conditions for the action selection cannot be met simultaneously. The\xa0",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in which case the first action in the list which selection condition is met will be selected.\xa0"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type is used by default."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action1, ..., actionN"),"\xa0**\xa0**\xa0"),Object(o.b)("p",null,"A list of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context dependent\xa0action operators")," which define the actions from which the selection is made."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shape;\n\nCLASS Square : Shape;\nCLASS Circle : Shape;\n\nmessage (Square s)  { MESSAGE 'Square'; }\nmessage (Circle c)  { MESSAGE 'Circle'; }\n\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n")))}s.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);