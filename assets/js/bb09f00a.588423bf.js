(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{577:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(751)),i={title:"How-to: Navigator"},c={unversionedId:"How-to_Navigator",id:"How-to_Navigator",isDocsHomePage:!1,title:"How-to: Navigator",description:"Example 1",source:"@site/docs/How-to_Navigator.md",slug:"/How-to_Navigator",permalink:"/platform/docs/next/How-to_Navigator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Navigator.md",version:"current",sidebar:"docs",previous:{title:"How-to: Data entry",permalink:"/platform/docs/next/How-to_Data_entry"},next:{title:"How-to: Matrix",permalink:"/platform/docs/next/How-to_Matrix"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],p={toc:l};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have the forms with a list of books and categories."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM categories 'Categories';\nFORM books 'Books';\n")),Object(a.b)("p",null,"We need to add them to the ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Navigator"},"navigator")," to the new folder called ",Object(a.b)("strong",{parentName:"p"},"Application")," under the main toolbar."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    NEW FOLDER application 'Application' WINDOW toolbar FIRST {\n        NEW categories;\n        NEW books;\n    }\n}\n")),Object(a.b)("p",null,"By specifying ",Object(a.b)("strong",{parentName:"p"},"WINDOW")," for the ",Object(a.b)("strong",{parentName:"p"},"application")," element, we indicated that all its child objects must be displayed in the system ",Object(a.b)("a",{parentName:"p",href:"/platform/docs/next/Navigator_design"},"window")," called ",Object(a.b)("strong",{parentName:"p"},"toolbar"),".\xa0This will look like this:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(894).default})),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to place the same forms in the subfolder called Directories."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    application {\n        NEW FOLDER masterData 'Directories' {\n            NEW categories;\n            NEW books;\n        }\n    }\n}\n")),Object(a.b)("p",null,"Result:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(895).default})))}s.isMDXComponent=!0},751:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},894:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367465-797e24949c7c66e314aadb659ac67a53.png"},895:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367468-ebc897605aa992807064b983c87ab7a1.png"}}]);