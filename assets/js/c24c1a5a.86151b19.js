(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{591:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(751)),c={title:"REQUEST operator"},p={unversionedId:"REQUEST_operator",id:"REQUEST_operator",isDocsHomePage:!1,title:"REQUEST operator",description:"The REQUEST operator creates an action that requests a value.",source:"@site/docs/REQUEST_operator.md",slug:"/REQUEST_operator",permalink:"/platform/docs/next/REQUEST_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/REQUEST_operator.md",version:"current",sidebar:"docs",previous:{title:"READ operator",permalink:"/platform/docs/next/READ_operator"},next:{title:"RETURN",permalink:"/platform/docs/next/RETURN"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"REQUEST")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Value_request_REQUEST_"},"requests a value"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"REQUEST requestAction \nDO doAction [ELSE elseAction]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"REQUEST")," operator creates an action that allows the separation of a request for a value from its handling."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"requestAction")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Action_operator#contextdependent"},"context-dependent action operator")," that requests a value."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"doAction")),Object(o.b)("p",null,"A context-dependent action operator that is executed if the input was completed successfully."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseAction")),Object(o.b)("p",null,"A context-dependent action operator that is executed if the input was ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Value_input#result"},"cancelled"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"\nrequestCustomer (Order o)  {\n    LOCAL resultValue = STRING[100] ();\n    REQUEST {\n        ASK 'Choose from list?' DO\n            DIALOG customers OBJECTS c = resultValue() CHANGE;\n        ELSE\n            INPUT = resultValue() CHANGE;\n    } DO\n        customer(o) <- resultValue();\n}\n\nFORM request\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE requestCustomer(o) // for example, group adjustment will be performed\n;\n")))}u.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(m,p(p({ref:t},i),{},{components:r})):a.a.createElement(m,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);