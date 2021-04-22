(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{492:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(747)),o={title:"Primitive input (INPUT)"},p={unversionedId:"Primitive_input_INPUT_",id:"Primitive_input_INPUT_",isDocsHomePage:!1,title:"Primitive input (INPUT)",description:"The \xa0primitive input\xa0operator\xa0creates an action that requests the client to\xa0input a value of a builtin class. The user can cancel the input, for example by pressing the ESC key on the keyboard.",source:"@site/docs/Primitive_input_INPUT_.md",slug:"/Primitive_input_INPUT_",permalink:"/platform/next/Primitive_input_INPUT_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/Primitive_input_INPUT_.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"Value input",permalink:"/platform/next/Value_input"},next:{title:"Value request (REQUEST)",permalink:"/platform/next/Value_request_REQUEST_"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The \xa0",Object(i.b)("em",{parentName:"p"},"primitive input\xa0"),"operator\xa0creates an ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Actions"},"action")," that requests the client to\xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/Value_input"},"input a value")," ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"of a builtin class"),". The user can ",Object(i.b)("a",{parentName:"p",href:"/platform/next/Value_input#result"},"cancel the input"),", for example by pressing the ",Object(i.b)("strong",{parentName:"p"},"ESC")," key on the keyboard."),Object(i.b)("p",null,"As with other value input operators, this operator allows to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"specify\xa0",Object(i.b)("a",{parentName:"li",href:"/platform/next/Value_input#initial"},"initial object\xa0values")),Object(i.b)("li",{parentName:"ul"},"specify ",Object(i.b)("a",{parentName:"li",href:"/platform/next/Value_input#result"},"main\xa0and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/platform/next/Value_input#initial"},"change"),"\xa0a specified property")),Object(i.b)("p",null,"This operator can only be used in property \xa0",Object(i.b)("a",{parentName:"p",href:"/platform/next/Form_events#property-broken"},"change event"),"\xa0handlers on a form."),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"The syntax of the primitive input operator is described by ",Object(i.b)("a",{parentName:"p",href:"/platform/next/INPUT_operator"},"the ",Object(i.b)("strong",{parentName:"a"},"INPUT")," operator"),"."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"changeCustomer (Order o)  {\n    INPUT s = STRING[100] DO {\n        customer(o) <- s;\n        IF s THEN\n            MESSAGE 'Customer changed to ' + s;\n        ELSE\n            MESSAGE 'Customer dropped';\n    }\n}\n\nFORM order\n    OBJECTS o = Order\n    PROPERTIES(o) customer ON CHANGE changeCustomer(o)\n;\n\ntestFile  {\n    INPUT f = FILE DO { // requesting a dialog to select a file\n        open(f); // opening the selected file\n    }\n}\n")))}u.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||m[b]||i;return n?a.a.createElement(f,p(p({ref:t},c),{},{components:n})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);