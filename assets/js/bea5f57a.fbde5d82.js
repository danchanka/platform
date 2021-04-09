(window.webpackJsonp=window.webpackJsonp||[]).push([[516],{586:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(746)),c={title:"Metaprogramming"},i={unversionedId:"Metaprogramming",id:"version-v4/Metaprogramming",isDocsHomePage:!1,title:"Metaprogramming",description:"Metaprogramming is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development.",source:"@site/versioned_docs/version-v4/Metaprogramming.md",slug:"/Metaprogramming",permalink:"/platform/Metaprogramming",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Metaprogramming.md",version:"v4",lastUpdatedBy:"nomojenkins",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Form extension",permalink:"/platform/Form_extension"},next:{title:"Integration",permalink:"/platform/Integration"}},s=[{value:"Metacode",id:"metacode",children:[]},{value:"Lexeme concatenation",id:"concat",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Metaprogramming")," is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development. \xa0"),Object(o.b)("h3",{id:"metacode"},"Metacode"),Object(o.b)("p",null,"In l",Object(o.b)("strong",{parentName:"p"},"sFusion\xa0"),"the metaprogramming tool used is ",Object(o.b)("em",{parentName:"p"},"metacode"),", which is\xa0described by the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/META_instruction"},Object(o.b)("strong",{parentName:"a"},"META")," instruction"),".\xa0Metacode consists of a header and an ",Object(o.b)("strong",{parentName:"p"},"lsFusion")," code block describing the\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/Instructions"},"instruction")," sequence.**\xa0",Object(o.b)("strong",{parentName:"p"},"This code block must end with the keyword "),"END**.\xa0Let us consider an example of metacode that allows you to add two ",Object(o.b)("a",{parentName:"p",href:"/platform/Actions"},"actions")," to an arbitrary ",Object(o.b)("a",{parentName:"p",href:"/platform/Forms"},"form"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"META addActions(formName)\n    EXTEND FORM formName\n        PROPERTIES() showMessage, closeForm\n    ;\nEND\n")),Object(o.b)("p",null,"The first line of the example contains the metacode header. It consists of the keyword ",Object(o.b)("strong",{parentName:"p"},"META"),", metacode name, and parameter list. In this example, the metacode ",Object(o.b)("strong",{parentName:"p"},"addActions")," has one parameter: ",Object(o.b)("strong",{parentName:"p"},"formName"),". This is the name of the form to which the actions will be added. Let's consider the possible uses for this metacode, which are described by the ",Object(o.b)("a",{parentName:"p",href:"/platform/Instruction_"},"instruction @"),".\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"@addActions(documentForm);\n@addActions(orderForm);\n")),Object(o.b)("p",null,"The instruction to use metacode starts with the special symbol @, followed by the name of the metacode and the parameters passed. When generating the code, each metacode parameter is replaced by the value passed as a parameter of the @ instruction in all places where the metacode parameter is used. In this example, the metacode parameter\xa0",Object(o.b)("strong",{parentName:"p"},"formName")," will be replaced with ",Object(o.b)("strong",{parentName:"p"},"documentForm")," and ",Object(o.b)("strong",{parentName:"p"},"orderForm"),". The above metacode uses generate the following code block:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"EXTEND FORM documentForm\n    PROPERTIES() showMessage, closeForm\n;\n\nEXTEND FORM orderForm\n    PROPERTIES() showMessage, closeForm\n;\n")),Object(o.b)("h3",{id:"concat"},"Lexeme concatenation"),Object(o.b)("p",null,"Simply substituting an ID for a metacode parameter is often not enough. For example, when creating a large number of new ",Object(o.b)("a",{parentName:"p",href:"/platform/Element_identification"},"system elements"),"\xa0inside the metacode, you must be able to specify these new names. Passing all the names as metacode parameters can be inconvenient. For this reason the metacode contains the special operation ","#","#",", which operates at the ",Object(o.b)("a",{parentName:"p",href:"/platform/Tokens"},"tokens")," level. This operation can concatenate two adjacent lexemes into one. If one of the concatenated lexemes is a ",Object(o.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"string literal"),", the concatenation will result in a single string literal."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, caption)\n    object##Name 'Name '##caption = DATA BPSTRING[100](object);\n    object##Type 'Type '##caption = DATA Type (object);\n    object##Value 'Cost '##caption = DATA INTEGER (object);\nEND\n\n@objectProperties(Document, 'of the document');\n")),Object(o.b)("p",null,"Using the metacode ",Object(o.b)("strong",{parentName:"p"},"objectProperties")," produces the following code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"DocumentName 'Document name' = DATA BPSTRING[100](Document);\nDocumentType 'Document type' = DATA Type (Document);\nDocumentValue 'Document cost' = DATA INTEGER (Document);\n")),Object(o.b)("p",null,"There is also the special operation ","#","#","#",". It is equivalent to operation ","#","#",", except that in the second of the concatenated literals, the first character, if a letter, is converted to uppercase."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, type, caption)\n    object##Name 'Name'##caption = DATA BPSTRING[100](###object-broken); // capitalizing the first letter\n    object##Type 'Type'##caption = DATA type (###object-broken);\n    object##Value 'Cost'##caption = DATA INTEGER (###object-broken);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n")))}m.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),m=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(n),d=a,u=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return n?r.a.createElement(u,i(i({ref:t},p),{},{components:n})):r.a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);