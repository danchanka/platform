(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{243:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),l=(r(0),r(749)),b={title:"Structure operations (STRUCT, [])"},c={unversionedId:"Structure_operations_STRUCT_",id:"Structure_operations_STRUCT_",isDocsHomePage:!1,title:"Structure operations (STRUCT, \\[\\])",description:"The term structure is used in the platform to refer to the classes which objects consist of a collection of other objects in a fixed order. The platform supports two operators for working with structures:",source:"@site/docs/Structure_operations_STRUCT_.md",slug:"/Structure_operations_STRUCT_",permalink:"/platform/next/Structure_operations_STRUCT_",editUrl:"https://github.com/danchanka/platform/edit/master/docs/Structure_operations_STRUCT_.md",version:"current",sidebar:"learn",previous:{title:"String operators (+, CONCAT, SUBSTRING)",permalink:"/platform/next/String_operators_+_CONCAT_SUBSTRING_"},next:{title:"Type conversion",permalink:"/platform/next/Type_conversion"}},o=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:o};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The term ",Object(l.b)("em",{parentName:"p"},"structure")," is used in the platform to refer to the ",Object(l.b)("a",{parentName:"p",href:"/platform/next/Classes"},"classes")," which objects consist of a collection of other objects in a fixed order. The platform supports two operators for working with structures:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Operator",Object(l.b)("br",null)),Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Name",Object(l.b)("br",null)),Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Description",Object(l.b)("br",null)),Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Example",Object(l.b)("br",null)),Object(l.b)("br",null)),Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),Object(l.b)("div",null,Object(l.b)("br",null),"Result",Object(l.b)("br",null)),Object(l.b)("br",null)),Object(l.b)("br",null))))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"STRUCT"),Object(l.b)("td",{parentName:"tr",align:null},"Creation"),Object(l.b)("td",{parentName:"tr",align:null},"Creates a ",Object(l.b)("a",{parentName:"td",href:"/platform/next/Properties"},"property")," that takes a list of operands and returns a structure consisting of the objects passed"),Object(l.b)("td",{parentName:"tr",align:null},"STRUCT('a', 1)"),Object(l.b)("td",{parentName:"tr",align:null},"STRUCT('a', 1)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[ ]"),Object(l.b)("td",{parentName:"tr",align:null},"Access"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Creates a property that takes an operand with a fixed integer\xa0and returns an object of the structure specified in the first operand with a number equal to the specified integer")),Object(l.b)("td",{parentName:"tr",align:null},"STRUCT('a',1)","[2]"),Object(l.b)("td",{parentName:"tr",align:null},"1\xa0")))),Object(l.b)("p",null,"Structures support comparison operations which are executed sequentially for each object included in the structure.\xa0"),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"To better understand how this works, it\u2019s sufficient to say that physically a structure is just a concatenation of the objects included in this structure converted to bit strings"))),Object(l.b)("h3",{id:"language"},"Language"),Object(l.b)("p",null,"To create a property that creates a structure the ",Object(l.b)("a",{parentName:"p",href:"/platform/next/STRUCT_operator"},Object(l.b)("strong",{parentName:"a"},"STRUCT")," operator")," is used."),Object(l.b)("p",null,"To create a property that returns an object from the structure the ",Object(l.b)("a",{parentName:"p",href:"/platform/next/Operator_"},Object(l.b)("strong",{parentName:"a"},"["," ","]"),"\xa0operator")," is used."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"objectStruct(a, b) = STRUCT(a, f(b));\nstringStruct() = STRUCT(1, 'two', 3.0);\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Letter;\nattachment1 = DATA FILE (Letter);\nattachment2 = DATA FILE (Letter);\nletterAttachments (Letter l) = STRUCT(attachment1(l), attachment2(l));\nsecondAttachment(Letter l) = letterAttachments(l)[2]; // returns attachment2\n")))}u.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(r),O=n,j=p["".concat(b,".").concat(O)]||p[O]||s[O]||l;return r?a.a.createElement(j,c(c({ref:t},i),{},{components:r})):a.a.createElement(j,c({ref:t},i))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,b=new Array(l);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=r[i];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);