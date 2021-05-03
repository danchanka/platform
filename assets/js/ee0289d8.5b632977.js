(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[9288],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99201:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"IF ... THEN operator (action)"},c={unversionedId:"IF_..._THEN_operator_action_",id:"IF_..._THEN_operator_action_",isDocsHomePage:!1,title:"IF ... THEN operator (action)",description:"The IF ... THEN operator creates an action that implements branching\xa0with one condition (single form).",source:"@site/docs/IF_..._THEN_operator_action_.md",sourceDirName:".",slug:"/IF_..._THEN_operator_action_",permalink:"/platform/next/IF_..._THEN_operator_action_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/IF_..._THEN_operator_action_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"IF ... THEN operator (action)"},sidebar:"learn",previous:{title:"FOR operator",permalink:"/platform/next/FOR_operator"},next:{title:"IMPORT operator",permalink:"/platform/next/IMPORT_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"IF ... THEN")," operator creates an ",(0,a.kt)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that implements ",(0,a.kt)("a",{parentName:"p",href:"/platform/next/Branching_CASE_IF_MULTI_#single"},"branching"),"\xa0with one condition (single form)."),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"IF condition \nTHEN action\n[ELSE alternativeAction]\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"IF ... THEN")," operator creates an action that implements branching with one condition. When this action is executed, the condition is checked and, if the condition is met, the action specified after the keyword ",(0,a.kt)("strong",{parentName:"p"},"THEN")," is called. There is also the option of specifying an alternative action with the keyword ",(0,a.kt)("strong",{parentName:"p"},"ELSE"),", which is called if the condition is not met."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"condition")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression")," defining a condition. If the value of the expression does not equal ",(0,a.kt)("strong",{parentName:"p"},"NULL"),", then the condition is met and the action specified after the keyword ",(0,a.kt)("strong",{parentName:"p"},"THEN")," is called."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"action")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"Context-dependent operator")," that describes the action that will be executed when the corresponding condition is met."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"alternativeAction")),(0,a.kt)("p",null,"Context-dependent operator that describes an action that will be executed if the condition is not met."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")))}s.isMDXComponent=!0}}]);