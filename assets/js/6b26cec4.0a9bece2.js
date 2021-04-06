(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{362:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),c=(r(0),r(746)),a={title:"SEEK operator"},i={unversionedId:"SEEK_operator",id:"SEEK_operator",isDocsHomePage:!1,title:"SEEK operator",description:"The SEEK operator creates an action that seeks specified objects on a form.",source:"@site/docs/SEEK_operator.md",slug:"/SEEK_operator",permalink:"/platform/next/SEEK_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/SEEK_operator.md",version:"current",sidebar:"learn",previous:{title:"RETURN",permalink:"/platform/next/RETURN"},next:{title:"SHOW operator",permalink:"/platform/next/SHOW_operator"}},b=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:b};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"SEEK")," operator creates an ",Object(c.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that ",Object(c.b)("a",{parentName:"p",href:"/platform/next/Search_SEEK_"},"seeks specified objects")," on a ",Object(c.b)("a",{parentName:"p",href:"/platform/next/Forms"},"form"),"."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"SEEK [FIRST | LAST] formObjectId = expr\nSEEK [FIRST | LAST] formGroupObjectId [OBJECTS formObject1 = expr1, ..., formObjectK = exprk]\nSEEK NULL formGroupObjectId\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"SEEK")," operator creates an action that changes the current objects on a form. There are two forms of this operator. In the first form the required value of a single object on a form is specified (this object may be a part of an object group), in the second form specific object group and the required values for certain objects of this group are specified (these objects shall be called ",Object(c.b)("em",{parentName:"p"},"seek objects"),")"),Object(c.b)("p",null,"If the seek object group contains objects other than seek objects, for these objects (which shall be called\xa0",Object(c.b)("em",{parentName:"p"},"additional"),") the object collection that will be selected as current is determined by the options\xa0",Object(c.b)("strong",{parentName:"p"},"FIRST"),"\xa0and\xa0",Object(c.b)("strong",{parentName:"p"},"LAST"),"."),Object(c.b)("p",null,"If the required object collection is not found for the search objects, the current object collection will be the closest to the required one. The direction in which this closest object collection will be selected is also determined by the options ",Object(c.b)("strong",{parentName:"p"},"FIRST")," and ",Object(c.b)("strong",{parentName:"p"},"LAST"),"."),Object(c.b)("p",null,"Also, in the second form of the operator (when a group of objects is specified) it is possible to reset all objects of the specified group to\xa0",Object(c.b)("strong",{parentName:"p"},"NULL"),". In this case, the seek direction is not applicable/not specified."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"FIRST")),Object(c.b)("p",null,"Keyword. If specified, the current set of objects for:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"additional objects will be the ",Object(c.b)("u",null,"first"),"\xa0matching collection, selected in accordance with the specified order.\xa0"),Object(c.b)("li",{parentName:"ul"},"main objects, if the required object collection is not found,\xa0will be the ",Object(c.b)("u",null,"next")," closest collection, selected in accordance with the specified order.\xa0")),Object(c.b)("p",null,"This is the default value.\xa0*  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"LAST")),Object(c.b)("p",null,"Keyword. If specified, the current set of objects for:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"additional objects will be the ",Object(c.b)("u",null,"last"),"matching collection, selected in accordance with the specified order.\xa0"),Object(c.b)("li",{parentName:"ul"},"main objects, if the required object collection is not found,\xa0will be the ",Object(c.b)("u",null,"previous"),"\xa0closest collection, selected in accordance with the specified order.\xa0")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"NULL")),Object(c.b)("p",null,"Keyword. If specified, the current values of the objects of the specified object group are set as equal to ",Object(c.b)("strong",{parentName:"p"},"NULL"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"formObjectId")),Object(c.b)("p",null,"Global\xa0",Object(c.b)("a",{parentName:"p",href:"/platform/next/IDs#groupobjectid-broken"},"form object ID")," for which the required value is specified."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"expr")),Object(c.b)("p",null,"An ",Object(c.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expression")," whose value is the required value of the form object."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"formGroupObjectId")),Object(c.b)("p",null,"A global\xa0",Object(c.b)("a",{parentName:"p",href:"/platform/next/IDs#groupobjectid-broken"},"ID for an object group")," for whose objects required values are specified."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"formObject1 ... \xa0formObjectK")),Object(c.b)("p",null,"List of form object names. May contain only a part of the objects of the specified object group. An object name is defined by a ",Object(c.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"simple ID"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"expr1 ... exprk")),Object(c.b)("p",null,"A list of expressions whose values are the required values of the corresponding objects in the specified group of objects."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"number = DATA INTEGER (Order);\nFORM orders\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY number, currency, customer\n;\nnewOrder  {\n    NEW new = Order {\n        number(new) <- (GROUP MAX number(Order o)) (+) 1;\n        SEEK orders.o = new;\n    }\n}\nseekFirst  { SEEK FIRST orders.o; }\nseekLast  { SEEK LAST orders.o; }\n\nEXTEND FORM orders\n    PROPERTIES(o) newOrder, seekFirst, seekLast\n;\n")))}p.isMDXComponent=!0},746:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,d=s["".concat(a,".").concat(f)]||s[f]||u[f]||c;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);