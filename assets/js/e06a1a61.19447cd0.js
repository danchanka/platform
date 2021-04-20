(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{648:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(747)),c={title:"Operator{...}"},p={unversionedId:"Operator_..._",id:"version-v4/Operator_..._",isDocsHomePage:!1,title:"Operator{...}",description:"The  {...} operator creates actions that executes a sequence of other actions.",source:"@site/versioned_docs/version-v4/Operator_..._.md",slug:"/Operator_..._",permalink:"/platform/Operator_..._",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Operator_..._.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Action operator",permalink:"/platform/Action_operator"},next:{title:"ABSTRACT operator",permalink:"/platform/ABSTRACT_operator_action_"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The  ",Object(o.b)("strong",{parentName:"p"},"{...}")," operator creates ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"actions")," that executes a ",Object(o.b)("a",{parentName:"p",href:"/platform/Sequence_..._"},"sequence of other actions"),". "),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{\n    operator1\n    ...\n    operatorN\n}\n")),Object(o.b)("p",null,"Operators can be of two types:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"actionOperator\nLOCAL [NESTED] name1, ..., nameN = returnClass (paramClass1, ..., paramClassN)\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"A sequence of ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator"},"action operators")," and ",Object(o.b)("strong",{parentName:"p"},"LOCAL")," operators enclosed in braces creates a new action that sequentially executes specified actions and creates specified ",Object(o.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_"},"local properties"),". The area of visibility of the local properties created inside the  ",Object(o.b)("strong",{parentName:"p"},"{...}")," operator ends at the end of this operator."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator"),". Each operator is followed by a semicolon, except for operators ending in a closing brace. Extra semicolons are not an error."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NESTED")),Object(o.b)("p",null,"A keyword that, when specified, marks the local property as ",Object(o.b)("a",{parentName:"p",href:"/platform/Session_management#nested"},"nested"),"; that is, all of its changes will be visible in new sessions, and when these sessions are closed, changes to this property will get to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",Object(o.b)("strong",{parentName:"p"},"NESTED"),") when using the ",Object(o.b)("a",{parentName:"p",href:"/platform/NEWSESSION_operator"},Object(o.b)("strong",{parentName:"a"},"NEWSESSION")," operator")," with the specified keyword ",Object(o.b)("strong",{parentName:"p"},"NESTED LOCAL")," (or just ",Object(o.b)("strong",{parentName:"p"},"NESTED")," if this local property is explicitly specified in the property list)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name1, ..., nameN")),Object(o.b)("p",null,"A list of names of the local properties being created. The names are defined by ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"simple ID's"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"returnClass")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#classid-broken"},"class ID")," of the returned value of the local property. "),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"argumentClass1, ..., argumentClassN")),Object(o.b)("p",null,"A list of argument class ID's of the local property."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Currency;\nname = DATA STRING[30] (Currency);\ncode = DATA INTEGER (Currency);\n\nCLASS Order;\ncurrency = DATA Currency (Order);\ncustomer = DATA STRING[100] (Order);\ncopy 'Copy' (Order old)  {\n    NEW new = Order {                                   // an action is created that consists of the sequential execution of two actions\n        currency(new) <- currency(old);                 // a semicolon is put after each statement\n        customer(new) <- customer(old);\n    }                                                   // there is no semicolon in this line, because the operator ends in }\n}\n\nloadDefaultCurrency(ISTRING[30] name, INTEGER code)  {\n    NEW c = Currency {\n        name(c) <- name;\n        code(c) <- code;\n    }\n}\nrun ()  {\n    loadDefaultCurrency('USD', 866);\n    loadDefaultCurrency('EUR', 1251);\n}\n")))}l.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);