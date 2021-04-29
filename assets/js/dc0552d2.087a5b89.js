(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{636:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(747)),i={title:"How-to: Navigator"},l={unversionedId:"How-to_Navigator",id:"version-v4/How-to_Navigator",isDocsHomePage:!1,title:"How-to: Navigator",description:"Example 1",source:"@site/versioned_docs/version-v4/How-to_Navigator.md",slug:"/How-to_Navigator",permalink:"/platform/How-to_Navigator",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Navigator.md",version:"v4",lastUpdatedAt:1619709222,formattedLastUpdatedAt:"4/29/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Data entry",permalink:"/platform/How-to_Data_entry"},next:{title:"How-to: Matrix",permalink:"/platform/How-to_Matrix"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],p={toc:c};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("h3",{id:"task"},"Task"),Object(o.b)("p",null,"We have the forms with a list of books and categories."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"FORM categories 'Categories';\nFORM books 'Books';\n")),Object(o.b)("p",null,"We need to add them to the ",Object(o.b)("a",{parentName:"p",href:"/platform/Navigator"},"navigator")," to the new folder called ",Object(o.b)("inlineCode",{parentName:"p"},"'Application'")," under the main toolbar."),Object(o.b)("h3",{id:"solution"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    NEW FOLDER application 'Application' WINDOW toolbar FIRST {\n        NEW categories;\n        NEW books;\n    }\n}\n")),Object(o.b)("p",null,"By specifying ",Object(o.b)("inlineCode",{parentName:"p"},"WINDOW")," for the ",Object(o.b)("inlineCode",{parentName:"p"},"application")," element, we indicated that all its child objects must be displayed in the system ",Object(o.b)("a",{parentName:"p",href:"/platform/Navigator_design"},"window")," called ",Object(o.b)("inlineCode",{parentName:"p"},"toolbar"),". This will look like this:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(908).default})),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("h3",{id:"task-1"},"Task"),Object(o.b)("p",null,"Similar to ",Object(o.b)("a",{parentName:"p",href:"#example-1"},Object(o.b)("strong",{parentName:"a"},"Example 1")),"."),Object(o.b)("p",null,"We need to place the same forms in the subfolder called ",Object(o.b)("inlineCode",{parentName:"p"},"'Directories'"),"."),Object(o.b)("h3",{id:"solution-1"},"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"NAVIGATOR {\n    application {\n        NEW FOLDER masterData 'Directories' {\n            NEW categories;\n            NEW books;\n        }\n    }\n}\n")),Object(o.b)("p",null,"Result:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(909).default})))}s.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},908:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367465-797e24949c7c66e314aadb659ac67a53.png"},909:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/46367468-ebc897605aa992807064b983c87ab7a1.png"}}]);