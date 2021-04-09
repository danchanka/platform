(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(746)),c={title:"INTERNAL operator"},s={unversionedId:"INTERNAL_operator",id:"INTERNAL_operator",isDocsHomePage:!1,title:"INTERNAL operator",description:"The INTERNAL operator creates an action that executes an internal call.",source:"@site/docs/INTERNAL_operator.md",slug:"/INTERNAL_operator",permalink:"/platform/next/INTERNAL_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/INTERNAL_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"CHANGECLASS operator",permalink:"/platform/next/CHANGECLASS_operator"},next:{title:"DELETE operator",permalink:"/platform/next/DELETE_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"INTERNAL")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that executes an ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Internal_call_INTERNAL_"},"internal call"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"The operator has two forms:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"INTERNAL className [(classId1, ..., classIdN)] [NULL]\nINTERNAL <{anyTokens}> [NULL]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"INTERNAL")," operator creates an action which calls the code written in ",Object(o.b)("strong",{parentName:"p"},"Java"),". The first form of the operator allows you to specify the fully qualified name of a Java class. This class must be inherited from the\xa0",Object(o.b)("strong",{parentName:"p"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),"\xa0Java class and must contain the\xa0",Object(o.b)("strong",{parentName:"p"},"executeInternal")," method which is executed when the action is called."),Object(o.b)("p",null,"The second form of the operator allows to write some ",Object(o.b)("strong",{parentName:"p"},"Java")," code inside the ",Object(o.b)("strong",{parentName:"p"},"<{...}",">")," block. This block contents will be the code of ",Object(o.b)("strong",{parentName:"p"},"executeInternal"),"\xa0method for the generated Java class. In this code you can refer to the only parameter of the ",Object(o.b)("strong",{parentName:"p"},"executeInternal"),"\xa0method \u2013 the\xa0",Object(o.b)("strong",{parentName:"p"},"context"),"\xa0parameter of the\xa0",Object(o.b)("strong",{parentName:"p"},"lsfusion.server.logics.action.controller.context.ExecutionContext")," class."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"The fully qualified name of the Java class. ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"classId1, ..., classIdN")),Object(o.b)("p",null,"A list of ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#classid-broken"},"class IDs")," of the action arguments. If not specified, the created action will have no parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NULL")),Object(o.b)("p",null,"If this keyword is used, you can pass ",Object(o.b)("strong",{parentName:"p"},"NULL")," parameters to the action."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"anyTokens")),Object(o.b)("p",null,"Source code written in ",Object(o.b)("strong",{parentName:"p"},"Java"),".\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"showOnMap 'Show on map' INTERNAL 'lsfusion.server.logics.classes.data.utils.geo.ShowOnMapAction' (DOUBLE, DOUBLE, MapProvider, BPSTRING[100]);\n\nserviceDBMT 'DB maintenance (multithreaded, threadCount, timeout)' INTERNAL 'lsfusion.server.physics.admin.service.action.ServiceDBMultiThreadAction' (INTEGER, INTEGER) NULL;\n\nprintlnAction 'Print text to the console'  INTERNAL  <{System.out.println(\"action test\"); }>;\nsetNoCancelInTransaction()  INTERNAL  <{ context.getSession().setNoCancelInTransaction(true); }>; // here context is a parameter of executeInternal method\n")))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,s(s({ref:t},i),{},{components:n})):a.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);