(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{342:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(747)),o={title:"GROUP instruction"},p={unversionedId:"GROUP_instruction",id:"version-v4/GROUP_instruction",isDocsHomePage:!1,title:"GROUP instruction",description:"The GROUP instruction creates a new property group.",source:"@site/versioned_docs/version-v4/GROUP_instruction.md",slug:"/GROUP_instruction",permalink:"/platform/GROUP_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/GROUP_instruction.md",version:"v4",lastUpdatedAt:1619001833,formattedLastUpdatedAt:"4/21/2021",sidebar:"version-v4/learn",previous:{title:"Action options",permalink:"/platform/Action_options"},next:{title:"ON instruction",permalink:"/platform/ON_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"GROUP")," instruction creates a new ",Object(i.b)("a",{parentName:"p",href:"/platform/Groups_of_properties_and_actions"},"property group"),"."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"GROUP name [caption] [EXTID extID] [: parentName];\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"GROUP")," instruction declares a new property group and adds it to the current ",Object(i.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),".  "),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"name")),Object(i.b)("p",{parentName:"li"},"  Group name. ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),". The name must be unique within the current ",Object(i.b)("a",{parentName:"p",href:"/platform/Naming#namespace"},"namespace"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"caption")),Object(i.b)("p",{parentName:"li"},"  Group caption. ",Object(i.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". If the caption is not defined, the name of the group will be its caption.  ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"EXTID extID")),Object(i.b)("p",{parentName:"li"},"  Specifying the name to be used to ",Object(i.b)("a",{parentName:"p",href:"/platform/Structured_view#extid"},"export/import")," this property group. Used only in the ",Object(i.b)("a",{parentName:"p",href:"/platform/Structured_view"},"structured")," view."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"extId")),Object(i.b)("p",{parentName:"li"},"  String literal.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"parentName")),Object(i.b)("p",{parentName:"li"},"  Name of the parent group. ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"\u0421omposite ID"),". If the name of the parent group is not defined, the ",Object(i.b)("inlineCode",{parentName:"p"},"System.private")," group becomes the parent.  "))),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"GROUP base : root; // The caption of this group will be 'base'\nGROUP local 'Local properties'; // The parent group of local will be System.private\n")))}b.isMDXComponent=!0},747:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(r),s=n,d=u["".concat(o,".").concat(s)]||u[s]||m[s]||i;return r?a.a.createElement(d,p(p({ref:t},l),{},{components:r})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);