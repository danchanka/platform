(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[24210],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69505:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"EXTEND CLASS instruction"},s={unversionedId:"EXTEND_CLASS_instruction",id:"EXTEND_CLASS_instruction",isDocsHomePage:!1,title:"EXTEND CLASS instruction",description:"The EXTEND\xa0CLASS instruction extends\xa0an existing class.",source:"@site/docs/EXTEND_CLASS_instruction.md",sourceDirName:".",slug:"/EXTEND_CLASS_instruction",permalink:"/platform/next/EXTEND_CLASS_instruction",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/EXTEND_CLASS_instruction.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"EXTEND CLASS instruction"},sidebar:"learn",previous:{title:"WINDOW instruction",permalink:"/platform/next/WINDOW_instruction"},next:{title:"EXTEND FORM instruction",permalink:"/platform/next/EXTEND_FORM_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"EXTEND\xa0CLASS")," instruction ",(0,i.kt)("a",{parentName:"p",href:"/platform/next/Class_extension"},"extends"),"\xa0an existing class."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"EXTEND CLASS name \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}]\xa0\n[: parent1, ..., parentN];\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"EXTEND\xa0CLASS")," instruction extends an existing ",(0,i.kt)("a",{parentName:"p",href:"/platform/next/User_classes"},"custom class"),"\xa0with additional parent classes and new",(0,i.kt)("a",{parentName:"p",href:"/platform/next/Static_objects"},"static objects"),". You can also extend ",(0,i.kt)("a",{parentName:"p",href:"/platform/next/User_classes#abstract"},"abstract classes")," by adding parent classes to them."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"name\xa0")),(0,i.kt)("p",null,"Class name.\xa0A ",(0,i.kt)("a",{parentName:"p",href:"/platform/next/IDs#cid-broken"},"Composite ID"),".\xa0"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"objectName1, ..., objectNameM")),(0,i.kt)("p",null,"Names of new static objects of the specified class. Each name is defined ",(0,i.kt)("a",{parentName:"p",href:"/platform/next/IDs#id-broken"},"by a simple ID"),". Name values are stored in the ",(0,i.kt)("strong",{parentName:"p"},"System.staticName")," system property."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),(0,i.kt)("p",null,"Captions of new static objects of the specified class. Each caption is a ",(0,i.kt)("a",{parentName:"p",href:"/platform/next/IDs#strliteral-broken"},"string literal"),". If the caption is not defined, the name of the static object will be its caption. Caption values are stored\xa0in the ",(0,i.kt)("strong",{parentName:"p"},"System.staticCaption")," system property."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"parent1, ..., parentN")),(0,i.kt)("p",null,"A list of names of new parent classes. Each name is defined\xa0by a composite ID.\xa0"),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nCLASS Box : Shape;\n\nCLASS Quadrilateral;\nEXTEND CLASS Box : Quadrilateral; // Adding inheritance\n\nCLASS ShapeType {\n    point 'Dot',\n    segment 'Line segment'\n}\n\nEXTEND CLASS ShapeType { // Adding a static object\n    circle 'Circle'\n}\n")))}l.isMDXComponent=!0}}]);