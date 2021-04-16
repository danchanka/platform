(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{553:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(747)),c={title:"NEWSESSION operator"},i={unversionedId:"NEWSESSION_operator",id:"version-v4/NEWSESSION_operator",isDocsHomePage:!1,title:"NEWSESSION operator",description:"The NEWSESSION operator creates an action that executes the other action in a new session.",source:"@site/versioned_docs/version-v4/NEWSESSION_operator.md",slug:"/NEWSESSION_operator",permalink:"/platform/NEWSESSION_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/NEWSESSION_operator.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"NEWEXECUTOR operator",permalink:"/platform/NEWEXECUTOR_operator"},next:{title:"NEWTHREAD operator",permalink:"/platform/NEWTHREAD_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"NEWSESSION")," operator creates an ",Object(a.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that executes the other action in a ",Object(a.b)("a",{parentName:"p",href:"/platform/New_session_NEWSESSION_NESTEDSESSION_"},"new session"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"NEWSESSION [NEWSQL] [nestedBlock] action \n")),Object(a.b)("p",null,"where ",Object(a.b)("em",{parentName:"p"},"nestedBlock")," has one of two possible syntaxes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"NEWSESSION")," operator creates an action which executes the other action in a new session."),Object(a.b)("p",null,"If the ",Object(a.b)("strong",{parentName:"p"},"NESTED")," keyword is specified, the changes of the ",Object(a.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_#local"},"local properties")," will be visible in the new session. If the ",Object(a.b)("strong",{parentName:"p"},"LOCAL")," keyword is specified, changes of all the local properties will be visible, otherwise, a list of the local properties whose changes need to be visible in the new session should be specified. Also, changes to these local properties in the new session will get to the current session when applying changes in this new session."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"NEWSQL")),Object(a.b)("p",null,"If this keyword is specified, a new SQL connection will be created. In this case, the block containing the ",Object(a.b)("strong",{parentName:"p"},"NESTED")," keyword will be ignored."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"LOCAL")),Object(a.b)("p",null,"If this keyword is specified, changes to all the local properties will be visible in the new session."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(a.b)("p",null,"A list of local properties whose changes will be visible in the new session. Each list element must be a ",Object(a.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"property ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action")," "),Object(a.b)("p",null,"A ",Object(a.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," that defines an action to be executed in the new session."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"testNewSession ()  {\n    NEWSESSION {\n        NEW c = Currency {\n            name(c) <- 'USD';\n            code(c) <- 866;\n        }\n        APPLY;\n    }\n    // here a new object of class Currency is already in the database\n\n    LOCAL local = BPSTRING[10] (Currency);\n    local(Currency c) <- 'Local';\n    NEWSESSION {\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); // will return NULL\n    }\n    NEWSESSION NESTED (local) {\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); // will return the number of objects of class Currency\n    }\n\n    NEWSESSION {\n        NEW s = Sku {\n            id(s) <- 1234;\n            name(s) <- 'New Sku';\n            SHOW sku OBJECTS s = s;\n        }\n    }\n\n}\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),O=r,d=b["".concat(c,".").concat(O)]||b[O]||u[O]||a;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=O;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);