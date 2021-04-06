(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{749:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,f=b["".concat(p,".").concat(m)]||b[m]||s[m]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(749)),p={title:"GROUP instruction"},i={unversionedId:"GROUP_instruction",id:"GROUP_instruction",isDocsHomePage:!1,title:"GROUP instruction",description:"The\xa0GROUP\xa0instruction creates a new property group.",source:"@site/docs/GROUP_instruction.md",slug:"/GROUP_instruction",permalink:"/platform/next/GROUP_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/GROUP_instruction.md",version:"current",sidebar:"learn",previous:{title:"Action options",permalink:"/platform/next/Action_options"},next:{title:"ON instruction: Overview",permalink:"/platform/next/ON_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"GROUP"),"\xa0instruction creates a new ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Groups_of_properties_and_actions"},"property group"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GROUP name [caption] [EXTID extID] [: parentName];\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The \xa0",Object(o.b)("strong",{parentName:"p"},"GROUP\xa0"),"instruction declares a new property group and adds it to the current\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Modules"},"module"),". \xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name\xa0")),Object(o.b)("p",null,"Group name.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Naming#namespace"},"namespace"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Group caption.\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Literals#strliteral-broken"},"String literal"),". If the caption is not defined, the name of the group will be its caption. \xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"EXTID extID")),Object(o.b)("p",null,"Specifying the name to be used\xa0to\xa0",Object(o.b)("a",{parentName:"p",href:"/platform/next/Structured_view#extid"},"export/import"),"\xa0this property group. Used only\xa0in\xa0the ",Object(o.b)("a",{parentName:"p",href:"/platform/next/Structured_view"},"structured"),"\xa0view."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"extId")),Object(o.b)("p",null,"String\xa0literal."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"parentName")),Object(o.b)("p",null,"Name of the parent group. ",Object(o.b)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"\u0421omposite ID"),".\xa0If the name of the parent group is not defined, the ",Object(o.b)("strong",{parentName:"p"},"System.private")," group becomes the parent. \xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"GROUP base : root; // The caption of this group will be 'base'\nGROUP local 'Local properties'; // The parent group of local will be System.private\n")))}u.isMDXComponent=!0}}]);