(window.webpackJsonp=window.webpackJsonp||[]).push([[624],{693:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(746)),i={title:"IF ... THEN operator (action)"},c={unversionedId:"IF_..._THEN_operator_action_",id:"IF_..._THEN_operator_action_",isDocsHomePage:!1,title:"IF ... THEN operator (action)",description:"The IF ... THEN operator creates an action that implements branching\xa0with one condition (single form).",source:"@site/docs/IF_..._THEN_operator_action_.md",slug:"/IF_..._THEN_operator_action_",permalink:"/platform/next/IF_..._THEN_operator_action_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/IF_..._THEN_operator_action_.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"FOR operator",permalink:"/platform/next/FOR_operator"},next:{title:"IMPORT operator",permalink:"/platform/next/IMPORT_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"IF ... THEN")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that implements ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Branching_CASE_IF_MULTI_#single"},"branching"),"\xa0with one condition (single form)."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"IF condition \nTHEN action\n[ELSE alternativeAction]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"IF ... THEN")," operator creates an action that implements branching with one condition. When this action is executed, the condition is checked and, if the condition is met, the action specified after the keyword ",Object(o.b)("strong",{parentName:"p"},"THEN")," is called. There is also the option of specifying an alternative action with the keyword ",Object(o.b)("strong",{parentName:"p"},"ELSE"),", which is called if the condition is not met."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"condition")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression")," defining a condition. If the value of the expression does not equal ",Object(o.b)("strong",{parentName:"p"},"NULL"),", then the condition is met and the action specified after the keyword ",Object(o.b)("strong",{parentName:"p"},"THEN")," is called."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"Context-dependent operator")," that describes the action that will be executed when the corresponding condition is met."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alternativeAction")),Object(o.b)("p",null,"Context-dependent operator that describes an action that will be executed if the condition is not met."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);