(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(747)),o={title:"Static objects"},i={unversionedId:"Static_objects",id:"version-v4/Static_objects",isDocsHomePage:!1,title:"Static objects",description:"Static (or built-in)\xa0objects are objects that are defined by the developer and are automatically created on system startup (if they are not present in the system at launch time). Also, such objects are prohibited from being deleted.",source:"@site/versioned_docs/version-v4/Static_objects.md",slug:"/Static_objects",permalink:"/platform/Static_objects",editUrl:"https://github.com/danchanka/platform/edit/v4/docs/en/Static_objects.md",version:"v4",lastUpdatedAt:1617715936,formattedLastUpdatedAt:"4/6/2021",sidebar:"version-v4/learn",previous:{title:"Built-in classes",permalink:"/platform/Built-in_classes"},next:{title:"User classes",permalink:"/platform/User_classes"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Static")," (or built-in)\xa0objects are objects that are defined by the developer and are automatically created on system startup (if they are not present in the system at launch time). Also, such objects are prohibited from being deleted."),Object(c.b)("p",null,"When declaring a ",Object(c.b)("a",{parentName:"p",href:"/platform/User_classes"},"custom class"),",\xa0you can declare objects of this class which will be static objects. If you do this, this custom class automatically ",Object(c.b)("a",{parentName:"p",href:"/platform/User_classes#inheritance"},"inherits")," from class ",Object(c.b)("strong",{parentName:"p"},"System.StaticObject"),"."),Object(c.b)("p",null,"For each static object of a custom class name and title must be specified. Later these name and title can be accessed using\xa0the ",Object(c.b)("a",{parentName:"p",href:"/platform/Properties"},"properties")," ",Object(c.b)("strong",{parentName:"p"},"System.staticName","[","System.StaticObject","]")," and ",Object(c.b)("strong",{parentName:"p"},"System.staticCaption"),"[","System.StaticObject","]","**** respectively.\xa0"),Object(c.b)("p",null,"Static objects of ",Object(c.b)("a",{parentName:"p",href:"/platform/Built-in_classes"},"built-in classes")," are numbers, strings, date values, etc., used by the user in describing the logic."),Object(c.b)("p",null,"Static objects can be used to create a limited set of objects of a certain class. Such a set can be used as an enumerated data type to provide a choice from a limited set of values.\xa0"),Object(c.b)("h3",{id:"language"},"Language"),Object(c.b)("p",null,"Static objects of custom classes are defined in the ",Object(c.b)("a",{parentName:"p",href:"/platform/CLASS_instruction"},"CLASS ",Object(c.b)("strong",{parentName:"a"},"instruction"))," in a block enclosed in braces."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Direction 'Direction'\n{\n    north 'North',\n    east 'East',\n    south 'South',\n    west 'West'\n}\n\ndirection = DATA Direction ();\n\nshowDirection  {\n    MESSAGE staticName(direction());\n    MESSAGE staticCaption(direction());\n}\n\n// creating a form by choosing an object of Direction class\nFORM directions 'Directions'\n    OBJECTS d = Direction\n    PROPERTIES(d) READONLY staticCaption\n\n    LIST Direction OBJECT d\n;\n")))}p.isMDXComponent=!0},747:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||c;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);