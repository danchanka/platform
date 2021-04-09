(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{724:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(746)),c={title:"Internal call (INTERNAL)"},l={unversionedId:"Internal_call_INTERNAL_",id:"Internal_call_INTERNAL_",isDocsHomePage:!1,title:"Internal call (INTERNAL)",description:"The internal call operator allows to create actions in programming languages other than the lsFusion language.*\xa0*The platform currently supports external actions only in the Java language.",source:"@site/docs/Internal_call_INTERNAL_.md",slug:"/Internal_call_INTERNAL_",permalink:"/platform/next/Internal_call_INTERNAL_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Internal_call_INTERNAL_.md",version:"current",lastUpdatedBy:"pavel-miniutka",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Access to an internal system (INTERNAL, FORMULA)",permalink:"/platform/next/Access_to_an_internal_system_INTERNAL_FORMULA_"},next:{title:"Custom formula (FORMULA)",permalink:"/platform/next/Custom_formula_FORMULA_"}},i=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"internal call")," operator allows to create actions in programming languages other than the lsFusion language.**\xa0",Object(o.b)("strong",{parentName:"p"},"The platform currently supports external actions only in the "),"Java** language."),Object(o.b)("p",null,"This operator also makes it possible to directly specify the source for an action in Java, as well as the name of a Java class for which the bytecode is located in a separate Java file. In the second case it is assumed that the file is within the classpath of the server's virtual machine; the Java class itself must inherit from\xa0",Object(o.b)("strong",{parentName:"p"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),". The class's ",Object(o.b)("strong",{parentName:"p"},"executeInternal(lsfusion.server.logics.action.controller.context.ExecutionContext\xa0context)")," method will be executed."),Object(o.b)("p",null,"This operator allows to specify which classes the action created can take, and whether or not it can take ",Object(o.b)("strong",{parentName:"p"},"NULL")," values. If the specified conditions are not met, the created action is not executed: control simply passes to the next action."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action implemented in ",Object(o.b)("strong",{parentName:"p"},"Java")," use the \xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/INTERNAL_operator"},Object(o.b)("strong",{parentName:"a"},"INTERNAL"),"\xa0operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"showOnMap 'Show on map' INTERNAL 'lsfusion.server.logics.classes.data.utils.geo.ShowOnMapAction' (DOUBLE, DOUBLE, MapProvider, BPSTRING[100]);\n\nserviceDBMT 'DB maintenance (multithreaded, threadCount, timeout)' INTERNAL 'lsfusion.server.physics.admin.service.action.ServiceDBMultiThreadAction' (INTEGER, INTEGER) NULL;\n\nprintlnAction 'Print text to the console'  INTERNAL  <{System.out.println(\"action test\"); }>;\nsetNoCancelInTransaction()  INTERNAL  <{ context.getSession().setNoCancelInTransaction(true); }>; // here context is a parameter of executeInternal method\n")))}p.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);