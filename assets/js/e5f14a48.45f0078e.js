(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{663:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(747)),i={title:"ASK operator"},p={unversionedId:"ASK_operator",id:"version-v4/ASK_operator",isDocsHomePage:!1,title:"ASK operator",description:"The ASK operator creates an action that shows the user a message in a dialog form.",source:"@site/versioned_docs/version-v4/ASK_operator.md",slug:"/ASK_operator",permalink:"/platform/ASK_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/ASK_operator.md",version:"v4",lastUpdatedAt:1619530455,formattedLastUpdatedAt:"4/27/2021",sidebar:"version-v4/learn",previous:{title:"APPLY operator",permalink:"/platform/APPLY_operator"},next:{title:"CHANGE operator",permalink:"/platform/CHANGE_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ASK")," operator creates an action that shows the user a message in a ",Object(o.b)("a",{parentName:"p",href:"/platform/Show_message_MESSAGE_ASK_#dialog"},"dialog form"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ASK expression \n[[alias =] YESNO]\n[DO actionOperator [ELSE elseOperator]]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ASK")," operator creates an action that asks the user for confirmation/asks the user a question."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"expression")),Object(o.b)("p",{parentName:"li"},"  An expression whose value is a message string. If the value is ",Object(o.b)("inlineCode",{parentName:"p"},"NULL"),", the question will not be asked, but the action will be executed.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"YESNO")),Object(o.b)("p",{parentName:"li"},"  If specified, the user is asked a question (Yes/No)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"alias")),Object(o.b)("p",{parentName:"li"},"  The name of the local parameter in which the user's response to the question will be written (Yes = ",Object(o.b)("inlineCode",{parentName:"p"},"TRUE"),", No = ",Object(o.b)("inlineCode",{parentName:"p"},"NULL"),"). ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"actionOperator")),Object(o.b)("p",{parentName:"li"},"  A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully. Both upper parameters and the user response parameter (if the question was Yes/No) can be used as parameters")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",{parentName:"li"},"  A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. Only upper parameters can be used as parameters."))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"testAsk ()  {\n    ASK 'Are you sure you want to continue?' DO {\n        MESSAGE 'You continued';\n    }\n\n    ASK 'Use old values?' useOld = YESNO DO {\n        IF useOld THEN\n            MESSAGE 'Using old values';\n        ELSE\n            MESSAGE 'Using new values';\n    }\n}\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(d,p(p({ref:t},l),{},{components:r})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);