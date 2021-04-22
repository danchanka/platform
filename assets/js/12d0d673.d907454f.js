(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(747)),p={title:"INPUT operator"},i={unversionedId:"INPUT_operator",id:"version-v4/INPUT_operator",isDocsHomePage:!1,title:"INPUT operator",description:"The INPUT operator creates an action that inputs a primitive.",source:"@site/versioned_docs/version-v4/INPUT_operator.md",slug:"/INPUT_operator",permalink:"/platform/INPUT_operator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/INPUT_operator.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"IMPORT operator",permalink:"/platform/IMPORT_operator"},next:{title:"MESSAGE operator",permalink:"/platform/MESSAGE_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"INPUT")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/Primitive_input_INPUT_"},"inputs a primitive"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"INPUT inputOptions \n[CHANGE [= changeExpr]]\n[DO actionOperator [ELSE elseActionOperator]]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"inputOptions")," - input options. Specified by one of the following syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[alias =] builtInClassName\n[alias] = expr\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"INPUT")," operator creates an action which allows to request the value of one of the ",Object(o.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"built-in classes")," from the user."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"builtInClassName")),Object(o.b)("p",null,"The name of one of the ",Object(o.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"built-in classes"),". "),Object(o.b)("p",null,"expr"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"    An [expression](/platform/Expression), which value determines the [initial value](/platform/Value_input#initial) of the input.\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alias")),Object(o.b)("p",null,"The name of the local parameter to which the input result is written. ",Object(o.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGE")),Object(o.b)("p",null,"A keyword specifying that in addition to the value input the result needs to be written to the specified property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"changeExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/Expression"},"expression")," that determines the property to which the input result is written. By default, the property specified as the initial input value is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. The input result parameter cannot be used as parameters."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"changeCustomer (Order o)  {\n    INPUT s = STRING[100] DO {\n        customer(o) <- s;\n        IF s THEN\n            MESSAGE 'Customer changed to ' + s;\n        ELSE\n            MESSAGE 'Customer dropped';\n    }\n}\n\nFORM order\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE changeCustomer(o)\n;\n\ntestFile  {\n    INPUT f = FILE DO { // requesting a dialog to select a file\n        open(f); // opening the selected file\n    }\n}\n")))}s.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);