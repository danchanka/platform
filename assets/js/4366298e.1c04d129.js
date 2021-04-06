(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{256:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(749)),c={title:"NEW operator"},p={unversionedId:"NEW_operator",id:"NEW_operator",isDocsHomePage:!1,title:"NEW operator",description:"The NEW operator creates an\xa0action that creates objects\xa0of the specified class.",source:"@site/docs/NEW_operator.md",slug:"/NEW_operator",permalink:"/platform/next/NEW_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/NEW_operator.md",version:"current",sidebar:"learn",previous:{title:"MULTI operator (action)",permalink:"/platform/next/MULTI_operator_action_"},next:{title:"NESTEDSESSION operator",permalink:"/platform/next/NESTEDSESSION_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NEW")," operator creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/next/New_object_NEW_"},"creates objects"),"\xa0of the specified ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Classes"},"class"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NEW className [WHERE whereExpr] [TO propertyId(prm1, ..., prmN)]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NEW")," operator creates an action which creates objects of the specified class and writes them as the returned values of certain ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Properties"},"properties"),".\xa0This operator\xa0can add its local\xa0parameters\xa0when defining a condition in the WHERE block. These parameters correspond to the objects being iterated for which the object will be created and are not parameters of the created action.\xa0"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"TO")," block is used to define the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Data_properties_DATA_"},"data property")," to which value the created object is written.\xa0"),Object(o.b)("p",null,"There is a special option with the same name (",Object(o.b)("strong",{parentName:"p"},"NEW"),") in the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/FOR_operator"},Object(o.b)("strong",{parentName:"a"},"FOR"),"\xa0operator")," for creating objects, and it is recommended to use it when possible."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"Name of the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/User_classes"},"custom"),"\xa0class for the created objects. ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expression")," which value is the condition of the created action.\xa0In this expression you can both access already declared parameters and declare new local parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#propertyid-broken"},"ID of the property")," to which value the created objects are written.\xa0If the property is not specified, then:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"if the condition is not defined, it is automatically set to\xa0 ",Object(o.b)("strong",{parentName:"li"},"System.addedObject","[","]")),Object(o.b)("li",{parentName:"ul"},"if the condition is defined, the created objects are not written anywhere")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"prm1, ..., prmN")),Object(o.b)("p",null,"A list of data property parameter names. You can use only the local parameters that were added in the\xa0",Object(o.b)("strong",{parentName:"p"},"WHERE")," block. The number of parameters in the list must be equal to the number of parameters of the data property.\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"\nnewSku ()  {\n    LOCAL addedSkus = Sku (INTEGER);\n    NEW Sku WHERE iterate(i, 1, 3) TO addedSkus(i);\n    FOR Sku s = addedSkus(i) DO {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n")))}l.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(r),d=a,u=b["".concat(c,".").concat(d)]||b[d]||m[d]||o;return r?n.a.createElement(u,p(p({ref:t},s),{},{components:r})):n.a.createElement(u,p({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);