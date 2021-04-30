(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{330:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(745)),i={title:"ACTION instruction",sidebar_label:"Overview"},p={unversionedId:"ACTION_instruction",id:"version-v4/ACTION_instruction",isDocsHomePage:!1,title:"ACTION instruction",description:"The ACTION instruction creates an action.",source:"@site/versioned_docs/version-v4/ACTION_instruction.md",slug:"/ACTION_instruction",permalink:"/platform/ACTION_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ACTION_instruction.md",version:"v4",lastUpdatedAt:1619530455,formattedLastUpdatedAt:"4/27/2021",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Property options",permalink:"/platform/Property_options"},next:{title:"Action operator",permalink:"/platform/Action_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ACTION")," instruction creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];\n[ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ACTION")," instruction declares a new action and adds it to the current ",Object(o.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),"."),Object(o.b)("p",null,"The instruction has two forms: the first form creates an action using a ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent")," action operator, the second form creates a ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_operators#contextindependent"},"context-independent")," one."),Object(o.b)("p",null,"Also, when declaring an action, a set of its options can be specified.   "),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"name")),Object(o.b)("p",{parentName:"li"},"  Action name. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"caption")),Object(o.b)("p",{parentName:"li"},"  Action caption. ",Object(o.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". If no caption is defined, the action name will be its caption.  ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",{parentName:"li"},"  List of parameters. Each of them is defined by a ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#paramid-broken"},"typed parameter")," These parameters can be later used in the action operator describing the action being created (as well as in some options)."),Object(o.b)("p",{parentName:"li"},"  If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"operator")),Object(o.b)("p",{parentName:"li"},"  A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent")," action operator describing and creating an action. You can use the parameters defined in this instruction (if any) as operator parameters.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"contextIndependentOperator")),Object(o.b)("p",{parentName:"li"},"  The ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextindependent"},"context-independent")," action operator describing and creating an action. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"options")),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_options"},"Action options"),". "))),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"showMessage  { MESSAGE 'Hello World!'; }                                // action declaration\nloadImage 'Upload image'  ABSTRACT ( Item);\n")))}b.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?a.a.createElement(u,p(p({ref:t},l),{},{components:n})):a.a.createElement(u,p({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);