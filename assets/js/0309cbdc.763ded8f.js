(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{749:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,d=m["".concat(c,".").concat(u)]||m[u]||b[u]||a;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(749)),c={title:"How-to: Action extension"},i={unversionedId:"How-to_Action_extension",id:"How-to_Action_extension",isDocsHomePage:!1,title:"How-to: Action extension",description:"We can use the following scheme to implement polymorphism:",source:"@site/docs/How-to_Action_extension.md",slug:"/How-to_Action_extension",permalink:"/platform/next/How-to_Action_extension",editUrl:"https://github.com/danchanka/platform/edit/master/docs/How-to_Action_extension.md",version:"current",sidebar:"learn",previous:{title:"How-to: Property extension",permalink:"/platform/next/How-to_Property_extension"},next:{title:"How-to: Form extension",permalink:"/platform/next/How-to_Form_extension"}},p=[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We can use the following scheme to implement polymorphism:"),Object(a.b)("h3",{id:"example-1"},"Example 1"),Object(a.b)("p",null,"Create an abstract class\xa0",Object(a.b)("strong",{parentName:"p"},"Shape")," with an abstract action\xa0",Object(a.b)("strong",{parentName:"p"},"whoAmI"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Shape;\nwhoAmI  ABSTRACT ( Shape);\n")),Object(a.b)("p",null,"Then, create\xa0",Object(a.b)("strong",{parentName:"p"},"Square"),"\xa0and\xa0",Object(a.b)("strong",{parentName:"p"},"Circle")," classes inherited from\xa0",Object(a.b)("strong",{parentName:"p"},"Shape"),"\xa0:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Rectangle : Shape;\nCLASS Circle : Shape;\n")),Object(a.b)("p",null,"Define the implementation of ",Object(a.b)("strong",{parentName:"p"},"whoAmI")," for the created classes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"whoAmI (Rectangle r) + {\n    IF r IS Rectangle THEN {\n        MESSAGE 'I am a rectangle';\n    }\n}\nwhoAmI (Circle c) + {\n    IF c IS Circle THEN {\n        MESSAGE 'I am a circle';\n    }\n}\n")),Object(a.b)("p",null,"When executing the ",Object(a.b)("strong",{parentName:"p"},"whoAmI")," action, all the actions added as an implementation will be called. In this case, a corresponding message will appear depending on the argument."),Object(a.b)("h3",{id:"example-2"},"Example 2"),Object(a.b)("p",null,"Suppose that we need to implement an action that copies an object (e. g. the ",Object(a.b)("strong",{parentName:"p"},"Book")," class) with its semantics defined in multiple modules. This can be implemented as follows:"),Object(a.b)("p",null,"Declare the ",Object(a.b)("strong",{parentName:"p"},"Book")," class and the actions to copy it:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},'MODULE Book;\n\nCLASS Book; // declaring class "book"\noverCopy  ABSTRACT ( Book, Book); // abstract action that takes an input two books and is "entry point", to which other modules can add realization\ncopy (Book book)  { // creating action on book copy\n    NEW b = Book { // adding new book\n        overCopy(b, book);\n    }\n}\n')),Object(a.b)("p",null,"In the dependent module ",Object(a.b)("strong",{parentName:"p"},"MyBook"),",\xa0we want to extend the ",Object(a.b)("strong",{parentName:"p"},"Book")," class with new properties and also define the action to copy them:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyBook;\n\nREQUIRE Book;\n\nname = DATA STRING[100] (Book); // adding some name property to the product\noverCopy (Book s, Book d) + {\n    name(d) <- name(s); // connecting the copying of the created property to the product copy action\n}\n")))}s.isMDXComponent=!0}}]);