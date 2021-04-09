(window.webpackJsonp=window.webpackJsonp||[]).push([[500],{570:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(746)),i={title:"How-to: Navigator"},c={unversionedId:"How-to_Navigator",id:"How-to_Navigator",isDocsHomePage:!1,title:"How-to: Navigator",description:"Example 1",source:"@site/docs/How-to_Navigator.md",slug:"/How-to_Navigator",permalink:"/platform/next/How-to_Navigator",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/How-to_Navigator.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",sidebar:"learn",previous:{title:"How-to: Data entry",permalink:"/platform/next/How-to_Data_entry"},next:{title:"How-to: Matrix",permalink:"/platform/next/How-to_Matrix"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],p={toc:l};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("h3",{id:"condition"},"Condition"),Object(o.b)("p",null,"We have the forms with a list of books and categories."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM categories 'Categories';\nFORM books 'Books';\n")),Object(o.b)("p",null,"We need to add them to the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Navigator"},"navigator")," to the new folder called ",Object(o.b)("strong",{parentName:"p"},"Application")," under the main toolbar."),Object(o.b)("h3",{id:"solution"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    NEW FOLDER application 'Application' WINDOW toolbar FIRST {\n        NEW categories;\n        NEW books;\n    }\n}\n")),Object(o.b)("p",null,"By specifying ",Object(o.b)("strong",{parentName:"p"},"WINDOW")," for the ",Object(o.b)("strong",{parentName:"p"},"application")," element, we indicated that all its child objects must be displayed in the system ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Navigator_design"},"window")," called ",Object(o.b)("strong",{parentName:"p"},"toolbar"),".\xa0This will look like this:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(899).default})),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("h3",{id:"condition-1"},"Condition"),Object(o.b)("p",null,"Similar to\xa0",Object(o.b)("strong",{parentName:"p"},"Example 1"),"."),Object(o.b)("p",null,"We need to place the same forms in the subfolder called Directories."),Object(o.b)("h3",{id:"solution-1"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    application {\n        NEW FOLDER masterData 'Directories' {\n            NEW categories;\n            NEW books;\n        }\n    }\n}\n")),Object(o.b)("p",null,"Result:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(900).default})))}s.isMDXComponent=!0},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},899:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367465-797e24949c7c66e314aadb659ac67a53.png"},900:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367468-ebc897605aa992807064b983c87ab7a1.png"}}]);