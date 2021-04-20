(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{637:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(747)),i={title:"How-to: Navigator"},c={unversionedId:"How-to_Navigator",id:"version-v4/How-to_Navigator",isDocsHomePage:!1,title:"How-to: Navigator",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Navigator.md",slug:"/How-to_Navigator",permalink:"/platform/How-to_Navigator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Navigator.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Data entry",permalink:"/platform/How-to_Data_entry"},next:{title:"How-to: Matrix",permalink:"/platform/How-to_Matrix"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],p={toc:l};function s(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have the forms with a list of books and categories."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"FORM categories 'Categories';\nFORM books 'Books';\n")),Object(a.b)("p",null,"We need to add them to the ",Object(a.b)("a",{parentName:"p",href:"/platform/Navigator"},"navigator")," to the new folder called ",Object(a.b)("strong",{parentName:"p"},"Application")," under the main toolbar."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    NEW FOLDER application 'Application' WINDOW toolbar FIRST {\n        NEW categories;\n        NEW books;\n    }\n}\n")),Object(a.b)("p",null,"By specifying ",Object(a.b)("strong",{parentName:"p"},"WINDOW")," for the ",Object(a.b)("strong",{parentName:"p"},"application")," element, we indicated that all its child objects must be displayed in the system ",Object(a.b)("a",{parentName:"p",href:"/platform/Navigator_design"},"window")," called ",Object(a.b)("strong",{parentName:"p"},"toolbar"),". This will look like this:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(908).default})),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to place the same forms in the subfolder called Directories."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    application {\n        NEW FOLDER masterData 'Directories' {\n            NEW categories;\n            NEW books;\n        }\n    }\n}\n")),Object(a.b)("p",null,"Result:"),Object(a.b)("p",null,Object(a.b)("img",{src:n(909).default})))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},908:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367465-797e24949c7c66e314aadb659ac67a53.png"},909:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367468-ebc897605aa992807064b983c87ab7a1.png"}}]);