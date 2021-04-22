(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{532:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(747)),s={title:"How-to: Class extension"},l={unversionedId:"How-to_Class_extension",id:"version-v4/How-to_Class_extension",isDocsHomePage:!1,title:"How-to: Class extension",description:"The typical scheme for extracting relations between classes to a separate module is as follows:",source:"@site/versioned_docs/version-v4/How-to_Class_extension.md",slug:"/How-to_Class_extension",permalink:"/platform/How-to_Class_extension",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/How-to_Class_extension.md",version:"v4",lastUpdatedAt:1618567877,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v4/learn",previous:{title:"How-to: Extensions",permalink:"/platform/How-to_Extensions"},next:{title:"How-to: Property extension",permalink:"/platform/How-to_Property_extension"}},c=[],i={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The typical scheme for extracting relations between classes to a separate module is as follows:"),Object(o.b)("p",null,"Create the ",Object(o.b)("strong",{parentName:"p"},"MA")," module in which the ",Object(o.b)("strong",{parentName:"p"},"A")," class will be created:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE MA;\n\nCLASS ABSTRACT A; // declaring an abstract class\na = ABSTRACT BPSTRING[10] (A); // declaring an abstract property a\n")),Object(o.b)("p",null,"Create the ",Object(o.b)("strong",{parentName:"p"},"MB")," module in which the ",Object(o.b)("strong",{parentName:"p"},"B")," class will be created:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE MB;\n\nCLASS B; // declaring class B\nb = DATA BPSTRING[10] (B); // declaring the data property b for class B\n")),Object(o.b)("p",null,"Create the ",Object(o.b)("strong",{parentName:"p"},"MBA")," module in which the relation between the ",Object(o.b)("strong",{parentName:"p"},"A")," and ",Object(o.b)("strong",{parentName:"p"},"B")," class will be defined:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE MBA;\n\nREQUIRE MA, MB; // specifying that the MBA module depends on the MA and MB modules so that the system elements declared in them can be used in that module\n\nEXTEND CLASS B : A; // inheriting class B from A\na(ba) += b(ba); // specifying that for the abstract property a, property B should be used as an implementation\n")),Object(o.b)("p",null,"Therefore, the ",Object(o.b)("strong",{parentName:"p"},"MA")," and ",Object(o.b)("strong",{parentName:"p"},"MB")," modules do not directly depend on each other and the relation between them can be enabled (disabled) by linking (unlinking) the ",Object(o.b)("strong",{parentName:"p"},"MBA")," module. Note that the ",Object(o.b)("strong",{parentName:"p"},"MBA")," module extends the functionality of the ",Object(o.b)("strong",{parentName:"p"},"MB")," module without any changes to its code."),Object(o.b)("p",null,"You can use mixin classes when using the metacode as follows:"),Object(o.b)("p",null,"Suppose that we have a metacode that declares a class and defines certain properties for it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"MODULE MyModule;\n\nMETA defineMyClass (className) // declaring the defineMyClass metacode with the className parameter\n    CLASS className; // declaring a class named className\n    myProperty###className = DATA BPSTRING[20] (className); // adding a property named myProperty + className for the created class\nEND\n")),Object(o.b)("p",null,"Note that when calling this metacode, you cannot specify the classes from which the created class must inherit anything. However, this can be implemented through a mixin of classes as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},'CLASS MySuperClass;\n\n@defineMyClass(MyClass); // calling the metacode that will create the class and property\n\nEXTEND CLASS MyClass : MySuperClass; // inheriting MyClass from MySuperClass, while MyClass will "will receive" all the properties that are declared for the MySuperClass class\n')))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,l(l({ref:t},i),{},{components:n})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);