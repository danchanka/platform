(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{475:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(749)),i={title:"ACTION instruction: Overview",sidebar_label:"Overview"},c={unversionedId:"ACTION_instruction",id:"ACTION_instruction",isDocsHomePage:!1,title:"ACTION instruction: Overview",description:"The ACTION instruction\xa0creates an\xa0action.",source:"@site/docs/ACTION_instruction.md",slug:"/ACTION_instruction",permalink:"/platform/next/ACTION_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/ACTION_instruction.md",version:"current",sidebar_label:"Overview",sidebar:"learn",previous:{title:"Property options",permalink:"/platform/next/Property_options"},next:{title:"Action operator: Overview",permalink:"/platform/next/Action_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION")," instruction\xa0creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];\n[ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION\xa0"),"instruction declares a new action and adds it to the current\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Modules"},"module"),"."),Object(o.b)("p",null,"The instruction has two forms: the first form creates an action using a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent"),"\xa0action operator, the second form creates a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Property_operators#contextindependent"},"context-independent")," one."),Object(o.b)("p",null,"Also, when declaring an action, a set of its options can be specified. \xa0\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name\xa0")),Object(o.b)("p",null,"Action name.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Action caption.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),". If no caption is defined, the action name will be its caption. \xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of parameters. Each of them is defined by a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#paramid-broken"},"typed parameter"),"\xa0These parameters can be later used in the action operator describing the action being created (as well as in some options)."),Object(o.b)("p",null,"If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"operator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent"),"\xa0action operator describing and creating an action.\xa0You can use the parameters defined in this instruction (if any) as operator parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"contextIndependentOperator")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextindependent"},"context-independent"),"\xa0action operator describing and creating an action.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"options")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_options"},"Action options")," .\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"showMessage  { MESSAGE 'Hello World!'; }                                // action declaration\nloadImage 'Upload image'  ABSTRACT ( Item);\n")))}s.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);