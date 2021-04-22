(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{541:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(747)),c={title:"CASE operator (action)"},i={unversionedId:"CASE_operator_action_",id:"CASE_operator_action_",isDocsHomePage:!1,title:"CASE operator (action)",description:"The\xa0CASE\xa0operator creates an action that implements branching.",source:"@site/docs/CASE_operator_action_.md",slug:"/CASE_operator_action_",permalink:"/platform/next/CASE_operator_action_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/CASE_operator_action_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"CANCEL operator",permalink:"/platform/next/CANCEL_operator"},next:{title:"CHANGECLASS operator",permalink:"/platform/next/CHANGECLASS_operator"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"CASE"),"\xa0operator creates an ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that implements ",Object(a.b)("a",{parentName:"p",href:"/platform/next/Branching_CASE_IF_MULTI_"},"branching"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax"),"\xa0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"CASE [exclusionType]\n    WHEN condition1 THEN action1\n    ...\n    WHEN conditionN THEN actionN\n    [ELSE elseAction]\n")),Object(a.b)("p",null,"Description"),Object(a.b)("p",null,"The\xa0CASE\xa0operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. Selection conditions are defined using the properties specified in the\xa0WHEN block. If a selection condition is met, the action specified in the corresponding\xa0THEN block is executed. If none of the conditions is met, the action specified in the\xa0ELSE block will be executed if this block is specified."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"*",Object(a.b)("em",{parentName:"p"},"\xa0** "),"exclusionType*"),Object(a.b)("p",null,"**\xa0**",Object(a.b)("a",{parentName:"p",href:"/platform/next/Branching_CASE_IF_MULTI_#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that none of the conditions listed can be met simultaneously. The\xa0",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in this case, the action corresponding to the first met condition is executed"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"condition1 ... conditionN")),Object(a.b)("p",null,"\xa0",Object(a.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expressions")," whose values determine the selection conditions.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action1 ... actionN")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"Context-dependent operators")," that describe actions that may be called when the corresponding condition is met."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"elseAction")),Object(a.b)("p",null,"A context-dependent operator that describes an action to be executed if none of the conditions is met.\xa0"),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);