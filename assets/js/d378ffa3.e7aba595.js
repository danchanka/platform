(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{620:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(746)),i={title:"EVAL operator"},p={unversionedId:"EVAL_operator",id:"EVAL_operator",isDocsHomePage:!1,title:"EVAL operator",description:"The EVAL operator: creating an action that executes code in the lsFusion language.",source:"@site/docs/EVAL_operator.md",slug:"/EVAL_operator",permalink:"/platform/next/EVAL_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/EVAL_operator.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"EMAIL operator",permalink:"/platform/next/EMAIL_operator"},next:{title:"EXEC operator",permalink:"/platform/next/EXEC_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EVAL")," operator: creating an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Eval_EVAL_"},"executes code")," in the ",Object(o.b)("strong",{parentName:"p"},"lsFusion")," language."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"EVAL [ACTION] expression [PARAMS paramExpr1, ..., paramExprN]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EVAL")," operator is designed to execute program code\xa0while the server is running. The operator takes as its argument a string containing source code. This string\xa0can be a simple string ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Constant"},"constant")," or a more complex ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expression")," that evaluates to a string."),Object(o.b)("p",null,"The code that is passed should consist of a sequence of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Instructions"},"instructions"),"\xa0(or ",Object(o.b)("a",{parentName:"p",href:"/platform/next/%D0%9Eperators"},"action operators"),"\xa0and local property declarations, if the ",Object(o.b)("strong",{parentName:"p"},"ACTION")," option is specified). When the action is executed, this code is inserted into a ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Modules"},"module")," with a unique name. The module header is generated by the system: it declares a unique name for the module and lists all the modules that are in the project in the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Module_header"},Object(o.b)("strong",{parentName:"a"},"REQUIRE")," instruction"),". Thus, you can use all ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Element_identification"},"elements")," from other modules in the code passed in the ",Object(o.b)("strong",{parentName:"p"},"EVAL")," operator. If the ",Object(o.b)("strong",{parentName:"p"},"ACTION")," option is not specified, it is assumed that one of the passed instructions will be the creation of action with the name\xa0",Object(o.b)("strong",{parentName:"p"},"run\xa0"),"(it is this action that will be executed)."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expression")," whose value is the string to be executed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ACTION")),Object(o.b)("p",null,"Keyword."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"paramExpr1, ..., paramExprN")),Object(o.b)("p",null,"A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"addProperty  { EVAL ACTION 'MESSAGE \\'Hello World\\''; }  // source code consisting of one instruction is specified with a string constant\n\ncode 'Source code' = DATA BPSTRING[2000] ();              // a property to which the user can enter the source code\nexecute 'Execute code'  { EVAL code(); }      // the action executing this code\n")))}l.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);