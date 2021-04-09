(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(746)),c={title:"WHILE operator"},i={unversionedId:"WHILE_operator",id:"version-v4/WHILE_operator",isDocsHomePage:!1,title:"WHILE operator",description:"The WHILE operator creates an action that implements a recursive loop.",source:"@site/versioned_docs/version-v4/WHILE_operator.md",slug:"/WHILE_operator",permalink:"/platform/WHILE_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/WHILE_operator.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"TRY operator",permalink:"/platform/TRY_operator"},next:{title:"WRITE operator",permalink:"/platform/WRITE_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"WHILE")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that implements a ",Object(o.b)("a",{parentName:"p",href:"/platform/Recursive_loop_WHILE_"},"recursive loop"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"WHILE expression [ORDER [DESC] orderExpr1, ..., orderExprN]\n[NEW [alias =] className]\nDO action\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"WHILE\xa0")," operator creates an action implementing a recursive loop. This operator \xa0can add its local\xa0parameters\xa0while defining a condition. These parameters correspond to the objects being iterated and are not parameters of the created action. You can also use the\xa0NEW\xa0 block to specify the name of the\xa0class whose object will be created for each object collection meeting the condition.\xa0The name of this object needs to be specified. This name will be used as the name of the local parameter that the created object will be written to."),Object(o.b)("p",null,"The object iteration order in the\xa0WHILE\xa0operator can be specified with the ORDER\xa0block."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression")," defining a condition. In this expression, you can both access already declared parameters and declare new local parameters.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprK")),Object(o.b)("p",null,"A list of expressions that define the order in which object collections will be iterated over. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. If the list is undefined, iteration is performed in an arbitrary order."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alias")),Object(o.b)("p",null,"The name of the local parameter that will correspond to the object being created.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"The name of the class of the object to create. Defined by a\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#classid-broken"},"class ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"Context-dependent action operator")," describing the action being executed."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"iterateDates (DATE dateFrom, DATE dateTo)  {\n    LOCAL dateCur = DATE();\n\n    dateCur() <- dateFrom;\n    WHILE dateCur() <= dateTo DO {\n        MESSAGE 'I have a date ' + dateCur();\n        dateCur() <- sum(dateCur(), 1);\n    }\n}\n")))}s.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);