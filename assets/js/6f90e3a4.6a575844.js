(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{377:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),s=n(7),r=(n(0),n(747)),i={title:"Classes: Overview",sidebar_label:"Overview"},l={unversionedId:"Classes",id:"version-v4/Classes",isDocsHomePage:!1,title:"Classes: Overview",description:"The base element in lsFusion is the object. Each object is an instance of some\xa0class, which determines the qualities of all its instances. Classes in turn can be divided into built-in classes, which are responsible for primitive data types, and user classes.",source:"@site/versioned_docs/version-v4/Classes.md",slug:"/Classes",permalink:"/platform/Classes",editUrl:"https://github.com/danchanka/platform/edit/master/versioned_docs/version-v4/Classes.md",version:"v4",sidebar_label:"Overview",sidebar:"version-v4/learn",previous:{title:"Simple constraints",permalink:"/platform/Simple_constraints"},next:{title:"Built-in classes",permalink:"/platform/Built-in_classes"}},c=[{value:"Inheritance",id:"inheritance",children:[]},{value:"Class limitations",id:"class-limitations",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The base element in ",Object(r.b)("strong",{parentName:"p"},"lsFusion")," is the object. Each object is an ",Object(r.b)("em",{parentName:"p"},"instance")," of some\xa0",Object(r.b)("em",{parentName:"p"},"class"),", which determines the qualities of all its instances. Classes in turn can be divided into ",Object(r.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"built-in classes"),", which are responsible for primitive data types, and ",Object(r.b)("a",{parentName:"p",href:"/platform/User_classes"},"user classes"),".\xa0"),Object(r.b)("h3",{id:"inheritance"},"Inheritance"),Object(r.b)("p",null,"Classes can ",Object(r.b)("em",{parentName:"p"},"inherit")," from each other.\xa0When class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"\xa0inherits from class\xa0",Object(r.b)("strong",{parentName:"p"},"A"),",\xa0class\xa0",Object(r.b)("strong",{parentName:"p"},"A")," shall be called the\xa0",Object(r.b)("em",{parentName:"p"},"parent"),", and class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"\xa0shall be called the ",Object(r.b)("em",{parentName:"p"},"child"),"."),Object(r.b)("p",null,"The idea of inheritance is as follows: if class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"\xa0inherits from class\xa0",Object(r.b)("strong",{parentName:"p"},"A"),", then all instances of class\xa0",Object(r.b)("strong",{parentName:"p"},"B\xa0"),"will have all the qualities of class\xa0",Object(r.b)("strong",{parentName:"p"},"A"),".\xa0Thus, with inheritance, each class determines the qualities not only of all instances of this class but also of all instances of this class descendants. \xa0"),Object(r.b)("p",null,"Let's say that an object ",Object(r.b)("em",{parentName:"p"},"belongs to"),"\xa0class\xa0",Object(r.b)("strong",{parentName:"p"},"A")," if that object is either an instance of class ",Object(r.b)("strong",{parentName:"p"},"A")," or an instance of a class ",Object(r.b)("strong",{parentName:"p"},"A")," descendant. \xa0"),Object(r.b)("p",null,"To implement polymorphism, inheritance is usually used together with properties and actions extension mechanism.\xa0"),Object(r.b)("h3",{id:"class-limitations"},"Class limitations"),Object(r.b)("p",null,"The class mechanism has several limitations:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Belonging to a class cannot be calculated (only set explicitly when\xa0creating\xa0and\xa0changing the class) of an object."),Object(r.b)("li",{parentName:"ol"},"A class is set for only one object (not for an object collection)."),Object(r.b)("li",{parentName:"ol"},"It is not possible to inherit the same class multiple times.")),Object(r.b)("p",null,"Accordingly, if the class mechanism is not sufficient,\xa0the platform also supports the\xa0aggregation mechanism, which together with inheritance allows implementing almost any polymorphic logic."))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=s.a.createContext({}),p=function(e){var t=s.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return s.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,h=b["".concat(i,".").concat(u)]||b[u]||m[u]||r;return n?s.a.createElement(h,l(l({ref:t},o),{},{components:n})):s.a.createElement(h,l({ref:t},o))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<r;o++)i[o]=n[o];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);