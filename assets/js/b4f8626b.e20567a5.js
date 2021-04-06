(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{555:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(750)),i={title:"Branching (CASE, IF, MULTI)"},c={unversionedId:"Branching_CASE_IF_MULTI_",id:"Branching_CASE_IF_MULTI_",isDocsHomePage:!1,title:"Branching (CASE, IF, MULTI)",description:"The branching operator creates an action that determines for a set of\xa0conditions\xa0which condition is met, and calls the corresponding action.",source:"@site/docs/Branching_CASE_IF_MULTI_.md",slug:"/Branching_CASE_IF_MULTI_",permalink:"/platform/docs/next/Branching_CASE_IF_MULTI_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Branching_CASE_IF_MULTI_.md",version:"current",sidebar:"docs",previous:{title:"Loop (FOR)",permalink:"/platform/docs/next/Loop_FOR_"},next:{title:"Recursive loop (WHILE)",permalink:"/platform/docs/next/Recursive_loop_WHILE_"}},l=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Implicit definition",id:"implicit-definition",children:[]},{value:"Single form",id:"single",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"The branching operator")," creates an ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that determines for a set of\xa0",Object(r.b)("em",{parentName:"p"},"conditions"),"\xa0which condition is met, and calls the corresponding action."),Object(r.b)("p",null,"All conditions are defined as\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"properties"),"\xa0and/or parameters. Accordingly, a condition is\xa0",Object(r.b)("em",{parentName:"p"},"met")," if the value of the\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"p"),"roperty\xa0or parameter by which it is set is not equal to\xa0",Object(r.b)("strong",{parentName:"p"},"NULL"),"."),Object(r.b)("h3",{id:"poly"},"Polymorphic form"),Object(r.b)("p",null,"This operator also allows to define a condition not explicitly but by using as a condition the\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/Property_signature_CLASS_"},"signature")," of the action corresponding to that condition. We will call this the\xa0",Object(r.b)("em",{parentName:"p"},"polymorphic")," form of the operator."),Object(r.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(r.b)("p",null,"The branching operator lets you specify that all its conditions are\xa0",Object(r.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(r.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),Object(r.b)("h3",{id:"implicit-definition"},"Implicit definition"),Object(r.b)("p",null,"This operator has the capability of an\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/Action_extension"},"implicit definition"),"\xa0using the technique of\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/Extensions"},"extensions"),", which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),Object(r.b)("h3",{id:"single"},"Single form"),Object(r.b)("p",null,"The\xa0",Object(r.b)("em",{parentName:"p"},"single\xa0"),"form of the branching operator checks exactly one condition. If this condition is met, the specified action is called. It is also possible to specify an\xa0",Object(r.b)("em",{parentName:"p"},"alternative action\xa0"),"that is called if the condition is not met."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"))),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To declare an action implementing general form of branching, the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/CASE_operator_action_"},Object(r.b)("strong",{parentName:"a"},"CASE")," operator")," is used. For the single form of branching, the IF operator is used, and for the polymorphic form the ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/MULTI_operator_action_"},Object(r.b)("strong",{parentName:"a"},"MULTI")," operator"),".\xa0"),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shape;\n\nCLASS Square : Shape;\nCLASS Circle : Shape;\n\nmessage (Square s)  { MESSAGE 'Square'; }\nmessage (Circle c)  { MESSAGE 'Circle'; }\n\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n")))}p.isMDXComponent=!0},750:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,h=m["".concat(i,".").concat(b)]||m[b]||d[b]||r;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);