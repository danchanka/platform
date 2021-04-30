(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(745)),i={title:"Branching (CASE, IF, MULTI)"},c={unversionedId:"Branching_CASE_IF_MULTI_",id:"version-v4/Branching_CASE_IF_MULTI_",isDocsHomePage:!1,title:"Branching (CASE, IF, MULTI)",description:"The branching operator creates an action that determines for a set of conditions which condition is met, and calls the corresponding action.",source:"@site/versioned_docs/version-v4/Branching_CASE_IF_MULTI_.md",slug:"/Branching_CASE_IF_MULTI_",permalink:"/platform/Branching_CASE_IF_MULTI_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Branching_CASE_IF_MULTI_.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Loop (FOR)",permalink:"/platform/Loop_FOR_"},next:{title:"Recursive loop (WHILE)",permalink:"/platform/Recursive_loop_WHILE_"}},l=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Implicit definition",id:"implicit-definition",children:[]},{value:"Single form",id:"single",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The branching operator")," creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that determines for a set of ",Object(o.b)("em",{parentName:"p"},"conditions")," which condition is met, and calls the corresponding action."),Object(o.b)("p",null,"All conditions are defined as ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," and/or parameters. Accordingly, a condition is ",Object(o.b)("em",{parentName:"p"},"met")," if the value of the ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"p"),"roperty or parameter by which it is set is not equal to ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("h3",{id:"poly"},"Polymorphic form"),Object(o.b)("p",null,"This operator also allows to define a condition not explicitly but by using as a condition the ",Object(o.b)("a",{parentName:"p",href:"/platform/Property_signature_CLASS_"},"signature")," of the action corresponding to that condition. We will call this the ",Object(o.b)("em",{parentName:"p"},"polymorphic")," form of the operator."),Object(o.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(o.b)("p",null,"The branching operator lets you specify that all its conditions are ",Object(o.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(o.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),Object(o.b)("h3",{id:"implicit-definition"},"Implicit definition"),Object(o.b)("p",null,"This operator has the capability of an ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_extension"},"implicit definition")," using the technique of ",Object(o.b)("a",{parentName:"p",href:"/platform/Extensions"},"extensions"),", which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),Object(o.b)("h3",{id:"single"},"Single form"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"single "),"form of the branching operator checks exactly one condition. If this condition is met, the specified action is called. It is also possible to specify an ",Object(o.b)("em",{parentName:"p"},"alternative action "),"that is called if the condition is not met."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"))),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action implementing general form of branching, the ",Object(o.b)("a",{parentName:"p",href:"/platform/CASE_operator_action_"},Object(o.b)("strong",{parentName:"a"},"CASE")," operator")," is used. For the single form of branching, the IF operator is used, and for the polymorphic form the ",Object(o.b)("a",{parentName:"p",href:"/platform/MULTI_operator_action_"},Object(o.b)("strong",{parentName:"a"},"MULTI")," operator"),". "),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"test = DATA INTEGER (INTEGER);\ncaseActionTest(a)  {\n    CASE\n        WHEN test(a) > 7 THEN MESSAGE '>7';\n        WHEN test(a) > 6 THEN MESSAGE '>6';\n        WHEN test(a) > 5 THEN MESSAGE '>5';\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// Action that compares the value of the count property to 3 and displays a message to the user\nmoreThan3(obj)  {\n    IF count(obj) > 3 THEN\n        MESSAGE '>3';\n    ELSE\n        MESSAGE '<=3';\n}\n\ncheckNullName (Store st) {\n    IF NOT name(st) THEN\n        MESSAGE 'Name is null';\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Shape;\n\nCLASS Square : Shape;\nCLASS Circle : Shape;\n\nmessage (Square s)  { MESSAGE 'Square'; }\nmessage (Circle c)  { MESSAGE 'Circle'; }\n\nmessage (Shape s) = MULTI message[Square](s), message[Circle](s);\n")))}s.isMDXComponent=!0},745:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(i,".").concat(h)]||m[h]||b[h]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);