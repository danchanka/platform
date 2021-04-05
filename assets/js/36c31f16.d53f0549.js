(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{205:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(7),r=(t(0),t(751)),i={title:"How-to: Metaprogramming"},c={unversionedId:"How-to_Metaprogramming",id:"How-to_Metaprogramming",isDocsHomePage:!1,title:"How-to: Metaprogramming",description:'You may often need to write "similar" code for certain cases. The META instruction exists for this purpose, and makes it possible to create a code template or metacode. It can contain parameters that will be replaced by certain values when this metacode is used. Such an approach is called metaprogramming.',source:"@site/docs/How-to_Metaprogramming.md",slug:"/How-to_Metaprogramming",permalink:"/platform/docs/next/How-to_Metaprogramming",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Metaprogramming.md",version:"current",sidebar:"docs",previous:{title:"How-to: Binding properties",permalink:"/platform/docs/next/How-to_Binding_properties"},next:{title:"How-to: Physical model",permalink:"/platform/docs/next/How-to_Physical_model"}},s=[],l={toc:s};function p(e){var n=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,'You may often need to write "similar" code for certain cases. The ',Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/META_instruction"},"META instruction")," exists for this purpose, and makes it possible to create a code template or ",Object(r.b)("em",{parentName:"p"},"metacode"),". It can contain parameters that will be replaced by certain values when this metacode is used. Such an approach is called ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/Metaprogramming"},"metaprogramming"),"."),Object(r.b)("p",null,"Let's create a simple directory as described in the article\xa0.",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/How-to_CRUD"},"How-to: CRUD"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[30] (Book) IN id;\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"FORM book 'Book' // form for displaying \"card' // form for displaying the book card\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Book OBJECT b\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(r.b)("p",null,"We can use this code to write the following metacode:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"META defineObject(class, id, shortId, caption, multiCaption)\n    CLASS class caption;\n    TABLE id(class);\n\n    name 'Name' = DATA ISTRING[100] (class);\n\n    FORM id caption\n        OBJECTS shortId = class PANEL\n        PROPERTIES(shortId) name\n\n        EDIT class OBJECT shortId\n    ;\n\n    FORM id##s multiCaption\n        OBJECTS shortId = class\n        PROPERTIES(shortId) READONLY name\n        PROPERTIES(shortId) NEWSESSION NEW, EDIT, DELETE\n\n        LIST class OBJECT shortId\n    ;\n\n    NAVIGATOR {\n        NEW id##s;\n    }\nEND\n\nMETA defineObject(id, shortId, caption, multiCaption)\n    @defineObject(###id, id, shortId, caption, multiCaption-broken);\nEND\n")),Object(r.b)("p",null,"Note that one code segment can programmatically call another one."),Object(r.b)("p",null,"This is how metacode is used:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"META defineObject(class, id, shortId, caption, multiCaption)\n    CLASS class caption;\n    TABLE id(class);\n\n    name 'Name' = DATA ISTRING[100] (class);\n\n    FORM id caption\n        OBJECTS shortId = class PANEL\n        PROPERTIES(shortId) name\n\n        EDIT class OBJECT shortId\n    ;\n\n    FORM id##s multiCaption\n        OBJECTS shortId = class\n        PROPERTIES(shortId) READONLY name\n        PROPERTIES(shortId) NEWSESSION NEW, EDIT, DELETE\n\n        LIST class OBJECT shortId\n    ;\n\n    NAVIGATOR {\n        NEW id##s;\n    }\nEND\n\nMETA defineObject(id, shortId, caption, multiCaption)\n    @defineObject(###id, id, shortId, caption, multiCaption-broken);\nEND\n")),Object(r.b)("p",null,"In the first case, when the system starts generating the result code, it will replace all ",Object(r.b)("strong",{parentName:"p"},"id")," lexemes with ",Object(r.b)("em",{parentName:"p"},"book"),", ",Object(r.b)("strong",{parentName:"p"},"shortId")," with ",Object(r.b)("em",{parentName:"p"},"b"),", ",Object(r.b)("strong",{parentName:"p"},"caption")," with ",Object(r.b)("em",{parentName:"p"},"'Book'"),", and ",Object(r.b)("strong",{parentName:"p"},"multiCaption")," with ",Object(r.b)("em",{parentName:"p"},"'Books'"),". When using ","#","#"," concatenation, these replacements will leave everything unchanged. If ","#","#","#"," concatenation is used, the first letter of the value will be capitalized. The generated code will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nTABLE book(Book);\n\nname 'Name' = DATA ISTRING[100] (Book);\n\nFORM book 'Book'\n    OBJECTS b = Book PANEL\n    PROPERTIES(b) name\n\n    EDIT Book OBJECT b\n;\n\nFORM books 'Books'\n    OBJECTS b = Book\n    PROPERTIES(b) READONLY name\n    PROPERTIES(b) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Book OBJECT b\n;\n\nNAVIGATOR {\n    NEW books;\n}\n\nCLASS Magazine 'Magazine';\nTABLE magazine(Magazine);\n\nname 'Name' = DATA ISTRING[100] (Magazine);\n\nFORM magazine 'Magazine'\n    OBJECTS m = Magazine PANEL\n    PROPERTIES(m) name\n\n    EDIT Magazine OBJECT m\n;\n\nFORM magazines 'Magazines'\n    OBJECTS m = Magazine\n    PROPERTIES(m) READONLY name\n    PROPERTIES(m) NEWSESSION NEW, EDIT, DELETE\n\n    LIST Magazine OBJECT m\n;\n\nNAVIGATOR {\n    NEW magazines;\n}\n")),Object(r.b)("p",null,'In order for the IDE to "see" the code generated by metacodes, you need to enabled the corresponding mode in the menu.'),Object(r.b)("p",null,Object(r.b)("img",{src:t(819).default})),Object(r.b)("p",null,"When the metacode support mode is enabled, the generated code will be automatically substituted in the source code if metacode is used."),Object(r.b)("p",null,Object(r.b)("img",{src:t(820).default})),Object(r.b)("p",null,"Any modifications of the code will be impossible, since they will be automatically overwritten by the IDE. However, it is recommended to disable this mode when committing code to your version control system to avoid creating redundant change history entries."),Object(r.b)("p",null,"Objects created using metacode can subsequently be extended using standard ",Object(r.b)("a",{parentName:"p",href:"/platform/docs/next/How-to_Extensions"},"mechanisms"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"genre 'Genre' = DATA ISTRING[20] (Book);\nEXTEND FORM book PROPERTIES(b) genre;\nEXTEND FORM books PROPERTIES(b) genre;\n")))}p.isMDXComponent=!0},751:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,u=m["".concat(i,".").concat(b)]||m[b]||d[b]||r;return t?o.a.createElement(u,c(c({ref:n},l),{},{components:t})):o.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},819:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/46367760-b3aa414b76e300a02263fb015ce78aa0.png"},820:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/46367761-e565f6f9b0256e990ac2c3d17aeafd17.png"}}]);