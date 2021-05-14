(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[74496],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33976:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"CLASS instruction"},s={unversionedId:"CLASS_instruction",id:"version-v4/CLASS_instruction",isDocsHomePage:!1,title:"CLASS instruction",description:"CLASS instruction creates a new custom class.",source:"@site/versioned_docs/version-v4/CLASS_instruction.md",sourceDirName:".",slug:"/CLASS_instruction",permalink:"/CLASS_instruction",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/CLASS_instruction.md",version:"v4",lastUpdatedAt:1619092847,formattedLastUpdatedAt:"4/22/2021",frontMatter:{title:"CLASS instruction"},sidebar:"version-v4/learn",previous:{title:"Instruction =>",permalink:"/Instruction=_"},next:{title:"FORM instruction",permalink:"/FORM_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CLASS")," instruction creates a new ",(0,i.kt)("a",{parentName:"p",href:"/User_classes"},"custom class"),"."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CLASS ABSTRACT name [caption] [: parent1, ..., parentN];\n \nCLASS name [caption] \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}] \n[: parent1, ..., parentN];\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CLASS")," instruction declares a new class and adds it to the current ",(0,i.kt)("a",{parentName:"p",href:"/Modules"},"module"),". "),(0,i.kt)("p",null,"The instruction has two forms:  ",(0,i.kt)("inlineCode",{parentName:"p"},"CLASS ABSTRACT")," for declaring an ",(0,i.kt)("a",{parentName:"p",href:"/User_classes#abstract"},"abstract class")," and just ",(0,i.kt)("inlineCode",{parentName:"p"},"CLASS")," for declaring a concrete class. In the latter case, during declaration, you can declare the ",(0,i.kt)("a",{parentName:"p",href:"/Static_objects"},"static objects"),"  of this class and specify their names and captions in a curly brackets block.   "),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("p",{parentName:"li"},"  Class name. ",(0,i.kt)("a",{parentName:"p",href:"/IDs#id-broken"},"Simple ID"),". The name must be unique within the current ",(0,i.kt)("a",{parentName:"p",href:"/Naming#namespace"},"namespace"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"caption")),(0,i.kt)("p",{parentName:"li"},"  Class header. ",(0,i.kt)("a",{parentName:"p",href:"/Literals#strliteral-broken"},"String literal"),". If the caption is not defined, the name of the class will be its caption.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objectName1, ..., objectNameM")),(0,i.kt)("p",{parentName:"li"},"  The names of ",(0,i.kt)("a",{parentName:"p",href:"/Static_objects"},"static")," objects of this class. Each name is defined by a simple ID. Name values are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.staticName")," system property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),(0,i.kt)("p",{parentName:"li"},"  Captions of static objects of this class. Each caption is a string literal. If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.staticCaption")," system property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parent1, ..., parentN")),(0,i.kt)("p",{parentName:"li"},"  List of parent class names. Each name is defined by a ",(0,i.kt)("a",{parentName:"p",href:"/IDs#cid-broken"},"composite ID"),". If the list of parent classes is not specified, the class is inherited from the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Object")," class.  "))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Document; // The caption of this class will be 'Document'\nCLASS IncomeDocument 'Income' : Document;\nCLASS OutcomeDocument 'Expenses' : Document;\n\nCLASS Person;\nCLASS Worker;\nCLASS Musician : Person, Worker; // multiple inheritance\n\nCLASS Barcode 'Barcode'; // The parent class of Barcode will be the System.Object class\n\nCLASS PrintOrientation {\n    portrait 'Portrait',\n    landscape 'Landscape'\n}\n")))}l.isMDXComponent=!0}}]);