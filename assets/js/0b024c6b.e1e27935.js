(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{746:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(746)),i={title:"FOR operator"},c={unversionedId:"FOR_operator",id:"version-v4/FOR_operator",isDocsHomePage:!1,title:"FOR operator",description:"The FOR operator creates an action that implements loop.",source:"@site/versioned_docs/version-v4/FOR_operator.md",slug:"/FOR_operator",permalink:"/platform/FOR_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/FOR_operator.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"EXTERNAL operator",permalink:"/platform/EXTERNAL_operator"},next:{title:"IF ... THEN operator (action)",permalink:"/platform/IF_..._THEN_operator_action_"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FOR")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that implements ",Object(o.b)("a",{parentName:"p",href:"/platform/Loop_FOR_"},"loop"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FOR expression [ORDER [DESC] orderExpr1, ..., orderExprN]\n[NEW [alias =] className]\nDO action\n[ELSE alternativeAction]\n")),Object(o.b)("p",null,"It is possible to include a ",Object(o.b)("strong",{parentName:"p"},"NEW")," block in the operator but not to specify a condition (considered equal to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),"); in this case, the syntax is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NEW [alias =] className\naction\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FOR")," operator creates an action that implements loop. This operator must add its local parameters when defining a condition. These parameters correspond to the objects being iterated and are not parameters of the created action. You can also use a ",Object(o.b)("strong",{parentName:"p"},"NEW")," block to specify the name of the ",Object(o.b)("a",{parentName:"p",href:"/platform/Classes"},"class")," of the object that will be created for each object collection that meets the condition. The name of this object needs to be specified. This name will be used as the name of the local parameter that the created object will be written to."),Object(o.b)("p",null,"The object iteration order in the ",Object(o.b)("strong",{parentName:"p"},"FOR")," operator can be specified with an ",Object(o.b)("strong",{parentName:"p"},"ORDER")," block.\xa0If a new parameter is declared in the expressions that define the order (meaning that the parameter not met earlier in the ",Object(o.b)("strong",{parentName:"p"},"FOR")," option or in the upper context), the condition of all these expressions being non-\xa0",Object(o.b)("strong",{parentName:"p"},"NULL")," is automatically added."),Object(o.b)("p",null,"The main action is specified after the keyword ",Object(o.b)("strong",{parentName:"p"},"DO"),"; an alternative may be specified after the keyword ",Object(o.b)("strong",{parentName:"p"},"ELSE"),"."),Object(o.b)("p",null,"In the case when the operator contains a ",Object(o.b)("strong",{parentName:"p"},"NEW")," block, and no condition is specified, the main action will be called for the created object."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"Expression")," defining a condition. In this expression, you can both access already declared parameters and declare new local parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprK")),Object(o.b)("p",null,"A list of expressions that define the order in which object collections will be iterated over. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. If the list is undefined, iteration is performed in an arbitrary order."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alias")),Object(o.b)("p",null,"The name of the local parameter that will correspond to the object being created. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"The name of the class of the object to create. Defined by a ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#classid-broken"},"class ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"Context-dependent action operator")," describing the main action."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alternativeAction")),Object(o.b)("p",null,"Context-dependent action operator defining an alternative action. Parameters added when defining the condition/creating the object cannot be used as parameters of this action."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"name = DATA STRING[100] (Store);\n\ntestFor  {\n    LOCAL sum = INTEGER ();\n    FOR iterate(i, 1, 100) DO {\n        sum() <- sum() (+) i;\n    }\n\n    FOR in(Sku s) DO {\n        MESSAGE 'Sku ' + id(s) + ' was selected';\n    }\n\n    FOR Store st IS Store DO { // iterating over all objects of the Store class\n        FOR in(st, Sku s) DO { // iterating over all Sku for which in is set\n            MESSAGE 'There is Sku ' + id(s) + ' in store ' + name(st);\n        }\n\n    }\n}\n\nnewSku ()  {\n    NEW s = Sku {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n\ncopy (Sku old)  {\n    NEW new = Sku {\n        id(new) <- id(old);\n        name(new) <- name(old);\n    }\n}\n\ncreateDetails (Order o)  {\n    FOR in(Sku s) NEW d = OrderDetail DO {\n        order(d) <- o;\n        sku(d) <- s;\n    }\n}\n")))}l.isMDXComponent=!0}}]);