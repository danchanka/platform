(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{580:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(747)),i={title:"INTERNAL operator"},c={unversionedId:"INTERNAL_operator",id:"version-v4/INTERNAL_operator",isDocsHomePage:!1,title:"INTERNAL operator",description:"The INTERNAL operator creates an action that executes an internal call.",source:"@site/versioned_docs/version-v4/INTERNAL_operator.md",slug:"/INTERNAL_operator",permalink:"/platform/INTERNAL_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/INTERNAL_operator.md",version:"v4",lastUpdatedAt:1619535380,formattedLastUpdatedAt:"4/27/2021",sidebar:"version-v4/learn",previous:{title:"CHANGECLASS operator",permalink:"/platform/CHANGECLASS_operator"},next:{title:"DELETE operator",permalink:"/platform/DELETE_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"INTERNAL")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that executes an ",Object(o.b)("a",{parentName:"p",href:"/platform/Internal_call_INTERNAL_"},"internal call"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"The operator has two forms:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"INTERNAL className [(classId1, ..., classIdN)] [NULL]\nINTERNAL <{anyTokens}> [NULL]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"INTERNAL")," operator creates an action which calls the code written in Java programming language. The first form of the operator allows you to specify the fully qualified name of a Java class. This class must be inherited from the ",Object(o.b)("inlineCode",{parentName:"p"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction")," Java class and must contain the ",Object(o.b)("inlineCode",{parentName:"p"},"executeInternal")," method which is executed when the action is called."),Object(o.b)("p",null,"The second form of the operator allows to write some Java code inside the ",Object(o.b)("inlineCode",{parentName:"p"},"<{...}>")," block. This block contents will be the code of ",Object(o.b)("inlineCode",{parentName:"p"},"executeInternal")," method for the generated Java class. In this code you can refer to the only parameter of the ",Object(o.b)("inlineCode",{parentName:"p"},"executeInternal")," method \u2013 the ",Object(o.b)("inlineCode",{parentName:"p"},"context")," parameter of the ",Object(o.b)("inlineCode",{parentName:"p"},"lsfusion.server.logics.action.controller.context.ExecutionContext")," class."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"className")),Object(o.b)("p",{parentName:"li"},"  The fully qualified name of the Java class. ",Object(o.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"classId1, ..., classIdN")),Object(o.b)("p",{parentName:"li"},"  A list of ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#classid-broken"},"class IDs")," of the action arguments. If not specified, the created action will have no parameters.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"NULL")),Object(o.b)("p",{parentName:"li"},"  If this keyword is used, you can pass ",Object(o.b)("inlineCode",{parentName:"p"},"NULL")," parameters to the action.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"anyTokens")),Object(o.b)("p",{parentName:"li"},"  Source code written in Java. "))),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"showOnMap 'Show on map' INTERNAL 'lsfusion.server.logics.classes.data.utils.geo.ShowOnMapAction' (DOUBLE, DOUBLE, MapProvider, BPSTRING[100]);\n\nserviceDBMT 'DB maintenance (multithreaded, threadCount, timeout)' INTERNAL 'lsfusion.server.physics.admin.service.action.ServiceDBMultiThreadAction' (INTEGER, INTEGER) NULL;\n\nprintlnAction 'Print text to the console'  INTERNAL  <{System.out.println(\"action test\"); }>;\nsetNoCancelInTransaction()  INTERNAL  <{ context.getSession().setNoCancelInTransaction(true); }>; // here context is a parameter of executeInternal method\n")))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);