(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{246:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(751)),c={title:"DELETE operator"},p={unversionedId:"DELETE_operator",id:"DELETE_operator",isDocsHomePage:!1,title:"DELETE operator",description:"The DELETE operator creates an action that deletes objects.",source:"@site/docs/DELETE_operator.md",slug:"/DELETE_operator",permalink:"/platform/docs/next/DELETE_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/DELETE_operator.md",version:"current",sidebar:"docs",previous:{title:"INTERNAL operator",permalink:"/platform/docs/next/INTERNAL_operator"},next:{title:"DIALOG operator",permalink:"/platform/docs/next/DIALOG_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DELETE")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Class_change_CHANGECLASS_DELETE_"},"deletes objects"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"DELETE expr [WHERE whereExpr]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DELETE")," operator creates an action that deletes objects for which a certain condition is met. This operator can add its local ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Actions"},"parameter"),", which will correspond to the objects being iterated. In this case, the ",Object(o.b)("strong",{parentName:"p"},"WHERE")," block is mandatory.\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression"),"\xa0or ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/IDs#paramid-broken"},"typed parameter"),".\xa0You can either use an already declared parameter as a typed parameter, or declare a new local parameter. When using an expression, new local parameters cannot be added."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/docs/next/Expression"},"expression")," whose value is for the action being created.\xa0If not set, it is considered as equal to\xa0",Object(o.b)("strong",{parentName:"p"},"TRUE"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// deleting an object\ndeleteObject(obj)  { DELETE obj; }\n\n// deleting all inactive products\nCLASS Article;\nactive = DATA BOOLEAN (Article);\ndeleteInactiveArticles()  {\n    DELETE Article a WHERE a IS Article AND NOT active(a); // a local parameter a is added corresponding to the objects to be iterated over\n}\n")))}s.isMDXComponent=!0},751:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return r?a.a.createElement(m,p(p({ref:t},l),{},{components:r})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);