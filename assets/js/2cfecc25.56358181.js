(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{188:function(A,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return r})),t.d(e,"metadata",(function(){return o})),t.d(e,"toc",(function(){return E})),t.d(e,"default",(function(){return i}));var n=t(3),g=t(7),a=(t(0),t(747)),r={title:"How-to: Internationalization"},o={unversionedId:"How-to_Internationalization",id:"version-v4/How-to_Internationalization",isDocsHomePage:!1,title:"How-to: Internationalization",description:"The system supports  internationalization by passing to the client values localized according to the language chosen by the user. All values in braces are localized. Let's assume that we need to implement a simple form with a list of books and their prices that we can create/delete.",source:"@site/versioned_docs/version-v4/How-to_Internationalization.md",slug:"/How-to_Internationalization",permalink:"/platform/How-to_Internationalization",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Internationalization.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Physical model",permalink:"/platform/How-to_Physical_model"},next:{title:"Online demo",permalink:"/platform/Online_demo"}},E=[],l={toc:E};function i(A){var e=A.components,r=Object(g.a)(A,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The system supports  ",Object(a.b)("a",{parentName:"p",href:"/platform/Internationalization"},"internationalization")," by passing to the client values localized according to the language chosen by the user. All values in braces are localized. Let's assume that we need to implement a simple form with a list of books and their prices that we can create/delete."),Object(a.b)("p",null,"We will declare logic in the usual way, but instead of specifying names explicitly, we will be using IDs."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '{use.case.i18n.book}';\n\nname '{use.case.i18n.book.name}' = DATA STRING[40] (Book);\nprice '{use.case.i18n.book.price}' = DATA STRING[40] (Book);\n\nFORM books '{use.case.i18n.books}'\n    OBJECTS b = Book\n    PROPERTIES(b) name, price, NEW, DELETE\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(a.b)("p",null,"We will then create a new Resource Bundle and will save our Id values in different languages to it:"),Object(a.b)("p",null,Object(a.b)("img",{src:t(811).default})),Object(a.b)("p",null,"Let's call it ",Object(a.b)("strong",{parentName:"p"},"I18nResourceBundle")," (the system will only read files ending in ",Object(a.b)("strong",{parentName:"p"},"ResourceBundle"),") and choose the languages to be used:"),Object(a.b)("p",null,Object(a.b)("img",{src:t(812).default})),Object(a.b)("p",null,"After that, we define values for each Id in each of the selected languages:"),Object(a.b)("p",null,Object(a.b)("img",{src:t(813).default})),Object(a.b)("p",null,"Upon execution, all values, by default, will be shown in the server language (which, in turn, is defined by the Os language by default):"),Object(a.b)("p",null,Object(a.b)("img",{src:t(814).default})),Object(a.b)("p",null,"You can change the language and country settings for a particular user in their profile:"),Object(a.b)("p",null,Object(a.b)("img",{src:t(815).default})),Object(a.b)("p",null,"In this case, when the user logs in to the system again, everything will be shown in the selected language:"),Object(a.b)("p",null,Object(a.b)("img",{src:t(816).default})),Object(a.b)("p",null,"Ids can also be used in expressions:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"description '{use.case.i18n.book.description}' (Book b) = STRING[60] (name(b) + ', {use.case.i18n.book.price} : ' + price(b));\nEXTEND FORM books\n    PROPERTIES(b) READONLY description\n;\n")),Object(a.b)("p",null,"Remember that such expressions cannot be used in ",Object(a.b)("a",{parentName:"p",href:"/platform/Materializations"},"materializations"),". "),Object(a.b)("p",null,"The system cannot automatically localize user data. The developer is responsible for this."))}i.isMDXComponent=!0},747:function(A,e,t){"use strict";t.d(e,"a",(function(){return C})),t.d(e,"b",(function(){return Q}));var n=t(0),g=t.n(n);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function E(A,e){if(null==A)return{};var t,n,g=function(A,e){if(null==A)return{};var t,n,g={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(g[t]=A[t]);return g}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(g[t]=A[t])}return g}var l=g.a.createContext({}),i=function(A){var e=g.a.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},C=function(A){var e=i(A.components);return g.a.createElement(l.Provider,{value:e},A.children)},c={inlineCode:"code",wrapper:function(A){var e=A.children;return g.a.createElement(g.a.Fragment,{},e)}},I=g.a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,a=A.originalType,r=A.parentName,l=E(A,["components","mdxType","originalType","parentName"]),C=i(t),I=n,Q=C["".concat(r,".").concat(I)]||C[I]||c[I]||a;return t?g.a.createElement(Q,o(o({ref:e},l),{},{components:t})):g.a.createElement(Q,o({ref:e},l))}));function Q(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var a=t.length,r=new Array(a);r[0]=I;var o={};for(var E in e)hasOwnProperty.call(e,E)&&(o[E]=e[E]);o.originalType=A,o.mdxType="string"==typeof A?A:n,r[1]=o;for(var l=2;l<a;l++)r[l]=t[l];return g.a.createElement.apply(null,r)}return g.a.createElement.apply(null,t)}I.displayName="MDXCreateElement"},811:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/60555382-a53849e2f45ae9750383287406753c0a.png"},812:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/60555383-d37ec718c26fd39a64d7ff6f9684fb3c.png"},813:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/60555384-76b4f65caa8b86004af59da4d614a110.png"},814:function(A,e,t){"use strict";t.r(e),e.default="data:image/png;base64,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"},815:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/60555386-072144ea81c0cad8135bdbbe3ef25ce2.png"},816:function(A,e,t){"use strict";t.r(e),e.default="data:image/png;base64,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"}}]);