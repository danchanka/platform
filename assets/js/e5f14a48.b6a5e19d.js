(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{668:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(747)),p={title:"ASK operator"},c={unversionedId:"ASK_operator",id:"version-v4/ASK_operator",isDocsHomePage:!1,title:"ASK operator",description:"The ASK\xa0operator creates an action that shows the user a\xa0message in a\xa0dialog form.",source:"@site/versioned_docs/version-v4/ASK_operator.md",slug:"/ASK_operator",permalink:"/platform/ASK_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ASK_operator.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"APPLY operator",permalink:"/platform/APPLY_operator"},next:{title:"CHANGE operator",permalink:"/platform/CHANGE_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],s={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ASK"),"\xa0operator creates an action that shows the user a\xa0message in a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Show_message_MESSAGE_ASK_#dialog"},"dialog form"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ASK expression\xa0\n[[alias =] YESNO]\n[DO actionOperator [ELSE elseOperator]]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"ASK"),"\xa0operator creates an action that asks the user for confirmation/asks the user a question."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,"An expression whose value is a message string. If the value is ",Object(o.b)("strong",{parentName:"p"},"NULL"),", the question will not be asked, but the action will be executed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"YESNO")),Object(o.b)("p",null,"If specified, the user is asked a question (Yes/No)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alias")),Object(o.b)("p",null,"The name of the local parameter in which the user's response to the question will be written (Yes = ",Object(o.b)("strong",{parentName:"p"},"TRUE"),", No = ",Object(o.b)("strong",{parentName:"p"},"NULL"),").\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully. Both upper parameters and the user response parameter (if the question was Yes/No) can be used as parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. Only upper parameters can be used as parameters."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"testAsk ()  {\n    ASK 'Are you sure you want to continue?' DO {\n        MESSAGE 'You continued';\n    }\n\n    ASK 'Use old values?' useOld = YESNO DO {\n        IF useOld THEN\n            MESSAGE 'Using old values';\n        ELSE\n            MESSAGE 'Using new values';\n    }\n}\n")))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);