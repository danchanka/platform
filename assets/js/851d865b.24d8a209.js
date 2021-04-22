(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{429:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(747)),c={title:"Eval (EVAL)"},i={unversionedId:"Eval_EVAL_",id:"version-v4/Eval_EVAL_",isDocsHomePage:!1,title:"Eval (EVAL)",description:"The eval operator creates an action that executes defined program code in the lsFusion language. Program code is defined as a property whose value should belong to the string class. This is implemented using an action which takes a line of code as an argument.",source:"@site/versioned_docs/version-v4/Eval_EVAL_.md",slug:"/Eval_EVAL_",permalink:"/platform/Eval_EVAL_",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Eval_EVAL_.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Custom formula (FORMULA)",permalink:"/platform/Custom_formula_FORMULA_"},next:{title:"Migration",permalink:"/platform/Migration"}},s=[{value:"Action execution",id:"action-execution",children:[]},{value:"Executable code restrictions",id:"executable-code-restrictions",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The eval operator creates an action that executes defined program code in the ",Object(o.b)("strong",{parentName:"p"},"lsFusion")," language. Program code is defined as a property whose value should belong to the string class. This is implemented using an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," which takes a line of code as an argument."),Object(o.b)("p",null,"The code that is passed to an action must be a sequence of ",Object(o.b)("a",{parentName:"p",href:"/platform/Instructions"},"instructions"),". It is assumed that one of these instructions will create an action named ",Object(o.b)("strong",{parentName:"p"},"run")," (it is this action that will be executed)."),Object(o.b)("h3",{id:"action-execution"},"Action execution"),Object(o.b)("p",null,"This operator can also execute a single action (rather than a set of instructions): in this case the code should be a sequence of ",Object(o.b)("a",{parentName:"p",href:"/platform/%D0%9Eperators"},"action operators")," and local property declarations. To refer to the parameters of the action, you can use the special character $ and the parameter number (starting from 1)."),Object(o.b)("h3",{id:"executable-code-restrictions"},"Executable code restrictions"),Object(o.b)("p",null,"In the current implementation, executable code must not contain instructions that modify existing objects in the system. For example, you cannot add ",Object(o.b)("a",{parentName:"p",href:"/platform/Events"},"events")," or ",Object(o.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_"},"data")," and materialized properties, ",Object(o.b)("a",{parentName:"p",href:"/platform/Extensions"},"extend")," existing objects, etc."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that executes program code, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/EVAL_operator"},Object(o.b)("strong",{parentName:"a"},"EVAL")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"addProperty  { EVAL ACTION 'MESSAGE \\'Hello World\\''; }  // source code consisting of one instruction is specified with a string constant\n\ncode 'Source code' = DATA BPSTRING[2000] ();              // a property to which the user can enter the source code\nexecute 'Execute code'  { EVAL code(); }      // the action executing this code\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);