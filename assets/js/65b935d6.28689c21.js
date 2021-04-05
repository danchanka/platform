(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{357:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(751)),p={title:"Change operators"},c={unversionedId:"Change_operators",id:"Change_operators",isDocsHomePage:!1,title:"Change operators",description:"Change operators - a set of operators that determine various types of property value changes.",source:"@site/docs/Change_operators.md",slug:"/Change_operators",permalink:"/platform/docs/next/Change_operators",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Change_operators.md",version:"current",sidebar:"docs",previous:{title:"IS, AS operators",permalink:"/platform/docs/next/IS_AS_operators"},next:{title:"Comparison operators",permalink:"/platform/docs/next/Comparison_operators"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Change operators - a set of operators that determine various types of ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Change_operators_SET_CHANGED_..._"},"property value changes"),".\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"typeChange(propExpr)\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"Change operators create ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Properties"},"actions")," which\xa0determine whether some types of changes have been made for a\xa0certain property in the current session."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"typeChange")),Object(o.b)("p",null,"Type of the change operator. It is specified by one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGED")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DROPPED")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SETCHANGED")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DROPCHANGED")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SETDROPPED"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression")," which value defines the property that should be checked for the presence of a change."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"quantity = DATA NUMERIC[14,2] (OrderDetail);\nprice = DATA NUMERIC[14,2] (OrderDetail);\nsum(OrderDetail d) <- quantity(d) * price(d) WHEN CHANGED(quantity(d)) OR CHANGED(price(d));\n\ncreatedUser = DATA CustomUser (Order);\ncreatedUser (Order o) <- currentUser() WHEN SET(o IS Order);\n\nnumerator = DATA Numerator (Order);\nnumber = DATA STRING[28] (Order);\nseries = DATA BPSTRING[2] (Order);\nWHEN SETCHANGED(numerator(Order o)) AND\n     NOT CHANGED(number(o)) AND\n     NOT CHANGED(series(o))\n     DO {\n        number(o) <- curStringValue(numerator(o));\n        series(o) <- series(numerator(o));\n        incrementValueSession(numerator(o));\n     }\n;\n")))}l.isMDXComponent=!0},751:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,c(c({ref:r},s),{},{components:t})):a.a.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var s=2;s<o;s++)p[s]=t[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);