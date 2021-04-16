(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{501:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(747)),o={title:"EXTEND CLASS instruction"},c={unversionedId:"EXTEND_CLASS_instruction",id:"version-v4/EXTEND_CLASS_instruction",isDocsHomePage:!1,title:"EXTEND CLASS instruction",description:"The EXTEND CLASS instruction extends an existing class.",source:"@site/versioned_docs/version-v4/EXTEND_CLASS_instruction.md",slug:"/EXTEND_CLASS_instruction",permalink:"/platform/EXTEND_CLASS_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/EXTEND_CLASS_instruction.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"WINDOW instruction",permalink:"/platform/WINDOW_instruction"},next:{title:"EXTEND FORM instruction",permalink:"/platform/EXTEND_FORM_instruction"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"EXTEND CLASS")," instruction ",Object(i.b)("a",{parentName:"p",href:"/platform/Class_extension"},"extends")," an existing class."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"EXTEND CLASS name \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}] \n[: parent1, ..., parentN];\n")),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"EXTEND CLASS")," instruction extends an existing ",Object(i.b)("a",{parentName:"p",href:"/platform/User_classes"},"custom class")," with additional parent classes and new",Object(i.b)("a",{parentName:"p",href:"/platform/Static_objects"},"static objects"),". You can also extend ",Object(i.b)("a",{parentName:"p",href:"/platform/User_classes#abstract"},"abstract classes")," by adding parent classes to them."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"name ")),Object(i.b)("p",null,"Class name. A ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"Composite ID"),". "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"objectName1, ..., objectNameM")),Object(i.b)("p",null,"Names of new static objects of the specified class. Each name is defined ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"by a simple ID"),". Name values are stored in the ",Object(i.b)("strong",{parentName:"p"},"System.staticName")," system property."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),Object(i.b)("p",null,"Captions of new static objects of the specified class. Each caption is a ",Object(i.b)("a",{parentName:"p",href:"/platform/IDs#strliteral-broken"},"string literal"),". If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the ",Object(i.b)("strong",{parentName:"p"},"System.staticCaption")," system property."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"parent1, ..., parentN")),Object(i.b)("p",null,"A list of names of new parent classes. Each name is defined by a composite ID. "),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nCLASS Box : Shape;\n\nCLASS Quadrilateral;\nEXTEND CLASS Box : Quadrilateral; // Adding inheritance\n\nCLASS ShapeType {\n    point 'Dot',\n    segment 'Line segment'\n}\n\nEXTEND CLASS ShapeType { // Adding a static object\n    circle 'Circle'\n}\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);