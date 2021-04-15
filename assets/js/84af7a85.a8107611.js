(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{430:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(747)),i={title:"Activity (ACTIVE)"},c={unversionedId:"Activity_ACTIVE_",id:"Activity_ACTIVE_",isDocsHomePage:!1,title:"Activity (ACTIVE)",description:"The\xa0activity\xa0operator creates a property that determines whether one of the following form elements is active:",source:"@site/docs/Activity_ACTIVE_.md",slug:"/Activity_ACTIVE_",permalink:"/platform/next/Activity_ACTIVE_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Activity_ACTIVE_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Activation (ACTIVATE)",permalink:"/platform/next/Activation_ACTIVATE_"},next:{title:"Static view",permalink:"/platform/next/Static_view"}},p=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("em",{parentName:"p"},"activity"),"\xa0operator creates a property that determines whether one of the following form elements is active:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Property - whether the focus is on the specified\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Properties"},"property"),"\xa0on the form."),Object(o.b)("li",{parentName:"ul"},"Tab - whether one of the tabs in the specified\xa0",Object(o.b)("a",{parentName:"li",href:"/platform/next/Form_design#tab-broken"},"tab panel")," is active."),Object(o.b)("li",{parentName:"ul"},"Form - determines whether the specified ",Object(o.b)("a",{parentName:"li",href:"/platform/next/Forms"},"form")," is active for the user.")),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To create a property that determines whether a tab is active, use the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/ACTIVE_TAB_operator"},Object(o.b)("strong",{parentName:"a"},"ACTIVE TAB")," operator"),". Whether a form is active is determined by creating an action using the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/ACTIVE_FORM_operator"},Object(o.b)("strong",{parentName:"a"},"ACTIVE FORM")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"//Form with two tabs\nFORM tabbedForm 'Tabbed form'\n    OBJECTS u = CustomUser\n    PROPERTIES(u) name\n\n    OBJECTS c = Chat\n    PROPERTIES(c) name\n;\n\nDESIGN tabbedForm {\n    NEW tabPane FIRST {\n        type = TABBED;\n        NEW contacts {\n            caption = 'Contacts';\n            MOVE BOX(u);\n        }\n        NEW recent {\n            caption = 'Recent';\n            MOVE BOX(c);\n        }\n    }\n}\n\n//If the 'Recent' tab is active\nrecentActive() = ACTIVE TAB tabbedForm.recent;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM exampleForm;\ntestActive  {\n    ACTIVE FORM exampleForm;\n    IF isActiveForm() THEN MESSAGE 'Example form is active';\n}\n")))}m.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=m(r),b=n,f=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);