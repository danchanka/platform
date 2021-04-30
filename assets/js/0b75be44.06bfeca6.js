(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{745:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(745)),p={title:"INPUT operator"},i={unversionedId:"INPUT_operator",id:"INPUT_operator",isDocsHomePage:!1,title:"INPUT operator",description:"The\xa0INPUT\xa0operator creates an\xa0action that inputs a primitive.",source:"@site/docs/INPUT_operator.md",slug:"/INPUT_operator",permalink:"/platform/next/INPUT_operator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/INPUT_operator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"IMPORT operator",permalink:"/platform/next/IMPORT_operator"},next:{title:"MESSAGE operator",permalink:"/platform/next/MESSAGE_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"INPUT"),"\xa0operator creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Primitive_input_INPUT_"},"inputs a primitive"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"INPUT inputOptions \n[CHANGE [= changeExpr]]\n[DO actionOperator [ELSE elseActionOperator]]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"inputOptions")," - input options. Specified\xa0by one of the following syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[alias =] builtInClassName\n[alias] = expr\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"INPUT"),"\xa0operator creates an action which allows to request the value of one of the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"built-in classes")," from the user."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"builtInClassName")),Object(o.b)("p",null,"The name of one of the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"built-in classes"),".\xa0"),Object(o.b)("p",null,"expr"),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0\xa0An ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expression"),", which value determines the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Value_input#initial"},"initial value")," of the input."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alias")),Object(o.b)("p",null,"The name of the local parameter to which the input result is written.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGE")),Object(o.b)("p",null,"A keyword specifying that in addition to the value input the result needs to be written to the specified property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"changeExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Expression"},"expression")," that determines the property to which the input result is written.\xa0By default, the property specified as the initial input value is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. The input result parameter cannot be used as parameters."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"changeCustomer (Order o)  {\n    INPUT s = STRING[100] DO {\n        customer(o) <- s;\n        IF s THEN\n            MESSAGE 'Customer changed to ' + s;\n        ELSE\n            MESSAGE 'Customer dropped';\n    }\n}\n\nFORM order\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE changeCustomer(o)\n;\n\ntestFile  {\n    INPUT f = FILE DO { // requesting a dialog to select a file\n        open(f); // opening the selected file\n    }\n}\n")))}s.isMDXComponent=!0}}]);