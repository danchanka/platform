(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{613:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(746)),i={title:"IF ... THEN operator (action)"},c={unversionedId:"IF_..._THEN_operator_action_",id:"version-v4/IF_..._THEN_operator_action_",isDocsHomePage:!1,title:"IF ... THEN operator (action)",description:"The IF ... THEN operator creates an action that implements branching\xa0with one condition (single form).",source:"@site/versioned_docs/version-v4/IF_..._THEN_operator_action_.md",slug:"/IF_..._THEN_operator_action_",permalink:"/platform/IF_..._THEN_operator_action_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/IF_..._THEN_operator_action_.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"FOR operator",permalink:"/platform/FOR_operator"},next:{title:"IMPORT operator",permalink:"/platform/IMPORT_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"IF ... THEN")," operator creates an ",Object(a.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that implements ",Object(a.b)("a",{parentName:"p",href:"/platform/Branching_CASE_IF_MULTI_#single"},"branching"),"\xa0with one condition (single form)."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"IF condition \nTHEN action\n[ELSE alternativeAction]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"IF ... THEN")," operator creates an action that implements branching with one condition. When this action is executed, the condition is checked and, if the condition is met, the action specified after the keyword ",Object(a.b)("strong",{parentName:"p"},"THEN")," is called. There is also the option of specifying an alternative action with the keyword ",Object(a.b)("strong",{parentName:"p"},"ELSE"),", which is called if the condition is not met."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"condition")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression")," defining a condition. If the value of the expression does not equal ",Object(a.b)("strong",{parentName:"p"},"NULL"),", then the condition is met and the action specified after the keyword ",Object(a.b)("strong",{parentName:"p"},"THEN")," is called."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"Context-dependent operator")," that describes the action that will be executed when the corresponding condition is met."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"alternativeAction")),Object(a.b)("p",null,"Context-dependent operator that describes an action that will be executed if the condition is not met."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||a;return n?o.a.createElement(u,c(c({ref:t},l),{},{components:n})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);