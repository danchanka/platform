(self.webpackChunkls_fusion_docs=self.webpackChunkls_fusion_docs||[]).push([[48452],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(n),f=s,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||r;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,c=new Array(r);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,c[1]=o;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33697:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return l},default:function(){return p}});var a=n(22122),s=n(19756),r=(n(67294),n(3905)),c={title:"User classes"},o={unversionedId:"User_classes",id:"User_classes",isDocsHomePage:!1,title:"User classes",description:"Classes that a developer can create and the instances of which a user can create\xa0are called custom classes.",source:"@site/docs/User_classes.md",sourceDirName:".",slug:"/User_classes",permalink:"/platform/next/User_classes",editUrl:"https://github.com/danchanka/platform/edit/master/docs/en/User_classes.md",version:"current",lastUpdatedAt:1617631212,formattedLastUpdatedAt:"4/5/2021",frontMatter:{title:"User classes"},sidebar:"learn",previous:{title:"Built-in classes",permalink:"/platform/next/Built-in_classes"},next:{title:"Static objects",permalink:"/platform/next/Static_objects"}},l=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Abstract classes",id:"abstract",children:[]},{value:"Class change",id:"class-change",children:[]},{value:"Common ancestor",id:"commonparentclass",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:l};function p(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/platform/next/Classes"},"Classes")," that a developer can create and the instances of which a user can create\xa0are called ",(0,r.kt)("em",{parentName:"p"},"custom classes"),".\xa0"),(0,r.kt)("h3",{id:"inheritance"},"Inheritance"),(0,r.kt)("p",null,"When creating custom class\xa0",(0,r.kt)("strong",{parentName:"p"},"B"),"\xa0you can explicitly specify that its ",(0,r.kt)("a",{parentName:"p",href:"/platform/next/Classes"},"parent")," is class\xa0",(0,r.kt)("strong",{parentName:"p"},"A."),"\xa0In this case, class\xa0",(0,r.kt)("strong",{parentName:"p"},"A"),"\xa0shall be called the\xa0",(0,r.kt)("em",{parentName:"p"},"parent class\xa0"),"of class\xa0",(0,r.kt)("strong",{parentName:"p"},"B"),"."),(0,r.kt)("p",null,"A parent class of a custom class can only be another custom class. Inheriting from ",(0,r.kt)("a",{parentName:"p",href:"/platform/next/Built-in_classes"},"built-in classes")," is not possible. If no parent class is specified when creating a custom class, this class is implicitly inherited from the\xa0",(0,r.kt)("strong",{parentName:"p"},"Object"),"\xa0class (located in the ",(0,r.kt)("strong",{parentName:"p"},"System")," ",(0,r.kt)("a",{parentName:"p",href:"/platform/next/Modules"},"module"),"). Thus, the\xa0",(0,r.kt)("strong",{parentName:"p"},"System.Object"),"\xa0class is the parent object of all custom classes."),(0,r.kt)("p",null,"The platform supports multiple inheritance of custom classes, meaning that a class can have several parent classes.\xa0"),(0,r.kt)("h3",{id:"abstract"},"Abstract classes"),(0,r.kt)("p",null,"Some custom classes in the system can be\xa0",(0,r.kt)("em",{parentName:"p"},"abstract.\xa0"),"The difference between these classes and the rest is that it is impossible to create an instance of an abstract class. Non-abstract classes, in turn, are called ",(0,r.kt)("em",{parentName:"p"},"concrete"),"."),(0,r.kt)("h3",{id:"class-change"},"Class change"),(0,r.kt)("p",null,"The platform allows changing the class of an existing object. Since objects can only be instances of concrete classes, it is forbidden to change the class of an object to abstract."),(0,r.kt)("h3",{id:"commonparentclass"},"Common ancestor"),(0,r.kt)("p",null,'As a common ancestor for several custom classes, the platform selects a class from which all these classes are inherited, and the total number of "steps" of inheritance to these classes is minimal (that is, the closest class is selected).'),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"To add a new custom class to the system, use the\xa0",(0,r.kt)("a",{parentName:"p",href:"/platform/next/CLASS_instruction"},(0,r.kt)("strong",{parentName:"a"},"CLASS")," instruction"),"."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Document; // The caption of this class will be 'Document'\nCLASS IncomeDocument 'Income' : Document;\nCLASS OutcomeDocument 'Expenses' : Document;\n\nCLASS Person;\nCLASS Worker;\nCLASS Musician : Person, Worker; // multiple inheritance\n\nCLASS Barcode 'Barcode'; // The parent class of Barcode will be the System.Object class\n\nCLASS PrintOrientation {\n    portrait 'Portrait',\n    landscape 'Landscape'\n}\n")))}p.isMDXComponent=!0}}]);