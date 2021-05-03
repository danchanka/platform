(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[54240],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7294:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"WHILE operator"},p={unversionedId:"WHILE_operator",id:"WHILE_operator",isDocsHomePage:!1,title:"WHILE operator",description:"The WHILE operator creates an action that implements a recursive loop.",source:"@site/docs/WHILE_operator.md",sourceDirName:".",slug:"/WHILE_operator",permalink:"/platform/next/WHILE_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/WHILE_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"WHILE operator"},sidebar:"learn",previous:{title:"TRY operator",permalink:"/platform/next/TRY_operator"},next:{title:"WRITE operator",permalink:"/platform/next/WRITE_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"WHILE")," operator creates an ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that implements a ",(0,o.kt)("a",{parentName:"p",href:"/platform/next/Recursive_loop_WHILE_"},"recursive loop"),"."),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WHILE expression [ORDER [DESC] orderExpr1, ..., orderExprN]\n[NEW [alias =] className]\nDO action\n")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"WHILE\xa0")," operator creates an action implementing a recursive loop. This operator \xa0can add its local\xa0parameters\xa0while defining a condition. These parameters correspond to the objects being iterated and are not parameters of the created action. You can also use the\xa0NEW\xa0 block to specify the name of the\xa0class whose object will be created for each object collection meeting the condition.\xa0The name of this object needs to be specified. This name will be used as the name of the local parameter that the created object will be written to."),(0,o.kt)("p",null,"The object iteration order in the\xa0WHILE\xa0operator can be specified with the ORDER\xa0block."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"expression")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Expression"},"Expression")," defining a condition. In this expression, you can both access already declared parameters and declare new local parameters.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"DESC")),(0,o.kt)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"orderExpr1, ..., orderExprK")),(0,o.kt)("p",null,"A list of expressions that define the order in which object collections will be iterated over. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. If the list is undefined, iteration is performed in an arbitrary order."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"alias")),(0,o.kt)("p",null,"The name of the local parameter that will correspond to the object being created.\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"className")),(0,o.kt)("p",null,"The name of the class of the object to create. Defined by a\xa0",(0,o.kt)("a",{parentName:"p",href:"/platform/next/IDs#classid-broken"},"class ID"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"action")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"Context-dependent action operator")," describing the action being executed."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lsf"},"iterateDates (DATE dateFrom, DATE dateTo)  {\n    LOCAL dateCur = DATE();\n\n    dateCur() <- dateFrom;\n    WHILE dateCur() <= dateTo DO {\n        MESSAGE 'I have a date ' + dateCur();\n        dateCur() <- sum(dateCur(), 1);\n    }\n}\n")))}s.isMDXComponent=!0}}]);