(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{391:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(750)),c={title:"EXEC operator"},p={unversionedId:"EXEC_operator",id:"version-v4/EXEC_operator",isDocsHomePage:!1,title:"EXEC operator",description:"The EXEC\xa0operator creates an action that executes another action.",source:"@site/versioned_docs/version-v4/EXEC_operator.md",slug:"/EXEC_operator",permalink:"/platform/docs/EXEC_operator",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/EXEC_operator.md",version:"v4",sidebar:"version-v4/docs",previous:{title:"EVAL operator",permalink:"/platform/docs/EVAL_operator"},next:{title:"EXPORT operator",permalink:"/platform/docs/EXPORT_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXEC"),"\xa0operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Call_EXEC_"},"executes")," another action."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[EXEC] actionId(expression1, ..., expressionN)\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXEC")," operator creates an action that executes another action, passing it the values of ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/Expression"},"expressions")," as parameters."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/docs/IDs#propertyid-broken"},"Action ID"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression1, ..., expressionN")),Object(o.b)("p",null,"A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"operator")),Object(o.b)("p",null,"An operator that creates the action being executed."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"importData(Sku sku, Order order)  {\n    MESSAGE 'Run import for ' + id(sku) + ' ' + customer(order);\n}                                    // declared above action importData with two parameters\n\norder = DATA Order (OrderDetail) NONULL DELETE;\nrunImport(OrderDetail d)  { importData(sku(d), order(d)); } // declaration of the action runImport that will call importData\n")))}l.isMDXComponent=!0},750:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,p(p({ref:t},s),{},{components:r})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);