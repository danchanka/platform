(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{486:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(747)),p={title:"NEW operator"},i={unversionedId:"NEW_operator",id:"version-v4/NEW_operator",isDocsHomePage:!1,title:"NEW operator",description:"The NEW operator creates an action that creates objects of the specified class.",source:"@site/versioned_docs/version-v4/NEW_operator.md",slug:"/NEW_operator",permalink:"/platform/NEW_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/NEW_operator.md",version:"v4",lastUpdatedAt:1619608937,formattedLastUpdatedAt:"4/28/2021",sidebar:"version-v4/learn",previous:{title:"MULTI operator",permalink:"/platform/MULTI_operator_action_"},next:{title:"NESTEDSESSION operator",permalink:"/platform/NESTEDSESSION_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"NEW")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/New_object_NEW_"},"creates objects")," of the specified ",Object(o.b)("a",{parentName:"p",href:"/platform/Classes"},"class"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NEW className [WHERE whereExpr] [TO propertyId(prm1, ..., prmN)]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"NEW")," operator creates an action which creates objects of the specified class and writes them as the returned values of certain ",Object(o.b)("a",{parentName:"p",href:"/platform/Properties"},"properties"),". This operator can add its local parameters when defining a condition in the ",Object(o.b)("inlineCode",{parentName:"p"},"WHERE")," block. These parameters correspond to the objects being iterated for which the object will be created and are not parameters of the created action. "),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"TO")," block is used to define the ",Object(o.b)("a",{parentName:"p",href:"/platform/Data_properties_DATA_"},"data property")," to which value the created object is written. "),Object(o.b)("p",null,"There is a special option with the same name (",Object(o.b)("inlineCode",{parentName:"p"},"NEW"),") in the ",Object(o.b)("a",{parentName:"p",href:"/platform/FOR_operator"},Object(o.b)("inlineCode",{parentName:"a"},"FOR")," operator")," for creating objects, and it is recommended to use it when possible."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"className")),Object(o.b)("p",{parentName:"li"},"  Name of the ",Object(o.b)("a",{parentName:"p",href:"/platform/User_classes"},"custom")," class for the created objects. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"whereExpr")),Object(o.b)("p",{parentName:"li"},"  An ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," which value is the condition of the created action. In this expression you can both access already declared parameters and declare new local parameters.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"propertyId")),Object(o.b)("p",{parentName:"li"},"  An ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#propertyid-broken"},"ID of the property")," to which value the created objects are written. If the property is not specified, then:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"if the condition is not defined, it is automatically set to  ",Object(o.b)("inlineCode",{parentName:"li"},"System.addedObject[]")),Object(o.b)("li",{parentName:"ul"},"if the condition is defined, the created objects are not written anywhere"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"prm1, ..., prmN")),Object(o.b)("p",{parentName:"li"},"  A list of data property parameter names. You can use only the local parameters that were added in the ",Object(o.b)("inlineCode",{parentName:"p"},"WHERE")," block. The number of parameters in the list must be equal to the number of parameters of the data property. "))),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"\nnewSku ()  {\n    LOCAL addedSkus = Sku (INTEGER);\n    NEW Sku WHERE iterate(i, 1, 3) TO addedSkus(i);\n    FOR Sku s = addedSkus(i) DO {\n        id(s) <- 425;\n        name(s) <- 'New Sku';\n    }\n}\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,u=b["".concat(p,".").concat(m)]||b[m]||d[m]||o;return r?n.a.createElement(u,i(i({ref:t},l),{},{components:r})):n.a.createElement(u,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);