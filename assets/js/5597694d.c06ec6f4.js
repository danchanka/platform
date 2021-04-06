(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{306:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),s=a(7),r=(a(0),a(746)),c={title:"User classes"},o={unversionedId:"User_classes",id:"version-v4/User_classes",isDocsHomePage:!1,title:"User classes",description:"Classes that a developer can create and the instances of which a user can create\xa0are called custom classes.",source:"@site/versioned_docs/version-v4/User_classes.md",slug:"/User_classes",permalink:"/platform/User_classes",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/User_classes.md",version:"v4",sidebar:"version-v4/learn",previous:{title:"Static objects",permalink:"/platform/Static_objects"},next:{title:"Aggregations",permalink:"/platform/Aggregations"}},l=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Abstract classes",id:"abstract",children:[]},{value:"Class change",id:"class-change",children:[]},{value:"Common ancestor",id:"commonparentclass",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:l};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/platform/Classes"},"Classes")," that a developer can create and the instances of which a user can create\xa0are called ",Object(r.b)("em",{parentName:"p"},"custom classes"),".\xa0"),Object(r.b)("h3",{id:"inheritance"},"Inheritance"),Object(r.b)("p",null,"When creating custom class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"\xa0you can explicitly specify that its ",Object(r.b)("a",{parentName:"p",href:"/platform/Classes"},"parent")," is class\xa0",Object(r.b)("strong",{parentName:"p"},"A."),"\xa0In this case, class\xa0",Object(r.b)("strong",{parentName:"p"},"A"),"\xa0shall be called the\xa0",Object(r.b)("em",{parentName:"p"},"parent class\xa0"),"of class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"."),Object(r.b)("p",null,"A parent class of a custom class can only be another custom class. Inheriting from ",Object(r.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"built-in classes")," is not possible. If no parent class is specified when creating a custom class, this class is implicitly inherited from the\xa0",Object(r.b)("strong",{parentName:"p"},"Object"),"\xa0class (located in the ",Object(r.b)("strong",{parentName:"p"},"System")," ",Object(r.b)("a",{parentName:"p",href:"/platform/Modules"},"module"),"). Thus, the\xa0",Object(r.b)("strong",{parentName:"p"},"System.Object"),"\xa0class is the parent object of all custom classes."),Object(r.b)("p",null,"The platform supports multiple inheritance of custom classes, meaning that a class can have several parent classes.\xa0"),Object(r.b)("h3",{id:"abstract"},"Abstract classes"),Object(r.b)("p",null,"Some custom classes in the system can be\xa0",Object(r.b)("em",{parentName:"p"},"abstract.\xa0"),"The difference between these classes and the rest is that it is impossible to create an instance of an abstract class. Non-abstract classes, in turn, are called ",Object(r.b)("em",{parentName:"p"},"concrete"),"."),Object(r.b)("h3",{id:"class-change"},"Class change"),Object(r.b)("p",null,"The platform allows changing the class of an existing object. Since objects can only be instances of concrete classes, it is forbidden to change the class of an object to abstract."),Object(r.b)("h3",{id:"commonparentclass"},"Common ancestor"),Object(r.b)("p",null,'As a common ancestor for several custom classes, the platform selects a class from which all these classes are inherited, and the total number of "steps" of inheritance to these classes is minimal (that is, the closest class is selected).'),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To add a new custom class to the system, use the\xa0",Object(r.b)("a",{parentName:"p",href:"/platform/CLASS_instruction"},Object(r.b)("strong",{parentName:"a"},"CLASS")," instruction"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Document; // The caption of this class will be 'Document'\nCLASS IncomeDocument 'Income' : Document;\nCLASS OutcomeDocument 'Expenses' : Document;\n\nCLASS Person;\nCLASS Worker;\nCLASS Musician : Person, Worker; // multiple inheritance\n\nCLASS Barcode 'Barcode'; // The parent class of Barcode will be the System.Object class\n\nCLASS PrintOrientation {\n    portrait 'Portrait',\n    landscape 'Landscape'\n}\n")))}p.isMDXComponent=!0},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=s.a.createContext({}),p=function(e){var t=s.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,f=b["".concat(c,".").concat(u)]||b[u]||m[u]||r;return a?s.a.createElement(f,o(o({ref:t},i),{},{components:a})):s.a.createElement(f,o({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<r;i++)c[i]=a[i];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);