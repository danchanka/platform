(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{646:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(747)),o={title:"CLASS instruction"},i={unversionedId:"CLASS_instruction",id:"version-v4/CLASS_instruction",isDocsHomePage:!1,title:"CLASS instruction",description:"CLASS instruction creates a new custom class.",source:"@site/versioned_docs/version-v4/CLASS_instruction.md",slug:"/CLASS_instruction",permalink:"/platform/CLASS_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/CLASS_instruction.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"Instruction=>",permalink:"/platform/Instruction=_"},next:{title:"FORM instruction",permalink:"/platform/FORM_instruction"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CLASS "),"instruction creates a new ",Object(c.b)("a",{parentName:"p",href:"/platform/User_classes"},"custom class"),"."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"CLASS ABSTRACT name [caption] [: parent1, ..., parentN];\n \nCLASS name [caption] \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}] \n[: parent1, ..., parentN];\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"CLASS")," instruction declares a new class and adds it to the current ",Object(c.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),". "),Object(c.b)("p",null,"The instruction has two forms:  ",Object(c.b)("strong",{parentName:"p"},"CLASS ABSTRACT")," for declaring an ",Object(c.b)("a",{parentName:"p",href:"/platform/User_classes#abstract"},"abstract class")," and just ",Object(c.b)("strong",{parentName:"p"},"CLASS")," for declaring a concrete class. In the latter case, during declaration, you can declare the ",Object(c.b)("a",{parentName:"p",href:"/platform/Static_objects"},"static objects"),"  of this class and specify their names and captions in a curly brackets block.   "),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name ")),Object(c.b)("p",null,"Class name. ",Object(c.b)("a",{parentName:"p",href:"/platform/IDs#id-broken"},"Simple ID"),". The name must be unique within the current ",Object(c.b)("a",{parentName:"p",href:"/platform/Naming#namespace"},"namespace"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"caption")),Object(c.b)("p",null,"Class header. ",Object(c.b)("a",{parentName:"p",href:"/platform/Literals#strliteral-broken"},"String literal"),". If the caption is not defined, the name of the class will be its caption.  "),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectName1, ..., objectNameM")),Object(c.b)("p",null,"The names of ",Object(c.b)("a",{parentName:"p",href:"/platform/Static_objects"},"static")," objects of this class. Each name is defined by a simple ID. Name values are stored in the ",Object(c.b)("strong",{parentName:"p"},"System.staticName")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),Object(c.b)("p",null,"Captions of static objects of this class. Each caption is a string literal. If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the ",Object(c.b)("strong",{parentName:"p"},"System.staticCaption")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"parent1, ..., parentN")),Object(c.b)("p",null,"List of parent class names. Each name is defined by a ",Object(c.b)("a",{parentName:"p",href:"/platform/IDs#cid-broken"},"composite ID"),". If the list of parent classes is not specified, the class is inherited from the ",Object(c.b)("strong",{parentName:"p"},"System.Object")," class.  "),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Document; // The caption of this class will be 'Document'\nCLASS IncomeDocument 'Income' : Document;\nCLASS OutcomeDocument 'Expenses' : Document;\n\nCLASS Person;\nCLASS Worker;\nCLASS Musician : Person, Worker; // multiple inheritance\n\nCLASS Barcode 'Barcode'; // The parent class of Barcode will be the System.Object class\n\nCLASS PrintOrientation {\n    portrait 'Portrait',\n    landscape 'Landscape'\n}\n")))}l.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,f=b["".concat(o,".").concat(u)]||b[u]||m[u]||c;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);