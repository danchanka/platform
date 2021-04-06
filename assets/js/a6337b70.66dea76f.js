(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{518:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(749)),c={title:"META instruction"},i={unversionedId:"META_instruction",id:"META_instruction",isDocsHomePage:!1,title:"META instruction",description:"The META instruction creates a new\xa0metacode.",source:"@site/docs/META_instruction.md",slug:"/META_instruction",permalink:"/platform/next/META_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/META_instruction.md",version:"current",sidebar:"learn",previous:{title:"ACTION+ instruction",permalink:"/platform/next/ACTION+_instruction"},next:{title:"Instruction@",permalink:"/platform/next/Instruction_"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"META")," instruction creates a new\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Metaprogramming#metacode"},"metacode"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"META name(param1, ..., paramN)\n    statement1\n    ...\n    statementM\nEND\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"META")," instruction declares a new metacode and adds it to the current ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Modules"},"module"),".\xa0"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"META")," instruction is an exception - it is not supposed to end with a colon. \xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Metacode name. ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs"},"Simple ID"),". Must be unique within the current namespace among metacodes with the same number of parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of metacode parameters. Each parameter is defined by a simple ID. The list cannot be empty."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"statement1 ... statementM")),Object(o.b)("p",null,"A sequence of \xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Instructions"},"instructions")," represented by a block of code. Instructions may contain ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Metaprogramming#concat"},"special operations ","#","#"," and ","#","#","#")," used for concatenating ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Tokens"},"lexemes"),". Instructions cannot include another ",Object(o.b)("strong",{parentName:"p"},"META")," instruction."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, type, caption)\n    object##Name 'Name'##caption = DATA BPSTRING[100](###object-broken); // capitalizing the first letter\n    object##Type 'Type'##caption = DATA type (###object-broken);\n    object##Value 'Cost'##caption = DATA INTEGER (###object-broken);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n")))}l.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);