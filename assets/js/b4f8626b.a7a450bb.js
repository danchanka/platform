(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[32898],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),u=a,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58942:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Branching (CASE, IF, MULTI)"},c={unversionedId:"Branching_CASE_IF_MULTI_",id:"Branching_CASE_IF_MULTI_",isDocsHomePage:!1,title:"Branching (CASE, IF, MULTI)",description:"The branching operator creates an action that determines for a set of\xa0conditions\xa0which condition is met, and calls the corresponding action.",source:"@site/docs/Branching_CASE_IF_MULTI_.md",sourceDirName:".",slug:"/Branching_CASE_IF_MULTI_",permalink:"/next/Branching_CASE_IF_MULTI_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Branching_CASE_IF_MULTI_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"Branching (CASE, IF, MULTI)"},sidebar:"learn",previous:{title:"Loop (FOR)",permalink:"/next/Loop_FOR_"},next:{title:"Recursive loop (WHILE)",permalink:"/next/Recursive_loop_WHILE_"}},l=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Implicit definition",id:"implicit-definition",children:[]},{value:"Single form",id:"single",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The branching operator")," creates an ",(0,o.kt)("a",{parentName:"p",href:"/next/Actions"},"action")," that determines for a set of\xa0",(0,o.kt)("em",{parentName:"p"},"conditions"),"\xa0which condition is met, and calls the corresponding action."),(0,o.kt)("p",null,"All conditions are defined as\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"properties"),"\xa0and/or parameters. Accordingly, a condition is\xa0",(0,o.kt)("em",{parentName:"p"},"met")," if the value of the\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Properties"},"p"),"roperty\xa0or parameter by which it is set is not equal to\xa0",(0,o.kt)("strong",{parentName:"p"},"NULL"),"."),(0,o.kt)("h3",{id:"poly"},"Polymorphic form"),(0,o.kt)("p",null,"This operator also allows to define a condition not explicitly but by using as a condition the\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Property_signature_CLASS_"},"signature")," of the action corresponding to that condition. We will call this the\xa0",(0,o.kt)("em",{parentName:"p"},"polymorphic")," form of the operator."),(0,o.kt)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),(0,o.kt)("p",null,"The branching operator lets you specify that all its conditions are\xa0",(0,o.kt)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),(0,o.kt)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),(0,o.kt)("h3",{id:"implicit-definition"},"Implicit definition"),(0,o.kt)("p",null,"This operator has the capability of an\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Action_extension"},"implicit definition"),"\xa0using the technique of\xa0",(0,o.kt)("a",{parentName:"p",href:"/next/Extensions"},"extensions"),", which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),(0,o.kt)("h3",{id:"single"},"Single form"),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("em",{parentName:"p"},"single\xa0"),"form of the branching operator checks exactly one condition. If this condition is met, the specified action is called. It is also possible to specify an\xa0",(0,o.kt)("em",{parentName:"p"},"alternative action\xa0"),"that is called if the condition is not met."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"))),(0,o.kt)("h3",{id:"language"},"Language"),(0,o.kt)("p",null,"To declare an action implementing general form of branching, the ",(0,o.kt)("a",{parentName:"p",href:"/next/CASE_operator_action_"},(0,o.kt)("strong",{parentName:"a"},"CASE")," operator")," is used. For the single form of branching, the IF operator is used, and for the polymorphic form the ",(0,o.kt)("a",{parentName:"p",href:"/next/MULTI_operator_action_"},(0,o.kt)("strong",{parentName:"a"},"MULTI")," operator"),".\xa0"),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shape;\n\nCLASS Square : Shape;\nCLASS Circle : Shape;\n\nmessage (Square s)  { MESSAGE 'Square'; }\nmessage (Circle c)  { MESSAGE 'Circle'; }\n\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n")))}p.isMDXComponent=!0}}]);